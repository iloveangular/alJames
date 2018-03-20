<template>
  <main class="cyprus-ltd-page page-content">
    <section class="product-information">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 hidden-xs product-steps text-center">
            <div class="step-img"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product-head clearfix">
              <div class="pull-left product-logo"><img :src="product.flagImageUrl"></div>
              <div class="pull-left">
                <input type="hidden" id="pageTitle" :name="product.title">
                <h1>{{product.title}}<span class="description" v-html="product.description"></span></h1>
                <input name="category_id" value="22" type="hidden">
              </div>
            </div>
            <div v-html="product.content"></div>
            <p><a class="target-link" id="scroll" href="#about_prod">About this Product &gt;</a></p>
          </div>
        </div>
      </div>
    </section>
    <section id="payment">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <input name="action" value="addToCart" type="hidden">
            <input name="cat_id" value="22" type="hidden">
            <input name="product_quantity" value="1" type="hidden">
            <input id="product_id" :name="product._id" :value="product._id" type="hidden">
            <input id="amount_product" name="amount_product" :value="product.price" type="hidden">
            <table class="table payment-table" id="view_product">
              <tbody>
              <tr>
                <td class="payment-table-head" colspan="2">
                  <h2>PACKAGE SERVICES</h2></td>
              </tr>
              <tr>
                <td class="payment-item">
                  <div class="payment-item-title"><a data-toggle="collapse" href="#panel-0"><span
                    class="more_info"></span> Formation Fee</a></div>
                  <div class="payment-item-info collapse" id="panel-0" v-html="product.formationFee">
                  </div>
                </td>
                <td class="payment-price mandatory-price">
                  <input class="hidden" style="height:12px;margin-top:3px;" :name="'options[' + product._id + ']'" v-model="product.price" checked="checked" type="checkbox"> {{value}}<span
                  v-html="product.price * rate | fixPrice"></span></td>
              </tr>
              <tr>
                <td class="payment-table-head" colspan="2">
                  <h2>ADDITIONAL SERVICES</h2></td>
              </tr>
              <tr class="form-group" v-for="service in services.slice(0, 1) " :key="service.type == 'nominee-service'">
                <td class="payment-table-sub-head" colspan="2">
                  <h3 style="text-transform: uppercase;">nominee-services</h3>
                </td>
              </tr>
              <tr v-for="service in services" v-if="service.type == 'nominee-service'">
                <td class="payment-item">
                  <div class="payment-item-title">
                    <a data-toggle="collapse" :href="'#' + service.key">
                      <span class="more_info"></span>
                      <span>{{service.name}}</span>
                    </a>
                  </div>
                  <div class="payment-item-info collapse" :id="service.key">{{service.description}}</div>
                </td>
                <td class="payment-price">{{value}}<span>{{service.price * rate | fixPrice}}</span>
                  <input class="checkbox" :data-title="service.name" data-service="nominee-service" :name="service._id"
                         :value="service._id" :data-price="service.price" type="checkbox">
                </td>
              </tr>
              <tr class="form-group" v-for="service in services.slice(0, 1) "
                  :key="service.type == 'corporate-certificate'">
                <td class="payment-table-sub-head" colspan="2">
                  <h3 style="text-transform: uppercase;">corporate-certificates</h3></td>
              </tr>
              <tr v-for="service in services" v-if="service.type == 'corporate-certificate'">
                <td class="payment-item">
                  <div class="payment-item-title">
                    <a data-toggle="collapse" :href="'#' + service.key">
                      <span class="more_info"></span>
                      <span>{{service.name}}</span>
                    </a>
                  </div>
                  <div class="payment-item-info collapse" :id="service.key">{{service.description}}</div>
                </td>
                <td class="payment-price">{{value}}<span>{{service.price * rate | fixPrice}}</span>
                  <input class="checkbox" :data-title="service.name" data-service="corporate-certificate"
                         :name="service._id" :value="service._id" :data-price="service.price" type="checkbox">
                </td>
              </tr>
              <tr class="form-group" v-for="service in services.slice(0, 1) " :key="service.type == 'other-service'">
                <td class="payment-table-sub-head" colspan="2">
                  <h3 style="text-transform: uppercase;">other-services</h3></td>
              </tr>
              <tr v-for="service in services" v-if="service.type == 'other-service'">
                <td class="payment-item">
                  <div class="payment-item-title">
                    <a data-toggle="collapse" :href="'#' + service.key">
                      <span class="more_info"></span>
                      <span>{{service.name}}</span>
                    </a>
                  </div>
                  <div class="payment-item-info collapse" :id="service.key">{{service.description}}</div>
                </td>
                <td class="payment-price">{{value}}<span>{{service.price * rate | fixPrice}}</span>
                  <input class="checkbox" :data-title="service.name" data-service="other-service" :name="service._id"
                         :value="service._id" :data-price="service.price" type="checkbox">
                </td>
              </tr>
              <tr class="form-group" v-for="service in services.slice(0, 1) "
                  :key="service.type == 'bank-products-and-service'" v-if="service.type == 'bank-products-and-service'">
                <td class="payment-table-sub-head" colspan="2">
                  <h3 style="text-transform: uppercase;">bank-products-and-services</h3></td>
              </tr>
              <tr v-for="service in services" v-if="service.type == 'bank-products-and-service'">
                <td class="payment-item">
                  <div class="payment-item-title">
                    <a data-toggle="collapse" :href="'#' + service.key">
                      <span class="more_info"></span>
                      <span>{{service.name}}</span>
                    </a>
                  </div>
                  <div class="payment-item-info collapse" :id="service.key">{{service.description}}</div>
                </td>
                <td class="payment-price">{{value}}<span>{{service.price * rate | fixPrice}}</span>
                  <input class="checkbox" :data-title="service.name" data-service="bank-products-and-service"
                         :name="service._id" :value="service._id" :data-price="service.price" type="checkbox">
                </td>
              </tr>

              <tr class="hidden payment-calculation">
                <td class="payment-item">
                  <div class="payment-item-title">Package Price:</div>
                </td>
                <td class="payment-price"><span>{{product.price * rate | fixPrice}}</span>
                  <input name="total" v-model="product.price" type="hidden">
                </td>
              </tr>
              <tr class="hidden">
                <td class="payment-item">
                  <div class="payment-item-title">Add-on Services:</div>
                </td>
                <td class="payment-price">{{value}} <span class="total_opt" id="adder">0</span>
                  <input class="total_opt_input" name="total_opt_input" value="" type="hidden">
                </td>
              </tr>
              <tr class="hidden">
                <td class="payment-item">
                  <div class="payment-item-title">Package Cost:</div>
                </td>
                <td class="payment-price">{{value}} <span class="product_total" id="price">{{product.price * rate | fixPrice}}</span></td>
              </tr>
              </tbody>
            </table>
            <table class="table total-table">
              <tbody>
              <tr>
                <td class="no-pad-right hidden-xs">
                  <p>Payment methods</p>
                  <div class="payment-methods"></div>
                </td>
                <td class="no-pad-left total-price">TOTAL: {{value}}<span id="total" :data-price="product.price">{{product.price * rate | fixPrice}}</span>
                  <input id="product_id" name="id" value="599a1344bf50847b0972a465" type="hidden">
                  <input id="total_input" name="total" v-model="product.price" type="hidden">
                </td>
              </tr>
              <tr>
                <td class="text-right" colspan="2">
                  <div class="form-actions">
                    <button class="btn btn-default btn-add-to-cart addToCart" id="add-to-cart">Add to Cart</button>
                    <span class="cart-icon"></span></div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="about_prod">
      <div class="container">
        <div class="row" id="about_prod">
          <div class="col-lg-12">
            <!-- Accordions-->
            <h2>Facts &amp; Info for {{product.title}}</h2>
            <div class="panel-group" id="accordion-about">
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-1"><span
                  class="corporate-info-icon panel-title-icon"></span><span
                  class="panel-title">Corporate Information</span><span class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-1">
                  <div class="panel-body" v-html="product.corporateInformation">
                  </div>
                </div>
              </div>
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-2"><span
                  class="taxation-icon panel-title-icon"></span><span class="panel-title">Taxation</span><span
                  class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-2">
                  <div class="panel-body" v-html="product.taxation"></div>
                </div>
              </div>
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-3"><span
                  class="services-icon panel-title-icon"></span><span class="panel-title">Our Services &amp; Requirements</span><span
                  class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-3">
                  <div class="panel-body" v-html="product.requirements"></div>
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
  import axios from 'axios'

  export default {
    data() {
      return {
        product: '',
        services: [],
        test: [],
        value: '',
        rate: ''
      }
    },
    mounted() {
      var vm = this;
      $(document).ready(function() {
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
      });
      axios.post('https://milosrest.herokuapp.com/api/companies/' + this.$route.params.productId)
        .then(function (response) {
          vm.product = response.data.product[0];
          vm.services = response.data.file;
          vm.test = response.data.file;
        })
        .catch(function (error) {
          console.log(error);
        });
      var productId = $("#product_id").val();
      var serviceList = [];
      $("#payment").on("click", ".checkbox", function () {
        var total = Number($("#total").attr('data-price'));
        var add = Number($(this).data("price"));
        var service = $(this).attr('name');
        var productId = $("#product_id").val();
        if (this.checked) {
          var totalText = Number($("#total").attr('data-price'));
          var finalTotal = total + add;
          serviceList.push(service);
          var json = JSON.stringify(serviceList);

          $('#total_input').val(finalTotal);
          $("#total").html(Math.trunc(finalTotal * vm.rate));
          $("#total").attr('data-price', finalTotal);
        }
        if (!this.checked) {
          var totalText = Number($("#total").attr('data-price'));
          var finalTotal = total - add;
          $("#total_input").val(finalTotal);
          $("#total").html(Math.trunc(finalTotal * vm.rate));
          $("#total").attr('data-price', finalTotal);
        }
      });
      var testLista = [];
      $("#payment").on("click", ".checkbox", function () {
        var dataId = $(this).attr('name');
        var dataTitle = $(this).attr('data-title');
        var dataService = $(this).attr('data-service');
        var dataPrice = $(this).attr('data-price');
        var testBroj = {
          _id: dataId,
          title: dataTitle,
          service: dataService,
          price: dataPrice
        };
        testLista.push(testBroj)
      });

      $("#payment").on("click", ".addToCart", function () {
        var ceoBroj = $("#product_id").val();
        var pageTitle = $("#pageTitle").attr('name');
        var productPrice = $("#amount_product").val();
        var celaLista = {
          _id: ceoBroj,
          title: pageTitle,
          list: testLista,
          price: productPrice
        };
        if (!localStorage.getItem('cartItems')) {
          localStorage.setItem('cartItems', '[]');
        }
        var a = [];
        a = JSON.parse(localStorage.getItem('cartItems'));
        a.push(celaLista);
        localStorage.setItem('cartItems', JSON.stringify(a));
        location.reload();
      })

    },
    filters: {
      fixPrice: function(value)  {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
