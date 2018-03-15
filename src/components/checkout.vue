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
                                    <select class="quantityUpdate num-items">
                                        <option value="1" name="quantity-change" selected="1">1</option>
                                        <option value="2" name="quantity-change">2</option>
                                        <option value="3" name="quantity-change">3</option>
                                        <option value="4" name="quantity-change">4</option>
                                        <option value="5" name="quantity-change">5</option>
                                        <option value="6" name="quantity-change">6</option>
                                        <option value="7" name="quantity-change">7</option>
                                        <option value="8" name="quantity-change">8</option>
                                        <option value="9" name="quantity-change">9</option>
                                        <option value="10" name="quantity-change">10</option>
                                    </select>
                                </td>
                                <td>$ <span class="price" :value="item.price"
                                            style="font-size:21px !important;">{{item.price}}</span></td>
                                <td>$ <span class="total" style="font-size:21px !important;">{{item.price}}</span></td>
                                <input type="hidden" class="itemPrice" :value="item.price">

                            </tr>
                            <tr v-for="subItem in item.list" :data-product="subItem._id" :data-price="subItem.price">
                                <td>
                                    <button class="delete-product" name="button_id" :value="subItem._id" :data-price="subItem.price">
                                        <i class="fa fa-times" aria-hidden="true"></i></button>
                                    <a class="service-name" href="#">{{subItem.title}}</a></td>
                                <td>
                                    <select class="quantityUpdate num-items">
                                        <option value="1" name="quantity-change" selected="1">1</option>
                                        <option value="2" name="quantity-change">2</option>
                                        <option value="3" name="quantity-change">3</option>
                                        <option value="4" name="quantity-change">4</option>
                                        <option value="5" name="quantity-change">5</option>
                                        <option value="6" name="quantity-change">6</option>
                                        <option value="7" name="quantity-change">7</option>
                                        <option value="8" name="quantity-change">8</option>
                                        <option value="9" name="quantity-change">9</option>
                                        <option value="10" name="quantity-change">10</option>
                                    </select>
                                </td>
                                <td>$ <span class="price" :value="subItem.price"
                                            style="font-size:21px !important;">{{subItem.price}}</span>
                                </td>
                                <td>$ <span class="total" style="font-size:21px !important;">{{subItem.price}}</span>
                                    <input type="hidden" class="itemPrice" :value="subItem.price">

                                </td>
                            </tr>
                            </tbody>
                            <tr class="bg-gray">
                                <td class="text-right" colspan="4" style="padding:10px;font-size:24px !important;">Total : $<span id="the-total"
                                                                                  style="font-family: 'Oswald', sans-serif;">6080</span>
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
                                    <div class="success">
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
    import axios from 'axios'

    export default {
        data() {
            return {
                items: [],
                username: ''
            }
        },
        mounted() {
            var vm = this;
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
                console.log(vm.username);
                // Sum Total Price
                var totalPoints = 0;
                $('.itemPrice').each(function(){
                    totalPoints = parseFloat($(this).val()) + totalPoints;
                    $("#the-total").html(totalPoints);
                });
                // Sum Total //
                var sum = 0;
                $(".price").each(function () {
                    sum += +$(this).val();
                });
                $("#the-total").val(sum);
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
                                amount: $('#the-total').html(),
                                email: vm.username,
                                token: result.token
                            },
                            success: function (data) {
                                console.log(data);
                            },
                            error: function (error) {
                                console.log(error);
                            }
                        })
                        console.log('success');
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
            });

            // Here we are calling a Stripe Form
        }

    }
</script>
