<template>
    <div class="main-content-overflow">
        <aside class="left-menu left-menu-block" style="display: none;">
            <div class="nav-menu no-border">
                <ul>
                    <li class="left-menu-search"><img src="src/assets/images/logo.png" style="width: 154px;"></li>
                    <div class="show-for-small-only" style="display: none;">
                        <li>
                            <label>Account</label>
                        </li>
                        <li><a href="/#/login">Login</a></li>
                        <li class="brd-bottom-menu" style="padding:10px 8px 5px 10px;">
                            <div class="inl-block width-100"><span class="left mar-top-5">Currency</span>
                                <select style="position:relative;top:-5px;">
                                    <form id="SelectCurrFormOffCanvas" class="fnt-cond-light no-margin width-18 right brd-none" name="changeCurrency">
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        <option value="CNY">CNY</option>
                                    </form>
                                </select>
                            </div>
                        </li>
                    </div>
                    <li class="left-menu-title">Navigate</li>
                    <li class="cursor-point"><a href="#">Services</a>
                        <ul class="list-with-ticks">
                            <li>
                                <a href="/#/companies">
                                    <span class="mar-rgh-10"> > </span><span>Company Formation</span>
                                </a>
                            </li>
                            <li><a href="/#/banks"><span class="mar-rgh-10"> > </span><span>Bank Account Opening</span></a>
                            </li>
                            <li><a href="/#/trademarks"><span class="mar-rgh-10"> > </span><span>Trademarks</span></a>
                            </li>
                            <li><a href="/#/niche-services"><span
                                    class="mar-rgh-10"> > </span><span>Niche Services</span></a>
                            </li>
                        </ul>
                    </li>
                    <li class="cursor-point"><a href="/#/packages">Start Up Packs</a></li>
                    <li class="cursor-point"><a href="/#/documents">Templates</a></li>
                    <li class="cursor-point"><a href="/#/offers">Offers</a></li>
                </ul>
            </div>
        </aside>
        <!-- *********************-->
        <!-- Desktop menu-->
        <!-- *********************-->
        <div class="main-content">
            <header>
                <nav>
                    <div class="dekstop-hide">
                        <button class="menu-bar-home"><span></span><span></span><span></span></button>
                        <div class="logo-mb"><a href="/#/"><span><img src="src/assets/images/logo.png"
                                                                      style="width: 154px;padding-top: 7px;"></span></a>
                        </div>
                    </div>
                    <div class="container">
                        <div class="menu">
                            <ul>
                                <li class="logo">
                                    <a href="/#/"><img src="src/assets/images/logo.png" style="width: 154px;"></a>
                                </li>
                                <li class="dropdown div-hover">
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">Services
                                        <i class="fa fa-chevron-down" aria-hidden="true" style="margin-left: 10px;"></i>
                                    </a>
                                    <ul class="dropdown-menu service-menu">
                                        <li><a href="/#/companies">Company Formation</a></li>
                                        <li><a href="/#/banks">Bank Account Opening</a></li>
                                        <li><a href="/#/trademarks">Trademarks</a></li>
                                        <li><a href="/#/niche-services">Niche Services</a></li>
                                    </ul>
                                </li>
                                <li class="null"><a href="/#/packages">Start Up Packs</a></li>
                                <li class="null"><a href="/#/documents">Templates</a></li>
                                <li class="null"><a href="/#/offers">Offers</a></li>
                            </ul>
                        </div>
                        <div class="shop-header">
                            <ul>
                                <li>
                                    <select id="changeCurrency">
                                        <option value="USD" selected>USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        <option value="CNY">CNY</option>
                                    </select>
                                </li>
                                <li><a href="/#/cart"><i class="fa fa-shopping-cart">
                                    <div id="count">0</div>
                                </i></a></li>
                                <li><i class="fa fa-user"></i><a href="#"><a href="/#/login">Login</a></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>