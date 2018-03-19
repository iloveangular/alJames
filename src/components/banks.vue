<template>
  <div class="banks-body">
    <main class="compnay-page backs-page">
      <section class="informations">
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-xs-4 informations-block"><img src="src/assets/images/info.png"></div>
              <div class="col-md-6 col-xs-8 informations-block">
                <h2>Bank Account Opening</h2>
                <h4>Starting from {{value}}{{bankAccount * rate | fixPrice}}</h4>
                <ul>
                  <li>Available across 5 continents with 40+ banks</li>
                  <li>Assistance with international bank account opening</li>
                  <li>Banking solutions for your personal and business needs</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <p class="step-text">Set up your New Bank Account in 4 STEPS</p>
              </div>
              <div class="col-md-8">
                <div class="step-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="locations">
        <div class="container">
          <div class="row">
            <div class="panel">
              <div class="row">
                <div class="col-md-6 text-center">
                  <h6 class="fnt-size-24 mob-fnt-size-21">Popular Corporate Bank Accounts</h6>
                  <div class="col-md-12 remove-space" v-for="cp in banks"
                       v-if="cp.isPopular && cp.description == 'Corporate Account'" style="padding: 0 8px 0 0;">
                    <div class="col-md-12 small-panel hidden-xs">
                      <div class="col-md-6 lar-width-48">
                        <div class="left"><img class="flg-sml" :src="cp.image.url"></div>
                        <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.name}}</span></div>
                      <div class="col-md-6 lar-width-48">
                        <div class="inl-block">
                          <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                            {{value}}{{cp.price * rate | fixPrice}}</p><a
                          class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                          :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                          More</a></div>
                      </div>
                    </div>
                    <div class="visible-xs">
                      <div class="col-md-12 small-panel" style="cursor: pointer; cursor: hand;">
                        <div class="col-md-6 lar-width-48">
                          <div class="left"><img class="flg-sml" :src="cp.image.url"></div>
                          <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.name}}</span></div>
                        <div class="col-md-6 lar-width-48">
                          <div class="inl-block">
                            <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                              {{value}}{{cp.price * rate | fixPrice}}</p><a
                            class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                            :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                            More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-center">
                  <h6 class="fnt-size-24 mob-fnt-size-21">Popular Personal Bank Accounts </h6>
                  <div class="col-md-12 remove-space" v-for="cp in banks"
                       v-if="cp.isPopular && cp.description == 'Personal Account'" style="padding: 0 8px 0 0;">
                    <div class="col-md-12 small-panel hidden-xs">
                      <div class="col-md-6 lar-width-48">
                        <div class="left"><img class="flg-sml" :src="cp.image.url"></div>
                        <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.name}}</span></div>
                      <div class="col-md-6 lar-width-48">
                        <div class="inl-block">
                          <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                            {{value}}{{cp.price * rate | fixPrice}}</p><a
                          class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                          :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                          More</a></div>
                      </div>
                    </div>
                    <div class="visible-xs">
                      <div class="col-md-12 small-panel" style="cursor: pointer; cursor: hand;">
                        <div class="col-md-6 lar-width-48">
                          <div class="left"><img class="flg-sml" :src="cp.image.url"></div>
                          <span class="left pad-lf-10 fnt-cond-light fnt-size-21 company-span">{{cp.name}}</span></div>
                        <div class="col-md-6 lar-width-48">
                          <div class="inl-block">
                            <p class="fnt-size-21 fnt-oswald-medium no-margin mar-top-10 mar-rgh-20 left">
                              {{value}}{{cp.price * rate | fixPrice}}</p><a
                            class="button green small text-center pad-tb-3-lr-20 left hide-for-small-only"
                            :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                            More</a></div>
                        </div>
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
                <h6 class="fnt-size-24 mob-fnt-size-21">Browse Banks by Region</h6></div>
              <div class="col-md-6 col-sm-6 btn-hide">
                <a class="button-green" href="/banks/compare" title="Jurisdictions">
                  <div class="inl-block mar-top-5"><span class="fnt-oswald-medium fnt-size-21">Compare Banks</span>
                    <div class="sprite1 magnify_green right mar-lf-10 mar-top-m-4"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="panel-group" id="accordion">
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-1" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse1" aria-expanded="false">
                  <h4 class="panel-title">Europe</h4></div>
                <div class="panel-collapse collapse" id="collapse1" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Europe'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Middle East -->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-2" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse2" aria-expanded="false">
                  <h4 class="panel-title">Middle East</h4>
                </div>
                <div class="panel-collapse collapse" id="collapse2" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Middle East'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Oceania & Pacific Islands -->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-3" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse3" aria-expanded="false">
                  <h4 class="panel-title">Oceania & Pacific Islands</h4>
                </div>
                <div class="panel-collapse collapse" id="collapse3" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Oceania & Pacific Islands'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Africa -->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-4" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse4" aria-expanded="false">
                  <h4 class="panel-title">Africa</h4>
                </div>
                <div class="panel-collapse collapse" id="collapse4" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Africa'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Asia -->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-5" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse5" aria-expanded="false">
                  <h4 class="panel-title">Asia</h4>
                </div>
                <div class="panel-collapse collapse" id="collapse5" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Asia'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Caribbean -->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-6" data-toggle="collapse"
                     data-parent="#accordion" data-target="#collapse6" aria-expanded="false">
                  <h4 class="panel-title">Caribbean</h4>
                </div>
                <div class="panel-collapse collapse" id="collapse6" aria-expanded="false" style="height: 0px;">
                  <div class="panel-body">
                    <table class="width-100 brd-none" style="width: 100%;">
                      <tbody>
                      <tr v-for="cp in banks" v-if="cp.region == 'Caribbean'">
                        <td class="country lar-width-60">
                          <div class="hide-for-small-down left mar-top-7"><img class="flg-mdl" :src="cp.image.url">
                          </div>
                          <div class="left pad-lf-20 fnt-cond-light fnt-size-21 mob-pad-0 ln-h-22">
                            <h3 class="fnt-size-21 no-margin ln-h-12"><span>{{cp.name}}</span></h3>
                            <h3 class="fnt-size-19 clr-l-grey no-margin ln-h-12"><span>{{cp.name}}</span></h3></div>
                        </td>
                        <td class="text-center mob-width-45">
                          <div class="inl-block right">
                            <div class="left mar-rgh-20 mob-mar-rgh-0">
                              <p class="fnt-size-21 mob-fnt-size-21 fnt-oswald-medium no-margin mar-top-10">
                                {{value}}{{cp.price * rate | fixPrice}}</p>
                              <div class="mar-top-10 show-for-small-only width-100 text-right"><a
                                class="clr-green fnt-oswald-light fnt-size-14 text-left"
                                :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                                More</a></div>
                            </div>
                            <div class="right"><a
                              class="button fnt-size-21 fnt-oswald-medium green hide-for-small-only width-155 pad-tb-3-lr-15"
                              :href="'/#/product/company-formation/bank/' + cp.slug">Learn
                              More</a></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tabbing-verticallay tabbing-banks-verticallay">
        <div class="container">
          <div class="row">
            <h1>Everything you need to know</h1>
            <div class="tab">
              <button class="tablinks active" id="defaultOpen" onclick="openCity(event, 'RequirementsTab')">Our Services
                and Requirements
              </button>
              <button class="tablinks" onclick="openCity(event, 'IndividualsTab')">Check-list for individuals</button>
              <button class="tablinks" onclick="openCity(event, 'CompaniesTab')">Check-list for companies</button>
              <button class="tablinks" onclick="openCity(event, 'BActivitiesTab')">Business Activities</button>
              <button class="tablinks" onclick="openCity(event, 'ShippingCostTab')">Shipping Cost</button>
            </div>
            <div class="tabcontent" id="RequirementsTab" style="display: block;">
              <div>
                <p>Agent Legal has built up a strong association with international banks in over 50 different
                  jurisdictions. We believe that Agent Legal offers the best combination of service, pricing and
                  quality, with no hidden costs.</p>
                <p>Bank accounts opening procedure includes:</p>
                <ul>
                  <li>Verifying personal &amp; corporate documentation.</li>
                  <li>Completion of the bank forms which will be forwarded to you for signing with relevant
                    instructions.
                  </li>
                  <li>Sending the full package to the bank for final approval.</li>
                  <li>Monitoring the account opening process until account allocation and banking package is received.
                  </li>
                </ul>
                <p><b>PLEASE NOTE:</b></p>
                <p>The prices listed on our website for the assistance of bank account opening are the professional fees
                  only and do not cover any bank charges and commissions for account maintenance or transactions.</p>
                <p>Our professional fees are stated for companies which business activities do not require professional
                  licensing and regulation (e.g. trading, holding, service or real estate companies, etc.). If you own a
                  financial company dealing with third-party funds (e.g. Forex brokerage) or any other company licensed
                  and regulated by the recognized government authority, please contact us for a quote.</p>
                <p>We are unable to assist with the bank account opening for citizens of the following countries <a
                  href="#" data-reveal-id="countries" data-toggle="modal" data-target="#countries">Click here</a>.</p>
                <p>If you are looking to open a bank account in the particular country or the bank, please contact as by
                  e-mail <a href="mailto:support@agentlegal.com">support@agentlegal.com</a> or call 800.301.0052.</p>
                <p>Banks are entitled at their sole discretion to accept or reject applications to open an account, as
                  such we will introduce you to the bank and guide you through the whole account opening process;
                  however we cannot guarantee that your account will be approved by the bank and successfully
                  opened.</p>
              </div>
            </div>
            <div class="tabcontent" id="IndividualsTab" style="display: none;">
              <div>
                <h6>REQUIREMENTS FOR OPENING AN INDIVIDUAL BANK ACCOUNT</h6>
                <p>Please provide the following documents for all Authorized Signatories:</p>
                <ul>
                  <li>Notarized copy of valid passport</li>
                  <li>Original or Certified copy of utility bill / bank statement (must not be older than 3 months).
                  </li>
                  <li>Original or certified copy of Banker's reference letter (must not be older than 3 months).</li>
                  <li>An Application Form</li>
                  <li>Personal CV</li>
                </ul>
                <hr class="gray">
                <p>PLEASE NOTE:</p>
                <ul>
                  <li>Documents that are not in English must be accompanied by a certified translation.</li>
                  <li>Once all documentation is available please email electronic copies to our representative for
                    review; incomplete or unexecuted forms can create delays in the account opening process.
                  </li>
                </ul>
              </div>
            </div>
            <div class="tabcontent" id="CompaniesTab" style="display: none;">
              <div>
                <h6>REQUIREMENTS FOR OPENING A CORPORATE BANK ACCOUNT</h6>
                <p>For the Company:</p>
                <p>A&nbsp;set of legalized company documents consisting of:</p>
                <ul>
                  <li>Certificate of Incorporation</li>
                  <li>Memorandum and Articles of Associations, documents confirming the appointment of company directors
                    and secretary (if any), a document confirming the location of the registered office, Share
                    Certificate(s), Certificate of Good Standing if the company is more than 12 months old.
                  </li>
                  <li>Copy of the Corporate Structure, identifying the ultimate beneficial owner(s)</li>
                  <li>Valid License (if applicable)</li>
                </ul>
                <p>For each director, shareholder, secretary, authorised signatory and ultimate beneficial owner:</p>
                <ul>
                  <li>Notarized copy of valid passport</li>
                  <li>The passport must be signed and signature must match the signature in the application form.</li>
                  <li>The photograph must be clear and of good quality.</li>
                  <li>Original or notarized copy of utility bill / bank statement dated within 3 months as verification
                    of residential address.
                  </li>
                  <li>Original or notarized copy of Banker's reference letter, dated within 3 months</li>
                  <li>Power of Attorney (where applicable)</li>
                  <li>Personal CV</li>
                </ul>
                <p>For each corporate officer (Where the company directors or shareholders are legal entities), please
                  provide:</p>
                <p>A&nbsp;set of legalized company documents consisting of:</p>
                <ul>
                  <li>Copy of constitutional documents (Certificate of Incorporation, Articles, etc.).</li>
                  <li>Copy of Corporate Register (which shall include Register of Shareholders, Directors and
                    Secretary).
                  </li>
                  <li>Copy of the Corporate Structure.</li>
                  <li>Certificate of Good Standing</li>
                </ul>
                <hr>
                <p class="clr-red">PLEASE NOTE:</p>
                <ul>
                  <li>Documents that are not in English must be accompanied by a certified translation.</li>
                  <li>Once all documentation is available please email electronic copies to our representative for
                    review; incomplete or unexecuted forms can create delays in the account opening process.
                  </li>
                </ul>
              </div>
            </div>
            <div class="tabcontent" id="BActivitiesTab" style="display: none;">
              <div>
                <p>We operate across a wide range of business activities however, several types of businesses currently
                  are not approved by Agent Legal.</p>
                <p><strong>Licensable Activities:</strong> If you conduct any activity without required license or
                  authorization granted by a relevant authority in any jurisdiction, Agent Legal will not be able to
                  assist you with the or bank account opening related to such unlicensed activity.</p>
                <p>Licensable activities include, but not limited to: provision of financial services involving
                  trading/brokerage in foreign exchange, financial and commodity-based derivative instruments and other
                  securities; offering investment advice to public; insurance and banking business; operation and
                  administration of collective investment schemes and mutual funds; payment processing services; money
                  exchange, money transmission or money brokering; asset management; safe custody services; gaming,
                  gambling and lotteries.</p>
                <p><strong>Please <a href="mailto:support@agentlegal.com">contact us</a> if you need our assistance in
                  licensing
                  of
                  your financial, Forex brokerage or gambling company.</strong></p>
                <p>The following categories of businesses are prohibited from using Agent Legal services:</p>
                <ul>
                  <li>Any illegal or criminal activities or individuals that black listed under the laws of any country;
                  </li>
                  <li>Trade, distribution or manufacturing of arms, weapons, munitions, mercenary or contract
                    soldiering;
                  </li>
                  <li>Copy of the Corporate Structure, identifying the ultimate beneficial owner(s)</li>
                  <li>Any device that could lead to the abuse of human rights or be utilized for torture;</li>
                  <li>Technical surveillance or bugging equipment or industrial espionage;</li>
                  <li>Dangerous or hazardous biological, chemical or nuclear materials including equipment or machinery
                    used to manufacture, handle or dispose of such materials;
                  </li>
                  <li>Human or animal organs, the abuse of animals or use of animals for any scientific or product
                    testing;
                  </li>
                  <li>Genetic material;</li>
                  <li>Adoption agencies, including surrogate motherhood; the abuse of human rights;</li>
                  <li>Pornography;</li>
                  <li>Drug paraphernalia;</li>
                  <li>Pyramid sales;</li>
                  <li>Religious cults and their charities;</li>
                  <li>Business activities, which by the laws and regulations of the country of formation of the Entity
                    are subject to licensing and which are conducted without obtainment of a license;
                  </li>
                  <li>Any other activity, which, in the opinion of Agent Legal, may damage the reputation of Agent Legal
                    or that of the country of formation of the Entity.
                  </li>
                </ul>
              </div>
            </div>
            <div class="tabcontent" id="ShippingCostTab" style="display: none;">
              <div>
                <p>Shipping of corporate documents or banking kits to your destination requires an extra charge and will
                  be automatically added to the invoice during checkout. Shipping costs for international courier
                  services are set automatically and can vary from USD 75 to USD 95. The fees depend on the jurisdiction
                  of your ordered company, the country where the bank is based as well as your destination country.</p>
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
              <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                   data-target="#collapse-08" aria-expanded="false">
                <h4 class="panel-title">Our Services and Requirements</h4></div>
              <div class="panel-collapse collapse" id="collapse-08" aria-expanded="false" style="height: 0px;">
                <div class="panel-body">
                  <div class="tabcontent1" id="London" style="display: block !important;">
                    <div>
                      <p>Agent Legal has built up a strong association with international banks in over 50 different
                        jurisdictions. We believe that Agent Legal offers the best combination of service, pricing and
                        quality, with no hidden costs.</p>
                      <p>Bank accounts opening procedure includes:</p>
                      <ul>
                        <li>Verifying personal &amp; corporate documentation.</li>
                        <li>Completion of the bank forms which will be forwarded to you for signing with relevant
                          instructions.
                        </li>
                        <li>Sending the full package to the bank for final approval.</li>
                        <li>Monitoring the account opening process until account allocation and banking package is
                          received.
                        </li>
                      </ul>
                      <p><b>PLEASE NOTE:</b></p>
                      <p>The prices listed on our website for the assistance of bank account opening are the
                        professional fees only and do not cover any bank charges and commissions for account maintenance
                        or transactions.</p>
                      <p>Our professional fees are stated for companies which business activities do not require
                        professional licensing and regulation (e.g. trading, holding, service or real estate companies,
                        etc.). If you own a financial company dealing with third-party funds (e.g. Forex brokerage) or
                        any other company licensed and regulated by the recognized government authority, please contact
                        us for a quote.</p>
                      <p>We are unable to assist with the bank account opening for citizens of the following countries
                        <a href="#" data-reveal-id="countries" data-toggle="modal" data-target="#countries">Click
                          here</a>.</p>
                      <p>If you are looking to open a bank account in the particular country or the bank, please contact
                        as by e-mail <a href="mailto:support@agentlegal.com">support@agentlegal.com</a> or call
                        800.301.0052.</p>
                      <p>Banks are entitled at their sole discretion to accept or reject applications to open an
                        account, as such we will introduce you to the bank and guide you through the whole account
                        opening process; however we cannot guarantee that your account will be approved by the bank and
                        successfully opened.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                   data-target="#collapse-09" aria-expanded="false">
                <h4 class="panel-title">Check-list for individuals</h4></div>
              <div class="panel-collapse collapse" id="collapse-09" aria-expanded="false">
                <div class="panel-body">
                  <div class="tabcontent1" id="Paris">
                    <div>
                      <h6>REQUIREMENTS FOR OPENING AN INDIVIDUAL BANK ACCOUNT</h6>
                      <p>Please provide the following documents for all Authorized Signatories:</p>
                      <ul>
                        <li>Notarized copy of valid passport</li>
                        <li>Original or Certified copy of utility bill / bank statement (must not be older than 3
                          months).
                        </li>
                        <li>Original or certified copy of Banker's reference letter (must not be older than 3 months).
                        </li>
                        <li>An Application Form</li>
                        <li>Personal CV</li>
                      </ul>
                      <hr class="gray">
                      <p>PLEASE NOTE:</p>
                      <ul>
                        <li>Documents that are not in English must be accompanied by a certified translation.</li>
                        <li>Once all documentation is available please email electronic copies to our representative for
                          review; incomplete or unexecuted forms can create delays in the account opening process.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                   data-target="#collapse-10" aria-expanded="false">
                <h4 class="panel-title">Check-list for companies</h4></div>
              <div class="panel-collapse collapse" id="collapse-10" aria-expanded="false">
                <div class="panel-body">
                  <div class="tabcontent1" id="Tokyo">
                    <div>
                      <h6>REQUIREMENTS FOR OPENING A CORPORATE BANK ACCOUNT</h6>
                      <p>For the Company:</p>
                      <p>A&nbsp;set of legalized company documents consisting of:</p>
                      <ul>
                        <li>Certificate of Incorporation</li>
                        <li>Memorandum and Articles of Associations, documents confirming the appointment of company
                          directors and secretary (if any), a document confirming the location of the registered office,
                          Share Certificate(s), Certificate of Good Standing if the company is more than 12 months old.
                        </li>
                        <li>Copy of the Corporate Structure, identifying the ultimate beneficial owner(s)</li>
                        <li>Valid License (if applicable)</li>
                      </ul>
                      <p>For each director, shareholder, secretary, authorised signatory and ultimate beneficial
                        owner:</p>
                      <ul>
                        <li>Notarized copy of valid passport</li>
                        <li>The passport must be signed and signature must match the signature in the application
                          form.
                        </li>
                        <li>The photograph must be clear and of good quality.</li>
                        <li>Original or notarized copy of utility bill / bank statement dated within 3 months as
                          verification of residential address.
                        </li>
                        <li>Original or notarized copy of Banker's reference letter, dated within 3 months</li>
                        <li>Power of Attorney (where applicable)</li>
                        <li>Personal CV</li>
                      </ul>
                      <p>For each corporate officer (Where the company directors or shareholders are legal entities),
                        please provide:</p>
                      <p>A&nbsp;set of legalized company documents consisting of:</p>
                      <ul>
                        <li>Copy of constitutional documents (Certificate of Incorporation, Articles, etc.).</li>
                        <li>Copy of Corporate Register (which shall include Register of Shareholders, Directors and
                          Secretary).
                        </li>
                        <li>Copy of the Corporate Structure.</li>
                        <li>Certificate of Good Standing</li>
                      </ul>
                      <hr>
                      <p class="clr-red">PLEASE NOTE:</p>
                      <ul>
                        <li>Documents that are not in English must be accompanied by a certified translation.</li>
                        <li>Once all documentation is available please email electronic copies to our representative for
                          review; incomplete or unexecuted forms can create delays in the account opening process.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                   data-target="#collapse-11" aria-expanded="false">
                <h4 class="panel-title">Business Activities</h4></div>
              <div class="panel-collapse collapse" id="collapse-11" aria-expanded="false">
                <div class="panel-body">
                  <div class="tabcontent1" id="Tokyo2">
                    <div>
                      <p>We operate across a wide range of business activities however, several types of businesses
                        currently are not approved by Agent Legal.</p>
                      <p><strong>Licensable Activities:</strong> If you conduct any activity without required license or
                        authorization granted by a relevant authority in any jurisdiction, Agent Legal will not be able
                        to assist you with the or bank account opening related to such unlicensed activity.</p>
                      <p>Licensable activities include, but not limited to: provision of financial services involving
                        trading/brokerage in foreign exchange, financial and commodity-based derivative instruments and
                        other securities; offering investment advice to public; insurance and banking business;
                        operation and administration of collective investment schemes and mutual funds; payment
                        processing services; money exchange, money transmission or money brokering; asset management;
                        safe custody services; gaming, gambling and lotteries.</p>
                      <p><strong>Please <a href="mailto:support@agentlegal.com">contact us</a> if you need our
                        assistance in
                        licensing
                        of
                        your financial, Forex brokerage or gambling company.</strong></p>
                      <p>The following categories of businesses are prohibited from using Agent Legal services:</p>
                      <ul>
                        <li>Any illegal or criminal activities or individuals that black listed under the laws of any
                          country;
                        </li>
                        <li>Trade, distribution or manufacturing of arms, weapons, munitions, mercenary or contract
                          soldiering;
                        </li>
                        <li>Copy of the Corporate Structure, identifying the ultimate beneficial owner(s)</li>
                        <li>Any device that could lead to the abuse of human rights or be utilized for torture;</li>
                        <li>Technical surveillance or bugging equipment or industrial espionage;</li>
                        <li>Dangerous or hazardous biological, chemical or nuclear materials including equipment or
                          machinery used to manufacture, handle or dispose of such materials;
                        </li>
                        <li>Human or animal organs, the abuse of animals or use of animals for any scientific or product
                          testing;
                        </li>
                        <li>Genetic material;</li>
                        <li>Adoption agencies, including surrogate motherhood; the abuse of human rights;</li>
                        <li>Pornography;</li>
                        <li>Drug paraphernalia;</li>
                        <li>Pyramid sales;</li>
                        <li>Religious cults and their charities;</li>
                        <li>Business activities, which by the laws and regulations of the country of formation of the
                          Entity are subject to licensing and which are conducted without obtainment of a license;
                        </li>
                        <li>Any other activity, which, in the opinion of Agent Legal, may damage the reputation of Agent
                          Legal or that of the country of formation of the Entity.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                   data-target="#collapse-12" aria-expanded="false">
                <h4 class="panel-title">Shipping Cost</h4></div>
              <div class="panel-collapse collapse" id="collapse-12" aria-expanded="false" style="height: 0px;">
                <div class="panel-body">
                  <div class="tabcontent1" id="Tokyo3">
                    <div>
                      <p>Shipping of corporate documents or banking kits to your destination requires an extra charge
                        and will be automatically added to the invoice during checkout. Shipping costs for international
                        courier services are set automatically and can vary from USD 75 to USD 95. The fees depend on
                        the jurisdiction of your ordered company, the country where the bank is based as well as your
                        destination country.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
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
        banks: [],
        value: '',
        rate: '',
        bankAccount: '',
      }
    },
    mounted() {
      var vm = this;
      vm.bankAccount = 400;
      $(document).ready(function() {
        if(localStorage.getItem('currency') == 'USD') {
          vm.value = '$';
          vm.rate = 1;
        } else if(localStorage.getItem('currency') == 'EUR') {
          vm.value = '€';
          vm.rate = localStorage.getItem('euroValue');
        } else if(localStorage.getItem('currency') == 'GBP') {
          vm.value = '£';
          vm.rate = localStorage.getItem('gbpValue');
        } else if(localStorage.getItem('currency') == 'CNY') {
          vm.value = '¥';
          vm.rate = localStorage.getItem('cnyValue');
        }
      });
      axios.get('https://milosrest.herokuapp.com/api/banks')
        .then(function (response) {
          console.log(response.data);
          vm.banks = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    filters: {
      fixPrice: function(value)  {
        var price = Math.trunc(value);
        return price
      },
    }

  }
</script>
