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
                        <div class="col-md-3 col-xs-4 informations-block"><img src="src/assets/images/Corporate-img.png"></div>
                        <div class="col-md-5 col-xs-8 informations-block">
                            <h2>{{packages.name}}</h2>
                            <h4>{{packages.description}}</h4>
                            <div v-html="packages.features">
                            </div><a class="packages-link" href="#">About this Package &gt;</a></div>
                    </div>
                </div>
            </section>
            <section class="product-packge">
                <div class="container">
                    <div class="Product-title">
                        <h5 class="product-clr-green">PACKAGE SERVICES</h5>
                        <h6 class="product-clr-black">PRODUCTS IN THE PACKAGE</h6></div>
                    <div id="docs">
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square collapsed" aria-hidden="true" data-toggle="collapse" data-target="#product-0" aria-expanded="false"></i>  Affidavit for Company Strike Off</span><span class="sell-all"><a href="/document/affidavit-for-company-strike-off">See document</a></span>
                            <div class="collapse" id="product-0" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p>Affidavit is a written statement confirmed by oath or affirmation. It can be used as an evidence in courts. This particular affidavit confirms the strike off of a company. Commonly used in country/region: Cyprus/EU</p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-1"></i>  Agenda for First Meeting of the Board of Directors</span><span class="sell-all"><a href="/document/agenda-for-first-meeting-of-the-board-of-directors">See document</a></span>
                            <div class="collapse" id="product-1" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">The Agenda for the Meeting of the company Directors is prepared by the secretary and is used to show the order in which the meeting is to be conducted and to provide the basis for drafting the minutes of the meeting.

                                        <br>Commonly used in country/region: Cyprus/EU/ Internationally</p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-2"></i>  Agreement to Establish A Company</span><span class="sell-all"><a href="/document/agreement-to-establish-a-company">See document</a></span>
                            <div class="collapse" id="product-2" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This document is used to define the form and basic features of the Company, the Parties’ acts necessary for the incorporation of the Company, amount of and procedures for financing the Company and profit distribution among the Parties.
                                        <br> Commonly used in country/region: EU/Internationally
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-3"></i>  Appointment of First Director(s) by Subscribers</span><span class="sell-all"><a href="/document/appointment-of-first-directors-by-subscribers">See document</a></span>
                            <div class="collapse" id="product-3" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This is a document used to officially appoint first Director(s) of the company by Subscribers.
                                        <br> Commonly used in country/region: EU/Internationally
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-4"></i>  Certificate by Company Secretary for Change of Company Name</span><span class="sell-all"><a href="/document/certificate-by-company-secretary-for-change-of-company-name">See document</a></span>
                            <div class="collapse" id="product-4" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p>This document is an official confirmation by the Company Secretary of change the Company's name. Commonly used in country/region: Cyprus/EU/ Internationally</p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-5"></i>  Certificate by Company Secretary of Increase of Share Capital</span><span class="sell-all"><a href="/document/certificate-by-company-secretary-of-increase-of-share-capital">See document</a></span>
                            <div class="collapse" id="product-5" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This documents is issued by the Company's Secretary to confirm the increase of the share capital of the Company.
                                        <br> Commonly used in country/region: EU, Internationally
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-6"></i>  Certificate by Company Secretary of Sole Shareholder</span><span class="sell-all"><a href="/document/certificate-by-company-secretary-of-sole-shareholder">See document</a></span>
                            <div class="collapse" id="product-6" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This documents is issued by the Company Secretary to confirm current Shareholder of the Company.

                                        <br>Commonly used in country/region: Cyprus, EU, Internationally</p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-7"></i>  Certificate of Incumbency by Company Secretary</span><span class="sell-all"><a href="/document/certificate-of-incumbency-by-company-secretary">See document</a></span>
                            <div class="collapse" id="product-7" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This document is an official confirmation by the company secretary of all relevant particulars of the company (current directors, officers and company's registered office).
                                        <br> Commonly used in country/region: EU, Internationally
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-8"></i>  Consent to Short Notice to Vote for an Extraordinary General Meeting</span><span class="sell-all"><a href="/document/consent-to-short-notice-to-vote-for-an-extraordinary-general-meeting">See document</a></span>
                            <div class="collapse" id="product-8" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This document is used by the company secretary to obtain consent of the Board of Directors to attend and vote at the Extraordinary General Meeting despite the fact that less than the statutory period of the notice has been given to the Board of Directors.
                                        <br> Commonly used in country/region: EU/Internationally</p>
                                </div>
                            </div>
                        </div>
                        <div class="collaspe-panel"><span><i class="fa fa-plus-square" aria-hidden="true" data-toggle="collapse" data-target="#product-9"></i>  Consent to Use Name</span><span class="sell-all"><a href="/document/consent-to-use-name">See document</a></span>
                            <div class="collapse" id="product-9" aria-expanded="false" style="height: 0px;">
                                <div class="product-text">
                                    <p class="description mar-top-10">This document is used to approve the use of a company name for registration of a company. Issued by appropriate experts in the related field.
                                        <br> Commonly used in country/region: EU/Internationally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-panel"><a class="doc-btn" href="#" data-page="1">Load More</a></div>
                    <div class="button-panel">
                        <div class="col-xs-6 payment-div">
                            <p>Payment methods</p>
                            <div class="payment-img"></div>
                        </div>
                        <div class="col-xs-6">
                            <h1 class="total-text">TOTAL: ${{packages.price}}</h1></div>
                    </div>
                    <div class="add-cart-btn text-right">
                        <form method="post">
                            <input name="action" value="addToCart" type="hidden">
                            <button class="add-cart-green" type="submit" name="submit">
                                <div class="inl-block"><span class="left mar-rgh-10 fnt-oswald-medium fnt-size-21 mar-top-7">Add to Cart</span><span class="sprite1 cart green right"></span></div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section class="browse-companies">
                <div class="container">
                    <div class="panel-two">
                        <div class="col-md-12 col-sm-12" style="padding: 0;">
                            <h6 class="fnt-size-24 mob-fnt-size-21">About this Start-Up Package</h6></div>
                    </div>
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <a href="#1">
                                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-1" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" aria-expanded="false">
                                    <h4 class="panel-title">Useful information</h4></div>
                            </a>
                            <div class="panel-collapse collapse" id="collapseOne" aria-expanded="false" style="height: 0px;">
                                <div class="panel-body useful-information">
                                    <div class="useful-information" v-html="packages.usefulInformation">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- start-->
                        <div class="panel panel-default">
                            <a href="#2">
                                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-2" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false">
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
                packages: ''
            }
        },
        mounted() {
            var vm = this;
            axios.post('https://milosrest.herokuapp.com/api/package/' + this.$route.params.packageId)
                .then(function (response) {
                    vm.packages = response.data[0];
                    console.log(vm.packages);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>