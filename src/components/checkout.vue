<template>
  <main>
    <section class="view first">
      <div class="container">
        <div class="row hidden-xs">
          <div class="col-md-12">
            <div class="sprite2 step1"></div>
          </div>
        </div>
        <div class="row your-shopping" v-if="items">
          <div class="col-xs-12">
            <h6 class="title">Your Shopping Cart</h6>
            <table class="table table-bordered table-items">
              <thead>
              <tr class="bg-gray">
                <th width="60%">Product Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody v-for="item in items" :class="item.title" :data-product="item._id">
              <tr :value="item._id">
                <td>
                  <button class="delete-product" name="button_id" :value="item._id" :data-price="item.price">
                    <i class="fa fa-times" aria-hidden="true"></i></button>
                  <a class="product-name" href="#" style="font-weight: bold;">{{item.title}}</a></td>
                <td>
                  <select class="quantityUpdate num-items" disabled>
                    <option :value="item.qty" :selected="item.qty">{{item.qty}}</option>
                  </select>
                </td>
                <td>{{value}} <span class="price" :value="item.price" style="font-size:21px !important;">{{item.price * rate | fixPrice}}</span>
                </td>
                <td>{{value}} <span class="total" style="font-size:21px !important;">{{item.price * item.qty * rate | fixPrice}}</span>
                </td>
                <input type="hidden" class="itemPrice" :value="item.price * item.qty">

              </tr>
              <tr v-for="subItem in item.list" :data-product="subItem._id" :data-price="subItem.price">
                <td>
                  <button class="delete-product" name="button_id" :value="subItem._id" :data-price="subItem.price">
                    <i class="fa fa-times" aria-hidden="true"></i></button>
                  <a class="service-name" href="#">{{subItem.title}}</a></td>
                <td>
                  <select class="quantityUpdate num-items" disabled>
                    <option :value="subItem.qty" :selected="subItem.qty">{{subItem.qty}}</option>

                  </select>
                </td>
                <td>{{value}} <span class="price" :value="subItem.price" style="font-size:21px !important;">{{subItem.price * rate | fixPrice}}</span>
                </td>
                <td>{{value}} <span class="total" style="font-size:21px !important;">{{subItem.price * subItem.qty * rate | fixPrice}}</span>
                  <input type="hidden" class="itemPrice" :value="subItem.price * subItem.qty">

                </td>
              </tr>
              </tbody>
              <tr class="bg-gray">
                <td class="text-right" colspan="4" style="padding:10px;font-size:24px !important;">Total : {{value}}
                  <span id="the-total" data-price="" style="font-family: 'Oswald', sans-serif;"></span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="row payment-card-part">
          <div class="col-lg-12">
            <div class="box-top box-bottom">
              <div class="payment-box">
                <div class="payment-type active" id="cards">
                  <div class="types">
                    <img class="card-type" src="src/assets/images/visa_dark.png">
                    <img class="card-type" src="src/assets/images/mc_dark.png">
                  </div>
                </div>
              </div>
              <form>
                <div class="group">
                  <label>
                    <span>Name</span>
                    <input name="cardholder-name" class="field" placeholder="Admin User" value="Admin User">
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="cardholder-email" class="field" :value="username" disabled>
                  </label>
                  <label>
                    <span>Phone</span>
                    <input class="field phone" placeholder="(123) 456-7890" type="tel"/>
                  </label>
                </div>
                <div class="group">
                  <label>
                    <span>Card</span>
                    <div id="card-element" class="field cardDetails"></div>
                  </label>
                </div>
                <button type="submit">Complete Payment</button>
                <div class="outcome">
                  <div class="error"></div>
                  <div class="success" style="display: none;">
                    Success! Your Stripe token is <span class="token"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row" v-if="!items">
          <div class="col-lg-12"><h2>Your Cart is Empty.</h2></div>
          <div class="here" style="height: 40px;"></div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

  export default {
    data() {
      return {
        items: [],
        username: '',
        value: '',
        rate: ''
      }
    },
    mounted() {
      var vm = this;
      $(document).ready(function () {
        if (localStorage.getItem('currency') == 'USD') {
          vm.value = '$';
          vm.rate = 1;
        } else if (localStorage.getItem('currency') == 'EUR') {
          vm.value = '€';
          vm.rate = localStorage.getItem('euroValue');
        } else if (localStorage.getItem('currency') == 'GBP') {
          vm.value = '£';
          vm.rate = localStorage.getItem('gbpValue');
        } else if (localStorage.getItem('currency') == 'CNY') {
          vm.value = '¥';
          vm.rate = localStorage.getItem('cnyValue');
        }
      });
      // Checking for items in storage
      if (localStorage.getItem('cartItems')) {
        vm.items = JSON.parse(localStorage.getItem('cartItems'));
      } else {
        vm.items = false;
      }
      $(document).ready(function () {
        // Check if logged and keep username
        if (localStorage.getItem('token')) {
          $.ajax({
            url: 'https://milosrest.herokuapp.com/api/token',
            type: 'POST',
            data: {
              'token': localStorage.getItem('token'),
            },
            success: function (data) {
              console.log(data);
              if (data.session == true) {
                vm.username = data.username;
              } else {
                vm.username = false;
              }
            }
          })
        } else {
          location.href = ('/#/');
        }
        // Sum Total Price
        var totalPoints = 0;
        $('.itemPrice').each(function () {
          totalPoints = parseFloat($(this).val()) + totalPoints;
          $("#the-total").html(Math.trunc(totalPoints * vm.rate));
          $("#the-total").attr('data-price', totalPoints);
        });
        // Sum Total //
        var sum = 0;
        $(".price").each(function () {
          sum += +$(this).val();
        });
        $("#the-total").val(sum);
        // $("#the-total").attr('data-price', sum);
        // Stripe
        var stripe = Stripe('pk_test_ZzseJ5AKayP7TCPFgmeabT0v');
        var elements = stripe.elements();

        var card = elements.create('card', {
          style: {
            base: {
              iconColor: '#8F101C',
              color: '#31325F',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: 'Helvetica Neue',
              fontSize: '15px',

              '::placeholder': {
                color: '#CFD7E0',
              },
            },
          }
        });
        card.mount('#card-element');

        function setOutcome(result) {
          var successElement = document.querySelector('.success');
          var errorElement = document.querySelector('.error');
          successElement.classList.remove('visible');
          errorElement.classList.remove('visible');

          if (result.token) {
            // Use the token to create a charge or a customer
            // https://stripe.com/docs/charges
            successElement.querySelector('.token').textContent = result.token.id;
            successElement.classList.add('visible');
            $.ajax({
              url: 'https://milosrest.herokuapp.com/api/cart',
              type: 'POST',
              data: {
                amount: Math.trunc($("#the-total").attr('data-price') * vm.rate),
                username: localStorage.getItem('userid'),
                email: vm.username,
                token: result.token,
                currency: localStorage.getItem('currency'),
                products: products,
                services: services,
                packages: packages,
                documents: documents,
              },
              success: function (data) {
                console.log(data[0]._id);
                if(data[0]._id) {
                  window.location.href = '/#/order/' + data[0]._id;
                }
              },
              error: function (error) {
                console.log(error);
              }
            });
            $('.success').show();
          } else if (result.error) {
            errorElement.textContent = result.error.message;
            errorElement.classList.add('visible');
            console.log('doesnt work');
          }
        }

        card.on('change', function (event) {
          setOutcome(event);
        });

        $("form").on("submit", function (e) {
          e.preventDefault();
          var form = document.querySelector('form');
          var extraDetails = {
            name: $('.cardDetails').val(),
          };
          stripe.createToken(card, extraDetails).then(setOutcome);
        });
        var inventory = JSON.parse(localStorage.getItem('cartItems'));
        $('.delete-product').click(function () {
          var deleteProductById = $(this).val();
          var updatedList = inventory.filter(function (el) {
            return el._id !== deleteProductById;
          });
          for (var i = 0; i < inventory.length; i++) {
            if (inventory[i]._id == deleteProductById) {
              vm.items.splice(i, 1);
              break;
            }
          }

          // find and remove vanila js
          function findAndRemove(data, id) {
            data.forEach(function (obj) {
              obj.list = obj.list.filter(function (o) {
                return o._id != id;
              });
            });
          };

          findAndRemove(updatedList, deleteProductById);
          location.reload();

          localStorage.setItem('cartItems', JSON.stringify(updatedList));

        });

        // Find Products
        var allItems = JSON.parse(localStorage.getItem('cartItems'));
        var products = [];
        var packages = [];
        var documents = [];
        // Find Products //
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i]['type'] === 'products') {
            products.push(inventory[i]._id);
          }
        }
        // Find Packages //
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i]['type'] === 'packages') {
            packages.push(inventory[i]._id);
          }
        }
        // Find Documents //
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i]['type'] === 'documents') {
            documents.push(inventory[i]._id);
          }
        }
        // Find Services
        var services = [];

        inventory.forEach(function (obj) {
          obj.list = obj.list.filter(function (o) {
            if (o.type == 'services') {
              services.push(o);
            }
          });
        });


      });

      // Here we are calling a Stripe Form
    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
