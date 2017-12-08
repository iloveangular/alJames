<template>
    <div class="affidavits-verification-body">
        <main class="affidavits-verification-page">
            <section class="document-div">
                <div class="container">
                    <div class="col-xs-12" style="padding: 0; border-bottom: 1px dashed #dddddd;">
                        <h1 style="text-transform:capitalize;">{{this.$route.params.documentId}} Documents</h1><a class="back-link" href="/#/documents">&lt; Back to Documents</a></div>
                    <div class="search-div">
                        <input class="no-margin" id="query" name="search" value="" autocomplete="off" placeholder="Search for Documents" type="text">
                        <button class="button green no-brd pad-tb-2-lr-15" id="search_doc" type="submit" name="submit" style="height:37px;">
                            <div class="sprite1 magnify_green"></div>
                        </button>
                    </div>
                </div>
            </section>
            <section class="cart-section">
                <div class="container">
                    <div class="col-xs-12 col-sm-12 remover-space" v-for="vm in document">
                        <div class="col-xs-8 col-sm-10 padding-zero">
                            <h6>{{vm.title}}</h6>
                            <div class="description-cart">
                                <p class="description mar-top-10" v-html="vm.description"></p>
                            </div>
                            <div class="show-for-small-down">
                                <div class="inl-block width-100">
                                    <h6 class="clr-green docPrice left mar-rgh-10">PRICE ${{vm.price}}</h6>
                                    <h5 class="left clr-l-grey"></h5></div>
                            </div>
                            <div class="inl-block-cart">
                                <div class="mob-float-none">
                                    <form id="formundefined" method="post">
                                        <input name="action" value="addToCart" type="hidden">
                                        <button class="button-cart green" type="submit" name="button_id" value="5999d9953a95f667e1812697" style="float:left;">Add to Cart</button>
                                    </form><a class="button-cart grey" :href="'/#/document/' + vm.slug">Learn
                                    More</a></div>
                                <div class="hide-for-small-down">
                                    <div class="inl-block left">
                                        <h6 class="clr-green docPrice left mar-rgh-10 mar-top-7">PRICE ${{vm.price}}</h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-2 padding-remove"><img :src="vm.image.url" data-toggle="modal" data-target="#myModal">
                            <div class="modal fade" id="myModal" role="dialog">
                                <div class="modal-dialog">
                                    <!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button class="close" type="button" data-dismiss="modal">×</button>
                                        </div>
                                        <div class="modal-body"><img class="model-img" :src="vm.image.url"></div>
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
                document: [],
                title: ''
            }
        },
        mounted() {
            var vm = this;
            axios.post('https://milosrest.herokuapp.com/api/documents/' + this.$route.params.documentId)
                .then(function (response) {
                    vm.document = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>
