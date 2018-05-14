<template>
  <main>
    <section class="home-banner">
      <div class="container">
        <h2>HELPING BUSINESSES <strong>GET UP & RUNNING</strong></h2>
        <div class="row">
          <div class="col-md-3 col-xs-3">
            <a href="/#/companies">
              <div class="block">
                <img src="src/assets/images/icon.png">
                <p>Company Formation</p>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-xs-3">
            <a href="/#/banks">
              <div class="block">
                <img src="src/assets/images/bank.png">
                <p>Bank Account Opening</p>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-xs-3">
            <a href="/#/trademarks">
              <div class="block">
                <img src="src/assets/images/trademark.png">
                <p>Trademark Registration</p>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-xs-3">
            <a href="/#/documents">
              <div class="block">
                <img src="src/assets/images/document.png">
                <p>Document Templates</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="home-informations">
      <div class="home-informations-block">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12">
              <img src="src/assets/images/info.png">
            </div>
            <div class="col-md-6 col-xs-12">
              <h2>Company Formation Worldwide</h2>
              <h4>Starting from {{value}}{{rate * companyFormation | fixPrice}}</h4>
              <ul>
                <li>Available across 5 continents, in 50+ countries</li>
                <li>Corporate packages to start your business right away</li>
                <li>Company administration and expert legal support</li>
              </ul>
            </div>
            <div class="col-md-3 col-xs-12">
              <a href="/#/companies">
                <button class="btn btn-green btn-large">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="home-informations-block">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12">
              <img src="src/assets/images/info.png">
            </div>
            <div class="col-md-6 col-xs-12">
              <h2>Bank Account Opening</h2>
              <h4>Starting from {{value}}{{rate * bankAccount | fixPrice}}</h4>
              <ul>
                <li>Available across 5 continents, in 50+ countries</li>
                <li>Corporate packages to start your business right away</li>
                <li>Company administration and expert legal support</li>
              </ul>
            </div>
            <div class="col-md-3 col-xs-12">
              <a href="/#/banks">
                <button class="btn btn-green btn-large">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="home-informations-block">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12">
              <img src="src/assets/images/info.png">
            </div>
            <div class="col-md-6 col-xs-12">
              <h2>Trademark Registration & Expert Assistance</h2>
              <ul>
                <li>Available across 5 continents, in 50+ countries</li>
                <li>Corporate packages to start your business right away</li>
                <li>Company administration and expert legal support</li>
              </ul>
            </div>
            <div class="col-md-3 col-xs-12">
              <a href="/#/trademarks">
                <button class="btn btn-green btn-large">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-packages">
      <div class="container">
        <h2>Why Choose Us <a href="/#/about">Learn About us</a></h2>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="package">
              <div class="image">
                <img src="src/assets/images/vsec.png">
              </div>
              <h4>SECURE & TRUSTWORTHY</h4>
              <p>We meet the highest security standards and confidentiality principals to ensure that your data is
                secure.</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="package">
              <div class="image">
                <img src="src/assets/images/pphone.png">
              </div>
              <h4>CONTINUOUS SUPPORT</h4>
              <p>Our qualified agents will assist you throughout the entire process to ensure that you get the highest
                quality service.</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="package">
              <div class="image">
                <img src="src/assets/images/pcog.png">
              </div>
              <h4>QUICK AND EASY PROCEDURE</h4>
              <p>We make the process of company formation or bank account opening quick and simple.</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="package">
              <div class="image">
                <img src="src/assets/images/pprice.png">
              </div>
              <h4>COMPETITIVE PRICING</h4>
              <p>Our goal is to provide you with the best possible prices with no hidden cost.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="cta-block">
              <div class="row">
                <div class="col-md-7 col-sm-6 col-xs-12">
                  <h3>Affiliate Program</h3>
                  <p>Monetize your audience and drive leads to purchase reliable corporate services.</p>
                  <button class="btn btn-black btn-large">
                    <a href="/#/affiliates">Learn More</a>
                  </button>
                </div>
                <div class="col-md-5 col-ms-6 col-xs-12">
                  <img src="src/assets/images/affiliates-program.png">
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="cta-block">
              <div class="row">
                <div class="col-md-7 col-sm-6 col-xs-12">
                  <h3>Partner Program</h3>
                  <p>We offer global partnership opportunities across a wide range of corporate services</p>
                  <button class="btn btn-black btn-large">
                    <a href="/#/partners">Learn More</a>
                  </button>
                </div>
                <div class="col-md-5 col-ms-6 col-xs-12">
                  <img src="src/assets/images/partner-program1.png">
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
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        value: '',
        rate: '',
        companyFormation: '',
        bankAccount: '',
      }
    },
    mounted() {
      var vm = this;
      vm.companyFormation = 560;
      vm.bankAccount = 400;
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
    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }
  }
</script>

