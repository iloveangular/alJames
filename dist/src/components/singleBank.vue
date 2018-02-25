<template>
    <main class="cyprus-ltd-page page-content">
        <section class="product-information">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 hidden-xs product-steps text-center">
                        <div class="step-img"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-head clearfix">
                            <div class="pull-left product-logo"><img :src="product.flagImageUrl"></div>
                            <div class="pull-left">
                                <h1>{{product.title}}<span class="description" v-html="product.description"></span></h1>
                                <input name="category_id" value="22" type="hidden">
                            </div>
                        </div>
                        <div v-html="product.content"></div>
                        <p><a class="target-link" id="scroll" href="#about_prod">About this Product &gt;</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="payment">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <form method="post">
                            <input name="action" value="addToCart" type="hidden">
                            <input name="cat_id" value="22" type="hidden">
                            <input name="product_quantity" value="1" type="hidden">
                            <input id="product_id" name="product_id" value="599a1344bf50847b0972a465" type="hidden">
                            <input id="amount_product" name="amount_product" v-model="product.price" type="hidden">
                            <table class="table payment-table" id="view_product">
                                <tbody>
                                <tr>
                                    <td class="payment-table-head" colspan="2">
                                        <h2>PACKAGE SERVICES</h2></td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-0"><span class="more_info"></span> Formation Fee</a></div>
                                        <div class="payment-item-info collapse" id="panel-0">
                                            <ul>
                                                <li>Name check and approval</li>
                                                <li>Filling incorporation documents with the Registrar of Companies
                                                </li>
                                                <li>Payment of the Government Fee of $350 </li>
                                                <li>Provision of registered office and registered address for one year</li>
                                                <li>Provision of company secretary and registered agent for one year</li>
                                                <li>Metal embossing seal</li>
                                            </ul>
                                            A standard set of original corporate documents:
                                            <ul>
                                                <li>Certificate of Incorporation</li>
                                                <li>Memorandum &amp; Articles of Association</li>
                                                <li>Appointment of First Directors</li>
                                                <li>Consent Actions of the Board of Directors</li>
                                                <li>Share Certificates</li>
                                                <li>Register of Directors and Members</li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="payment-price mandatory-price">
                                        <input class="hidden" style="height:12px;margin-top:3px;" name="options[29780]" v-model="product.price" checked="checked" type="checkbox"> $<span v-html="product.price"></span></td>
                                </tr>
                                <tr>
                                    <td class="payment-table-head" colspan="2">
                                        <h2>ADDITIONAL SERVICES</h2></td>
                                </tr>
                                <tr class="form-group">
                                    <td class="payment-table-sub-head" colspan="2">
                                        <h3 style="text-transform: uppercase;">nominee-services</h3></td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-2"><span class="more_info"></span><span>Nominee Shareholder</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-2">Provision of corporate Nominee Shareholder (per annum)</div>
                                    </td>
                                    <td class="payment-price">$<span>300</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a45d" data-price="300" type="checkbox">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-3"><span class="more_info"></span><span>Nominee Director &amp; General Power of Attorney (Apostilled)</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-3">Provision of corporate Nominee Director (per annum) and General Power of Attorney (valid for one year) under Apostille.</div>
                                    </td>
                                    <td class="payment-price">$<span>650</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a45e" data-price="650" type="checkbox">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-4"><span class="more_info"></span><span>Special Power of Attorney (Apostilled)</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-4">Special Power of Attorney issued by a Nominee Director, under Apostille</div>
                                    </td>
                                    <td class="payment-price">$<span>290</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a45f" data-price="290" type="checkbox">
                                    </td>
                                </tr>
                                <tr class="form-group">
                                    <td class="payment-table-sub-head" colspan="2">
                                        <h3 style="text-transform: uppercase;">corporate-certificates</h3></td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-5"><span class="more_info"></span><span>Certificate of Good Standing (Apostilled)</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-5">Provision of Certificate of Good Standing under Apostille</div>
                                    </td>
                                    <td class="payment-price">$<span>550</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a460" data-price="550" type="checkbox">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-6"><span class="more_info"></span><span>Certificate of Incumbency (Apostilled)</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-6">Provision of Certificate of Incumbency under Apostille</div>
                                    </td>
                                    <td class="payment-price">$<span>480</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a461" data-price="480" type="checkbox">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-7"><span class="more_info"></span><span>Set of Corporate Documents (Apostilled)</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-7">Copies of corporate documents in one Apostilled bundle.
                                            <br> Please note: If applying for a corporate bank account you will need to order a full set of apostilled company documents when the account is opened outside of British Virgin Islands.</div>
                                    </td>
                                    <td class="payment-price">$<span>480</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a462" data-price="480" type="checkbox">
                                    </td>
                                </tr>
                                <tr class="form-group">
                                    <td class="payment-table-sub-head" colspan="2">
                                        <h3 style="text-transform: uppercase;">other-services</h3></td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-8"><span class="more_info"></span><span>Metal Embossing Seal</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-8">Provision of embossed metal seal</div>
                                    </td>
                                    <td class="payment-price">$<span>100</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a463" data-price="100" type="checkbox">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="payment-item">
                                        <div class="payment-item-title"><a data-toggle="collapse" href="#panel-9"><span class="more_info"></span><span>Additional rubber stamp</span></a></div>
                                        <div class="payment-item-info collapse" id="panel-9">Provision of additional rubber stamp.</div>
                                    </td>
                                    <td class="payment-price">$<span>40</span>
                                        <input class="checkbox" name="services" value="599a1344bf50847b0972a464" data-price="40" type="checkbox">
                                    </td>
                                </tr>
                                <tr class="hidden payment-calculation">
                                    <td class="payment-item">
                                        <div class="payment-item-title">Package Price:</div>
                                    </td>
                                    <td class="payment-price"><span>{{product.price}}</span>
                                        <input name="total" v-model="product.price" type="hidden">
                                    </td>
                                </tr>
                                <tr class="hidden">
                                    <td class="payment-item">
                                        <div class="payment-item-title">Add-on Services:</div>
                                    </td>
                                    <td class="payment-price">$ <span class="total_opt" id="adder">0</span>
                                        <input class="total_opt_input" name="total_opt_input" value="" type="hidden">
                                    </td>
                                </tr>
                                <tr class="hidden">
                                    <td class="payment-item">
                                        <div class="payment-item-title">Package Cost:</div>
                                    </td>
                                    <td class="payment-price">$ <span class="product_total" id="price">{{product.price}}</span></td>
                                </tr>
                                </tbody>
                            </table>
                            <table class="table total-table">
                                <tbody>
                                <tr>
                                    <td class="no-pad-right hidden-xs">
                                        <p>Payment methods</p>
                                        <div class="payment-methods"></div>
                                    </td>
                                    <td class="no-pad-left total-price">TOTAL: $<span id="total">{{product.price}}</span>
                                        <input id="product_id" name="id" value="599a1344bf50847b0972a465" type="hidden">
                                        <input id="total_input" name="total" v-model="product.price" type="hidden">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-right" colspan="2">
                                        <div class="form-actions">
                                            <button class="btn btn-default btn-add-to-cart" id="add-to-cart" type="submit">Add to Cart</button><span class="cart-icon"></span></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="about_prod">
            <div class="container">
                <div class="row" id="about_prod">
                    <div class="col-lg-12">
                        <!-- Accordions-->
                        <h2>Facts &amp; Info for British Virgin Islands BC</h2>
                        <div class="panel-group" id="accordion-about">
                            <div class="panel">
                                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-1"><span class="corporate-info-icon panel-title-icon"></span><span class="panel-title">Corporate Information</span><span class="accordion-arrow"></span></a></h3>
                                <div class="panel-collapse collapse" id="about-1">
                                    <div class="panel-body" v-html="product.corporateInformation">
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-2"><span class="taxation-icon panel-title-icon"></span><span class="panel-title">Taxation</span><span class="accordion-arrow"></span></a></h3>
                                <div class="panel-collapse collapse" id="about-2">
                                    <div class="panel-body" v-html="product.taxation"></div>
                                </div>
                            </div>
                            <div class="panel">
                                <h3><a class="clearfix" data-toggle="collapse" data-parent="#accordion-about" href="#about-3"><span class="services-icon panel-title-icon"></span><span class="panel-title">Our Services &amp; Requirements</span><span class="accordion-arrow"></span></a></h3>
                                <div class="panel-collapse collapse" id="about-3">
                                    <div class="panel-body" v-html="product.requirements"></div>
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
    import axios from 'axios'

    export default {
        data() {
            return {
                product: ''
            }
        },
        mounted() {
            var vm = this;
            axios.post('https://milosrest.herokuapp.com/api/banks/' + this.$route.params.bankId)
                .then(function (response) {
                    vm.product = response.data[0];
                    console.log(vm.product);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
</script>