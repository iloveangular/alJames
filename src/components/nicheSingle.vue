<template>
  <main class="niche-single">
    <section class="informations">
      <div class="block">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12 informations-block"><img
              src="http://res.cloudinary.com/agentlegal/image/upload/c_limit,f_auto,h_250,w_250/v1503764429/twujsubkchwqlegtslpv.png">
            </div>
            <div class="col-md-6 col-xs-12 informations-block">
              <h2 v-html="niche.name"></h2>
              <h4 v-html="niche.tagline"></h4>
              <div class="desc-text" v-html="niche.description"></div>
            </div>
            <div class="col-md-12 col-xs-12">
              <hr>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="help-request-quote">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 help-section">
            <h4><span>How we can help...</span></h4>
            <div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-cf040fc7144550360161811212511048355.png"></div>
                <div class="col-elem">
                  <h6>Forex, Binary Options, Investment Firms Licensing</h6>
                  <p>Legal advice &amp; guidance, company formation, licensing, on-going &amp; post-licensing
                    support</p>
                </div>
              </div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-dfccdb8b144550362634863514810032866.png"></div>
                <div class="col-elem">
                  <h6>Banking Licenses</h6>
                  <p>Full advisory support and guidance for International banking license applications</p>
                </div>
              </div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-2c048d7414455036478908211141081368.png"></div>
                <div class="col-elem">
                  <h6>Investment Funds</h6>
                  <p>Establishing of a UCITS, ICIS and AIFs</p>
                </div>
              </div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-31917677144550366999059844310527377.png"></div>
                <div class="col-elem">
                  <h6>PSP Licensing</h6>
                  <p>Complete assistance with the setup of licensed Payment Service Provider (PSP)</p>
                </div>
              </div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-bd9d031014455036908794414301077811.png"></div>
                <div class="col-elem">
                  <h6>E-Money Licensing</h6>
                  <p>Electronic Money Institution Licensing in different jurisdictions</p>
                </div>
              </div>
              <div class="col-group">
                <div class="col-elem"><img src="src/assets/images/3-fa751856144550371768146882310424459.png"></div>
                <div class="col-elem">
                  <h6>Additional Services</h6>
                  <p>Compliance &amp; audit, bookkeeping &amp; accounting, banking &amp; payment processing solutions,
                    liquidity provider services, professional indemnity, capital adequacy, EMIR, HR &amp; personnel
                    training</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="request-quote" v-if="!sent">
              <div class="request-quote-head">
                <h4>Request a Quote</h4></div>
              <form id="contactForm">
                <input name="action" value="request-quote" type="hidden">
                <input name="service" class="serviceVal" :value="niche._id" type="hidden">
                <div class="row">
                  <div class="col-md-6 form-group no-pad-right">
                    <input class="form-control" id="firstName" name="nameFirst" placeholder="First Name" type="text">
                  </div>
                  <div class="col-md-6 form-group">
                    <input class="form-control" id="lastName" name="nameLast" placeholder="Last Name" type="text">
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <input class="form-control" id="email" name="email" placeholder="Enter Email" type="email">
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <input class="form-control" id="phone" name="phone" placeholder="Enter Telephone Number"
                           type="text">
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <select class="form-control" id="quoteType" name="quoteType">
                      <option value="">Service Type</option>
                      <option value="firm">An Investment Firm</option>
                      <option value="payment-provider">A Payment Solution Provider</option>
                      <option value="fund">A Fund</option>
                      <option value="bank">A Bank</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <input class="btn btn-default btn-block submitNiche" value="Submit" type="submit">
                    <br>
                  </div>
                </div>
              </form>
            </div>
            <div class="request-quote" v-else>
              <div class="request-quote-head">
                <h4>Thanks for your Quote!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="vertical-tabs">
      <div class="container">
          <h1>Everything you need to know</h1>
          <div class="tab">
            <button class="tablinks active" id="defaultOpen" onclick="openCity(event, 'London')">Our Services</button>
            <button class="tablinks" onclick="openCity(event, 'Paris')">Jurisdictions</button>
            <button class="tablinks" onclick="openCity(event, 'Tokyo')">Documents/Information Required</button>
          </div>
          <div class="tabcontent" id="London" style="display: block;">
            <div>
              <p>Agent Legal is one of the few international consultancy firms that offers a complete range of advisory
                services and practical solutions related to the formation, licensing and on-going support for Forex and
                binary options firms as well as financial institutions in general.</p>
              <p>We guide our clients every step of the way starting from the selection of the right jurisdiction to
                supporting the licensed institution during their life cycles by offering the following services:</p>
              <ul>
                <li>Advice and guidance on the selection of a jurisdiction for your prospective financial institution.
                </li>
                <li>Due diligence procedures in respect of the beneficial owners and prospective directors.</li>
                <li>Incorporation of a legal entity and provision of domiciliary services.</li>
                <li>Setting up a corporate bank account for further placement of required statutory capital.</li>
                <li>Locating corporate officers and qualified personnel to meet, where mandatory, the minimum staff
                  requirements.
                </li>
                <li>Assistance with completing your license application and supporting documentation such as the
                  business plan, internal policies and procedures, including amongst others your company’s operations
                  manual, compliance arrangements, risk management and anti-money laundering policies and procedures
                  etc.
                </li>
                <li>Submitting the application to the license issuing authority, liaising with the regulator and all
                  associated parties until your license application is finalized.
                </li>
              </ul>
              <p>Once license is obtained, there will be certain requirements for a licensee in order to maintain it.
                Agent Legal will be happy to provide post-licensing support to ensure that license holders meet
                statutory regulatory requirements. To this end, we offer:</p>
              <ul>
                <li>Legal support and administration.</li>
                <li>Bookkeeping, accounting and financial audit.</li>
                <li>Regulatory compliance and reporting.</li>
                <li>Internal audit</li>
                <li>Capital adequacy reports (where applicable)</li>
                <li>EMIR (European Market Infrastructure Regulation) (where applicable)</li>
              </ul>
              <p>We can also assist with:</p>
              <ul>
                <li>Personnel training (in selected jurisdictions).</li>
                <li>Selection of trading software and technology solutions.</li>
                <li>Establishing a bridge with liquidity providers such as prime-brokers, banks and Electronic
                  Communication networks (ECN’s)
                </li>
                <li>Payment processing solutions</li>
                <li>Banking solutions and merchant accounts</li>
              </ul>
            </div>
          </div>
          <div class="tabcontent" id="Paris" style="display: none;">
            <div>
              <p>Agent Legal&nbsp;currently offers licensing solutions in the following countries:</p>
              <ul>
                <li>Belize</li>
                <li>British Virgin Islands</li>
                <li>Cayman Islands</li>
                <li>Cyprus</li>
                <li>Gibraltar</li>
                <li>Hong Kong</li>
                <li>Ireland</li>
                <li>Labuan</li>
                <li>Latvia</li>
                <li>Malta</li>
                <li>Mauritius</li>
                <li>New Zealand</li>
                <li>Panama</li>
                <li>Singapore</li>
                <li>United Kingdom</li>
              </ul>
              <p>Each of the above jurisdictions has different procedures and requirements for obtaining the license.
                These various standards will most likely affect the degree of difficulty and financial expense involved
                in acquiring the license, so we are here for you to make sure you pick up the place that best fits the
                scope of your prospective activities and meets your budget.</p>
            </div>
          </div>
          <div class="tabcontent" id="Tokyo" style="display: none;">
            <div>
              <p>Documents and information required to support your license application will depend on the jurisdiction
                and type or license chosen. However, in general you should be prepared to produce the following:</p>
              <p>A. License Application Form, duly completed and signed</p>
              <p>B. Business Plan supported by 3 to 5 years financial projections</p>
              <p>C. Your company operations manual and internal policies and procedures including risk management and
                anti-money laundering policies and procedures, corporate governance arrangements etc.</p>
              <p>D. Confirmation of payment of a minimum statutory capital</p>
              <p>E. A set of corporate documents for the applicant company, including Certificate of Incorporation,
                Memorandum and Articles of Association, Registers of Directors, Shareholders and Officers or equivalent
                documents. Where the applicant company is more than 12 (in certain cases 6) months old, a Certificate of
                Good Standing shall also be enclosed.</p>
              <div style="margin-left: 20px;">
                <p><strong>IMPORTANT PLEASE NOTE</strong></p>
                <ol type="i">
                  <li>Documents in a language other than English should be supported by a certified English translation
                    (in the case of Latvia – certified translation into Latvian)
                  </li>
                  <li>Where documents are in copies, these should be certified as true copy by Notary Public and
                    legalized via Apostille (where appropriate)
                  </li>
                  <li>Directors of the applicant company must only be physical persons.</li>
                </ol>
              </div>
              <p>F. All directors, managers, officers, shareholders/beneficial owners of the applicant company shall
                produce as a minimum:</p>
              <div style="margin-left: 20px;">
                <ol>
                  <li>a completed Personal Questionnaire in the prescribed form;</li>
                  <li>CV;</li>
                  <li>a copy of a valid passport certified by Notary Public;</li>
                  <li>confirmation of residential address (PO Box not accepted) in the form of a recent utility bill or
                    bank account statement or credit card statement;
                  </li>
                  <li>a bank reference letter issued by a bank in which said individuals hold their personal account
                    (the reference should state as a minimum that the bank has known an individual for at least 2 years
                    and that the client-bank relationship has been maintained to the bank’s satisfaction);
                  </li>
                  <li>a professional reference letter issued by a professional organization, such as a law office, an
                    audit firm, certified public accountants etc., stating as a minimum that the organization in
                    question has known an individual for at least 2 years and that the business affairs have been
                    conducted satisfactorily;
                  </li>
                  <li>a clean criminal record certificate issued by the local police</li>
                </ol>
                <div style="margin-left: 20px;">
                  <p><strong>IMPORTANT PLEASE NOTE</strong></p>
                  <ol type="i">
                    <li>Documents referred to in points 4, 5, 6 and 7 should be less than 3 months old at the date of
                      submission to the regulator.
                    </li>
                    <li>Documents in a language other than English should be supported by a certified English
                      translation (in the case of Latvia – certified translation into Latvian).
                    </li>
                    <li>If a shareholder or an officer of the applicant company is a body corporate, then such body
                      corporate shall provide the same documents as stated in section E, whereas each director, officer
                      and shareholder/beneficial owner of the said body corporate shall provide the documents numbered
                      from 1 to 7 in Section F.
                    </li>
                  </ol>
                </div>
              </div>
              <p>Please note that your license issuing authority may require any other additional information or
                documentation it may consider necessary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="vertical-tabs mobile" style="display: none;">
      <div class="container">
        <h1>Everything you need to know</h1>
        <div class="panel-group" id="accordion1">
          <div class="panel panel-default">
            <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                 data-target="#collapse-08" aria-expanded="false">
              <h4 class="panel-title">Our Services</h4></div>
            <div class="panel-collapse collapse" id="collapse-08" aria-expanded="false" style="height: 0px;">
              <div class="panel-body">
                <div class="tabcontent1" id="London" style="display: block !important;">
                  <div>
                    <p>Agent Legal is one of the few international consultancy firms that offers a complete range of
                      advisory services and practical solutions related to the formation, licensing and on-going support
                      for Forex and binary options firms as well as financial institutions in general.</p>
                    <p>We guide our clients every step of the way starting from the selection of the right jurisdiction
                      to supporting the licensed institution during their life cycles by offering the following
                      services:</p>
                    <ul>
                      <li>Advice and guidance on the selection of a jurisdiction for your prospective financial
                        institution.
                      </li>
                      <li>Due diligence procedures in respect of the beneficial owners and prospective directors.</li>
                      <li>Incorporation of a legal entity and provision of domiciliary services.</li>
                      <li>Setting up a corporate bank account for further placement of required statutory capital.</li>
                      <li>Locating corporate officers and qualified personnel to meet, where mandatory, the minimum
                        staff requirements.
                      </li>
                      <li>Assistance with completing your license application and supporting documentation such as the
                        business plan, internal policies and procedures, including amongst others your company’s
                        operations manual, compliance arrangements, risk management and anti-money laundering policies
                        and procedures etc.
                      </li>
                      <li>Submitting the application to the license issuing authority, liaising with the regulator and
                        all associated parties until your license application is finalized.
                      </li>
                    </ul>
                    <p>Once license is obtained, there will be certain requirements for a licensee in order to maintain
                      it. Agent Legal will be happy to provide post-licensing support to ensure that license holders
                      meet statutory regulatory requirements. To this end, we offer:</p>
                    <ul>
                      <li>Legal support and administration.</li>
                      <li>Bookkeeping, accounting and financial audit.</li>
                      <li>Regulatory compliance and reporting.</li>
                      <li>Internal audit</li>
                      <li>Capital adequacy reports (where applicable)</li>
                      <li>EMIR (European Market Infrastructure Regulation) (where applicable)</li>
                    </ul>
                    <p>We can also assist with:</p>
                    <ul>
                      <li>Personnel training (in selected jurisdictions).</li>
                      <li>Selection of trading software and technology solutions.</li>
                      <li>Establishing a bridge with liquidity providers such as prime-brokers, banks and Electronic
                        Communication networks (ECN’s)
                      </li>
                      <li>Payment processing solutions</li>
                      <li>Banking solutions and merchant accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                 data-target="#collapse-09" aria-expanded="false">
              <h4 class="panel-title">Jurisdictions</h4></div>
            <div class="panel-collapse collapse" id="collapse-09" aria-expanded="false">
              <div class="panel-body">
                <div class="tabcontent1" id="Paris">
                  <div>
                    <p>Agent Legal&nbsp;currently offers licensing solutions in the following countries:</p>
                    <ul>
                      <li>Belize</li>
                      <li>British Virgin Islands</li>
                      <li>Cayman Islands</li>
                      <li>Cyprus</li>
                      <li>Gibraltar</li>
                      <li>Hong Kong</li>
                      <li>Ireland</li>
                      <li>Labuan</li>
                      <li>Latvia</li>
                      <li>Malta</li>
                      <li>Mauritius</li>
                      <li>New Zealand</li>
                      <li>Panama</li>
                      <li>Singapore</li>
                      <li>United Kingdom</li>
                    </ul>
                    <p>Each of the above jurisdictions has different procedures and requirements for obtaining the
                      license. These various standards will most likely affect the degree of difficulty and financial
                      expense involved in acquiring the license, so we are here for you to make sure you pick up the
                      place that best fits the scope of your prospective activities and meets your budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1"
                 data-target="#collapse-10" aria-expanded="false">
              <h4 class="panel-title">Documents/Information Required</h4></div>
            <div class="panel-collapse collapse" id="collapse-10" aria-expanded="false">
              <div class="panel-body">
                <div class="tabcontent1" id="Tokyo">
                  <div>
                    <p>Documents and information required to support your license application will depend on the
                      jurisdiction and type or license chosen. However, in general you should be prepared to produce the
                      following:</p>
                    <p>A. License Application Form, duly completed and signed</p>
                    <p>B. Business Plan supported by 3 to 5 years financial projections</p>
                    <p>C. Your company operations manual and internal policies and procedures including risk management
                      and anti-money laundering policies and procedures, corporate governance arrangements etc.</p>
                    <p>D. Confirmation of payment of a minimum statutory capital</p>
                    <p>E. A set of corporate documents for the applicant company, including Certificate of
                      Incorporation, Memorandum and Articles of Association, Registers of Directors, Shareholders and
                      Officers or equivalent documents. Where the applicant company is more than 12 (in certain cases 6)
                      months old, a Certificate of Good Standing shall also be enclosed.</p>
                    <div style="margin-left: 20px;">
                      <p><strong>IMPORTANT PLEASE NOTE</strong></p>
                      <ol type="i">
                        <li>Documents in a language other than English should be supported by a certified English
                          translation (in the case of Latvia – certified translation into Latvian)
                        </li>
                        <li>Where documents are in copies, these should be certified as true copy by Notary Public and
                          legalized via Apostille (where appropriate)
                        </li>
                        <li>Directors of the applicant company must only be physical persons.</li>
                      </ol>
                    </div>
                    <p>F. All directors, managers, officers, shareholders/beneficial owners of the applicant company
                      shall produce as a minimum:</p>
                    <div style="margin-left: 20px;">
                      <ol>
                        <li>a completed Personal Questionnaire in the prescribed form;</li>
                        <li>CV;</li>
                        <li>a copy of a valid passport certified by Notary Public;</li>
                        <li>confirmation of residential address (PO Box not accepted) in the form of a recent utility
                          bill or bank account statement or credit card statement;
                        </li>
                        <li>a bank reference letter issued by a bank in which said individuals hold their personal
                          account (the reference should state as a minimum that the bank has known an individual for at
                          least 2 years and that the client-bank relationship has been maintained to the bank’s
                          satisfaction);
                        </li>
                        <li>a professional reference letter issued by a professional organization, such as a law office,
                          an audit firm, certified public accountants etc., stating as a minimum that the organization
                          in question has known an individual for at least 2 years and that the business affairs have
                          been conducted satisfactorily;
                        </li>
                        <li>a clean criminal record certificate issued by the local police</li>
                      </ol>
                      <div style="margin-left: 20px;">
                        <p><strong>IMPORTANT PLEASE NOTE</strong></p>
                        <ol type="i">
                          <li>Documents referred to in points 4, 5, 6 and 7 should be less than 3 months old at the date
                            of submission to the regulator.
                          </li>
                          <li>Documents in a language other than English should be supported by a certified English
                            translation (in the case of Latvia – certified translation into Latvian).
                          </li>
                          <li>If a shareholder or an officer of the applicant company is a body corporate, then such
                            body corporate shall provide the same documents as stated in section E, whereas each
                            director, officer and shareholder/beneficial owner of the said body corporate shall provide
                            the documents numbered from 1 to 7 in Section F.
                          </li>
                        </ol>
                      </div>
                    </div>
                    <p>Please note that your license issuing authority may require any other additional information or
                      documentation it may consider necessary</p>
                  </div>
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
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        niche: '',
        sent: ''
      }
    },
    mounted() {
      var vm = this;
      axios.post(config.url + 'niche-service/' + this.$route.params.nicheId)
        .then(function (response) {
          vm.niche = response.data[0];

        })
        .catch(function (error) {
          console.log(error);
        });
      $(document).ready(function () {
        var serviceId = $('.serviceVal').val();
        var lsId = localStorage.getItem('quoteSent');
        console.log(serviceId);
        if(lsId = serviceId) {
          console.log('ho ho ho');
          vm.sent = true;
        }
        function submitForm() {
          $.ajax({
            type: "GET",
            url: config.url + 'quote',
            data: {
              'service': $('.serviceVal').val(),
              'name': {
                'first': $("#firstName").val(),
                'last': $("#lastName").val(),
              },
              'email': $("#email").val(),
              'phone': $('#phone').val(),
              'quoteType': $("#quoteType").val()
            },
            success: function (data) {
              vm.sent = true;
              localStorage.setItem('quoteSent', serviceId);
            },
            error: function (data) {
              console.log(data);
              vm.sent = false;
            }
          })
        }
        // Validation
        $("#contactForm").validate({
          rules: {
            "nameFirst": {
              required: true,
              minlength: 2
            },
            "nameLast": {
              required: true,
              minlength: 2
            },
            "phone": {
              required: true,
              digits: true
            },
            "email": {
              required: true,
              email: true
            },
            "quoteType": {
              required: true
            }
          },
          messages: {
            "nameFirst": {
              required: "Please, enter a first name"
            },
            "nameLast": {
              required: "Please, enter a last name"
            },
            "quoteType": {
              required: "Please choose a service"
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
