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
                <td>{{value}} <span class="price" :value="item.price" style="font-size:21px !important;">{{item.price * rate | fixPrice}}</span>
                </td>
                <td>{{value}} <span class="total" style="font-size:21px !important;">{{item.price * rate | fixPrice}}</span></td>
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
                <td>{{value}} <span class="price" :value="subItem.price"
                            style="font-size:21px !important;">{{subItem.price * rate | fixPrice}}</span>
                </td>
                <td>{{value}} <span class="total" style="font-size:21px !important;">{{subItem.price * rate | fixPrice}}</span>
                  <input type="hidden" class="itemPrice" :value="subItem.price">

                </td>
              </tr>
              </tbody>
              <tr class="bg-gray">
                <td class="text-right" colspan="4" style="padding:10px;font-size:24px !important;">Total : {{value}}<span
                  id="the-total" data-price=""
                  style="font-family: 'Oswald', sans-serif;"></span>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-xs-12 pay-btn" style="margin-bottom: 50px;">
            <div class="col-md-6 check-out button text-right col-md-push-6 col-sm-12"><a
              class="btn btn-gray" href="/">Continue Shopping</a><a class="btn btn-green" href="/#/checkout/payment">Check
              Out <i
                class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
            <div class="col-md-6 payment-methods col-md-pull-6 col-sm-12 text-left">
              <span>Payment methods </span>
              <div class="sprite2 visa"></div>
            </div>
          </div>
          <!--<div class="here" style="height: 40px;">-->
          <!--<div class="col-xs-12 services">-->
          <!--<h6 class="title">Add Before you Checkout</h6>-->
          <!--<table class="table table-bordered table-services services-Seychelles-IBC">-->
          <!--<tbody>-->
          <!--<tr class="bg-gray">-->
          <!--<th colspan="2">British Virgin Islands BC</th>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Nominee Shareholder</a><span-->
          <!--class="desc-sp">Provision of corporate Nominee Shareholder (per annum)</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">300</span>-->
          <!--<form id="0-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a45d" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Nominee Director &amp; General Power of Attorney (Apostilled)</a><span-->
          <!--class="desc-sp">Provision of corporate Nominee Director (per annum) and General Power of Attorney (valid for one year) under Apostille.</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">650</span>-->
          <!--<form id="1-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a45e" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Special Power of Attorney (Apostilled)</a><span-->
          <!--class="desc-sp">Special Power of Attorney issued by a Nominee Director, under Apostille</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">290</span>-->
          <!--<form id="2-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a45f" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Certificate of Good Standing (Apostilled)</a><span-->
          <!--class="desc-sp">Provision of Certificate of Good Standing under Apostille</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">550</span>-->
          <!--<form id="3-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a460" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Certificate of Incumbency (Apostilled)</a><span-->
          <!--class="desc-sp">Provision of Certificate of Incumbency under Apostille</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">480</span>-->
          <!--<form id="4-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a461" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Set of Corporate Documents (Apostilled)</a><span-->
          <!--class="desc-sp">Copies of corporate documents in one Apostilled bundle.-->
          <!--<br> Please note: If applying for a corporate bank account you will need to order a full set of apostilled company documents when the account is opened outside of British Virgin Islands.</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">480</span>-->
          <!--<form id="5-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a462" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Metal Embossing Seal</a><span-->
          <!--class="desc-sp">Provision of embossed metal seal</span></td>-->
          <!--<td class="text-right">$<span class="service-price">100</span>-->
          <!--<form id="6-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a463" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Additional rubber stamp</a><span-->
          <!--class="desc-sp">Provision of additional rubber stamp.</span></td>-->
          <!--<td class="text-right">$<span class="service-price">40</span>-->
          <!--<form id="7-0-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="0" type="hidden">-->
          <!--<input name="serviceId" value="599a1344bf50847b0972a464" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
          <!--</table>-->
          <!--<table class="table table-bordered table-services services-Seychelles-IBC">-->
          <!--<tbody>-->
          <!--<tr class="bg-gray">-->
          <!--<th colspan="2">Hong Kong LTD</th>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Nominee Shareholder</a><span-->
          <!--class="desc-sp">Provision of corporate Nominee Shareholder (per annum)</span>-->
          <!--</td>-->
          <!--<td class="text-right">$<span class="service-price">400</span>-->
          <!--<form id="0-1-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="1" type="hidden">-->
          <!--<input name="serviceId" value="599a1328bf50847b0972a3ae" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Extra Rubber Stamp</a><span-->
          <!--class="desc-sp">Provision of company extra rubber stamp</span></td>-->
          <!--<td class="text-right">$<span class="service-price">40</span>-->
          <!--<form id="1-1-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="1" type="hidden">-->
          <!--<input name="serviceId" value="599a1328bf50847b0972a3b1" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><a class="open-desc" title="view description" href="javasctipt:;">Metal Embossing Seal</a><span-->
          <!--class="desc-sp">Provision of embossed metal seal</span></td>-->
          <!--<td class="text-right">$<span class="service-price">120</span>-->
          <!--<form id="2-1-service-add" method="post" style="display: inline-block;">-->
          <!--<input name="action" value="add-service" type="hidden">-->
          <!--<input name="productIndex" value="1" type="hidden">-->
          <!--<input name="serviceId" value="599a1328bf50847b0972a3b2" type="hidden">-->
          <!--<button class="plus-service" name="submit" type="submit"><i-->
          <!--class="fa fa-plus" aria-hidden="true"></i></button>-->
          <!--</form>-->
          <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
          <!--</table>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="here" style="height: 40px;"></div>-->
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
        value: '',
        rate: ''
      }
    },
    mounted() {
      var vm = this;
      if (localStorage.getItem('cartItems')) {
        vm.items = JSON.parse(localStorage.getItem('cartItems'));
      } else {
        vm.items = false;
      }
      $(document).ready(function () {

        // currency change //
        if(localStorage.getItem('currency') == 'USD') {
          vm.value = '$';
          vm.rate = 1;
        } else if(localStorage.getItem('currency') == 'EUR') {
          vm.value = '€';
          vm.rate = localStorage.getItem('euroValue');
        } else if(localStorage.getItem('currency') == 'GBP') {
          vm.value = '£';
          vm.rate = localStorage.getItem('gbpValue');
        } else if(localStorage.getItem('currency') == 'CNY') {
          vm.value = '¥';
          vm.rate = localStorage.getItem('cnyValue');
        }
        //
        var sum = 0;
        $(".price").each(function () {
          sum += +$(this).val();
        });
        $("#the-total").val(Math.trunc(sum * vm.rate));
        $("#the-total").attr('data-price', sum);
        var totalPrice = 0;
        if (totalPrice < 1) {
          $("#the-total").html(0);
          $("#the-total").attr('data-price', 0);
        }
        $('.itemPrice').each(function () {
          totalPrice = parseFloat($(this).val()) + totalPrice;
          $("#the-total").html(Math.trunc(totalPrice * vm.rate));
          $("#the-total").attr('data-price', totalPrice);
          if (totalPrice < 1) {
            $("#the-total").html(0);
            $("#total").attr('data-price', 0);
          }
        });

        var inventory = JSON.parse(localStorage.getItem('cartItems'));
        $('.delete-product').click(function () {
          var deleteProductById = $(this).val();
          var itemPrice = $(this).attr('data-price');
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
            data.forEach(function (obj) {                    // Loop through each object in outer array
              obj.list = obj.list.filter(function (o) {// Filter out the object with unwanted id, in inner array
                return o._id != id;
              });
            });
          };

          findAndRemove(updatedList, deleteProductById);
          location.reload();

          var updatedPrice = totalPrice - itemPrice;
          $("#the-total").html(updatedPrice);
          localStorage.setItem('cartItems', JSON.stringify(updatedList));



        });
        console.log(vm.items);
      });
    },
    filters: {
      fixPrice: function(value)  {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
