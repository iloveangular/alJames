<template>
    <main>
        <section class="packages first" v-if="username">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title">
                            <h2><span>Your Orders</span></h2></div>
                    </div>
                </div>
                <div class="row" id="complete">
                    <div class="col-xs-12">
                        <div class="box-center" v-for="order in orders">
                            <div class="row">
                                <div class="col-xs-12">
                                    <h3>Order <span style="color: #aaa;">#{{order._id}}</span></h3>
                                    <h5>Status: <span style="color: orange;">{{order.status}}</span></h5>
                                    <h5>Created At: <span style="color: orange;">{{order.createdAt}}</span></h5>
                                    <h5>Payment Type: <span style="color: orange;">{{order.paymentType}}</span></h5>
                                    <h5 v-if="order.stripeToken">Stripe Token: <span style="color: orange;">{{order.stripeToken}}</span></h5>
                                    <hr>
                                </div>
                            </div>
                            <div class="row cfd-company-body">
                                <div class="col-xs-12" v-if="order.packages.length >= 1">
                                    <div class="collaspe-panel" style="border: 0; padding-left: 0;"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" :data-target="'#' + order._id"></i>Packages</span>
                                        <div class="collapse" :id="order._id" aria-expanded="false" style="height: 0px;">
                                            <div class="product-text" v-for="item in order.packages"><a :href="'/#/package/' + item.key"><h4>
                                                {{item.name}}</h4></a></div>
                                        </div>
                                    </div>
                                    <hr>
                                </div>

                                    <div class="col-xs-12" v-if="order.products.length >= 1">
                                    <div class="collaspe-panel" style="border: 0; padding-left: 0;"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" :data-target="'#' + order._id + 'product'"></i>Products</span>
                                        <div class="collapse" :id="order._id + 'product'" aria-expanded="false" style="height: 0px;">
                                            <div class="product-text" v-for="item in order.products"><a :href="'/#/product/company-formation/' + item.slug"><h4>
                                                {{item.title}}</h4></a></div>
                                        </div>
                                    </div>
                                    <hr>
                                </div>

                                <div class="col-xs-12" v-if="order.documents.length >= 1">
                                    <div class="collaspe-panel" style="border: 0; padding-left: 0;"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" :data-target="'#' + order._id + 'document'"></i>Documents</span>
                                        <div class="collapse" :id="order._id + 'document'" aria-expanded="false" style="height: 0px;">
                                            <div class="product-text" v-for="item in order.documents"><a :href="'/#/document/' + item.slug"><h4>
                                                {{item.title}}</h4></a></div>
                                        </div>
                                    </div>
                                    <hr>
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
  import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                orders: [],
                packages: [],
                products: [],
                documents: [],
                username: ''
            }
        },
        mounted() {
            var vm = this;
            if (localStorage.getItem('token')) {
                $.ajax({
                    url: config.url + 'token',
                    type: 'POST',
                    data: {
                        'token': localStorage.getItem('token'),
                    },
                    success: function (data) {
                        if (data.session == true) {
                            vm.username = true;
                        } else {
                            vm.username = false;
                            location.reload();
                            location.href = '/#/';
                        }
                    }
                })
            } else {
                location.href = '/#/';
            }
            $.ajax({
                url: config.url + 'orders',
                type: 'POST',
                data: {
                    'userid': localStorage.getItem('userid'),
                },
                success: function (orders) {
                    vm.orders = orders.data;
                    console.log(orders.data);
                    if(orders.data.packages) {
                        vm.packages = orders.data.packages;
                    }
                    if(orders.data.products) {
                        vm.products = orders.data.products;
                    }
                    if(orders.data.documents) {
                        vm.documents = orders.data.documents;
                    }
                }
            })
        }
    }
</script>
