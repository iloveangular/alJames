<template>
    <div class="main-content" id="body">
        <main>
            <div class="banks-body">
                <main class="compnay-page">
                    <section class="informations">
                        <div class="block">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 col-xs-4 informations-block"><img
                                            src="src/assets/images/info.png"></div>
                                    <div class="col-md-6 col-xs-8 informations-block">
                                        <h2>Company Formation Worldwide</h2>
                                        <h4>Starting from $560</h4>
                                        <ul>
                                            <li>Available across 5 continents, in 50+ countries</li>
                                            <li>Corporate packages to start your business right away</li>
                                            <li>Company administration and expert legal support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <p class="step-text">Set up your New Company in 4 STEPS</p>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="step-img"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="panel-start">
                        <div class="container">
                            <div class="row">
                                <div class="panel">
                                    <div class="col-md-6">
                                        <h6 class="fnt-size-24 mob-fnt-size-21">Select your country formation</h6></div>
                                    <div class="col-md-6">
                                        <select class="no-margin height-45 brd-grey" name="category"
                                                onchange="navigateTo(this, 'window', false);">
                                            <option value="#">Select a Country</option>
                                            <option v-for="cp in companies"
                                                    :value="'/#/product/company-formation/' + cp.slug"
                                                    v-if="cp.kind == 'company-formation' && cp.country">
                                                {{ cp.country }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="locations">
                        <div class="container">
                            <div class="row">
                                <div class="panel">
                                    <div class="col-md-12 text-center">
                                        <h6 class="fnt-size-24 mob-fnt-size-21">
                                            Popular Company Formation Locations...</h6></div>
                                    <div class="row">
                                        <div v-for="cp in companies"
                                             v-if="cp.kind == 'company-formation' && cp.isPopular"
                                             class="col-md-6 remove-space"
                                             style="padding: 0 8px 0 0;">
                                            <div class="col-md-12 small-panel hidden-xs">
                                                <div class="col-md-6 lar-width-48">
                                                    <div class="left">
                                                        <img class="flg-sml" :src="cp.flagImageUrl"></div>
                                                    <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.country}}</span>
                                                </div>
                                                <div class="col-md-6 lar-width-48">
                                                    <div class="inl-block">
                                                        <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                                                            ${{cp.price}}</p>
                                                        <a class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn
                                                            More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="visible-xs">
                                                <div class="col-md-12 small-panel" style="cursor: pointer; cursor: hand;">
                                                    <div class="col-md-6 lar-width-48">
                                                        <div class="left">
                                                            <img class="flg-sml" :src="cp.flagImageUrl">
                                                        </div>
                                                        <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.country}}</span>
                                                    </div>
                                                    <div class="col-md-6 lar-width-48">
                                                        <div class="inl-block">
                                                            <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                                                                ${{cp.price}}</p><a
                                                                class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                                                                :href="'/#/product/company-formation/' + cp.slug">Learn
                                                            More</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="browse-companies">
                        <div class="container">
                            <div class="row">
                                <div class="panel-two">
                                    <div class="col-md-6 col-sm-6">
                                        <h6 class="fnt-size-24 mob-fnt-size-21">Browse Companies by Region</h6></div>
                                    <div class="col-md-6 col-sm-6 btn-hide">
                                        <a class="button-green" href="/companies/compare" title="Jurisdictions">
                                            <div class="inl-block mar-top-5"><span
                                                    class="fnt-oswald-medium fnt-size-21">Compare Companies</span>
                                                <div class="sprite1 magnify_green right mar-lf-10 mar-top-m-4"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-1"
                                             data-toggle="collapse" data-parrent="#accordion"
                                             data-target="#collapse1" aria-expanded="true">
                                            <h4 class="panel-title">Oceania & Pacific Islands</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse1" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Oceania & Pacific Islands'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Carribean -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-2"
                                             data-toggle="collapse" data-parrent="#accordion2"
                                             data-target="#collapse2" aria-expanded="true">
                                            <h4 class="panel-title">Caribbean</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse2" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Caribbean'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Europe -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-3"
                                             data-toggle="collapse" data-parrent="#accordion3"
                                             data-target="#collapse3" aria-expanded="true">
                                            <h4 class="panel-title">Europe</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse3" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Europe'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- North & South America -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-4"
                                             data-toggle="collapse" data-parrent="#accordion4"
                                             data-target="#collapse4" aria-expanded="true">
                                            <h4 class="panel-title">North & South America</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse4" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'North & South America'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Asia -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-5"
                                             data-toggle="collapse" data-parrent="#accordion5"
                                             data-target="#collapse5" aria-expanded="true">
                                            <h4 class="panel-title">Asia</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse5" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Asia'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Africa -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-6"
                                             data-toggle="collapse" data-parrent="#accordion6"
                                             data-target="#collapse6" aria-expanded="true">
                                            <h4 class="panel-title">Africa</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse6" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Africa'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Middle East -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading accordion-toggle" id="accordion-toggle-7"
                                             data-toggle="collapse" data-parrent="#accordion7"
                                             data-target="#collapse7" aria-expanded="true">
                                            <h4 class="panel-title">Middle East</h4>
                                        </div>
                                        <div class="panel-collapse collapse" id="collapse7" aria-expanded="true"
                                             style="">
                                            <div class="panel-body">
                                                <table class="width-100 brd-none" style="width: 100%">
                                                    <tbody></tbody>
                                                    <tr v-for="cp in companies"
                                                        v-if="cp.kind == 'company-formation' && cp.region == 'Middle East'">
                                                        <td class="country lar-width-60">
                                                            <div class="hide-for-small-down left mar-top-7">
                                                                <img class="flg-sml" :src="cp.flagImageUrl">
                                                            </div>
                                                            <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                                                                <h3 class="fnt-size-21 no-margin ln-h-12">
                                                                    <span>{{cp.country}}</span></h3>
                                                                <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12">
                                                                    <span>{{cp.title}}</span></h3>
                                                            </div>
                                                        </td>
                                                        <td class="text-center mob-width-45">
                                                            <div class="inl-block right">
                                                                <div class="left mar-rgh-20 mob-mar-rgh-0">
                                                                    <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                                                        ${{cp.price}}</p>
                                                                    <div class="mar-top-10 show-for-small-only width-100 text-right">
                                                                        <a class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                                                           v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                    </div>
                                                                </div>
                                                                <div class="right">
                                                                    <a class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                                                                       v-bind:href="'/#/product/company-formation/' + cp.slug">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 btn-show" style="display: none;">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="tabbing-verticallay tabbing-banks-verticallay">
                        <div class="container">
                            <div class="row">
                                <h1>Everything you need to know</h1>
                                <div class="tab">
                                    <button class="tablinks active" id="defaultOpen"
                                            onclick="openCity(event, 'London')">Our services include
                                    </button>
                                    <button class="tablinks" onclick="openCity(event, 'Paris')">Documents Required
                                    </button>
                                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Business Activities
                                    </button>
                                    <button class="tablinks" onclick="openCity(event, 'Tokyo2')">Shipping Cost</button>
                                </div>
                                <div class="tabcontent" id="London" style="display: block;">
                                    <div>
                                        <p>Our standard services include</p>
                                        <ul>
                                            <li>Name check and approval;</li>
                                            <li>Filling the incorporation documents with the Registrar of Companies;
                                            </li>
                                            <li>A standard set of original corporate documents;</li>
                                            <li>Payment of the Government Fee for one year;</li>
                                            <li>Provision of registered agent and registered address for one year.</li>
                                            <li>Provision of company secretary for one year;</li>
                                            <li>Rubber stamp;</li>
                                            <li>A standard set of original corporate documents;</li>
                                            <li>Certificate of Incorporation;</li>
                                            <li>Memorandum &amp; Articles of Association;</li>
                                            <li>Appointment of First Directors;</li>
                                            <li>Consent Actions of the Board of Directors;</li>
                                            <li>Share Certificates;</li>
                                            <li>Register of Directors and Members;</li>
                                        </ul>
                                        <p>
                                            Please note that the above services and documents may vary, depending on legal structure and jurisdiction chosen.
                                        </p>
                                    </div>
                                </div>
                                <div class="tabcontent" id="Paris" style="display: none;">
                                    <div>
                                        <p>
                                            Please provide the following documents for all Directors, Shareholders, Beneficial Owners, Authorized Signatories:</p>
                                        <ul>
                                            <li><strong>Notarized copy of valid passport.</strong>
                                                The passport must be signed and signature must match the signature in the application form. The photograph must be clear and of good quality.
                                            </li>
                                            <li>
                                                <strong>Original or Certified copy of utility bill / bank statement</strong>
                                                (as verification of residential address, dated within 3 months); the household utility bill (e.g. gas, electricity, water or fixed line telephone but <strong>not a mobile phone bill</strong>) or bank, building society or credit card statement as proof of address. It must be no more than 3 months old and show your name and current address. P.O. Box is not accepted.
                                            </li>
                                            <li><strong>Original or certified copy of Banker's reference letter</strong>
                                                (dated within 3 months). You can request the Reference Letter from the bank where you hold an account. The reference letter should include confirmation that the relationship has been maintain for longer than 2 years and the business affairs are run satisfactorily.
                                            </li>
                                            <li><strong>In cases where shareholders and/or directors are corporate bodies, full apostilled set of corporate documents will be required:</strong>
                                                Certificate of Incorporation, List of Directors, Shareholders, Secretary, Share Certificate, copy of 'Declaration of Trust' between nominee shareholder(s) and ultimate beneficial owner(s) (if applicable), Certificate of Good Standing (if the company has been operating for 12 months or more); Notarized copy of a valid passport, utility bill and the reference letter for each individual Director, Shareholder and Beneficial Owner.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tabcontent" id="Tokyo" style="display: none;">
                                    <section class="content pad-0 active" id="panel2-3" role="tabpanel"
                                             aria-hidden="false">
                                        <p>
                                            We operate across a wide range of business activities however, several types of businesses currently are not approved by Agent Legal.</p>
                                        <p><strong>Licensable Activities:</strong>
                                            If you conduct any activity without required license or authorization granted by a relevant authority in any jurisdiction, Agent Legal will not be able to assist you with the or bank account opening related to such unlicensed activity.
                                        </p>
                                        <p>
                                            Licensable activities include, but not limited to: provision of financial services involving trading/brokerage in foreign exchange, financial and commodity-based derivative instruments and other securities; offering investment advice to public; insurance and banking business; operation and administration of collective investment schemes and mutual funds; payment processing services; money exchange, money transmission or money brokering; asset management; safe custody services; gaming, gambling and lotteries.</p>
                                        <p><strong>Please <a href="mailto:support@agentlegal.com">contact us</a>
                                            if you need our assistance in
                                            licensing
                                            of
                                            your financial, Forex brokerage or gambling company.</strong></p>
                                        <p>
                                            The following categories of businesses are prohibited from using Agent Legal services:</p>
                                        <ul>
                                            <li>
                                                Any illegal or criminal activities or individuals that black listed under the laws of any country;
                                            </li>
                                            <li>
                                                Trade, distribution or manufacturing of arms, weapons, munitions, mercenary or contract soldiering;
                                            </li>
                                            <li>
                                                Any device that could lead to the abuse of human rights or be utilized for torture;
                                            </li>
                                            <li>Technical surveillance or bugging equipment or industrial espionage;
                                            </li>
                                            <li>
                                                Dangerous or hazardous biological, chemical or nuclear materials including equipment or machinery used to manufacture, handle or dispose of such materials;
                                            </li>
                                            <li>
                                                Human or animal organs, the abuse of animals or use of animals for any scientific or product testing;
                                            </li>
                                            <li>Genetic material;</li>
                                            <li>
                                                Adoption agencies, including surrogate motherhood; the abuse of human rights;
                                            </li>
                                            <li>Pornography;</li>
                                            <li>Drug paraphernalia;</li>
                                            <li>Pyramid sales;</li>
                                            <li>Religious cults and their charities;</li>
                                            <li>
                                                Business activities, which by the laws and regulations of the country of formation of the Entity are subject to licensing and which are conducted without obtainment of a license;
                                            </li>
                                            <li>
                                                Any other activity, which, in the opinion of Agent Legal, may damage the reputation of Agent Legal or that of the country of formation of the Entity.
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div class="tabcontent" id="Tokyo2" style="display: none;">
                                    <div>
                                        <p>
                                            Shipping of corporate documents or banking kits to your destination requires an extra charge and will be automatically added to the invoice during checkout. Shipping costs for international courier services are set automatically and can vary from USD 75 to USD 95. The fees depend on the jurisdiction of your ordered company, the country where the bank is based as well as your destination country.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="tabbing-verticallay tabbing-verticallay-mobile" style="display: none;">
                        <div class="container">
                            <h1>Everything you need to know</h1>
                            <div class="panel-group" id="accordion1">
                                <div class="panel panel-default">
                                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse"
                                         data-parent="#accordion1" data-target="#collapse-08" aria-expanded="false">
                                        <h4 class="panel-title">Our services include</h4></div>
                                    <div class="panel-collapse collapse" id="collapse-08" aria-expanded="false"
                                         style="height: 0px;">
                                        <div class="panel-body">
                                            <div class="tabcontent1" id="London" style="display: block !important;">
                                                <div>
                                                    <p>Our standard services include</p>
                                                    <ul>
                                                        <li>Name check and approval;</li>
                                                        <li>
                                                            Filling the incorporation documents with the Registrar of Companies;
                                                        </li>
                                                        <li>A standard set of original corporate documents;</li>
                                                        <li>Payment of the Government Fee for one year;</li>
                                                        <li>
                                                            Provision of registered agent and registered address for one year.
                                                        </li>
                                                        <li>Provision of company secretary for one year;</li>
                                                        <li>Rubber stamp;</li>
                                                        <li>A standard set of original corporate documents;</li>
                                                        <li>Certificate of Incorporation;</li>
                                                        <li>Memorandum &amp; Articles of Association;</li>
                                                        <li>Appointment of First Directors;</li>
                                                        <li>Consent Actions of the Board of Directors;</li>
                                                        <li>Share Certificates;</li>
                                                        <li>Register of Directors and Members;</li>
                                                    </ul>
                                                    <p>
                                                        Please note that the above services and documents may vary, depending on legal structure and jurisdiction chosen.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse"
                                         data-parent="#accordion1" data-target="#collapse-09" aria-expanded="false">
                                        <h4 class="panel-title">Documents Required</h4></div>
                                    <div class="panel-collapse collapse" id="collapse-09" aria-expanded="false">
                                        <div class="panel-body">
                                            <div class="tabcontent1" id="Paris">
                                                <div>
                                                    <p>
                                                        Please provide the following documents for all Directors, Shareholders, Beneficial Owners, Authorized Signatories:</p>
                                                    <ul>
                                                        <li><strong>Notarized copy of valid passport.</strong>
                                                            The passport must be signed and signature must match the signature in the application form. The photograph must be clear and of good quality.
                                                        </li>
                                                        <li><strong>Original or Certified copy of utility bill / bank statement</strong>
                                                            (as verification of residential address, dated within 3 months); the household utility bill (e.g. gas, electricity, water or fixed line telephone but <strong>not a mobile phone bill</strong>) or bank, building society or credit card statement as proof of address. It must be no more than 3 months old and show your name and current address. P.O. Box is not accepted.
                                                        </li>
                                                        <li><strong>Original or certified copy of Banker's reference letter</strong>
                                                            (dated within 3 months). You can request the Reference Letter from the bank where you hold an account. The reference letter should include confirmation that the relationship has been maintain for longer than 2 years and the business affairs are run satisfactorily.
                                                        </li>
                                                        <li><strong>In cases where shareholders and/or directors are corporate bodies, full apostilled set of corporate documents will be required:</strong>
                                                            Certificate of Incorporation, List of Directors, Shareholders, Secretary, Share Certificate, copy of 'Declaration of Trust' between nominee shareholder(s) and ultimate beneficial owner(s) (if applicable), Certificate of Good Standing (if the company has been operating for 12 months or more); Notarized copy of a valid passport, utility bill and the reference letter for each individual Director, Shareholder and Beneficial Owner.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse"
                                         data-parent="#accordion1" data-target="#collapse-10" aria-expanded="false">
                                        <h4 class="panel-title">Business Activities</h4></div>
                                    <div class="panel-collapse collapse" id="collapse-10" aria-expanded="false">
                                        <div class="panel-body">
                                            <div class="tabcontent1" id="Tokyo">
                                                <section class="content pad-0 active" id="panel2-3" role="tabpanel"
                                                         aria-hidden="false">
                                                    <p>
                                                        We operate across a wide range of business activities however, several types of businesses currently are not approved by Agent Legal.</p>
                                                    <p><strong>Licensable Activities:</strong>
                                                        If you conduct any activity without required license or authorization granted by a relevant authority in any jurisdiction, Agent Legal will not be able to assist you with the or bank account opening related to such unlicensed activity.
                                                    </p>
                                                    <p>
                                                        Licensable activities include, but not limited to: provision of financial services involving trading/brokerage in foreign exchange, financial and commodity-based derivative instruments and other securities; offering investment advice to public; insurance and banking business; operation and administration of collective investment schemes and mutual funds; payment processing services; money exchange, money transmission or money brokering; asset management; safe custody services; gaming, gambling and lotteries.</p>
                                                    <p><strong>Please <a
                                                            href="mailto:support@agentlegal.com">contact us</a>
                                                        if you need our assistance in
                                                        licensing
                                                        of
                                                        your financial, Forex brokerage or gambling company.</strong>
                                                    </p>
                                                    <p>
                                                        The following categories of businesses are prohibited from using Agent Legal services:</p>
                                                    <ul>
                                                        <li>
                                                            Any illegal or criminal activities or individuals that black listed under the laws of any country;
                                                        </li>
                                                        <li>
                                                            Trade, distribution or manufacturing of arms, weapons, munitions, mercenary or contract soldiering;
                                                        </li>
                                                        <li>
                                                            Any device that could lead to the abuse of human rights or be utilized for torture;
                                                        </li>
                                                        <li>
                                                            Technical surveillance or bugging equipment or industrial espionage;
                                                        </li>
                                                        <li>
                                                            Dangerous or hazardous biological, chemical or nuclear materials including equipment or machinery used to manufacture, handle or dispose of such materials;
                                                        </li>
                                                        <li>
                                                            Human or animal organs, the abuse of animals or use of animals for any scientific or product testing;
                                                        </li>
                                                        <li>Genetic material;</li>
                                                        <li>
                                                            Adoption agencies, including surrogate motherhood; the abuse of human rights;
                                                        </li>
                                                        <li>Pornography;</li>
                                                        <li>Drug paraphernalia;</li>
                                                        <li>Pyramid sales;</li>
                                                        <li>Religious cults and their charities;</li>
                                                        <li>
                                                            Business activities, which by the laws and regulations of the country of formation of the Entity are subject to licensing and which are conducted without obtainment of a license;
                                                        </li>
                                                        <li>
                                                            Any other activity, which, in the opinion of Agent Legal, may damage the reputation of Agent Legal or that of the country of formation of the Entity.
                                                        </li>
                                                    </ul>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse"
                                         data-parent="#accordion1" data-target="#collapse-11" aria-expanded="false">
                                        <h4 class="panel-title">Shipping Cost</h4></div>
                                    <div class="panel-collapse collapse" id="collapse-11" aria-expanded="false">
                                        <div class="panel-body">
                                            <div class="tabcontent1" id="Tokyo2">
                                                <div>
                                                    <p>
                                                        Shipping of corporate documents or banking kits to your destination requires an extra charge and will be automatically added to the invoice during checkout. Shipping costs for international courier services are set automatically and can vary from USD 75 to USD 95. The fees depend on the jurisdiction of your ordered company, the country where the bank is based as well as your destination country.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </main>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                companies: []
            }
        },
        mounted() {
            var vm = this;
            axios.get('http://localhost:3000/api/companies')
                .then(function (response) {
                    console.log(response.data);
                    vm.companies = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>