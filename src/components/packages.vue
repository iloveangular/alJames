<template>
  <section class="packages">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <div class="title">
            <h2><span>Start-Up Packs</span></h2>
            <p>
              If you are just starting your business and looking for suitable and affordable corporate solutions, we are
              here to help! Agent Legal offers time and money saving services as well as expert advice to help start
              your international business.
              Our Start-Up Packs have been tailored to specific business activities and include all the services that
              most businesses need to get up and running.</p>
            <hr>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12 packages-mobile" v-for="vm in packages">
          <div class="package">
            <div class="img"><img src="src/assets/images/doc2.png"></div>
            <h6>{{vm.name}}</h6>
            <div v-html="vm.features">
            </div>
            <h5>{{value}}{{vm.price * rate | fixPrice}} <span>VALUE {{value}}{{vm.value * rate | fixPrice}}</span></h5>
            <a class="btn btn-green btn-medium" v-bind:href="'/#/package/' + vm.key">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios'
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        packages: [],
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
      axios.get(config.url + 'packages')
        .then(function (response) {
          vm.packages = response.data;
          console.log(vm.packages);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
