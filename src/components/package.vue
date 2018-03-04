<template>
    <div class="cfd-company-body">
        <main class="compnay-page">
            <section class="informations">
                <div class="block">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="step-img"></div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="col-md-3 col-xs-4 informations-block"><img
                                src="src/assets/images/Corporate-img.png"></div>
                        <div class="col-md-5 col-xs-8 informations-block">
                            <h2>{{packages.name}}</h2>
                            <h4>{{packages.description}}</h4>
                            <div v-html="packages.features">
                            </div>
                            <a class="packages-link" href="#">About this Package &gt;</a></div>
                    </div>
                </div>
            </section>
            <section class="product-packge">
                <div class="container">
                    <div class="Product-title">
                        <h5 class="product-clr-green">PACKAGE SERVICES</h5>
                        <h6 class="product-clr-black">PRODUCTS IN THE PACKAGE</h6></div>
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
                            <td>
                                <span class="sell-all"><a :href="'/#/document/' + document.slug">See document</a></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="button-panel"><a class="doc-btn loadMore" data-page="1">Load More</a></div>
                    <div class="button-panel">
                        <div class="col-xs-6 payment-div">
                            <p>Payment methods</p>
                            <div class="payment-img"></div>
                        </div>
                        <div class="col-xs-6">
                            <h1 class="total-text">TOTAL: ${{packages.price}}</h1></div>
                    </div>
                    <div class="add-cart-btn text-right">
                        <input name="action" value="addToCart" type="hidden">
                        <button class="add-cart-green" type="submit" name="submit">
                            <div class="inl-block"><span
                                    class="left mar-rgh-10 fnt-oswald-medium fnt-size-21 mar-top-7 addToCartPackage">Add to Cart</span><span
                                    class="sprite1 cart green right"></span></div>
                        </button>
                    </div>
                </div>
            </section>
            <section class="browse-companies" style="margin-bottom: 0;">
                <div class="container">
                    <div class="panel-two">
                        <div class="col-md-12 col-sm-12" style="padding: 0;">
                            <h6 class="fnt-size-24 mob-fnt-size-21">About this Agent Legal Package</h6></div>
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
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                packages: '',
                documents: []
            }
        },
        mounted() {
            var vm = this;
            axios.post('https://milosrest.herokuapp.com/api/package/' + this.$route.params.packageId)
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
        }

    }
</script>