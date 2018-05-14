<template>
    <main>
        <section class="companies">
            <section class="companies-informations">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-12">
                            <img src="src/assets/images/info.png">
                        </div>
                        <div class="col-md-9 col-xs-12">
                            <h2>Company Formation Worldwide</h2>
                            <h4>Starting from {{value}}{{companyFormation * rate | fixPrice}}</h4>
                            <ul>
                                <li>Available across 5 continents, in 50+ countries</li>
                                <li>Corporate packages to start your business right away</li>
                                <li>Company administration and expert legal support</li>
                            </ul>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <hr>
                        </div>
                    </div>
                </div>
            </section>

            <section class="steps">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-xs-12">
                            <span>Set up your New Company in 4 STEPS</span>
                        </div>
                        <div class="col-md-8 col-xs-12">
                            <div class="step-companies"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="select-country">
                <div class="container">
                    <div class="heading">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <span>Select your country formation</span>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <select onchange="navigateTo(this, 'window', false);">
                                    <option value="#">Select a Country</option>
                                    <option v-for="c in companies" v-if="c.kind == 'company-formation' && c.country"
                                            :value="'/#/product/company-formation' + c.slug">{{c.country}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="popular-companies">
                        <h3>Popular Company Formation Locations...</h3>
                        <div class="row">
                            <div class="col-md-6 col-xs-12 remove-space" v-for="c in companies"
                                 v-if="c.kind == 'company-formation' && c.isPopular">
                                <div class="popular-company-item">
                                    <div class="row showDesktop">
                                        <div class="col-md-6 col-xs-6">
                                            <div class="flag">
                                                <img :src="c.flagImageUrl">
                                            </div>
                                            <span class="countryName">{{c.country}}</span>
                                        </div>
                                        <div class="col-md-6 col-xs-6">
                                            <div class="popular-company-item-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row showMobile">
                                        <a :href="'/#/product/company-formation/' + c.slug">
                                            <div class="col-xs-9">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <span class="countryName">{{c.country}}</span>
                                            </div>
                                            <div class="col-xs-3">
                                                <div class="popular-company-item-info">
                                                    <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                </div>
                                            </div>
                                        </a>
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
                        <div class="col-md-6 col-xs-12">
                            <span>Browse Companies by Region</span>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <button class="btn btn-green btn-custom pull-right">
                                Compare Companies <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="companies-listing">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-1"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse1" aria-expanded="false">
                                    <h4>Oceania & Pacific Islands</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse1" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Oceania & Pacific Islands'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-2"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse2" aria-expanded="false">
                                    <h4>Carribean</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse2" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Caribbean'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-3"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse3" aria-expanded="false">
                                    <h4>Europe</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse3" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Europe'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-4"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse4" aria-expanded="false">
                                    <h4>North & South America</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse4" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'North & South America'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-5"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse5" aria-expanded="false">
                                    <h4>Asia</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse5" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Asia'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-6"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse6" aria-expanded="false">
                                    <h4>Africa</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse6" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Africa'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="listing-item">
                                <div class="listing-item-wrapper accordion-toggle" id="accordion-toggle-7"
                                     data-toggle="collapse"
                                     data-parent="#accordion" data-target="#collapse7" aria-expanded="false">
                                    <h4>Middle East</h4>
                                </div>
                                <div class="listing-item-content collapse" id="collapse7" aria-expanded="false">
                                    <table>
                                        <tr v-for="c in companies"
                                            v-if="c.kind == 'company-formation' && c.region == 'Middle East'">
                                            <td class="listing-item-country">
                                                <div class="flag">
                                                    <img :src="c.flagImageUrl">
                                                </div>
                                                <div class="company-info">
                                                    <span class="countryName">{{c.country}}</span>
                                                    <span class="companyName">{{c.title}}</span>
                                                </div>
                                            </td>
                                            <td class="pricing-info">
                                                <span class="price">{{value}}{{c.price * rate | fixPrice}}</span>
                                                <button class="btn btn-green btn-small">
                                                    <a :href="'/#/product/company-formation/' + c.slug">Learn More</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="vertical-tabs">
                <div class="container">
                    <h2>Everything you need to know</h2>
                    <div class="tab">
                        <button id="defaultOpen" onclick="openCity(event, 'London')" class="tablinks active">
                            Our services include
                        </button>
                        <button onclick="openCity(event, 'Paris')" class="tablinks">Documents Required
                        </button>
                        <button onclick="openCity(event, 'Tokyo')" class="tablinks">Business Activities
                        </button>
                        <button onclick="openCity(event, 'Tokyo2')" class="tablinks">Shipping Cost</button>
                    </div>
                    <div id="London" class="tabcontent" style="display: block;">
                        <div><p>Our standard services include</p>
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
                                Please note that the above services and documents may vary, depending on legal structure and
                                jurisdiction chosen.
                            </p></div>
                    </div>
                    <div id="Paris" class="tabcontent" style="display: none;">
                        <div><p>
                            Please provide the following documents for all Directors, Shareholders, Beneficial Owners,
                            Authorized Signatories:</p>
                            <ul>
                                <li><strong>Notarized copy of valid passport.</strong>
                                    The passport must be signed and signature must match the signature in the application form. The
                                    photograph must be clear and of good quality.
                                </li>
                                <li><strong>Original or Certified copy of utility bill / bank statement</strong>
                                    (as verification of residential address, dated within 3 months); the household utility bill
                                    (e.g. gas, electricity, water or fixed line telephone but <strong>not a mobile phone
                                        bill</strong>) or bank, building society or credit card statement as proof of address. It must
                                    be no more than 3 months old and show your name and current address. P.O. Box is not accepted.
                                </li>
                                <li><strong>Original or certified copy of Banker's reference letter</strong>
                                    (dated within 3 months). You can request the Reference Letter from the bank where you hold an
                                    account. The reference letter should include confirmation that the relationship has been
                                    maintain for longer than 2 years and the business affairs are run satisfactorily.
                                </li>
                                <li><strong>In cases where shareholders and/or directors are corporate bodies, full apostilled set
                                    of corporate documents will be required:</strong>
                                    Certificate of Incorporation, List of Directors, Shareholders, Secretary, Share Certificate,
                                    copy of 'Declaration of Trust' between nominee shareholder(s) and ultimate beneficial owner(s)
                                    (if applicable), Certificate of Good Standing (if the company has been operating for 12 months
                                    or more); Notarized copy of a valid passport, utility bill and the reference letter for each
                                    individual Director, Shareholder and Beneficial Owner.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="Tokyo" class="tabcontent" style="display: none;">
                        <section id="panel2-3" role="tabpanel" aria-hidden="false" class="content pad-0 active"><p>
                            We operate across a wide range of business activities however, several types of businesses
                            currently are not approved by Agent Legal.</p>
                            <p><strong>Licensable Activities:</strong>
                                If you conduct any activity without required license or authorization granted by a relevant
                                authority in any jurisdiction, Agent Legal will not be able to assist you with the or bank account
                                opening related to such unlicensed activity.
                            </p>
                            <p>
                                Licensable activities include, but not limited to: provision of financial services involving
                                trading/brokerage in foreign exchange, financial and commodity-based derivative instruments and
                                other securities; offering investment advice to public; insurance and banking business; operation
                                and administration of collective investment schemes and mutual funds; payment processing services;
                                money exchange, money transmission or money brokering; asset management; safe custody services;
                                gaming, gambling and lotteries.</p>
                            <p><strong>Please <a href="mailto:support@agentlegal.com">contact us</a>
                                if you need our assistance in
                                licensing
                                of
                                your financial, Forex brokerage or gambling company.</strong></p>
                            <p>
                                The following categories of businesses are prohibited from using Agent Legal services:</p>
                            <ul>
                                <li>
                                    Any illegal or criminal activities or individuals that black listed under the laws of any
                                    country;
                                </li>
                                <li>
                                    Trade, distribution or manufacturing of arms, weapons, munitions, mercenary or contract
                                    soldiering;
                                </li>
                                <li>
                                    Any device that could lead to the abuse of human rights or be utilized for torture;
                                </li>
                                <li>Technical surveillance or bugging equipment or industrial espionage;
                                </li>
                                <li>
                                    Dangerous or hazardous biological, chemical or nuclear materials including equipment or
                                    machinery used to manufacture, handle or dispose of such materials;
                                </li>
                                <li>
                                    Human or animal organs, the abuse of animals or use of animals for any scientific or product
                                    testing;
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
                                    Business activities, which by the laws and regulations of the country of formation of the Entity
                                    are subject to licensing and which are conducted without obtainment of a license;
                                </li>
                                <li>
                                    Any other activity, which, in the opinion of Agent Legal, may damage the reputation of Agent
                                    Legal or that of the country of formation of the Entity.
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div id="Tokyo2" class="tabcontent" style="display: none;">
                        <div><p>
                            Shipping of corporate documents or banking kits to your destination requires an extra charge and
                            will be automatically added to the invoice during checkout. Shipping costs for international
                            courier services are set automatically and can vary from USD 75 to USD 95. The fees depend on the
                            jurisdiction of your ordered company, the country where the bank is based as well as your
                            destination country.</p></div>
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>
<script>
    import axios from 'axios'
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                companies: [],
                value: '',
                rate: '',
                companyFormation: '',
            }
        },
        mounted() {
            var vm = this;
            vm.companyFormation = 560;
            axios.get(config.url + 'companies')
                .then(function (response) {
                    console.log(response.data);
                    vm.companies = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
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
        },
        filters: {
            fixPrice: function (value) {
                var price = Math.trunc(value);
                return price
            },
        }

    }
</script>
