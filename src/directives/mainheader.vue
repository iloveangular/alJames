<template>
    <header>
        <nav class="desktop">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <ul class="menu">
                            <li class="logo">
                                <a href="/#/"><img src="src/assets/images/logo.png"></a>
                            </li>
                            <li class="dropdown hover">
                                <a href="#" data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle">Services
                                    <i aria-hidden="true" class="fa fa-chevron-down"></i></a>
                                <ul class="dropdown-menu service-menu">
                                    <li><a href="/#/companies">Company Formation</a></li>
                                    <li><a href="/#/banks">Bank Account Opening</a></li>
                                    <li><a href="/#/trademarks">Trademarks</a></li>
                                    <li><a href="/#/niche-services">Niche Services</a></li>
                                </ul>
                            </li>
                            <li><a href="/#/packages">Start Up Packs</a></li>
                            <li><a href="/#/documents">Templates</a></li>
                            <li><a href="/#/offers">Offers</a></li>
                            <li v-if="username"><a href="/#/orders">My Orders</a></li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <ul class="shop-header">
                            <li class="exchange">
                                <select class="changeCurrency">
                                    <option class="usd" value="USD" name="$">USD</option>
                                    <option class="eur" value="EUR" name="€">EUR</option>
                                    <option class="gbp" value="GBP" name="£">GBP</option>
                                    <option class="cny" value="CNY" name="¥">CNY</option>
                                </select>
                            </li>
                            <li>
                                <a href="/#/cart"><i class="fa fa-shopping-cart">
                                    <div id="count">{{cartItems}}</div>
                                </i>
                                </a>
                            </li>
                            <li v-if="username"><i class="fa fa-user"><a v-on:click="signOut" class="signOutSpan">Hi
                                {{username}}</a></i></li>
                            <li v-else>
                                <a href="/#/login"><i class="fa fa-user"></i> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="mobile">
            <button class="menu-bar"><i class="fa fa-bars"></i></button>
            <div v-on:click="hideMenu();" class="logo">
                <a href="/#/"><span><img src="src/assets/images/logo.png"></span>
                </a>
            </div>
            <div v-on:click="hideMenu();" class="cart-mobile">
                <a href="/#/cart">
                    <i class="fa fa-shopping-cart">
                        <div id="count-mobile">0</div>
                    </i>
                </a>
            </div>
            <div class="menu">
                <ul>
                    <li class="logo" v-on:click="hideMenu();"><img src="src/assets/images/logo.png"></li>
                        <li><label>Account</label></li>
                        <li v-on:click="hideMenu();"><a href="/#/login">Login</a></li>
                        <li class="currency">
                            <span>Currency</span>
                                <select class="changeCurrency2">
                                <option value="USD" name="$" class="usd" selected="selected" v-on:click="hideMenu();">USD</option>
                                <option value="EUR" name="€" class="eur" v-on:click="hideMenu();">EUR</option>
                                <option value="GBP" name="£" class="gbp" v-on:click="hideMenu();">GBP</option>
                                <option value="CNY" name="¥" class="cny" v-on:click="hideMenu();">CNY</option>
                            </select>
                        </li>
                    <li>Navigate</li>
                    <li v-on:click="hideMenu();"><a href="#">Services</a>
                        <ul class="list-with-ticks">
                            <li v-on:click="hideMenu();"><a href="/#/companies"><span> &gt; </span><span>Company Formation</span></a></li>
                            <li v-on:click="hideMenu();"><a href="/#/banks"><span> &gt; </span><span>Bank Account Opening</span></a></li>
                            <li v-on:click="hideMenu();"><a href="/#/trademarks"><span> &gt; </span><span>Trademarks</span></a></li>
                            <li v-on:click="hideMenu();"><a href="/#/niche-services"><span> &gt; </span><span>Niche Services</span></a></li>
                        </ul>
                    </li>
                    <li v-on:click="hideMenu();"><a href="/#/packages">Start Up Packs</a></li>
                    <li v-on:click="hideMenu();"><a href="/#/documents">Templates</a></li>
                    <li v-on:click="hideMenu();"><a href="/#/offers">Offers</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                username: '',
                cartItems: '',
                signOut: function () {
                    var vm = this;
                    localStorage.removeItem('token');
                    location.reload();
                    location.href('/#/');
                },
                hideMenu: function () {
                    $(".left-menu-block").removeClass('left-menu-left');
                    $(".main-content-right").removeClass('main-content-right');
                    $(".mobile .menu").removeClass('move-menu');
                    $(".mobile").removeClass('move');
                }

            }
        },
        mounted() {
            var vm = this;

            // Currency Change
            $.ajax({
                type: "GET",
                url: "https://api.fixer.io/latest?base=USD",
                data: {},
                success: function (result) {
                    localStorage.setItem('euroValue', result.rates.EUR);
                    localStorage.setItem('gbpValue', result.rates.GBP);
                    localStorage.setItem('cnyValue', result.rates.CNY);
                },
                error: function (x, e) {
                    console.log(e);
                }
            });

            //
            $(document).ready(function () {
                $(".menu-bar").click(function () {
                    $(".mobile .menu").toggleClass("move-menu");
                    $(".mobile").toggleClass("move");
                })
            });
            if (localStorage.getItem('cartItems')) {
                vm.cartItems = JSON.parse(localStorage.getItem('cartItems')).length;
                $("#count-mobile").html(vm.cartItems);
            } else {
                vm.cartItems = 0;
                $("#count-mobile").html(0);
            }
            $(".changeCurrency").change(function () {
                localStorage.setItem('currency', $(this).val());
                if ($(this).val() == 'USD') {
                    localStorage.setItem('currencySign', '$');
                } else if ($(this).val() == 'EUR') {
                    localStorage.setItem('currencySign', '€');
                } else if ($(this).val() == 'GBP') {
                    localStorage.setItem('currencySign', '£');
                } else if ($(this).val() == 'CNY') {
                    localStorage.setItem('currencySign', '¥');
                } else {
                    console.log('hi');
                }
                location.reload();
            });
            $('.changeCurrency').find('option').each(function () {
                if (!localStorage.getItem('currency')) {
                    localStorage.setItem('currency', 'USD')
                }
                ;
                var currency = localStorage.getItem('currency');
                var $this = $(this);
                if ($this.text() == currency) {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
            $('.changeCurrency2').find('option').each(function () {
                if (!localStorage.getItem('currency')) {
                    localStorage.setItem('currency', 'USD')
                }
                ;
                var currency = localStorage.getItem('currency');
                var $this = $(this);
                if ($this.text() == currency) {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
            $(".changeCurrency2").change(function () {
                localStorage.setItem('currency', $(this).val());
                if ($(this).val() == 'USD') {
                    localStorage.setItem('currencySign', '$');
                } else if ($(this).val() == 'EUR') {
                    localStorage.setItem('currencySign', '€');
                } else if ($(this).val() == 'GBP') {
                    localStorage.setItem('currencySign', '£');
                } else if ($(this).val() == 'CNY') {
                    localStorage.setItem('currencySign', '¥');
                } else {
                    console.log('hi');
                }
                location.reload();
            });
            if (localStorage.getItem('token')) {
                $.ajax({
                    url: config.url + 'token',
                    type: 'POST',
                    data: {
                        'token': localStorage.getItem('token'),
                    },
                    success: function (data) {
                        if (data.session == true) {
                            vm.username = data.username;
                        } else {
                            vm.username = false;
                        }
                    }
                })
            }
        }
    }
</script>
