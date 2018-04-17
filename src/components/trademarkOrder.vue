<template>
  <main>
    <section class="trademarkOrder">
      <div class="container">
        <div class="trademark-details">
          <h2 class="brd-dot-bt-grey pad-btm-10">Confirm your Order</h2>
          <div class="trademark-registration">
            <h3>Trademark <span v-if="item.requestType == 'registration'">Registration</span></h3>
            <div class="row">
              <div class="col-md-2 name">
                <span>Name :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.main.wordmark}}</p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Description :</span>
              </div>
              <div class="col-md-10 description">
                <p v-if="item.main.description">{{item.main.description}}</p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Territories :</span>
              </div>
              <div class="col-md-10 description">
                <p> <span v-for="terr in item.territories">{{terr.name}}, </span> </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Classes :</span>
              </div>
              <div class="col-md-10 description">
                <p v-for="cls in item.classes" :data-id="cls._id"><strong>Class {{cls.value}}</strong> - {{cls.name}}</p>
              </div>
            </div>
            <h3>Owner Details</h3>
            <div class="row">
              <div class="col-md-2 name">
                <span>Name :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.title}} {{item.details.firstName}} {{item.details.lastName}}</p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Nationality :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.nationality}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Email :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.email}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Address :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.address}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Postal Code :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.postalCode}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>City :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.city}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Country :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.country}} </p>
              </div>
              <!-- -->
              <div class="col-md-2 name">
                <span>Telephone :</span>
              </div>
              <div class="col-md-10 description">
                <p>{{item.details.phone}} </p>
              </div>
              <!-- -->
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="cart-info">
                  <div class="row">
                    <div class="col-md-4">
                      <button v-on:click="addToCart" class="addToCartTrademark"><span class="text">Add to Cart</span> <span class="cartIcon"></span></button>
                    </div>
                    <div class="col-md-6">
                      <div class="sprite-payment-system"></div>
                    </div>
                    <div class="col-md-2 pull-right addToCartInfo">
                      <h3>Total {{value}} <span class="totalPrice" id="total" :data-price="price">{{price * rate | fixPrice}}</span></h3>
                      <span id="territories" data-qty="">Territories {{item.territories.length}},</span>
                      <span id="classes" data-qty="">Classes {{item.classes.length}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        item: [],
        price: '',
        rate: '',
        value: '',
      }
    },
    mounted() {
      var vm = this;
      $(document).ready(function () {
        // currency change //
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
        //
        if(localStorage.getItem('trademarkDetails')) {
         vm.item = JSON.parse(localStorage.getItem('trademarkDetails'));
         console.log(vm.item);
       }

       var workingTotal = '';
       var territories = vm.item.territories;
       var classes = vm.item.classes;
       var allPrices = [];
        for (var i = 0; i < territories.length; i++) {
          var price = territories[i].price;
          var classPrice = Number(territories[i].classPrice);
          workingTotal = price + (classPrice * classes.length);
          allPrices.push(workingTotal);
        }
        var sum = allPrices.reduce(function(a, b) {
          var val = a + b;
          return a + b;
          }, 0);
        vm.price = sum;
      })
    },
    methods: {
      addToCart: function() {
        var trademark = JSON.parse(localStorage.getItem('trademarkDetails'));
        var celaLista = {
          title: 'Trademark Registration',
          main: trademark.main,
          details: trademark.details,
          requestType: trademark.requestType,
          territories: trademark.territories,
          classes: trademark.classes,
          price: Number($("#total").attr("data-price")),
          type: 'trademark-registration',
          qty: 1,
          _id: trademark._id
        }
        var items = [];
        if (localStorage.getItem('cartItems')) {
          var items = JSON.parse(localStorage.getItem('cartItems'));
        }
        items.push(celaLista);
        localStorage.setItem('cartItems', JSON.stringify(items));
        localStorage.removeItem('trademarkDetails');
        window.location.href = '/#/cart';
      }
    },
    beforeMount(){
    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }
  }
</script>

<style>
  .trademark-details {
    background-color: #f3f3f3 !important;
    border: 1px solid #dddddd !important;
    padding: 20px;
    margin-top: 90px;
    margin-bottom: 30px;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif important;
    line-height: 18px;
  }

  .cart-info {
    border-top: 1px dashed #dddddd;
    margin-top: 10px;
    padding-top: 20px;
  }

  .addToCartTrademark {
    background: #bce27f !important;
    border: 1px solid #96b566;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(150, 181, 102);
    border-bottom: 3px solid #96b566;
    color: #739140;
    font-size: 20px;
    font-family: 'Oswald', sans-serif !important;
    margin: 0;
    padding: 5px 20px;
    border-radius: 4px !important;
    -webkit-border-radius: 4px !important;
  }

  .addToCartTrademark .text {
    position: relative;
    font-family: 'Oswald', sans-serif !important;
    top: -5px;
    font-size: 21px;
    margin-right: 4px;
    padding-left: 13px;
  }

  .addToCartTrademark .cartIcon {
    background: url("/src/assets/images/sprites/sprite1.png") repeat scroll 0 0 transparent;
    background-position: -304px -310px;
    display: inline-block;
    width: 24px;
    height: 29px;
  }

  .addToCartInfo {
    text-align: right;
  }

  .addToCartInfo h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 24px;
    font-family: 'Oswald',sans-serif !important;
    font-weight: 400;
  }

  .addToCartInfo h3 span {
    font-size: 26px;
    font-weight: bold;
  }

  .sprite-payment-system {
    background: url("/src/assets/images/sprites/sprite2.png") repeat scroll 0 0 transparent;
    background-position: -7px -573px;
    width: 353px;
    height: 27px;
    position: relative;
    top: 10px;
  }

  .cart-info:after {
    content: '';
    display: block;
    clear: both;
  }

  h2 {
    margin-top: 0;
    border-bottom: 1px dashed #dddddd;
    padding-bottom: 10px;
  }

  h3 {
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    margin-top: 5px;
    margin-bottom: 20px;
  }
</style>
