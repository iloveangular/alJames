<template>
  <main id="territory">
    <div class="registration-body">
      <main class="registration-page">
        <section class="informations">
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-xs-4 informations-block"><img
                  src="src/assets/images/trademark-mark.png"></div>
                <div class="col-md-6 col-xs-8 informations-block">
                  <h2>Trademark Registration &amp; Expert Assistance</h2>
                  <ul>
                    <li>Available across 5 continents, in 70+ countries</li>
                    <li>Global trademark search, registration, monitoring and maintenance</li>
                    <li>Brand &amp; intellectual property expert support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="container solve-container-register">
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <p class="step-text pull-right"></p>
                </div>
                <div class="col-sm-12 col-md-8">
                  <div class="solve-conflict-register">
                    Agent Legal is an official member of the International Trademark Association
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="registration-form">
          <div class="container">
            <div class="trademark-registration">
              <h4>1.Trademark Registration</h4>
              <div class="trademark-text">
                <p>
                  Please Note: It is highly recommended to request a Trademark Search before you apply for a Trademark
                  Registration, to ensure its approval. You can request the Trademark Search <a
                  class="clr-d-grey fnt-oswald-medium"
                  href="http://dev.mishatechnologies.com/trademarks/search">here</a>.</p>
                <p><span
                  class="rtmark_descr">Select what you want to register and give information accordingly			</span>
                </p>
              </div>
              <div class="trademark-registration-form">
                <div class="tab">
                  <div class="col-md-2 input-text">
                    <label>
                      <input class="tablinksactiveactive" id="defaultOpen" name="trmark_type"
                             value="wordmark" checked="" v-on:click="openForm('form-1')"
                             type="radio"> Wordmark</label>
                  </div>
                  <div class="col-md-2 input-text">
                    <label>
                      <input class="tablinks" name="trmark_type" value="logo" v-on:click="openForm('form-2')" type="radio"> Logo</label>
                  </div>
                  <div class="col-md-2 input-text">
                    <label>
                      <input class="tablinks" name="trmark_type" value="wordmark-and-logo"
                             v-on:click="openForm('form-3')" type="radio"> Wordmark &amp; Logo</label>
                  </div>
                </div>
                <div class="tabcontent" id="form-1" style="display: block;">
                  <div class="col-xs-12" style="padding: 0;">
                    <div class="row col-md-6">
                      <div class="inupt-name">
                        <input id="wordmark_name" name="wordmark" class="form1-wordmark" placeholder="Type your Wordmark Name" type="text">
                        <small class="error">Name is required and must be a string.</small>
                      </div>
                      <div class="text-area">
                                                <textarea id="wordmark_descr" class="form1-desc" rows="10" name="description"
                                                          placeholder="Describe the mark you want to register"></textarea>
                        <small class="error">A description address is required.</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabcontent" id="form-2" style="display: none;">
                  <div class="col-xs-12" style="padding: 0;">
                    <div class="row col-md-6">
                      <div class="text-area">
                        <textarea id="wordmark_descr" class="form2-desc" rows="10" name="description" placeholder="Describe the mark you want to register"></textarea>
                        <small class="error">A description address is required.</small>
                      </div>
                    </div>
                    <div class="col-xs-12 upload-div" style="padding: 0; margin-top: 36px;">
                      <div class="row col-md-6">
                        <label for="logo">Upload Logo</label>
                        <br><span class="upload-file-container"><input name="logo_upload"
                                                                       accept="image/*"
                                                                       type="file"></span></div>
                      <div class="col-md-6 right-ul"><span class="note clr-red">* Please Note Accepted file type:</span><span
                        class="note"><ul><li>JPEG format</li><li>Maximum file size: 2MB</li><li>Colour mode: RGB, Grayscale, BW or CMYK</li><li>Printing resolution: min 96, max 300 DPI</li><li>Minimum image size: 800 X 600 pixels</li><li>Maximum image size: 2835 x 2010 pixels</li></ul></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabcontent" id="form-3" style="display: none;">
                  <div class="col-xs-12" style="padding: 0;">
                    <div class="row col-md-6">
                      <div class="inupt-name">
                        <input id="wordmark_name" name="wordmark" class="form3-wordmark" placeholder="Type your Wordmark Name" type="text">
                        <small class="error">Name is required and must be a string.</small>
                      </div>
                      <div class="text-area">
                        <textarea id="wordmark_descr" class="form3-desc" rows="10" name="description" placeholder="Describe the mark you want to register"></textarea>
                        <small class="error">A description address is required.</small>
                      </div>
                    </div>
                    <div class="col-md-12 upload-div" style="padding: 0; margin-top: 36px;">
                      <div class="row col-md-6">
                        <label for="fileName">Upload Logo</label>
                        <br><span class="upload-file-container"><input name="logo_upload"
                                                                       accept="image/*"
                                                                       type="file"></span></div>
                      <div class="col-md-6 right-ul"><span class="note clr-red">* Please Note Accepted file type:</span><span
                        class="note"><ul><li>JPEG format</li><li>Maximum file size: 2MB</li><li>Colour mode: RGB, Grayscale, BW or CMYK</li><li>Printing resolution: min 96, max 300 DPI</li><li>Minimum image size: 800 X 600 pixels</li><li>Maximum image size: 2835 x 2010 pixels</li></ul></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 radio-last-space"><span class="rtmark_descr fnt-size-13">Has this Trademark been used in commerce?</span>
                  <div class="radio-last pull-right">
                    <input name="hasBeenUsed" value="yes" type="radio">
                    <label class="fnt-size-13">Yes</label>
                    <input name="hasBeenUsed" value="No" checked="" type="radio">
                    <label class="fnt-size-13">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="trademark-registration select-territories">
              <h4>2. Select Territories</h4>
              <div class="trademark-dynemic">
                <div class="col-md-5">
                  <p>Select from below</p>
                  <ul>
                    <li v-for="(country, index) in countries">
                      <label :for="'chk' + (index + 1)">
                        <input :id="'chk' + (index + 1)" class="terr" name="territories" :value="country.name"
                               :data-price="country.price" :data-id="country._id" :data-class-price="country.classPrice"
                               type="checkbox">{{country.name}}
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7">
                  <p>Select territories</p>
                  <div id="result"></div>
                </div>
              </div>
            </div>
            <div class="trademark-registration select-class">
              <h4>3. Select Classes</h4>
              <div class="trademark-text">
                <p>Select the classes you want to register your trademark in.</p>
                <p>Search for classes by keyword using our <a class="clr-d-grey fnt-oswald-medium"
                                                              href="#">Class Search</a>.</p>
                <div class="trademark-dynemic">
                  <div class="col-md-12">
                    <ul>
                      <li v-for="(klasa, index) in classes" :class="index + 1">
                        <label :for="'cls' + (index + 1)">
                          <input class="cls" :id="index + 1" name="classes"
                                 :value="klasa.text"
                                 :data-id="klasa._id"
                                 :data-name="klasa.name"
                                 type="checkbox"><span><b>{{ index + 1 }}</b></span><span> {{klasa.text}}</span></label>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-12">
                    <p>Selected classes:</p>
                    <div id="clsresult"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="trademark-registration owner-details">
              <h4>4. Owner Details</h4>
              <div class="trademark-text">
                <p>
                  Please specify the owner of the Trademark below and give all the details required.</p>
              </div>
              <div class="row col-md-6 font-style">
                <!-- Nav tabs-->
                <div class="tab">
                  <div class="col-md-2 input-text">
                    <label>
                      <input class="tablinks" id="individual" name=" ownerType" value="individual"
                             checked="" v-on:click="openSecondForm('form-1')" type="radio">
                      Individual</label>
                  </div>
                  <div class="col-md-2 input-text">
                    <label>
                      <input class="tablinks" id="company1" name=" ownerType" value="company"
                             v-on:click="openSecondForm('form-2')" type="radio"> Company</label>
                  </div>
                  <!-- Tab panes-->
                  <div class="tab-content" id="form-4" style="display:block;">
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="title">Title<span
                        class="star">*</span></label>
                      <select id="ind_title" class="form1-title" name="title">
                        <option value="">Please Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Miss.">Miss.</option>
                        <option value="Dr.">Dr.</option>
                      </select>
                      <small class="error">Please select a title</small>
                    </div>
                    <div class="form-group">
                      <div class="large-6 column-first">
                        <label class="mar-btm-5" for="firstname" role="alert">First Name<span
                          class="star">*</span></label>
                        <input id="ind_first_name" name="firstname" placeholder=""
                               data-invalid="" aria-invalid="true" type="text" class="form1-firstName">
                        <small class="error">First Name is required</small>
                      </div>
                      <div class="large-6 column">
                        <label class="mar-btm-5" for="lastname">Last Name<span
                          class="star">*</span></label>
                        <input id="ind_last_name" name="lastname" placeholder="" type="text" class="form1-lastName">
                        <small class="error">Last Name is required</small>
                      </div>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="nationality" role="alert">Nationality<span
                        class="star">*</span></label>
                      <input id="ind_nationality" name="nationality" placeholder=""
                             data-invalid="" aria-invalid="true" type="text" class="form1-nationality">
                      <small class="error">Nationality is required</small>
                    </div>
                    <div class="large-8 column form-group">
                      <label class="mar-btm-5" for="address">Address<span
                        class="star">*</span></label>
                      <input id="ind_address" name="address" placeholder="" type="text" class="form1-address">
                      <small class="error">Address is required</small>
                    </div>
                    <div class="large-4 column form-group">
                      <label class="mar-btm-5" for="postalCode">Postal Code<span
                        class="star">*</span></label>
                      <input id="ind_post_code" name="postalCode" placeholder="" type="text" class="form1-zip">
                      <small class="error">Postal Code is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="city">City<span class="star">*</span></label>
                      <input id="ind_city" name="city" placeholder="" type="text" class="form1-city">
                      <small class="error">City name is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="country" role="alert">Country<span
                        class="star">*</span></label>
                      <select class="input-fields form1-country" id="ind_country" name="country" data-invalid=""
                              aria-invalid="true">
                        <option value="">Please Select Country</option>
                        <option>Afghanistan</option>
                        <option>Åland Islands</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>Andorr A</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua And Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia And Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>British Indian Ocean Territory</option>
                        <option>Brunei Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Cayman Islands</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos ( Keeling ) Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Congo</option>
                        <option>The Democratic Republic Of The</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Cote D ' Ivoire</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Falkland Islands ( Malvinas )</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>French Polynesia</option>
                        <option>French Southern Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Heard Island And Mcdonald Islands</option>
                        <option>Holy See ( Vatican City State )</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Islamic Republic Of</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Isle Of Man</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea</option>
                        <option>Democratic People ' S Republic Of</option>
                        <option>Korea</option>
                        <option>Republic Of</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Lao People ' S Democratic Republic</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libyan Arab Jamahiriya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Macedonia</option>
                        <option>The Former Yugoslav Republic Of</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Federated States Of</option>
                        <option>Moldova</option>
                        <option>Republic Of</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>Netherlands Antilles</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk Island</option>
                        <option>Northern Mariana Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestinian Territory</option>
                        <option>Occupied</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Reunion</option>
                        <option>Romania</option>
                        <option>Russian Federation</option>
                        <option>RWANDA</option>
                        <option>Saint Helena</option>
                        <option>Saint Kitts And Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Pierre And Miquelon</option>
                        <option>Saint Vincent And The Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome And Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia And Montenegro</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia And The South Sandwich Islands</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Svalbard And Jan Mayen</option>
                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syrian Arab Republic</option>
                        <option>Taiwan</option>
                        <option>Province Of China</option>
                        <option>Tajikistan</option>
                        <option>Thailand</option>
                        <option>Timor Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad And Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Turks And Caicos Islands</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>United States Minor Outlying Islands</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Venezuela</option>
                        <option>Viet Nam</option>
                        <option>Virgin Islands</option>
                        <option>British</option>
                        <option>Virgin Islands</option>
                        <option>U S</option>
                        <option>Wallis And Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                      <small class="error">Country is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="phone">Telephone No.<span
                        class="star">*</span></label>
                      <input id="ind_telephone" name="phone" class="form1-phone" placeholder="" type="text">
                      <small class="error">Telephone No is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="email">Email<span
                        class="star">*</span></label>
                      <input id="ind_email" name="email" placeholder="" class="form1-email" type="email">
                      <small class="error">Email is required</small>
                    </div>
                  </div>
                  <div class="tab-content" id="form-5" style="display:none;">
                    <div class="form-group">
                      <div class="large-6 column-first">
                        <label class="mar-btm-5" for="firstname" role="alert">First Name<span
                          class="star">*</span></label>
                        <input id="ind_first_name" name="firstname" placeholder=""
                               data-invalid="" aria-invalid="true" type="text" class="form2-firstName">
                        <small class="error">First Name is required</small>
                      </div>
                      <div class="large-6 column">
                        <label class="mar-btm-5" for="lastname">Last Name<span
                          class="star">*</span></label>
                        <input id="ind_last_name" name="lastname" class="form2-lastName" placeholder="" type="text">
                        <small class="error">Last Name is required</small>
                      </div>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="company" role="alert">Nationality<span
                        class="star">*</span></label>
                      <input id="comp_name" name="company" value="" class="form2-nationality" placeholder="" data-invalid=""
                             aria-invalid="true" type="text">
                      <small class="error">Company name is required</small>
                    </div>
                    <div class="large-8 column form-group">
                      <label class="mar-btm-5" for="address">Address<span
                        class="star">*</span></label>
                      <input id="ind_address" name="address" placeholder="" class="form2-address" type="text">
                      <small class="error">Address is required</small>
                    </div>
                    <div class="large-4 column form-group">
                      <label class="mar-btm-5" for="postalCode">Postal Code<span
                        class="star">*</span></label>
                      <input id="ind_post_code" name="postalCode" placeholder="" class="form2-zip" type="text">
                      <small class="error">Postal Code is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="city">City<span class="star">*</span></label>
                      <input id="ind_city" name="city" placeholder="" type="text" class="form2-city">
                      <small class="error">City name is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="country" role="alert">Country<span
                        class="star">*</span></label>
                      <select class="input-fields form2-country" id="ind_country" name="country" data-invalid=""
                              aria-invalid="true">
                        <option value="">Please Select Country</option>
                        <option>Afghanistan</option>
                        <option>Åland Islands</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>Andorr A</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua And Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia And Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>British Indian Ocean Territory</option>
                        <option>Brunei Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Cayman Islands</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos ( Keeling ) Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Congo</option>
                        <option>The Democratic Republic Of The</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Cote D ' Ivoire</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Falkland Islands ( Malvinas )</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>French Polynesia</option>
                        <option>French Southern Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Heard Island And Mcdonald Islands</option>
                        <option>Holy See ( Vatican City State )</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Islamic Republic Of</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Isle Of Man</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea</option>
                        <option>Democratic People ' S Republic Of</option>
                        <option>Korea</option>
                        <option>Republic Of</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Lao People ' S Democratic Republic</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libyan Arab Jamahiriya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Macedonia</option>
                        <option>The Former Yugoslav Republic Of</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Federated States Of</option>
                        <option>Moldova</option>
                        <option>Republic Of</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>Netherlands Antilles</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk Island</option>
                        <option>Northern Mariana Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestinian Territory</option>
                        <option>Occupied</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Reunion</option>
                        <option>Romania</option>
                        <option>Russian Federation</option>
                        <option>RWANDA</option>
                        <option>Saint Helena</option>
                        <option>Saint Kitts And Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Pierre And Miquelon</option>
                        <option>Saint Vincent And The Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome And Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia And Montenegro</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia And The South Sandwich Islands</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Svalbard And Jan Mayen</option>
                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syrian Arab Republic</option>
                        <option>Taiwan</option>
                        <option>Province Of China</option>
                        <option>Tajikistan</option>
                        <option>Thailand</option>
                        <option>Timor Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad And Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Turks And Caicos Islands</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>United States Minor Outlying Islands</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Venezuela</option>
                        <option>Viet Nam</option>
                        <option>Virgin Islands</option>
                        <option>British</option>
                        <option>Virgin Islands</option>
                        <option>U S</option>
                        <option>Wallis And Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                      <small class="error">Country is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="phone">Telephone No.<span
                        class="star">*</span></label>
                      <input id="ind_telephone" name="phone" placeholder="" class="form2-phone" type="text">
                      <small class="error">Telephone No is required</small>
                    </div>
                    <div class="large-12 column form-group">
                      <label class="mar-btm-5" for="email">Email<span
                        class="star">*</span></label>
                      <input id="ind_email" name="email" placeholder="" class="form2-phone" type="email">
                      <small class="error">Email is required</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="trademark-registration owner-details total-price">
              <h4>Trademark Registration</h4><span>Territories </span><span
              id="territories_count">0</span><span>, Classes </span><span id="classes_count">0</span>
              <div class="col-xs-12 text-right" style="padding: 0;">
                <div class="price-div">
                  <h4>TOTAL PRICE <span class="fnt-oswald-medium" id="currency">{{value}}</span><span
                    class="fnt-oswald-medium" id="total">0</span></h4>
                  <div class="form-actions">
                    <button class="price-green button green continue">Continue</button>
                  </div>
                  <input type="hidden" id="total_price">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="browse-companies">
          <div class="container">
            <div class="panel-two">
              <div class="col-md-12 col-sm-12" style="padding: 0;">
                <h6 class="fnt-size-24 mob-fnt-size-21">Everything you need to know</h6></div>
            </div>
            <div class="panel-group" id="accordion">
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle" id="accordion-toggle-1"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne"
                     aria-expanded="true">
                  <div class="sprite1 about_tm-01"></div>
                  <h4 class="panel-title">About</h4></div>
                <div class="panel-collapse collapse" id="collapseOne" aria-expanded="false" style="">
                  <div class="panel-body">
                    <p>
                      A Trademark is a symbol, phrase, design or word that helps distinguish one manufacturer of goods
                      from another. It is a key identifier of a company used all over the world. An example of a famous
                      trademark is Apple, which is represented by a bitten apple. This mark has no writing, so the image
                      itself is the key identifier for Apple. Similarly, a service mark follows the same features but is
                      different because it is used to identify a service. An example of a well-known service mark is
                      McDonald's whose mark is a golden 'M' which is globally recognized by all ages since 1955.
                      Additionally, in certain circumstances, trade/service marks can also involve colours, music, and
                      smell. For example, Coca-Cola is well known for its red and white colour combination, and Nokia is
                      known for its unique ringtone.
                    </p><b>Property and Intellectual Property</b>
                    <p>
                      'Intellectual property,' however, has no physical embodiment that one can see, touch or feel such
                      as literature and music. Trade names, artistic designs and digital programming are also part of
                      the intellectual property band. Like physical property, the intellectual property can be owned,
                      purchased, sold, transferred, and/or licensed. Systems of ownership of intellectual property are
                      relatively new historically.
                    </p><b>Trademark Rights</b>
                    <p>
                      Trademarks adopt rights in two ways: 1) by registration, and 2) by using the mark first. Both ways
                      can be protected. By registering, you will gain many advantages from the federal law, including
                      the use of the ® symbol on your trademark. You will also have the ability to show others of your
                      ownership to the brand, making it less likely for others to consume. Under common law, being the
                      first to use a specific trademark also comes with certain rights that may stop others from using
                      your mark. However, this can be risky because it does not come with as many benefits as a
                      registered trademark would.</p>
                    <p><b>TIP</b></p>
                    <p>
                      The more unique a trademark is, the less chance it has for it to be duplicated, which means more
                      protection. It is also good to know that successful marks are normally those that have no relation
                      to the service or goods.
                    </p><b>Trademark Registration</b>
                    <p>
                      Before adopting a new mark, it is advisable to have a search conducted and evaluated by a
                      qualified attorney. Someone else may already have rights to virtually the same mark, and it is
                      better to know about that or other potentially conflicting marks before you have made an
                      investment in your new mark. Lack of knowledge is normally not a defense to trademark
                      infringement. The extent of searching that is warranted depends on the nature of the mark, the
                      goods or services for which it is to be used, and the countries in which the mark is intended to
                      be used. Basic searches typically focus on trademark registration databases. Usually, an
                      application to register a trademark is made to the national trademark office in the country or
                      region where the applicant wishes to protect the mark. The application will usually include the
                      name and address of the applicant, a representation of the mark, a listing of the goods or
                      services that are desired to be covered by the registration, and the official filing fee. In some
                      jurisdictions, it may also be necessary to file specimens showing how the mark is used. However,
                      most countries do not require a mark to be used before it is registered.</p>
                    <b>Trademark Symbols</b>
                    <p>
                      Trademarks are often used with designations or symbols, i.e. ®, also known as Reg., TM, and SM.
                      These symbols work as trademark identifiers classifying whether or not a trademark is registered.
                      Unregistered Trademarks use the symbols TM and SM to notify competitors and potential customers of
                      their plan to become legal and are used to discourage others from using them. Each designation is
                      used for a different purpose; SM is used for a service mark, whereas TM is used for a trademark.
                      The ® symbol refers to a registered trademark. This small but powerful symbol will allow the owner
                      to claim against infringement if an issue occurs. It is always a good idea to register your
                      trademark to have secure benefits. The protection of your trademark will depend on your country of
                      registration which has its ups and downs. Not all regional offices will give out the same
                      benefits, so choose your country wisely so that you receive the all the information and protection
                      you need. Your mark should represent your business in a creative yet effective way, making sure
                      the meaning explains your business accurately. It is only when your mark is used consistently, i.e
                      same font type and colour, that your mark becomes respected and desired.</p>
                  </div>
                </div>
              </div>
              <!-- start-->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-2"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo"
                     aria-expanded="false">
                  <div class="sprite1 about_tm-02"></div>
                  <h4 class="panel-title">Registration</h4></div>
                <div class="panel-collapse collapse" id="collapseTwo" aria-expanded="false">
                  <div class="panel-body">
                    <p>
                      A Trademark is the key identifier of a business so it is only normal to want to protect it from
                      unauthorized users. Using a trademark without registration will not come with many benefits. The
                      main concern is that there will always be a high risk of losing it at a later stage as others
                      would see it as available and register it. By registering your trademark, you will hold all the
                      rights as well as the ability to take legal action against anyone who uses it unlawfully. If,
                      however, you do not decide to register your trademark, you will risk your chances of it being
                      registered by someone else.</p>
                  </div>
                </div>
              </div>
              <!-- end-->
              <!-- start-->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-3"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree"
                     aria-expanded="false">
                  <div class="sprite1 about_tm-03"></div>
                  <h4 class="panel-title">Our Pricelist</h4></div>
                <div class="panel-collapse collapse" id="collapseThree" aria-expanded="false">
                  <div class="panel-body">
                    <p>
                      At Agent Legal, we make sure that our customers receive the best prices possible for their
                      trademark registration. Please keep in mind that each jurisdiction will have a trademark
                      authority, used to protect your trademark for a small fee.</p>
                  </div>
                </div>
              </div>
              <!-- end-->
              <!-- start-->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-4"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseFour"
                     aria-expanded="false">
                  <div class="sprite1 about_tm-04"></div>
                  <h4 class="panel-title">Search</h4></div>
                <div class="panel-collapse collapse" id="collapseFour" aria-expanded="false">
                  <div class="panel-body">
                    <p>
                      Before registering, it is recommended to check the availability of your suggested trademark. You
                      can do this by simply conducting a search using our 'Trademark Search' section. By doing a
                      thorough search, you eliminate any possibilities of plagiarism with existing companies.</p>
                  </div>
                </div>
              </div>
              <!-- end-->
              <!-- start-->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-5"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseFive"
                     aria-expanded="false">
                  <div class="sprite1 about_tm-05"></div>
                  <h4 class="panel-title">Watch</h4></div>
                <div class="panel-collapse collapse" id="collapseFive" aria-expanded="false">
                  <div class="panel-body">
                    <p>
                      Still not convinced to perform a Trademark search? You will be shocked to find out that not all
                      trademark authorities go through the process of investigating whether or not a trademark already
                      exists. This can accumulate chaos as authorities from different parts of the world may register
                      the same mark at different times creating a legal mess. That's why it should be your priority to
                      monitor similar or identical registered trademarks. It is only by monitoring that you can identify
                      whether or not legal action should be imposed.</p>
                  </div>
                </div>
              </div>
              <!-- end-->
              <!-- start-->
              <div class="panel panel-default">
                <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-6"
                     data-toggle="collapse" data-parent="#accordion" data-target="#collapseSix"
                     aria-expanded="false">
                  <div class="sprite1 about_tm-06"></div>
                  <h4 class="panel-title">WorkFlow</h4></div>
                <div class="panel-collapse collapse" id="collapseSix" aria-expanded="false">
                  <div class="panel-body">
                    <p>
                      Registering your trademark at Agent Legal is simple, and we understand that you may want to know
                      the process. So, for your acknowledgement, we have created a workflow showing the whole
                      registration process.</p>
                    <div class="mar-btm-20">
                      <p><strong>1. Place your order online </strong></p>
                      <p>Verify your order and pay online through our secured payment system.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>2. We contact you</strong></p>
                      <p>
                        Once your order has been submitted, we will send you an order confirmation email and one of our
                        attorneys will contact you to advise further procedure.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>3. Trademark Application</strong></p>
                      <p>
                        We will complete your trademark application in the territory or country you wish to register
                        your trademark by sending it to the Trademark Authority.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>4. Application accepted</strong></p>
                      <p>
                        Once your application has been accepted by the Trademark Authority, we will send you a
                        notification letter which will include the application number and submission date.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>5. Examination of the trademark application</strong></p>
                      <p>
                        Once your application has been processed by the Trademarks Authority, examiners will begin the
                        initial examination to ensure that all the formal requirements of the application form have been
                        satisfied as set out in the Trademarks Act. In case your application is refused you will be
                        informed accordingly.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>6. Publication of the trademark application</strong></p>
                      <p>
                        Publication of the trademark in the Official Gazette is mandatory as third parties have the
                        right to object to the registration within a specific time frame by filing an opposition. In
                        case a third party opposes your registration, you will be informed accordingly.</p>
                    </div>
                    <div class="mar-btm-20">
                      <p><strong>7. Registration of your trademark</strong></p>
                      <p>
                        If no opposition is received, the Trademark Office will proceed with trademark registration and
                        in a certain period you will be provided with a certificate of registration of your
                        trademark.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end-->
            </div>
          </div>
        </section>
      </main>
    </div>
  </main>
</template>
<script>
  import * as config from '@/scripts/main'

  export default {
    data() {
      return {
        username: '',
        countries: [],
        classes: [],
        value: '',
        rate: '',
        wordmark: [],
      }
    },
    mounted() {
      var vm = this;
      $(document).ready(function () {
        // currencies
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
        // currencies done
        $('.panel-collapse').on('shown.bs.collapse', function (e) {
          var $panel = $(this).closest('.panel');
          $('html, body').animate({
            scrollTop: $panel.offset().top - 60
          }, 600);
        });
        //Select Territories
        var arr = [];
        $("#territory").on("click", ".terr", function () {
          console.log('hi');
          var id = $(this).attr("id");
          if ($(this).prop("checked")) {
            if (jQuery.inArray(this.id, arr) == -1) {
              arr.push({
                value: this.id,
                _id: $(this).data('id'),
                name: $(this).val(),
                price: $(this).data('price'),
                classPrice: Number($(this).data('class-price'))
              });
              console.log(arr);
            }
            DisplayResult();
          }
          else {
            arr.sort(SortByName);
            var index = arr.findIndex(x => x.value == id);
            arr.splice(index, 1);
            $("#r_" + id).remove();
          }
        });

        window.RemoveValue = function (data) {
          $("#" + data.id).prop('checked', false);
          arr.sort(SortByName);
          var index = arr.findIndex(x => x.value == data.id);
          arr.splice(index, 1);
          $("#r_" + data.id).remove();
        }

        function DisplayResult() {
          arr.sort(SortByName);
          var htmlData = "";
          for (var i = 0; i < arr.length; i++) {
            htmlData += "<span class='closespan' id='r_" + arr[i].value + "'><label>" + $('#' + arr[i].value).attr('value') + "</label><i class='fa fa-close' aria-hidden='true' onclick='RemoveValue(" + arr[i].value + ")'></i></span>";
          }
          $("#result").html(htmlData);
        }

        // End Select territories
        //Select Classes
        var arrClass = [];
        $("#territory").on("click", ".cls", function () {
          console.log('hisdas');
          var id = $(this).attr("id");
          console.log(arrClass);
          if ($(this).prop("checked")) {
            if (jQuery.inArray(this.id, arr) == -1) {
              arrClass.push({
                value: this.id,
                _id: $(this).data('id'),
                name: $(this).data('name')
              });
              console.log(arrClass);
            }
            DisplayClassResult();
          }
          else {
            arrClass.sort(SortByName);
            var index = arrClass.findIndex(x => x.value == id);
            arrClass.splice(index, 1);
            $("#clsr_" + id).remove();
          }
        });

        window.RemoveClassValue = function (data) {
          $("#" + data).prop('checked', false);
          arrClass.sort(SortByName);
          var index = arrClass.findIndex(x => x.value == data);
          arrClass.splice(index, 1);
          $("#clsr_" + data).remove();
        }

        function DisplayClassResult() {
          arrClass.sort(SortByName);
          var htmlclsData = "";
          for (var i = 0; i < arrClass.length; i++) {
            htmlclsData += "<div id='clsr_" + arrClass[i].value + "'><div class='closespan'><label>" + 'Class ' + arrClass[i].value + "</label><a onclick='RemoveClassValue(" + arrClass[i].value + ")'>remove [<i class='fa fa-close' aria-hidden='true'></i>]</a></div><div class='add-p'>" + $('#' + arrClass[i].value).attr('value') + "</div></div>";
          }
          $("#clsresult").html(htmlclsData);
        }

        //End - Select Classes
        // Sort By Name
        function SortByName(a, b) {
          var aName = a.value.toLowerCase();
          var bName = b.value.toLowerCase();
          return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        }

        var territories = [];
        var classes = [];

        $("#territory").on("click", ".terr", function () {
          var total = Number($('#total').text());
          var name = $(this).val();
          var price = Number($(this).data("price"));
          var classPrice = Number($(this).data("class-price"));
          var index = classes.indexOf({
            name: name,
            price: price,
            classPrice: Number(classPrice)
          });

          if (this.checked) {
            var finalTotal = total + (price + (classPrice * classes.length));
            territories.push({
              name: name,
              price: price,
              classPrice: Number(classPrice)
            })
            var index = classes.indexOf(name);

            $('#territories_count').html(territories.length);
            $('#total').html(Math.trunc(finalTotal * vm.rate));
            $('#total_price').val(finalTotal);
          }
          if (!this.checked) {
            var workingTotal = 0;
            var workingList = territories.filter(function (rm) {
              return rm.name !== name;
            });
            territories.splice(index, 1);
            for (var i = 0; i < territories.length; i++) {
              var price = Number(territories[i].price);
              var classPrice = Number(territories[i].classPrice);
              workingTotal += price + (classPrice * classes.length);
              console.log(workingTotal);
            }
            $('#territories_count').html(territories.length);
            $('#total').html(workingTotal);
          }
        });

        $("#territory").on("click", ".cls", function () {
          var total = 0;
          var name = $(this).val();

          if (this.checked) {

            classes.push(name);
            for (var i = 0; i < territories.length; i++) {
              var price = Number(territories[i].price);
              var classPrice = Number(territories[i].classPrice);
              total += price + (classPrice * classes.length);
            }

            $('#classes_count').html(classes.length);
            $('#total').html(total);
          }
          if (!this.checked) {
            var index = classes.indexOf(name);
            classes.splice(index, 1);

            for (var i = 0; i < territories.length; i++) {
              var price = Number(territories[i].price);
              var classPrice = Number(territories[i].classPrice);
              total += price + (classPrice * classes.length);
            }

            $('#classes_count').html(classes.length);
            $('#total').html(total);
          }
        });

        var territoriesList = [];
        $(".continue").click(function () {
          var wordmarkType = JSON.parse(localStorage.getItem('wordmarkType'));
          var details = JSON.parse(localStorage.getItem('details'));
          var entireList = {
            main: wordmarkType,
            details: details,
            _id: 'trademark registration',
            qty: 1,
            requestType: 'registration',
            territories: arr,
            classes: arrClass
          };
          console.log(entireList);
          localStorage.setItem('trademarkDetails', JSON.stringify(entireList));
          window.location.href = '/#/trademarkOrder/';

        });


        function checkLogin() {
          $.ajax({
            url: config.url + 'countries',
            type: 'GET',
            success: function (data) {
              vm.countries = data.countries;
              vm.classes = data.classes;
            }
          })
        }

        checkLogin();
        ////
      });

    },
    methods: {
      openForm: function(message) {
        var vm = this;
        if(!localStorage.getItem('wordmarkType')) {
          localStorage.setItem('wordmarkType', '[]');
        }
        if(message == 'form-1') {
          localStorage.removeItem('wordmarkType');
          $("#form-2").hide();
          $("#form-3").hide();
          $("#form-1").show();
          var details = {
            trademarkType: 'wordmark',
            wordmark: $(".form1-wordmark").val(),
            description: $(".form1-desc").val(),
          }
          localStorage.setItem('wordmarkType', JSON.stringify(details));
        }
        else if (message == 'form-2') {
          localStorage.removeItem('wordmarkType');
          $("#form-1").hide();
          $("#form-3").hide();
          $("#form-2").show();
          var details = {
            trademarkType: 'logo',
            logo: 'imageurlpath',
            description: $(".form2-desc").val(),
          }
          localStorage.setItem('wordmarkType', JSON.stringify(details));
        }
        else if (message == 'form-3') {
          localStorage.removeItem('wordmarkType');
          $("#form-1").hide();
          $("#form-2").hide();
          $("#form-3").show();
          var details = {
            trademarkType: 'wordmark-and-logo',
            wordmark: $(".form3-wordmark").val(),
            description: $(".form3-desc").val(),
            logo: 'imageurlpathasdasds'
          }
          localStorage.setItem('wordmarkType', JSON.stringify(details));
        }
        return message
      },
      openSecondForm(message) {
        if(message == 'form-1') {
          $("#form-5").hide();
          $("#form-4").show();
          var details = {
            title: $(".form1-title").val(),
            firstName: $(".form1-firstName").val(),
            lastName: $(".form1-lastName").val(),
            nationality: $(".form1-nationality").val(),
            ownerType: 'individual',
            address: $(".form1-address").val(),
            postalCode: $(".form1-zip").val(),
            city: $(".form1-city").val(),
            country: $(".form1-country").val(),
            phone: $(".form1-phone").val(),
            email: $(".form1-email").val(),
          };
          localStorage.setItem('details', JSON.stringify(details));
        }
        else if(message == 'form-2') {
          $("#form-4").hide();
          $("#form-5").show();
          var details = {
            title: $(".form2-title").val(),
            firstName: $(".form2-firstName").val(),
            lastName: $(".form2-lastName").val(),
            companyName: $(".form2-nationality").val(),
            ownerType: 'company',
            address: $(".form2-address").val(),
            postalCode: $(".form2-zip").val(),
            city: $(".form2-city").val(),
            country: $(".form2-country").val(),
            phone: $(".form2-phone").val(),
            email: $(".form2-email").val(),
          };
          localStorage.setItem('details', JSON.stringify(details));
        }
      }
    },
    beforeMount(){
      this.openForm('form-1');
      this.openSecondForm('form-1');
    },
    filters: {
      fixPrice: function (value) {
        var price = Math.trunc(value);
        return price
      },
    }
  }
</script>
