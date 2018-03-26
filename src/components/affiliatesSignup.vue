<template>
    <main class="contact-us-page page-content">
        <section class="contact-text">
            <div class="container">
                <h1>Affiliate Signup</h1></div>
        </section>
        <section class="contact-form-details">
            <div class="container">
                <div class="row">
                    <div class="thing" style="width: 80%; margin: 0 auto;" v-if="!sent">
                        <div class="contact-form contact-section clearfix">
                            <div class="contact-section-head">
                                <h2>Contact Information</h2></div>
                          <form id="contactForm">
                            <input id="contact" name="action" value="submit-application" type="hidden">
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="name">Full Name</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="name" name="name" type="text" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="email">Email</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="email" name="email" type="email" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="phone">Telephone Number</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="phone" name="phone" type="text" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="linkedInUrl">LinkedIn Url</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="linkedInUrl" name="linkedInUrl" type="text" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="twitterUrl">Twitter Url</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="twitterUrl" name="twitterUrl" type="text" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="facebookUrl">Facebook Url</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="facebookUrl" name="facebookUrl" type="text" required>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-md-3">
                                    <label for="companyWebsite">Company Website</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" id="companyWebsite" name="companyWebsite" type="text" required>
                                </div>
                            </div>
                            <hr>
                            <div class="contact-section-head">
                                <h2>Interests</h2></div>
                            <div class="row form-group">
                                <div class="col-xs-12">
                                    <div class="here">
                                        <input class="checkbox" id="services" name="services" type="checkbox">
                                        <label>Services</label>
                                    </div>
                                    <p>
                                        Select if you are interested in selling company formation or bank account packages. </p>
                                    <hr>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-12">
                                    <div class="here">
                                        <input class="checkbox" id="packages" name="packages" type="checkbox">
                                        <label>Start-Up Packages</label>
                                    </div>
                                    <p>Select if you are interested in selling start-up packages. </p>
                                    <hr>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-12">
                                    <div class="here">
                                        <input class="checkbox" id="documents" name="packages" type="checkbox">
                                        <label>Documents</label>
                                    </div>
                                    <p>Select if you are interested in selling documents and templates. </p>
                                    <hr>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-xs-12">
                                    <div class="here">
                                        <input class="checkbox" id="speciality" name="specialityServices"
                                               type="checkbox">
                                        <label>Specialty Services</label>
                                    </div>
                                    <p>Select if you are interested in offering specialty services. </p>
                                    <hr>
                                </div>
                            </div>
                            <div class="col-lg-12 text-right form-actions" style="text-align: center;">
                                <input class="btn btn-green submit-affiliate" name="submit" value="Submit"
                                       type="submit">
                            </div>
                          </form>
                        </div>
                    </div>
                    <div class="thing" style="width: 80%; margin: 0 auto;" v-if="sent">
                        <div class="contact-form contact-section clearfix">
                            <div class="contact-section-head">
                                <h2>Thanks for signing up on our Affiliate list!</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
    import axios from 'axios'
    import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                sent: ''
            }
        },
        mounted() {
            var vm = this;
            console.log(vm.sent);
            $(document).ready(function () {
                if(localStorage.getItem('affiliateApplied')) {
                    vm.sent = true;
                }
                localStorage.setItem('affiliateServices', false);
                localStorage.setItem('affiliatePackages', false);
                localStorage.setItem('affiliateDocuments', false);
                localStorage.setItem('affiliateSpeciality', false);
                var packages = '';
                $('#services').click(function () {
                    if ($(this).is(':checked')) {
                        console.log('checked');
                        localStorage.setItem('affiliateServices', true);
                    } else {
                        console.log('not checked');
                        localStorage.setItem('affiliateServices', false);
                    }
                });
                $('#packages').click(function () {
                    if ($(this).is(':checked')) {
                        console.log('checked');
                        localStorage.setItem('affiliatePackages', true);
                    } else {
                        console.log('not checked');
                        localStorage.setItem('affiliatePackages', false);
                    }
                });
                $('#documents').click(function () {
                    if ($(this).is(':checked')) {
                        console.log('checked');
                        localStorage.setItem('affiliateDocuments', true);
                    } else {
                        console.log('not checked');
                        localStorage.setItem('affiliateDocuments', false);
                    }
                });
                 $('#speciality').click(function () {
                    if ($(this).is(':checked')) {
                        console.log('checked');
                        localStorage.setItem('affiliateSpeciality', true);
                    } else {
                        console.log('not checked');
                        localStorage.setItem('affiliateSpeciality', false);
                    }
                });
                function submitForm() {
                    console.log('hey there');
                    $.ajax({
                        type: "GET",
                        url: config.url + 'affiliates',
                        data: {
                            "name": $("#name").val(),
                            "email": $("#email").val(),
                            "phone": $("#phone").val(),
                            "linkedInUrl": $("#linkedInUrl").val(),
                            "twitterUrl": $("#twitterUrl").val(),
                            "facebookUrl": $("#facebookUrl").val(),
                            "companyWebsite": $("#companyWebsite").val(),
                            "services": localStorage.getItem('affiliateServices'),
                            "packages": localStorage.getItem('affiliatePackages'),
                            "documents": localStorage.getItem('affiliateDocuments'),
                            "speciality": localStorage.getItem('affiliateSpeciality')
                        },
                        success: function (data) {
                            console.log(data);
                            vm.sent = true;
                            location.href = '/#/affiliates/signup#';
                            localStorage.setItem('affiliateApplied', true);
                        },
                        error: function (data) {
                            console.log(data);
                            vm.sent = false;
                        }
                    })
                };
              $("#contactForm").validate({
                rules: {
                  "name": {
                    required: true,
                    minlength: 5
                  },
                  "phone": {
                    required: true,
                    digits: true
                  },
                  "email": {
                    required: true,
                    email: true
                  }
                },
                messages: {
                  "name": {
                    required: "Please, enter a name"
                  },
                  "phone": {
                    required: "Please, enter a phone"
                  },
                  "email": {
                    required: "Please, enter an email",
                    email: "Email is invalid"
                  }
                },
                submitHandler: function (form) { // for demo
                  submitForm();
                  return false; // for demo
                }
              });
            })
        }

    }
</script>
