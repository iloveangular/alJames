<template>
    <main class="package">
        <section class="informations">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12 hidden-xs product-steps text-center">
                        <div class="step-img"></div>
                    </div>
                    <div class="col-md-12 col-xs-12">
                        <hr>
                    </div>
                    <div class="col-md-3 col-xs-12 informations-block">
                        <img src="src/assets/images/Corporate-img.png">
                    </div>
                    <div class="col-md-6 col-xs-12 informations-block">
                        <h2>Corporate Forms & Documents for Cyprus Company</h2>
                        <h4>
                            Collection of 82 the most frequently used corporate templates, forms & contracts that startups need for managing Cyprus company</h4>
                        <ul>
                            <li>Downloadable Word format forms</li>
                            <li>Establish your Cyprus company</li>
                            <li>Manage your business</li>
                            <li>Keep accurate records</li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-xs-12">
                        <hr>
                    </div>
                </div>
            </div>
        </section>
        <section id="payment" class="package-table">
            <div class="container">
                <div class="product-title">
                    <h5>PACKAGE SERVICES</h5>
                    <h6>PRODUCTS IN THE PACKAGE</h6>
                </div>
                <table class="table payment-table" id="view_product">
                    <tbody v-cloak>
                    <tr class="packageItem" v-for="document in documents">
                        <td class="payment-item">
                            <div class="payment-item-title">
                                <a data-toggle="collapse" :href="'#' + document.slug"><span
                                        class="more_info"></span>{{document.title}}</a>
                            </div>
                            <div class="payment-item-info collapse" :id="document.slug"
                                 v-html="document.description"></div>
                        </td>
                        <td class="payment-price">
                            <span class="sell-all"><a :href="'/#/document/' + document.slug">See document</a></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="button-panel">
                    <a class="doc-btn loadMore" data-page="1">Load More</a>
                </div>
                <div class="button-panel">
                    <div class="col-xs-6 payment-div">
                        <p>Payment methods</p>
                        <div class="payment-img"></div>
                    </div>
                    <div class="col-xs-6 payment-div2">
                        <h1 class="total-text" :value="packages.price">
                            TOTAL: {{value}}{{packages.price * rate | fixPrice}}</h1></div>
                </div>
                <div class="add-cart-btn text-right">
                    <input name="action" value="addToCart" type="hidden">
                    <button class="add-cart-green addToCart" name="submit">
                        <div class="inl-block"><span class="addToCartPackage">Add to Cart</span><span
                                class="sprite1 cart green right"></span></div>
                    </button>
                </div>
            </div>
        </section>
        <section class="browse-companies" style="margin-bottom: 0;">
            <div class="container">
                <div class="panel-two">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <h6>About this Agent Legal Package</h6>
                        </div>
                    </div>
                </div>
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <a data-toggle="collapse" href="#collapseOne">
                            <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-1"
                                 data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne"
                                 aria-expanded="false">
                                <h4 class="panel-title">Useful information</h4></div>
                        </a>
                        <div class="panel-collapse collapse" id="collapseOne" aria-expanded="false"
                             style="height: 0px;">
                            <div class="panel-body useful-information">
                                <div class="useful-information" v-html="packages.usefulInformation">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- start-->
                    <div class="panel panel-default">
                        <a data-toggle="collapse" href="#collapseTwo">
                            <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-2">
                                <h4 class="panel-title">Table of Contents</h4></div>
                        </a>
                        <div class="panel-collapse collapse" id="collapseTwo" aria-expanded="false">
                            <div class="panel-body">
                                <div class="useful-information" v-html="packages.tableOfContents">
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
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                packages: '',
                documents: [],
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
            axios.post(config.url + 'package/' + this.$route.params.packageId)
                .then(function (response) {
                    vm.packages = response.data.product[0];
                    vm.documents = response.data.file;
                })
                .catch(function (error) {
                    console.log(error);
                })
            $(".loadMore").click(function () {
                var x = $(".packageItem:visible").length;
                var total = x + 5;
                $(".packageItem").slice(0, total).show();
                if ($(".packageItem:hidden").length < 1) {
                    $(".loadMore").html('There are no more items :(');
                }
            });
            var testLista = [];
            $("#payment").on("click", ".addToCart", function () {
                var ceoBroj = $("#product_id").val();
                var pageTitle = $("#pageTitle").attr('name');
                var productPrice = $("#amount_product").val();
                var celaLista = {
                    _id: ceoBroj,
                    title: pageTitle,
                    qty: 1,
                    type: 'packages',
                    list: testLista,
                    price: Number(productPrice)
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
            fixPrice: function (value) {
                var price = Math.trunc(value);
                return price
            },
        }

    }
</script>
