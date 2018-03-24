<template>
  <div class="affidavits-verification-body">
    <main class="affidavits-verification-page">
      <section class="document-div" id="payment">
        <div class="container">
          <input type="hidden" id="product_id" :value="document._id">
          <input type="hidden" id="pageTitle" :name="document.title">
          <input type="hidden" id="amount_product" :value="document.price">
          <div class="col-xs-12" style="padding: 0; border-bottom: 1px dashed #dddddd;"><a class="back-link"
                                                                                           href="/#/documents">&lt; Back
            to Documents</a></div>
          <div class="document-content">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-2">
                <img src="src/assets/img/company-img.jpg">
                <button class="button-grey" data-toggle="modal" data-target="#myModal">
                  <i class="fa fa-search" style="margin-right: 5px;"></i>Full View</button>
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button class="close" type="button" data-dismiss="modal" style="float:right;"></button>
                      </div>
                      <div class="modal-body"><img class="model-img" src="src/assets/img/company-img.jpg" style="margin: 20px auto;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-7">
                <h1 style="float:none;">{{document.title}}</h1>
                <div>
                  <p class="description mar-top-10" v-html="document.description"></p>
                </div>
                <ul>
                  <li id="size">Size: {{document.size}}</li>
                  <li id="format">Format: {{document.format}}</li>
                  <li id="languages">Languages: {{document.languages}}</li>
                  <li id="pages">Pages: undefined</li>
                  <li id="last-update">Last update: {{document.lastUpdate}}</li>
                </ul>
                <p>PLEASE NOTE: The contents of samples of forms and documents are not intended to provide legal,
                  accounting or other professional advice and should not be relied upon as such. These samples provide a
                  general overview of legal information and are aimed for our clients who choose to prepare their own
                  documents. The content of the samples are NOT a substitute for the Advice of an Attorney/Solicitor. It
                  is advised to seek guidance from a professional before using or acting upon sample content to
                  determine its suitability in regards to your circumstances. If you require customization of this
                  document by a legal practitioner or translation of this document into a language other than English,
                  please <a href="/#/contact" style="float: none; margin: none;">contact us</a> for further information
                  and a quote.</p>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="doc-box">
                  <h6 style="text-transform: uppercase;">Price<span>{{value}}{{document.price * rate | fixPrice}}</span>
                  </h6>
                  <button class="add-to-cart addToCart" name="button_id" value="5999d9973a95f667e18126a0">Add to Cart</button>
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

  export default {
    data() {
      return {
        document: '',
        value: '',
        rate: ''
      }
    },
    mounted() {
      var vm = this;
      axios.post('https://milosrest.herokuapp.com/api/document/' + this.$route.params.documentId)
        .then(function (response) {
          vm.document = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
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

        $("#payment").on("click", ".addToCart", function () {
          var ceoBroj = $("#product_id").val();
          var pageTitle = $("#pageTitle").attr('name');
          var productPrice = $("#amount_product").val();
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

    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
