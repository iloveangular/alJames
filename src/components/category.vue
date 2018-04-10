<template>
  <div class="affidavits-verification-body">
    <main class="affidavits-verification-page">
      <section class="document-div">
        <div class="container">
          <div class="col-xs-12" style="padding: 0; border-bottom: 1px dashed #dddddd;">
            <h1 style="text-transform:capitalize;">{{title}} Documents</h1><a style="margin: 30px 0 0 !important;float: right !important;" class="back-link" href="/#/documents">&lt;
            Back to Documents</a></div>
          <div class="row">
            <div class="col-xs-12 mobileSearch">
              <div class="search-div">
                <!--<form>-->
                <!--<input class="no-margin" id="query" name="search" value="" autocomplete="off"-->
                <!--placeholder="Search for Documents" type="text">-->
                <!--<button class="button green no-brd pad-tb-2-lr-15" id="search_doc" name="submit" style="height:37px;">-->
                <!--<div class="sprite1 magnify_green"></div>-->
                <!--</button>-->
                <!--</form>-->
                <form id="form-hockey_v1" name="form-hockey_v1">
                  <div class="typeahead__container">
                    <div class="typeahead__field">

            <span class="typeahead__query">
                <input class="js-typeahead-hockey_v1" name="hockey_v1[query]" placeholder="Search" autocomplete="off"
                       type="search">
            </span>
                      <span class="typeahead__button">
            <button class="button green no-brd pad-tb-2-lr-15" id="search_doc" name="submit" style="height:37px;">
                  <div class="sprite1 magnify_green"></div>
                </button>
            </span>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cart-section" id="payment">
        <div class="container">
          <div class="col-xs-12 col-sm-12 remover-space" v-for="vm in document">
            <div class="col-xs-8 col-sm-10 padding-zero">
              <h6>{{vm.title}}</h6>
              <div class="description-cart">
                <p class="description mar-top-10" v-html="vm.description"></p>
              </div>
              <div class="show-for-small-down">
                <div class="inl-block width-100">
                  <h6 class="clr-green docPrice left mar-rgh-10">PRICE {{value}}{{vm.price * rate | fixPrice}}</h6>
                  <h5 class="left clr-l-grey"></h5></div>
              </div>
              <div class="inl-block-cart">
                <div class="mob-float-none">
                  <button class="button-cart green addToCart" name="button_id" :data-id="vm._id" :data-price="vm.price"
                          :data-title="vm.title" style="float:left;">Add to Cart
                  </button>
                  <a class="button-cart grey" :href="'/#/document/' + vm.slug">Learn More</a></div>
                <div class="hide-for-small-down">
                  <div class="inl-block left">
                    <h6 class="clr-green docPrice left mar-rgh-10 mar-top-7">PRICE {{value}}{{vm.price * rate |
                      fixPrice}}</h6></div>
                </div>
              </div>
            </div>
            <div class="col-xs-4 col-sm-2 padding-remove">
              <img src="src/assets/img/company-img.jpg" data-toggle="modal" data-target="#myModal">
              <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button class="close" type="button" data-dismiss="modal"
                              style="font-size:26px !important;"></button>
                    </div>
                    <div class="modal-body"><img class="model-img" src="src/assets/img/company-img.jpg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  import axios from 'axios'
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        document: [],
        title: '',
        value: '',
        rate: '',

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

        // addtocart
        $("#payment").on("click", ".addToCart", function () {
          var ceoBroj = $(this).attr('data-id');
          var pageTitle = $(this).attr('data-title');
          var productPrice = $(this).attr('data-price');
          var celaLista = {
            _id: ceoBroj,
            qty: 1,
            title: pageTitle,
            price: Number(productPrice),
            type: 'documents'
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
      });
      $.ajax({
        type: 'GET',
        url: config.url + 'documents/' + this.$route.params.documentId,
        data: {},
        success: function(response) {
          console.log(response);
          vm.document = response;
          vm.title = response[0].title;
        },
        error: function(error) {
          console.log(error);
        }
      });
      var bigUrl = config.url + "documents/" + this.$route.params.documentId;
      console.log(bigUrl);
      $.typeahead({
        input: '.js-typeahead-hockey_v1',
        minLength: 2,
        maxItem: 6,
        maxItemPerGroup: 6,
        order: "asc",
        hint: true,
        cache: true,
        display: ["title", "_id",],
        dropdownFilter: [{
          key: 'title',
        }],
        template: '<span class="division">' + '<a href="/#/document/{{slug}}">({{title}}</a></span>)',
        correlativeTemplate: true,
        source: {
          url: bigUrl,
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
<style>
  .project-jquerytypeahead.page-demo .typeahead__result .name {
    margin: 0 10px;
  }

  .project-jquerytypeahead.page-demo .typeahead__result .division {
    font-size: 12px;
    color: #777;
    font-variant: small-caps;
  }

  .project-jquerytypeahead.page-demo .typeahead__result .team-logo {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 2px 4px 0 10px;
  }

  .document-body .search-div input {
    width: calc(100% - 75px) !important;
    padding: 8px 14px 6px !important;
    height: 38px !important;
  }

  .typeahead__cancel-button {
    right: 80px;
    font-size: 22px;
  }

  .project-jquerytypeahead.page-demo .typeahead__result .team-logo img {
    height: 26px;
  }

  .affidavits-verification-body .document-div a {
    float: none !important;
    margin: 0 !important;
  }
  .search-div input {
    height: 38px !important;
    padding: 8px 14px 6px !important;
  }
  .affidavits-verification-body .search-div {
    float: none !important;
    width: 50% !important;
    overflow: visible !important;
  }
</style>
