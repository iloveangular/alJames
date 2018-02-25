<template>
    <main class="contact-us-page page-content">
        <section class="contact-text">
            <div class="container">
                <h1>Affiliate Signup</h1></div>
        </section>
        <section class="contact-form-details">
            <div class="container">
                <div class="row">
                    <div class="thing" style="width: 80%; margin: 0 auto;">
                        <div class="contact-form contact-section clearfix">
                            <div class="contact-section-head">
                                <h2>Contact Information</h2></div>
                                <input id="contact" name="action" value="submit-application" type="hidden">
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="name">Full Name</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="name" name="name.full" type="text">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="email" name="email" type="email">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="phone">Telephone Number</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="phone" name="phone" type="text">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="linkedInUrl">LinkedIn Url</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="linkedInUrl" name="linkedInUrl" type="text">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="twitterUrl">Twitter Url</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="twitterUrl" name="twitterUrl" type="text">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="facebookUrl">Facebook Url</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="facebookUrl" name="facebookUrl" type="text">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-3">
                                        <label for="companyWebsite">Company Website</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" id="companyWebsite" name="companyWebsite" type="text">
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
                                        <p>Select if you are interested in selling company formation or bank account packages. </p>
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
                                            <input class="checkbox" id="speciality" name="specialityServices" type="checkbox">
                                            <label>Specialty Services</label>
                                        </div>
                                        <p>Select if you are interested in offering specialty services. </p>
                                        <hr>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-right form-actions" style="text-align: center;">
                                    <input class="btn btn-green submit-affiliate" name="submit" value="Submit" type="submit">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>