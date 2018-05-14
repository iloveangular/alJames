<template>
    <main class="cart">
        <section class="view first">
            <div class="container">
                <div class="row hidden-xs">
                    <div class="col-md-12 col-xs-12">
                        <div class="sprite2 step1"></div>
                        <hr>
                    </div>
                </div>
                <div class="row your-shopping" v-if="items.length > 0">
                    <div class="col-xs-12">
                        <h6 class="title">Your Shopping Cart</h6>
                        <table class="table table-bordered table-items">
                            <thead>
                            <tr class="bg-gray">
                                <th width="60%">Product Name</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody v-for="item in items" :class="item.title" :data-product="item._id">
                            <tr :value="item._id">
                                <td v-if="item.type == 'trademark-registration'">
                                    <button class="delete-product" name="button_id" :value="item._id"
                                            :data-price="item.price">
                                        <i class="fa fa-times" aria-hidden="true"></i></button>
                                    <a class="product-name" v-if="item.requestType == 'watch'" href="#"
                                       style="font-weight: bold;">Trademark Watch</a>
                                    <a class="product-name" v-if="item.requestType == 'register'" href="#"
                                       style="font-weight: bold;">Trademark Registration</a>
                                    <a class="product-name" v-if="item.requestType == 'search'" href="#"
                                       style="font-weight: bold;">Trademark Search</a>
                                    <p class="territories">
                                        Territories: {{item.territories.length}}, Classes: {{item.classes.length}}</p>
                                </td>
                                <td v-else>
                                    <button class="delete-product" name="button_id" :value="item._id"
                                            :data-price="item.price">
                                        <i class="fa fa-times" aria-hidden="true"></i></button>
                                    <a class="product-name" href="#" style="font-weight: bold;">{{item.title}}</a>
                                </td>

                                <td v-if="item.type == 'trademark-registration'">
                                    <select disabled class="quantityUpdate num-items updateItem its working"
                                            :data-id="item._id">
                                        <option selected value="1" name="quantity-change">1</option>
                                    </select>
                                </td>
                                <td v-else>
                                    <select class="quantityUpdate num-items updateItem" :data-id="item._id">
                                        <option :value="item.qty" name="quantity-change" :selected="item.qty" disabled>
                                            {{item.qty}}
                                        </option>
                                        <option value="1" name="quantity-change">1</option>
                                        <option value="2" name="quantity-change">2</option>
                                        <option value="3" name="quantity-change">3</option>
                                        <option value="4" name="quantity-change">4</option>
                                        <option value="5" name="quantity-change">5</option>
                                        <option value="6" name="quantity-change">6</option>
                                        <option value="7" name="quantity-change">7</option>
                                        <option value="8" name="quantity-change">8</option>
                                        <option value="9" name="quantity-change">9</option>
                                        <option value="10" name="quantity-change">10</option>
                                    </select>
                                </td>

                                <td v-if="item.type == 'trademark-registration'"></td>
                                <td v-else>{{value}} <span class="price"
                                                           :value="item.price">{{item.price * rate | fixPrice}}</span>
                                </td>

                                <td>{{value}} <span class="total">{{item.price * item.qty * rate | fixPrice}}</span>
                                </td>
                                <input type="hidden" class="itemPrice" :value="item.price * item.qty">
                            </tr>
                            <tr v-for="subItem in item.list" :data-product="subItem._id" :data-price="subItem.price">
                                <td>
                                    <button class="delete-product" name="button_id" :value="subItem._id"
                                            :data-price="subItem.price">
                                        <i class="fa fa-times" aria-hidden="true"></i></button>
                                    <a class="service-name" href="#">{{subItem.title}}</a></td>
                                <td>
                                    <select class="quantityUpdate num-items updateChild" :data-parrent="item._id"
                                            :data-id="subItem._id">
                                        <option :value="subItem.qty" :selected="subItem.qty" name="quantity-change"
                                                disabled>
                                            {{subItem.qty}}
                                        </option>
                                        <option value="1" name="quantity-change">1</option>
                                        <option value="2" name="quantity-change">2</option>
                                        <option value="3" name="quantity-change">3</option>
                                        <option value="4" name="quantity-change">4</option>
                                        <option value="5" name="quantity-change">5</option>
                                        <option value="6" name="quantity-change">6</option>
                                        <option value="7" name="quantity-change">7</option>
                                        <option value="8" name="quantity-change">8</option>
                                        <option value="9" name="quantity-change">9</option>
                                        <option value="10" name="quantity-change">10</option>
                                    </select>
                                </td>
                                <td>{{value}} <span class="price"
                                                    :value="subItem.price">{{subItem.price * rate | fixPrice}}</span>
                                </td>
                                <td>{{value}} <span
                                        class="total">{{subItem.price * subItem.qty * rate | fixPrice}}</span>
                                    <input type="hidden" class="itemPrice" :value="subItem.price * subItem.qty">

                                </td>
                            </tr>
                            </tbody>
                            <tr class="bg-gray">
                                <td class="text-right" colspan="4" style="padding:10px;font-size:24px !important;">
                                    Total :
                                    {{value}}<span
                                        id="the-total" data-price=""
                                        style="font-family: 'Oswald', sans-serif;"></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xs-12 pay-btn">
                        <div class="row">
                            <div class="col-md-6 payment-methods col-sm-12 col-xs-12">
                                <span>Payment methods </span>
                                <div class="sprite2 visa"></div>
                            </div>
                            <div class="col-md-6 check-out col-sm-12 col-xs-12">
                                <a class="btn btn-gray" href="/">Continue Shopping</a>
                                <a class="btn btn-green" href="/#/checkout/payment">Check Out
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-lg-12 col-xs-12"><h2>Your Cart is Empty.</h2></div>
                    <div class="here" style="height: 40px;"></div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>

    export default {
        data() {
            return {
                items: [],
                value: '',
                rate: ''
            }
        },
        mounted() {
            var vm = this;
            if (localStorage.getItem('cartItems')) {
                vm.items = JSON.parse(localStorage.getItem('cartItems'));
            } else {
                vm.items = false;
            }
            $(document).ready(function () {

                // currency change //
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
                //
                var sum = 0;
                $(".price").each(function () {
                    sum += +$(this).val();
                });
                $("#the-total").val(Math.trunc(sum * vm.rate));
                $("#the-total").attr('data-price', sum);
                var totalPrice = 0;
                if (totalPrice < 1) {
                    $("#the-total").html(0);
                    $("#the-total").attr('data-price', 0);
                }
                $('.itemPrice').each(function () {
                    totalPrice = parseFloat($(this).val()) + totalPrice;
                    $("#the-total").html(Math.trunc(totalPrice * vm.rate));
                    $("#the-total").attr('data-price', totalPrice);
                    if (totalPrice < 1) {
                        $("#the-total").html(0);
                        $("#total").attr('data-price', 0);
                    }
                });

                var inventory = JSON.parse(localStorage.getItem('cartItems'));
                $('.delete-product').click(function () {
                    var deleteProductById = $(this).val();
                    var itemPrice = $(this).attr('data-price');
                    var updatedList = inventory.filter(function (el) {
                        return el._id !== deleteProductById;
                    });
                    for (var i = 0; i < inventory.length; i++) {
                        if (inventory[i]._id == deleteProductById) {
                            localStorage.setItem('cartItems', JSON.stringify(updatedList));
                            vm.items.splice(i, 1);
                            break;
                        }
                    }

                    // find and remove vanila js
                    function findAndRemove(data, id) {
                        data.forEach(function (obj) {
                            if (obj.list) {
                                obj.list = obj.list.filter(function (o) {
                                    return o._id != id;
                                });
                            }
                        });
                    };

                    findAndRemove(updatedList, deleteProductById);
                    location.reload();

                    var updatedPrice = totalPrice - itemPrice;
                    $("#the-total").html(updatedPrice);
                    localStorage.setItem('cartItems', JSON.stringify(updatedList));

                });

                // update value //
                $(".updateItem").click(function () {
                    for (var i = 0; i < inventory.length; i++) {
                        if (inventory[i]['_id'] === $(this).attr('data-id')) {
                            inventory[i]['qty'] = Number($(this).val());
                        }
                        localStorage.setItem('cartItems', JSON.stringify(inventory));
                        console.log('done');
                    }
                });

                $(".updateChild").click(function () {
                    for (var i = 0; i < inventory.length; i++) {
                        if (inventory[i]['_id'] === $(this).attr('data-parrent')) {
                            var findChild = inventory[i].list;
                            for (var j = 0; j < findChild.length; j++) {
                                if (findChild[j]['_id'] === $(this).attr('data-id')) {
                                    findChild[j]['qty'] = Number($(this).val());
                                    inventory[i].list = findChild;
                                    localStorage.setItem('cartItems', JSON.stringify(inventory));
                                    console.log(inventory);
                                    location.reload();
                                    break;
                                }
                            }
                            break;
                        }
                    }
                });

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
    .territories {
        margin-left: 33px;
        font-size: 15px;
    }
</style>
