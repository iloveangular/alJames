<template>
  <main>
    <section class="special">
      <div class="container">
        <div class="title">
          <h2>Special Offers</h2>
        </div>
        <div class="tabs">
          <!-- Nav tabs-->
          <ul role="tablist" class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Company
              Formation</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Bank
              Accounts</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab"
                                       data-toggle="tab">Documents</a></li>
          </ul>
          <!-- Tab panes-->
          <div class="tab-content solve-tab-special">
            <div id="home" role="tabpanel" class="tab-pane active">
              <div class="row">
                <div class="col-md-4">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{rate * 1210 | fixPrice}}</h3>
                    <h4>St.Vincent Company Formation & Free Account with Euro Pacific Bank</h4>
                    <p>Cost-effective company, zero taxation, flexible structure & easy maintenance.
                    </p>
                    <p>Multi-currency corporate account & secure e-banking.</p><a
                    :href="'/#/product/company-formation/st-vincent-company-formation-and-free-account-with-euro-pacific-bank'">
                    <button class="btn btn-green">Learn More</button>
                  </a></div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{rate * 1290 | fixPrice}}</h3>
                    <h4>Cyprus Company & Free Account with CIM Bank (Switzerland)</h4>
                    <p>Company with lowest EU corporate tax 12.5% & zero tax on dividends.</p>
                    <p>Account in Switzerland for daily transactions: complete banking services</p><a
                    :href="'/#/product/company-formation/cyprus-company-and-free-account-with-cim-bank-switzerland'">
                    <button class="btn btn-green">Learn More</button>
                  </a></div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{rate * 1210 | fixPrice}}</h3>
                    <h4>Belize Company & Free Account with Choice Bank</h4>
                    <p>Quick & easy company formation. Tax exempted IBC with high level of privacy.
                    </p>
                    <p>International account with safe & secure Choice Bank.</p><a
                    :href="'/#/product/company-formation/belize-company-and-free-account-with-choice-bank'">
                    <button class="btn btn-green">Learn More</button>
                  </a></div>
                </div>
              </div>
            </div>
            <div id="profile" role="tabpanel" class="tab-pane">
              <div class="row">
                <div class="col-md-4">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{rate * 600 | fixPrice}}</h3>
                    <h4>World Elite Master Card</h4>
                    <p>Personal account in Latvia with prestigious World Elite MasterCard: discount programs, large
                      credit limits, insurance & concierge service.</p>
                    <a :href="'/#/product/exclusive-credit-card/visa-infinite-card'">
                      <button class="btn btn-green">Learn More</button>
                    </a></div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{rate * 795 | fixPrice}}</h3>
                    <h4>Visa Infinite Card</h4>
                    <p>Obtain a Visa Infinite Card with an Emirates NBD bank account. Includes: special discount
                      programs, global concierge service and insurance scheme.</p>
                    <a :href="'/#/product/exclusive-credit-card/world-elite-master-card-1'">
                      <button class="btn btn-green">Learn More</button>
                    </a></div>
                </div>
              </div>
            </div>
            <div id="messages" role="tabpanel" class="tab-pane">
              <div class="row">
                <div class="col-md-4" v-for="vm in documents">
                  <div class="box">
                    <h3 class="price">OFFER PRICE {{value}}{{vm.price * rate | fixPrice}}</h3>
                    <h4>{{vm.title}}</h4>
                    <span v-html="vm.description"></span>
                    <a :href="'/#/document/' + vm.slug">
                      <button class="btn btn-green">Learn More</button>
                    </a></div>
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
        documents: [],
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
      axios.get('https://milosrest.herokuapp.com/api/special-offers')
        .then(function (response) {
          vm.documents = response.data;
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
