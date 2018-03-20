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
              <div class="pull-left product-logo"><img src=""></div>
              <div class="pull-left">
                <h1>{{product.title}}
                  <span class="description" v-html="product.description"></span></h1>
                <input name="category_id" value="22" type="hidden">
              </div>
            </div>
            <div></div>
            <p><a class="target-link" id="scroll" href="#about_prod">About this Product &gt;</a></p>
          </div>
        </div>
      </div>
    </section>
    <section id="payment">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <form method="post">
              <input name="action" value="addToCart" type="hidden">
              <input name="cat_id" value="22" type="hidden">
              <input name="product_quantity" value="1" type="hidden">
              <input id="product_id" name="product_id" value="59c704e7786e09accc26d23b" type="hidden">
              <input id="amount_product" name="amount_product" value="795" type="hidden">
              <table class="table payment-table" id="view_product">
                <tbody>
                <tr>
                  <td class="payment-table-head" colspan="2">
                    <h2>PACKAGE SERVICES</h2></td>
                </tr>
                <tr>
                  <td class="payment-item">
                    <div class="payment-item-title"><a data-toggle="collapse" href="#panel-0"><span
                      class="more_info"></span> Personal Account Opening (Emirates NBD)</a></div>
                    <div class="payment-item-info collapse" id="panel-0">Personal account opening with Emirates NBD Bank
                      <ul>
                        <li>Verifying your personal documentation</li>
                        <li>Completion of the bank forms for account opening and internet banking facilities, which will
                          be forwarded to you for signing with relevant instructions
                        </li>
                        <li>Sending the full package to the bank for approval</li>
                        <li>Monitoring the account opening process until account allocation and banking package is
                          received
                        </li>
                      </ul>
                      <br> We consider our service completed once you obtain the bank account number. Due to the
                      banker-customer relationship, we will no longer be able to contact the bank on your behalf after
                      the bank account is opened.
                      <br>
                      <br>
                      <b>Please note:</b> Personal presence will be required for 1 day to open the account. Our
                      representatives will arrange a meeting and accompany you to the bank.
                    </div>
                  </td>
                  <td class="payment-price mandatory-price">
                    <input class="hidden" style="height:12px;margin-top:3px;" name="options[29780]" value="795"
                           checked="checked" type="checkbox"> {{value}}<span>{{product.price * rate | fixPrice}}</span></td>
                </tr>
                <tr class="form-group">
                  <td class="payment-table-sub-head" colspan="2">
                    <h3 style="text-transform: uppercase;">bank-service</h3></td>
                </tr>
                <tr>
                  <td class="payment-item">
                    <div class="payment-item-title"><a data-toggle="collapse" href="#panel-included-0"><span
                      class="more_info"></span> Visa Infinite Card</a></div>
                    <div class="payment-item-info collapse" id="panel-included-0">
                      <ul>
                        <li>Assistance with the obtaining of Visa Infinite Credit Card with Emirates NBD bank.</li>
                        <li>Completion of Credit Card Application, which will be forwarded to you for signing with
                          relevant instructions.
                        </li>
                        <li>Monitoring the card issuance process until the card is received.</li>
                      </ul>
                    </div>
                  </td>
                  <td class="payment-price mandatory-price"> {{value}}<span>100</span></td>
                </tr>
                <tr>
                  <td class="payment-table-head" colspan="2">
                    <h2>ADDITIONAL SERVICES</h2></td>
                </tr>
                <tr class="form-group">
                  <td class="payment-table-sub-head" colspan="2">
                    <h3 style="text-transform: uppercase;">other-services</h3></td>
                </tr>
                <tr>
                  <td class="payment-item">
                    <div class="payment-item-title"><a data-toggle="collapse" href="#panel-1"><span
                      class="more_info"></span><span>Additional Visa Infinite Card</span></a></div>
                    <div class="payment-item-info collapse" id="panel-1">
                      <ul>
                        <li>Assistance with obtaining of Visa Infinite Credit Card with Emirates NBD Bank .</li>
                        <li> Assistance with obtaining of one additional Infinite Credit Card linked to main
                          cardholder's account with Emirates NBD bank:
                        </li>
                        <li>Completion of Credit Card Application, which will be forwarded to you for signing with
                          relevant instructions.
                        </li>
                        <li>Monitoring the card issuance process until the card is received.</li>
                      </ul>
                    </div>
                  </td>
                  <td class="payment-price">{{value}}<span>100</span>
                    <input class="checkbox" name="services" value="59c704d3786e09accc26d23a" data-price="100"
                           type="checkbox">
                  </td>
                </tr>
                <tr class="hidden payment-calculation">
                  <td class="payment-item">
                    <div class="payment-item-title">Package Price:</div>
                  </td>
                  <td class="payment-price"><span>{{product.price * rate | fixPrice}}</span>
                    <input name="total" value="795" type="hidden">
                  </td>
                </tr>
                <tr class="hidden">
                  <td class="payment-item">
                    <div class="payment-item-title">Add-on Services:</div>
                  </td>
                  <td class="payment-price">$ <span class="total_opt" id="adder">0</span>
                    <input class="total_opt_input" name="total_opt_input" value="" type="hidden">
                  </td>
                </tr>
                <tr class="hidden">
                  <td class="payment-item">
                    <div class="payment-item-title">Package Cost:</div>
                  </td>
                  <td class="payment-price">{{value}} <span class="product_total" id="price">{{rate * 795 | fixPrice}}</span></td>
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
                  <td class="no-pad-left total-price">TOTAL: {{value}}<span id="total">{{product.price * rate | fixPrice}}</span>
                    <input id="product_id" name="id" value="59c704e7786e09accc26d23b" type="hidden">
                    <input id="total_input" name="total" value="795" type="hidden">
                  </td>
                </tr>
                <tr>
                  <td class="text-right" colspan="2">
                    <div class="form-actions">
                      <button class="btn btn-default btn-add-to-cart" id="add-to-cart" type="submit">Add to Cart
                      </button>
                      <span class="cart-icon"></span></div>
                  </td>
                </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="about_prod">
      <div class="container">
        <div class="row" id="about_prod">
          <div class="col-lg-12">
            <!-- Accordions-->
            <h2>Facts &amp; Info for Visa Infinite Card</h2>
            <div class="panel-group" id="accordion-about">
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-1"><span
                  class="corporate-info-icon panel-title-icon"></span><span
                  class="panel-title">About the Card</span><span class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-1">
                  <div class="panel-body"></div>
                </div>
              </div>
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-2"><span
                  class="corporate-info-icon panel-title-icon"></span><span
                  class="panel-title">About the Bank</span><span class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-2">
                  <div class="panel-body"></div>
                </div>
              </div>
              <div class="panel">
                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-2"><span
                  class="services-icon panel-title-icon"></span><span class="panel-title">Requirements</span><span
                  class="accordion-arrow"></span></a></h3>
                <div class="panel-collapse collapse" id="about-2">
                  <div class="panel-body"></div>
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
      axios.post('https://milosrest.herokuapp.com/api/exclusive-cc/' + this.$route.params.cardId)
        .then(function (response) {
          vm.product = response.data[0];
          console.log(vm.product);
        })
        .catch(function (error) {
          console.log(error);
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
