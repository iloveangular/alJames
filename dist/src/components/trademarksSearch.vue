<template>
    <main>
        <div class="registration-body">
            <main class="registration-page">
                <section class="informations">
                    <div class="block">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 col-xs-4 informations-block"><img src="src/assets/images/trademark-mark.png"></div>
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
                                    <div class="solve-conflict-register">Agent Legal is an official member of the International Trademark Association</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="registration-form">
                    <div class="container">
                        <div class="trademark-registration">
                            <h4>1.Trademark Search</h4>
                            <div class="trademark-text">
                                <p><span class="rtmark_descr">Select the type of trademark you wish to search for</span></p>
                            </div>
                            <div class="trademark-registration-form">
                                <div class="tab">
                                    <div class="col-md-2 input-text">
                                        <label>
                                            <input class="tablinksactiveactive" id="defaultOpen" name="trmark_type" value="wordmark" checked="" onclick="openForm(event, 'form-1')" type="radio"> Wordmark</label>
                                    </div>
                                    <div class="col-md-2 input-text">
                                        <label>
                                            <input class="tablinks" name="trmark_type" value="logo" onclick="openForm(event, 'form-2')" type="radio"> Logo</label>
                                    </div>
                                    <div class="col-md-2 input-text">
                                        <label>
                                            <input class="tablinks" name="trmark_type" value="wordmark-and-logo" onclick="openForm(event, 'form-3')" type="radio"> Wordmark &amp; Logo</label>
                                    </div>
                                </div>
                                <div class="tabcontent" id="form-1" style="display: block;">
                                    <div class="col-xs-12" style="padding: 0;">
                                        <div class="row col-md-6">
                                            <div class="inupt-name">
                                                <input id="wordmark_name" name="wordmark" placeholder="Type your Wordmark Name" type="text"><small class="error">Name is required and must be a string.</small></div>
                                            <div class="text-area">
                                                <textarea id="wordmark_descr" rows="10" name="description" placeholder="Describe the mark you want to register"></textarea><small class="error">A description address is required.</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabcontent" id="form-2" style="display: none;">
                                    <div class="col-xs-12" style="padding: 0;">
                                        <div class="row col-md-6">
                                            <div class="text-area">
                                                <textarea id="wordmark_descr" rows="10" name="description" placeholder="Describe the mark you want to register"></textarea><small class="error">A description address is required.</small></div>
                                        </div>
                                        <div class="col-xs-12 upload-div" style="padding: 0; margin-top: 36px;">
                                            <div class="row col-md-6">
                                                <label for="logo">Upload Logo</label>
                                                <br><span class="upload-file-container"><input name="logo_upload" accept="image/*" type="file"></span></div>
                                            <div class="col-md-6 right-ul"><span class="note clr-red">* Please Note Accepted file type:</span><span class="note"><ul><li>JPEG format</li><li>Maximum file size: 2MB</li><li>Colour mode: RGB, Grayscale, BW or CMYK</li><li>Printing resolution: min 96, max 300 DPI</li><li>Minimum image size: 800 X 600 pixels</li><li>Maximum image size: 2835 x 2010 pixels</li></ul></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabcontent" id="form-3" style="display: none;">
                                    <div class="col-xs-12" style="padding: 0;">
                                        <div class="row col-md-6">
                                            <div class="inupt-name">
                                                <input id="wordmark_name" name="wordmark" placeholder="Type your Wordmark Name" type="text"><small class="error">Name is required and must be a string.</small></div>
                                            <div class="text-area">
                                                <textarea id="wordmark_descr" rows="10" name="description" placeholder="Describe the mark you want to register"></textarea><small class="error">A description address is required.</small></div>
                                        </div>
                                        <div class="col-md-12 upload-div" style="padding: 0; margin-top: 36px;">
                                            <div class="row col-md-6">
                                                <label for="fileName">Upload Logo</label>
                                                <br><span class="upload-file-container"><input name="logo_upload" accept="image/*" type="file"></span></div>
                                            <div class="col-md-6 right-ul"><span class="note clr-red">* Please Note Accepted file type:</span><span class="note"><ul><li>JPEG format</li><li>Maximum file size: 2MB</li><li>Colour mode: RGB, Grayscale, BW or CMYK</li><li>Printing resolution: min 96, max 300 DPI</li><li>Minimum image size: 800 X 600 pixels</li><li>Maximum image size: 2835 x 2010 pixels</li></ul></span></div>
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
                                        <li>
                                            <label for="chk1">
                                                <input class="terr" id="chk1" name="territories" value="Albania" data-price="499" data-class-price="90" type="checkbox">Albania</label>
                                        </li>
                                        <li>
                                            <label for="chk2">
                                                <input class="terr" id="chk2" name="territories" value="Andorra" data-price="875" data-class-price="120" type="checkbox">Andorra</label>
                                        </li>
                                        <li>
                                            <label for="chk3">
                                                <input class="terr" id="chk3" name="territories" value="Anguilla" data-price="975" data-class-price="400" type="checkbox">Anguilla</label>
                                        </li>
                                        <li>
                                            <label for="chk4">
                                                <input class="terr" id="chk4" name="territories" value="Antigua and Barbuda" data-price="1272" data-class-price="150" type="checkbox">Antigua and Barbuda</label>
                                        </li>
                                        <li>
                                            <label for="chk5">
                                                <input class="terr" id="chk5" name="territories" value="Argentina" data-price="700" data-class-price="490" type="checkbox">Argentina</label>
                                        </li>
                                        <li>
                                            <label for="chk6">
                                                <input class="terr" id="chk6" name="territories" value="Armenia" data-price="587" data-class-price="150" type="checkbox">Armenia</label>
                                        </li>
                                        <li>
                                            <label for="chk7">
                                                <input class="terr" id="chk7" name="territories" value="Aruba" data-price="1200" data-class-price="100" type="checkbox">Aruba</label>
                                        </li>
                                        <li>
                                            <label for="chk8">
                                                <input class="terr" id="chk8" name="territories" value="Australia" data-price="1425" data-class-price="861" type="checkbox">Australia</label>
                                        </li>
                                        <li>
                                            <label for="chk9">
                                                <input class="terr" id="chk9" name="territories" value="Austria" data-price="1672" data-class-price="217" type="checkbox">Austria</label>
                                        </li>
                                        <li>
                                            <label for="chk10">
                                                <input class="terr" id="chk10" name="territories" value="BES islands" data-price="975" data-class-price="150" type="checkbox">BES islands</label>
                                        </li>
                                        <li>
                                            <label for="chk11">
                                                <input class="terr" id="chk11" name="territories" value="BVI" data-price="1145" data-class-price="200" type="checkbox">BVI</label>
                                        </li>
                                        <li>
                                            <label for="chk12">
                                                <input class="terr" id="chk12" name="territories" value="Bahamas" data-price="600" data-class-price="400" type="checkbox">Bahamas</label>
                                        </li>
                                        <li>
                                            <label for="chk13">
                                                <input class="terr" id="chk13" name="territories" value="Bahrain" data-price="870" data-class-price="870" type="checkbox">Bahrain</label>
                                        </li>
                                        <li>
                                            <label for="chk14">
                                                <input class="terr" id="chk14" name="territories" value="Barbados" data-price="1500" data-class-price="1500" type="checkbox">Barbados</label>
                                        </li>
                                        <li>
                                            <label for="chk15">
                                                <input class="terr" id="chk15" name="territories" value="Belarus" data-price="1072" data-class-price="140" type="checkbox">Belarus</label>
                                        </li>
                                        <li>
                                            <label for="chk16">
                                                <input class="terr" id="chk16" name="territories" value="Belize" data-price="636" data-class-price="150" type="checkbox">Belize</label>
                                        </li>
                                        <li>
                                            <label for="chk17">
                                                <input class="terr" id="chk17" name="territories" value="Benelux" data-price="681" data-class-price="140" type="checkbox">Benelux</label>
                                        </li>
                                        <li>
                                            <label for="chk18">
                                                <input class="terr" id="chk18" name="territories" value="Bermuda" data-price="1574" data-class-price="200" type="checkbox">Bermuda</label>
                                        </li>
                                        <li>
                                            <label for="chk19">
                                                <input class="terr" id="chk19" name="territories" value="Bolivia" data-price="928" data-class-price="800" type="checkbox">Bolivia</label>
                                        </li>
                                        <li>
                                            <label for="chk20">
                                                <input class="terr" id="chk20" name="territories" value="Brazil" data-price="825" data-class-price="650" type="checkbox">Brazil</label>
                                        </li>
                                        <li>
                                            <label for="chk21">
                                                <input class="terr" id="chk21" name="territories" value="Brunei" data-price="1424" data-class-price="250" type="checkbox">Brunei</label>
                                        </li>
                                        <li>
                                            <label for="chk22">
                                                <input class="terr" id="chk22" name="territories" value="Bulgaria" data-price="1495" data-class-price="256" type="checkbox">Bulgaria</label>
                                        </li>
                                        <li>
                                            <label for="chk23">
                                                <input class="terr" id="chk23" name="territories" value="Cambodia" data-price="500" data-class-price="500" type="checkbox">Cambodia</label>
                                        </li>
                                        <li>
                                            <label for="chk24">
                                                <input class="terr" id="chk24" name="territories" value="Canada" data-price="993" data-class-price="100" type="checkbox">Canada</label>
                                        </li>
                                        <li>
                                            <label for="chk25">
                                                <input class="terr" id="chk25" name="territories" value="Cayman Islands" data-price="1272" data-class-price="250" type="checkbox">Cayman Islands</label>
                                        </li>
                                        <li>
                                            <label for="chk26">
                                                <input class="terr" id="chk26" name="territories" value="Chile" data-price="720" data-class-price="560" type="checkbox">Chile</label>
                                        </li>
                                        <li>
                                            <label for="chk27">
                                                <input class="terr" id="chk27" name="territories" value="China" data-price="510" data-class-price="510" type="checkbox">China</label>
                                        </li>
                                        <li>
                                            <label for="chk28">
                                                <input class="terr" id="chk28" name="territories" value="Colombia" data-price="1185" data-class-price="780" type="checkbox">Colombia</label>
                                        </li>
                                        <li>
                                            <label for="chk29">
                                                <input class="terr" id="chk29" name="territories" value="Croatia" data-price="720" data-class-price="100" type="checkbox">Croatia</label>
                                        </li>
                                        <li>
                                            <label for="chk30">
                                                <input class="terr" id="chk30" name="territories" value="Curacao" data-price="1392" data-class-price="170" type="checkbox">Curacao</label>
                                        </li>
                                        <li>
                                            <label for="chk31">
                                                <input class="terr" id="chk31" name="territories" value="Cyprus" data-price="645" data-class-price="85" type="checkbox">Cyprus</label>
                                        </li>
                                        <li>
                                            <label for="chk32">
                                                <input class="terr" id="chk32" name="territories" value="Czech Republic" data-price="996" data-class-price="200" type="checkbox">Czech Republic</label>
                                        </li>
                                        <li>
                                            <label for="chk33">
                                                <input class="terr" id="chk33" name="territories" value="Denmark" data-price="1380" data-class-price="200" type="checkbox">Denmark</label>
                                        </li>
                                        <li>
                                            <label for="chk34">
                                                <input class="terr" id="chk34" name="territories" value="Ecuador" data-price="895" data-class-price="895" type="checkbox">Ecuador</label>
                                        </li>
                                        <li>
                                            <label for="chk35">
                                                <input class="terr" id="chk35" name="territories" value="Egypt" data-price="595" data-class-price="595" type="checkbox">Egypt</label>
                                        </li>
                                        <li>
                                            <label for="chk36">
                                                <input class="terr" id="chk36" name="territories" value="Estonia" data-price="752" data-class-price="200" type="checkbox">Estonia</label>
                                        </li>
                                        <li>
                                            <label for="chk37">
                                                <input class="terr" id="chk37" name="territories" value="Finland" data-price="1005" data-class-price="250" type="checkbox">Finland</label>
                                        </li>
                                        <li>
                                            <label for="chk38">
                                                <input class="terr" id="chk38" name="territories" value="France" data-price="914" data-class-price="162" type="checkbox">France</label>
                                        </li>
                                        <li>
                                            <label for="chk39">
                                                <input class="terr" id="chk39" name="territories" value="Georgia" data-price="1248" data-class-price="180" type="checkbox">Georgia</label>
                                        </li>
                                        <li>
                                            <label for="chk40">
                                                <input class="terr" id="chk40" name="territories" value="Germany" data-price="1104" data-class-price="200" type="checkbox">Germany</label>
                                        </li>
                                        <li>
                                            <label for="chk41">
                                                <input class="terr" id="chk41" name="territories" value="Gibraltar" data-price="680" data-class-price="680" type="checkbox">Gibraltar</label>
                                        </li>
                                        <li>
                                            <label for="chk42">
                                                <input class="terr" id="chk42" name="territories" value="Greece" data-price="1456" data-class-price="50" type="checkbox">Greece</label>
                                        </li>
                                        <li>
                                            <label for="chk43">
                                                <input class="terr" id="chk43" name="territories" value="Grenada" data-price="1566" data-class-price="200" type="checkbox">Grenada</label>
                                        </li>
                                        <li>
                                            <label for="chk44">
                                                <input class="terr" id="chk44" name="territories" value="Guyana" data-price="600" data-class-price="500" type="checkbox">Guyana</label>
                                        </li>
                                        <li>
                                            <label for="chk45">
                                                <input class="terr" id="chk45" name="territories" value="Hong Kong" data-price="1065" data-class-price="495" type="checkbox">Hong Kong</label>
                                        </li>
                                        <li>
                                            <label for="chk46">
                                                <input class="terr" id="chk46" name="territories" value="Hungary" data-price="1053" data-class-price="412" type="checkbox">Hungary</label>
                                        </li>
                                        <li>
                                            <label for="chk47">
                                                <input class="terr" id="chk47" name="territories" value="Iceland" data-price="1122" data-class-price="250" type="checkbox">Iceland</label>
                                        </li>
                                        <li>
                                            <label for="chk48">
                                                <input class="terr" id="chk48" name="territories" value="India" data-price="500" data-class-price="500" type="checkbox">India</label>
                                        </li>
                                        <li>
                                            <label for="chk49">
                                                <input class="terr" id="chk49" name="territories" value="Indonesia" data-price="825" data-class-price="825" type="checkbox">Indonesia</label>
                                        </li>
                                        <li>
                                            <label for="chk50">
                                                <input class="terr" id="chk50" name="territories" value="Ireland" data-price="795" data-class-price="95" type="checkbox">Ireland</label>
                                        </li>
                                        <li>
                                            <label for="chk51">
                                                <input class="terr" id="chk51" name="territories" value="Israel" data-price="1400" data-class-price="710" type="checkbox">Israel</label>
                                        </li>
                                        <li>
                                            <label for="chk52">
                                                <input class="terr" id="chk52" name="territories" value="Italy" data-price="804" data-class-price="140" type="checkbox">Italy</label>
                                        </li>
                                        <li>
                                            <label for="chk53">
                                                <input class="terr" id="chk53" name="territories" value="Japan" data-price="804" data-class-price="250" type="checkbox">Japan</label>
                                        </li>
                                        <li>
                                            <label for="chk54">
                                                <input class="terr" id="chk54" name="territories" value="Jordan" data-price="1350" data-class-price="1350" type="checkbox">Jordan</label>
                                        </li>
                                        <li>
                                            <label for="chk55">
                                                <input class="terr" id="chk55" name="territories" value="Kazakhstan" data-price="832" data-class-price="100" type="checkbox">Kazakhstan</label>
                                        </li>
                                        <li>
                                            <label for="chk56">
                                                <input class="terr" id="chk56" name="territories" value="Kuwait" data-price="586" data-class-price="586" type="checkbox">Kuwait</label>
                                        </li>
                                        <li>
                                            <label for="chk57">
                                                <input class="terr" id="chk57" name="territories" value="Kyrgyzstan" data-price="875" data-class-price="300" type="checkbox">Kyrgyzstan</label>
                                        </li>
                                        <li>
                                            <label for="chk58">
                                                <input class="terr" id="chk58" name="territories" value="Laos" data-price="695" data-class-price="695" type="checkbox">Laos</label>
                                        </li>
                                        <li>
                                            <label for="chk59">
                                                <input class="terr" id="chk59" name="territories" value="Latvia" data-price="495" data-class-price="100" type="checkbox">Latvia</label>
                                        </li>
                                        <li>
                                            <label for="chk60">
                                                <input class="terr" id="chk60" name="territories" value="Lebanon" data-price="1145" data-class-price="200" type="checkbox">Lebanon</label>
                                        </li>
                                        <li>
                                            <label for="chk61">
                                                <input class="terr" id="chk61" name="territories" value="Liechtenstein" data-price="1926" data-class-price="191" type="checkbox">Liechtenstein</label>
                                        </li>
                                        <li>
                                            <label for="chk62">
                                                <input class="terr" id="chk62" name="territories" value="Lithuania" data-price="625" data-class-price="100" type="checkbox">Lithuania</label>
                                        </li>
                                        <li>
                                            <label for="chk63">
                                                <input class="terr" id="chk63" name="territories" value="Malaysia" data-price="918" data-class-price="918" type="checkbox">Malaysia</label>
                                        </li>
                                        <li>
                                            <label for="chk64">
                                                <input class="terr" id="chk64" name="territories" value="Malta" data-price="576" data-class-price="475" type="checkbox">Malta</label>
                                        </li>
                                        <li>
                                            <label for="chk65">
                                                <input class="terr" id="chk65" name="territories" value="Mauritius" data-price="776" data-class-price="200" type="checkbox">Mauritius</label>
                                        </li>
                                        <li>
                                            <label for="chk66">
                                                <input class="terr" id="chk66" name="territories" value="Mexico" data-price="920" data-class-price="920" type="checkbox">Mexico</label>
                                        </li>
                                        <li>
                                            <label for="chk67">
                                                <input class="terr" id="chk67" name="territories" value="Moldova" data-price="765" data-class-price="130" type="checkbox">Moldova</label>
                                        </li>
                                        <li>
                                            <label for="chk68">
                                                <input class="terr" id="chk68" name="territories" value="Myanmar" data-price="770" data-class-price="750" type="checkbox">Myanmar</label>
                                        </li>
                                        <li>
                                            <label for="chk69">
                                                <input class="terr" id="chk69" name="territories" value="Nepal" data-price="500" data-class-price="475" type="checkbox">Nepal</label>
                                        </li>
                                        <li>
                                            <label for="chk70">
                                                <input class="terr" id="chk70" name="territories" value="New Zealand" data-price="653" data-class-price="300" type="checkbox">New Zealand</label>
                                        </li>
                                        <li>
                                            <label for="chk71">
                                                <input class="terr" id="chk71" name="territories" value="Norway" data-price="1059" data-class-price="250" type="checkbox">Norway</label>
                                        </li>
                                        <li>
                                            <label for="chk72">
                                                <input class="terr" id="chk72" name="territories" value="OHIM" data-price="1600" data-class-price="305" type="checkbox">OHIM</label>
                                        </li>
                                        <li>
                                            <label for="chk73">
                                                <input class="terr" id="chk73" name="territories" value="Oman" data-price="1470" data-class-price="1470" type="checkbox">Oman</label>
                                        </li>
                                        <li>
                                            <label for="chk74">
                                                <input class="terr" id="chk74" name="territories" value="Pakistan" data-price="580" data-class-price="495" type="checkbox">Pakistan</label>
                                        </li>
                                        <li>
                                            <label for="chk75">
                                                <input class="terr" id="chk75" name="territories" value="Panama" data-price="747" data-class-price="473" type="checkbox">Panama</label>
                                        </li>
                                        <li>
                                            <label for="chk76">
                                                <input class="terr" id="chk76" name="territories" value="Paraguay" data-price="450" data-class-price="400" type="checkbox">Paraguay</label>
                                        </li>
                                        <li>
                                            <label for="chk77">
                                                <input class="terr" id="chk77" name="territories" value="Peru" data-price="880" data-class-price="735" type="checkbox">Peru</label>
                                        </li>
                                        <li>
                                            <label for="chk78">
                                                <input class="terr" id="chk78" name="territories" value="Philippines" data-price="840" data-class-price="120" type="checkbox">Philippines</label>
                                        </li>
                                        <li>
                                            <label for="chk79">
                                                <input class="terr" id="chk79" name="territories" value="Portugal" data-price="408" data-class-price="155" type="checkbox">Portugal</label>
                                        </li>
                                        <li>
                                            <label for="chk80">
                                                <input class="terr" id="chk80" name="territories" value="Qatar" data-price="1920" data-class-price="1920" type="checkbox">Qatar</label>
                                        </li>
                                        <li>
                                            <label for="chk81">
                                                <input class="terr" id="chk81" name="territories" value="Romania" data-price="960" data-class-price="200" type="checkbox">Romania</label>
                                        </li>
                                        <li>
                                            <label for="chk82">
                                                <input class="terr" id="chk82" name="territories" value="Russia" data-price="1365" data-class-price="103" type="checkbox">Russia</label>
                                        </li>
                                        <li>
                                            <label for="chk83">
                                                <input class="terr" id="chk83" name="territories" value="Saudi Arabia" data-price="3405" data-class-price="3405" type="checkbox">Saudi Arabia</label>
                                        </li>
                                        <li>
                                            <label for="chk84">
                                                <input class="terr" id="chk84" name="territories" value="Serbia" data-price="416" data-class-price="100" type="checkbox">Serbia</label>
                                        </li>
                                        <li>
                                            <label for="chk85">
                                                <input class="terr" id="chk85" name="territories" value="Seychelles" data-price="1050" data-class-price="770" type="checkbox">Seychelles</label>
                                        </li>
                                        <li>
                                            <label for="chk86">
                                                <input class="terr" id="chk86" name="territories" value="Singapore" data-price="672" data-class-price="672" type="checkbox">Singapore</label>
                                        </li>
                                        <li>
                                            <label for="chk87">
                                                <input class="terr" id="chk87" name="territories" value="Slovakia" data-price="885" data-class-price="150" type="checkbox">Slovakia</label>
                                        </li>
                                        <li>
                                            <label for="chk88">
                                                <input class="terr" id="chk88" name="territories" value="South Africa" data-price="716" data-class-price="660" type="checkbox">South Africa</label>
                                        </li>
                                        <li>
                                            <label for="chk89">
                                                <input class="terr" id="chk89" name="territories" value="South Korea" data-price="931" data-class-price="650" type="checkbox">South Korea</label>
                                        </li>
                                        <li>
                                            <label for="chk90">
                                                <input class="terr" id="chk90" name="territories" value="Spain" data-price="877" data-class-price="337" type="checkbox">Spain</label>
                                        </li>
                                        <li>
                                            <label for="chk91">
                                                <input class="terr" id="chk91" name="territories" value="Sri Lanka" data-price="700" data-class-price="100" type="checkbox">Sri Lanka</label>
                                        </li>
                                        <li>
                                            <label for="chk92">
                                                <input class="terr" id="chk92" name="territories" value="St. Kitts&amp;Nevis" data-price="984" data-class-price="250" type="checkbox">St. Kitts&amp;Nevis</label>
                                        </li>
                                        <li>
                                            <label for="chk93">
                                                <input class="terr" id="chk93" name="territories" value="St. Maarten" data-price="970" data-class-price="100" type="checkbox">St. Maarten</label>
                                        </li>
                                        <li>
                                            <label for="chk94">
                                                <input class="terr" id="chk94" name="territories" value="Sudan" data-price="900" data-class-price="900" type="checkbox">Sudan</label>
                                        </li>
                                        <li>
                                            <label for="chk95">
                                                <input class="terr" id="chk95" name="territories" value="Suriname" data-price="832" data-class-price="100" type="checkbox">Suriname</label>
                                        </li>
                                        <li>
                                            <label for="chk96">
                                                <input class="terr" id="chk96" name="territories" value="Sweden" data-price="980" data-class-price="100" type="checkbox">Sweden</label>
                                        </li>
                                        <li>
                                            <label for="chk97">
                                                <input class="terr" id="chk97" name="territories" value="Taiwan" data-price="910" data-class-price="890" type="checkbox">Taiwan</label>
                                        </li>
                                        <li>
                                            <label for="chk98">
                                                <input class="terr" id="chk98" name="territories" value="Tajikistan" data-price="647" data-class-price="200" type="checkbox">Tajikistan</label>
                                        </li>
                                        <li>
                                            <label for="chk99">
                                                <input class="terr" id="chk99" name="territories" value="Thailand" data-price="672" data-class-price="200" type="checkbox">Thailand</label>
                                        </li>
                                        <li>
                                            <label for="chk100">
                                                <input class="terr" id="chk100" name="territories" value="Turkey" data-price="679" data-class-price="100" type="checkbox">Turkey</label>
                                        </li>
                                        <li>
                                            <label for="chk101">
                                                <input class="terr" id="chk101" name="territories" value="Turkmenistan" data-price="750" data-class-price="250" type="checkbox">Turkmenistan</label>
                                        </li>
                                        <li>
                                            <label for="chk102">
                                                <input class="terr" id="chk102" name="territories" value="UAE" data-price="3675" data-class-price="3675" type="checkbox">UAE</label>
                                        </li>
                                        <li>
                                            <label for="chk103">
                                                <input class="terr" id="chk103" name="territories" value="USA" data-price="1237" data-class-price="713" type="checkbox">USA</label>
                                        </li>
                                        <li>
                                            <label for="chk104">
                                                <input class="terr" id="chk104" name="territories" value="Ukraine" data-price="800" data-class-price="263" type="checkbox">Ukraine</label>
                                        </li>
                                        <li>
                                            <label for="chk105">
                                                <input class="terr" id="chk105" name="territories" value="United Kingdom" data-price="500" data-class-price="140" type="checkbox">United Kingdom</label>
                                        </li>
                                        <li>
                                            <label for="chk106">
                                                <input class="terr" id="chk106" name="territories" value="Uruguay" data-price="870" data-class-price="450" type="checkbox">Uruguay</label>
                                        </li>
                                        <li>
                                            <label for="chk107">
                                                <input class="terr" id="chk107" name="territories" value="Venezuela" data-price="720" data-class-price="720" type="checkbox">Venezuela</label>
                                        </li>
                                        <li>
                                            <label for="chk108">
                                                <input class="terr" id="chk108" name="territories" value="Vietnam" data-price="575" data-class-price="375" type="checkbox">Vietnam</label>
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
                                <p>Search for classes by keyword using our <a class="clr-d-grey fnt-oswald-medium" href="#">Class Search</a>.</p>
                                <div class="trademark-dynemic">
                                    <div class="col-md-12">
                                        <ul>
                                            <li>
                                                <label for="cls1">
                                                    <input class="cls" id="1" name="classes" value="Chemicals used in industry, science and photography, as well as in agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations" data-id="5993407a040e0184a2d1f92e" type="checkbox"><span><b>1</b></span><span> Chemicals used in industry, science and photography, as well as in agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations</span></label>
                                            </li>
                                            <li>
                                                <label for="cls2">
                                                    <input class="cls" id="2" name="classes" value="Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants; mordants; raw natural resins; metals in foil and powder form for painters, decorators, printers and artists." data-id="59934090040e0184a2d1f92f" type="checkbox"><span><b>2</b></span><span> Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants; mordants; raw natural resins; metals in foil and powder form for painters, decorators, printers and artists.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls3">
                                                    <input class="cls" id="3" name="classes" value="Bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations; soaps; perfumery, essential oils, cosmetics, hair lotions; dentifrices." data-id="5999d0df671f0165bf22869a" type="checkbox"><span><b>3</b></span><span> Bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations; soaps; perfumery, essential oils, cosmetics, hair lotions; dentifrices.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls4">
                                                    <input class="cls" id="4" name="classes" value="Industrial oils and greases; lubricants; dust absorbing, wetting and binding compositions; fuels (including motor spirit) and illuminants; candles and wicks for lighting." data-id="5999d0df671f0165bf22869b" type="checkbox"><span><b>4</b></span><span> Industrial oils and greases; lubricants; dust absorbing, wetting and binding compositions; fuels (including motor spirit) and illuminants; candles and wicks for lighting.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls5">
                                                    <input class="cls" id="5" name="classes" value="Pharmaceutical and veterinary preparations; sanitary preparations for medical purposes; dietetic food and substances adapted for medical or veterinary use, food for babies; dietary supplements for humans and animals; plasters, materials for dressings" data-id="5999d0e0671f0165bf22869c" type="checkbox"><span><b>5</b></span><span> Pharmaceutical and veterinary preparations; sanitary preparations for medical purposes; dietetic food and substances adapted for medical or veterinary use, food for babies; dietary supplements for humans and animals; plasters, materials for dressings</span></label>
                                            </li>
                                            <li>
                                                <label for="cls6">
                                                    <input class="cls" id="6" name="classes" value="Common metals and their alloys; metal building materials; transportable buildings of metal; materials of metal for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; sa" data-id="5999d0e0671f0165bf22869d" type="checkbox"><span><b>6</b></span><span> Common metals and their alloys; metal building materials; transportable buildings of metal; materials of metal for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; sa</span></label>
                                            </li>
                                            <li>
                                                <label for="cls7">
                                                    <input class="cls" id="7" name="classes" value="Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs; automatic vending machines." data-id="5999d0e0671f0165bf22869e" type="checkbox"><span><b>7</b></span><span> Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs; automatic vending machines.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls8">
                                                    <input class="cls" id="8" name="classes" value="Hand tools and implements (hand-operated); cutlery; side arms; razors." data-id="5999d0e1671f0165bf22869f" type="checkbox"><span><b>8</b></span><span> Hand tools and implements (hand-operated); cutlery; side arms; razors.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls9">
                                                    <input class="cls" id="9" name="classes" value="Scientific, nautical, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, a" data-id="5999d0e1671f0165bf2286a0" type="checkbox"><span><b>9</b></span><span> Scientific, nautical, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, a</span></label>
                                            </li>
                                            <li>
                                                <label for="cls10">
                                                    <input class="cls" id="10" name="classes" value="Surgical, medical, dental and veterinary apparatus and instruments, artificial limbs, eyes and teeth; orthopedic articles; suture materials." data-id="5999d0e1671f0165bf2286a1" type="checkbox"><span><b>10</b></span><span> Surgical, medical, dental and veterinary apparatus and instruments, artificial limbs, eyes and teeth; orthopedic articles; suture materials.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls11">
                                                    <input class="cls" id="11" name="classes" value="Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes." data-id="5999d0e2671f0165bf2286a2" type="checkbox"><span><b>11</b></span><span> Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls12">
                                                    <input class="cls" id="12" name="classes" value="Vehicles; apparatus for locomotion by land, air or water." data-id="5999d0e2671f0165bf2286a3" type="checkbox"><span><b>12</b></span><span> Vehicles; apparatus for locomotion by land, air or water.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls13">
                                                    <input class="cls" id="13" name="classes" value="Firearms; ammunition and projectiles; explosives; fireworks." data-id="5999d0e2671f0165bf2286a4" type="checkbox"><span><b>13</b></span><span> Firearms; ammunition and projectiles; explosives; fireworks.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls14">
                                                    <input class="cls" id="14" name="classes" value="Precious metals and their alloys and goods in precious metals or coated therewith, not included in other classes; jewellery, precious stones; horological and chronometric instruments." data-id="5999d0e3671f0165bf2286a5" type="checkbox"><span><b>14</b></span><span> Precious metals and their alloys and goods in precious metals or coated therewith, not included in other classes; jewellery, precious stones; horological and chronometric instruments.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls15">
                                                    <input class="cls" id="15" name="classes" value="Musical instruments." data-id="5999d0e3671f0165bf2286a6" type="checkbox"><span><b>15</b></span><span> Musical instruments.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls16">
                                                    <input class="cls" id="16" name="classes" value="Paper, cardboard and goods made from these materials, not included in other classes; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists materials; paint brushes; typewriters and offi" data-id="5999d0e3671f0165bf2286a7" type="checkbox"><span><b>16</b></span><span> Paper, cardboard and goods made from these materials, not included in other classes; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists materials; paint brushes; typewriters and offi</span></label>
                                            </li>
                                            <li>
                                                <label for="cls17">
                                                    <input class="cls" id="17" name="classes" value="Rubber, gutta-percha, gum, asbestos, mica and goods made from these materials and not included in other classes; plastics in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal." data-id="5999d0e3671f0165bf2286a8" type="checkbox"><span><b>17</b></span><span> Rubber, gutta-percha, gum, asbestos, mica and goods made from these materials and not included in other classes; plastics in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls18">
                                                    <input class="cls" id="18" name="classes" value="Yarns and threads, for textile use." data-id="5999d0e5671f0165bf2286ae" type="checkbox"><span><b>18</b></span><span> Yarns and threads, for textile use.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls19">
                                                    <input class="cls" id="19" name="classes" value="Leather and imitations of leather, and goods made of these materials and not included in other classes; animal skins, hides; trunks and travelling bags; umbrellas and parasols; walking sticks; whips, harness and saddlery." data-id="5999d0e4671f0165bf2286a9" type="checkbox"><span><b>19</b></span><span> Leather and imitations of leather, and goods made of these materials and not included in other classes; animal skins, hides; trunks and travelling bags; umbrellas and parasols; walking sticks; whips, harness and saddlery.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls20">
                                                    <input class="cls" id="20" name="classes" value="Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; non-metallic transportable buildings; monuments, not of metal." data-id="5999d0e4671f0165bf2286aa" type="checkbox"><span><b>20</b></span><span> Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; non-metallic transportable buildings; monuments, not of metal.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls21">
                                                    <input class="cls" id="21" name="classes" value="Furniture, mirrors, picture frames; goods (not included in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory, whalebone, shell, amber, mother-of-pearl, meerschaum and substitutes for all these materials, or of plastics." data-id="5999d0e4671f0165bf2286ab" type="checkbox"><span><b>21</b></span><span> Furniture, mirrors, picture frames; goods (not included in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory, whalebone, shell, amber, mother-of-pearl, meerschaum and substitutes for all these materials, or of plastics.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls22">
                                                    <input class="cls" id="22" name="classes" value="Household or kitchen utensils and containers; combs and sponges; brushes (except paintbrushes); brush-making materials; articles for cleaning purposes; steelwool; unworked or semi-worked glass (except glass used in building); glassware, porcelain and" data-id="5999d0e5671f0165bf2286ac" type="checkbox"><span><b>22</b></span><span> Household or kitchen utensils and containers; combs and sponges; brushes (except paintbrushes); brush-making materials; articles for cleaning purposes; steelwool; unworked or semi-worked glass (except glass used in building); glassware, porcelain and</span></label>
                                            </li>
                                            <li>
                                                <label for="cls23">
                                                    <input class="cls" id="23" name="classes" value="Ropes, string, nets, tents, awnings, tarpaulins, sails, sacks and bags (not included in other classes); padding and stuffing materials (except of rubber or plastics); raw fibrous textile materials." data-id="5999d0e5671f0165bf2286ad" type="checkbox"><span><b>23</b></span><span> Ropes, string, nets, tents, awnings, tarpaulins, sails, sacks and bags (not included in other classes); padding and stuffing materials (except of rubber or plastics); raw fibrous textile materials.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls24">
                                                    <input class="cls" id="24" name="classes" value="Textiles and textile goods, not included in other classes; bed covers; table covers." data-id="5999d0e6671f0165bf2286af" type="checkbox"><span><b>24</b></span><span> Textiles and textile goods, not included in other classes; bed covers; table covers.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls25">
                                                    <input class="cls" id="25" name="classes" value="Clothing, footwear, headgear." data-id="5999d0e6671f0165bf2286b0" type="checkbox"><span><b>25</b></span><span> Clothing, footwear, headgear.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls26">
                                                    <input class="cls" id="26" name="classes" value="Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers." data-id="5999d0e6671f0165bf2286b1" type="checkbox"><span><b>26</b></span><span> Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls27">
                                                    <input class="cls" id="27" name="classes" value="Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile)." data-id="5999d0e7671f0165bf2286b2" type="checkbox"><span><b>27</b></span><span> Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile).</span></label>
                                            </li>
                                            <li>
                                                <label for="cls28">
                                                    <input class="cls" id="28" name="classes" value="Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees." data-id="5999d0e7671f0165bf2286b3" type="checkbox"><span><b>28</b></span><span> Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls29">
                                                    <input class="cls" id="29" name="classes" value="Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk and milk products; edible oils and fats." data-id="5999d0e7671f0165bf2286b4" type="checkbox"><span><b>29</b></span><span> Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk and milk products; edible oils and fats.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls30">
                                                    <input class="cls" id="30" name="classes" value="Coffee, tea, cocoa and artificial coffee; rice; tapioca and sago; flour and preparations made from cereals; bread, pastry and confectionery; edible ices; sugar, honey, treacle; yeast, baking-powder; salt; mustard; vinegar, sauces (condiments); spices" data-id="5999d0e8671f0165bf2286b5" type="checkbox"><span><b>30</b></span><span> Coffee, tea, cocoa and artificial coffee; rice; tapioca and sago; flour and preparations made from cereals; bread, pastry and confectionery; edible ices; sugar, honey, treacle; yeast, baking-powder; salt; mustard; vinegar, sauces (condiments); spices</span></label>
                                            </li>
                                            <li>
                                                <label for="cls31">
                                                    <input class="cls" id="31" name="classes" value="Grains and agricultural, horticultural and forestry products not included in other classes; live animals; fresh fruits and vegetables; seeds; natural plants and flowers; foodstuffs for animals; malt." data-id="5999d0e8671f0165bf2286b6" type="checkbox"><span><b>31</b></span><span> Grains and agricultural, horticultural and forestry products not included in other classes; live animals; fresh fruits and vegetables; seeds; natural plants and flowers; foodstuffs for animals; malt.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls32">
                                                    <input class="cls" id="32" name="classes" value="Beers; mineral and aerated waters and other non-alcoholic beverages; fruit beverages and fruit juices; syrups and other preparations for making beverages." data-id="5999d0e8671f0165bf2286b7" type="checkbox"><span><b>32</b></span><span> Beers; mineral and aerated waters and other non-alcoholic beverages; fruit beverages and fruit juices; syrups and other preparations for making beverages.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls33">
                                                    <input class="cls" id="33" name="classes" value="Alcoholic beverages (except beers)." data-id="5999d0e9671f0165bf2286b8" type="checkbox"><span><b>33</b></span><span> Alcoholic beverages (except beers).</span></label>
                                            </li>
                                            <li>
                                                <label for="cls34">
                                                    <input class="cls" id="34" name="classes" value="Tobacco; smokers articles; matches." data-id="5999d0e9671f0165bf2286b9" type="checkbox"><span><b>34</b></span><span> Tobacco; smokers articles; matches.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls35">
                                                    <input class="cls" id="35" name="classes" value="Advertising; business management; business administration; office functions." data-id="5999d0e9671f0165bf2286ba" type="checkbox"><span><b>35</b></span><span> Advertising; business management; business administration; office functions.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls36">
                                                    <input class="cls" id="36" name="classes" value="Insurance; financial affairs; monetary affairs; real estate affairs." data-id="5999d0e9671f0165bf2286bb" type="checkbox"><span><b>36</b></span><span> Insurance; financial affairs; monetary affairs; real estate affairs.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls37">
                                                    <input class="cls" id="37" name="classes" value="Building construction; repair; installation services." data-id="5999d0ea671f0165bf2286bc" type="checkbox"><span><b>37</b></span><span> Building construction; repair; installation services.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls38">
                                                    <input class="cls" id="38" name="classes" value="Telecommunications." data-id="5999d0ea671f0165bf2286bd" type="checkbox"><span><b>38</b></span><span> Telecommunications.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls39">
                                                    <input class="cls" id="39" name="classes" value="Transport; packaging and storage of goods; travel arrangement." data-id="5999d0eb671f0165bf2286be" type="checkbox"><span><b>39</b></span><span> Transport; packaging and storage of goods; travel arrangement.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls40">
                                                    <input class="cls" id="40" name="classes" value="Treatment of materials." data-id="5999d0eb671f0165bf2286bf" type="checkbox"><span><b>40</b></span><span> Treatment of materials.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls41">
                                                    <input class="cls" id="41" name="classes" value="Education; providing of training; entertainment; sporting and cultural activities." data-id="5999d0eb671f0165bf2286c0" type="checkbox"><span><b>41</b></span><span> Education; providing of training; entertainment; sporting and cultural activities.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls42">
                                                    <input class="cls" id="42" name="classes" value="Scientific and technological services and research and design relating thereto; industrial analysis and research services; design and development of computer hardware and software." data-id="5999d0ec671f0165bf2286c1" type="checkbox"><span><b>42</b></span><span> Scientific and technological services and research and design relating thereto; industrial analysis and research services; design and development of computer hardware and software.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls43">
                                                    <input class="cls" id="43" name="classes" value="Services for providing food and drink; temporary accommodation." data-id="5999d0ec671f0165bf2286c2" type="checkbox"><span><b>43</b></span><span> Services for providing food and drink; temporary accommodation.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls44">
                                                    <input class="cls" id="44" name="classes" value="Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, horticulture and forestry services." data-id="5999d0ec671f0165bf2286c3" type="checkbox"><span><b>44</b></span><span> Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, horticulture and forestry services.</span></label>
                                            </li>
                                            <li>
                                                <label for="cls45">
                                                    <input class="cls" id="45" name="classes" value="Legal services; security services for the protection of property and individuals; personal and social services rendered by others to meet the needs of individuals." data-id="5999d0ed671f0165bf2286c4" type="checkbox"><span><b>45</b></span><span> Legal services; security services for the protection of property and individuals; personal and social services rendered by others to meet the needs of individuals.</span></label>
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
                                <p>Please specify the owner of the Trademark below and give all the details required.</p>
                            </div>
                            <div class="row col-md-6 font-style">
                                <!-- Nav tabs-->
                                <div class="tab">
                                    <div class="col-md-2 input-text">
                                        <label>
                                            <input class="tablinks" id="individual" name=" ownerType" value="individual" checked="" onclick="openForm2(event, 'form-4')" type="radio"> Individual</label>
                                    </div>
                                    <div class="col-md-2 input-text">
                                        <label>
                                            <input class="tablinks" id="company1" name=" ownerType" value="company" onclick="openForm2(event, 'form-5')" type="radio"> Company</label>
                                    </div>
                                    <!-- Tab panes-->
                                    <div class="tab-content" id="form-4" style="display:block;">
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="title">Title<span class="star">*</span></label>
                                            <select id="ind_title" name="title">
                                                <option value="">Please Select</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Ms.">Ms.</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Miss.">Miss.</option>
                                                <option value="Dr.">Dr.</option>
                                            </select><small class="error">Please select a title</small></div>
                                        <div class="form-group">
                                            <div class="large-6 column-first">
                                                <label class="mar-btm-5" for="firstname" role="alert">First Name<span class="star">*</span></label>
                                                <input id="ind_first_name" name="firstname" placeholder=""  data-invalid="" aria-invalid="true" type="text"><small class="error">First Name is required</small></div>
                                            <div class="large-6 column">
                                                <label class="mar-btm-5" for="lastname">Last Name<span class="star">*</span></label>
                                                <input id="ind_last_name" name="lastname" placeholder="" type="text"><small class="error">Last Name is required</small></div>
                                        </div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="nationality" role="alert">Nationality<span class="star">*</span></label>
                                            <input id="ind_nationality" name="nationality" placeholder=""  data-invalid="" aria-invalid="true" type="text"><small class="error">Nationality is required</small></div>
                                        <div class="large-8 column form-group">
                                            <label class="mar-btm-5" for="address">Address<span class="star">*</span></label>
                                            <input id="ind_address" name="address" placeholder="" type="text"><small class="error">Address is required</small></div>
                                        <div class="large-4 column form-group">
                                            <label class="mar-btm-5" for="postalCode">Postal Code<span class="star">*</span></label>
                                            <input id="ind_post_code" name="postalCode" placeholder="" type="text"><small class="error">Postal Code is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="city">City<span class="star">*</span></label>
                                            <input id="ind_city" name="city" placeholder="" type="text"><small class="error">City name is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="country" role="alert">Country<span class="star">*</span></label>
                                            <select class="input-fields" id="ind_country" name="country"  data-invalid="" aria-invalid="true">
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
                                            </select><small class="error">Country is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="phone">Telephone No.<span class="star">*</span></label>
                                            <input id="ind_telephone" name="phone" placeholder="" type="text"><small class="error">Telephone No is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="email">Email<span class="star">*</span></label>
                                            <input id="ind_email" name="email" placeholder="" type="email"><small class="error">Email is required</small></div>
                                    </div>
                                    <div class="tab-content" id="form-5" style="display:none;">
                                        <div class="form-group">
                                            <div class="large-6 column-first">
                                                <label class="mar-btm-5" for="firstname" role="alert">First Name<span class="star">*</span></label>
                                                <input id="ind_first_name" name="firstname" placeholder=""  data-invalid="" aria-invalid="true" type="text"><small class="error">First Name is required</small></div>
                                            <div class="large-6 column">
                                                <label class="mar-btm-5" for="lastname">Last Name<span class="star">*</span></label>
                                                <input id="ind_last_name" name="lastname" placeholder="" type="text"><small class="error">Last Name is required</small></div>
                                        </div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="company" role="alert">Nationality<span class="star">*</span></label>
                                            <input id="comp_name" name="company" value="" placeholder=""  data-invalid="" aria-invalid="true" type="text"><small class="error">Company name is required</small></div>
                                        <div class="large-8 column form-group">
                                            <label class="mar-btm-5" for="address">Address<span class="star">*</span></label>
                                            <input id="ind_address" name="address" placeholder="" type="text"><small class="error">Address is required</small></div>
                                        <div class="large-4 column form-group">
                                            <label class="mar-btm-5" for="postalCode">Postal Code<span class="star">*</span></label>
                                            <input id="ind_post_code" name="postalCode" placeholder="" type="text"><small class="error">Postal Code is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="city">City<span class="star">*</span></label>
                                            <input id="ind_city" name="city" placeholder="" type="text"><small class="error">City name is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="country" role="alert">Country<span class="star">*</span></label>
                                            <select class="input-fields" id="ind_country" name="country"  data-invalid="" aria-invalid="true">
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
                                            </select><small class="error">Country is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="phone">Telephone No.<span class="star">*</span></label>
                                            <input id="ind_telephone" name="phone" placeholder="" type="text"><small class="error">Telephone No is required</small></div>
                                        <div class="large-12 column form-group">
                                            <label class="mar-btm-5" for="email">Email<span class="star">*</span></label>
                                            <input id="ind_email" name="email" placeholder="" type="email"><small class="error">Email is required</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="trademark-registration owner-details total-price">
                            <h4>Trademark Search</h4><span>Territories </span><span id="territories_count">0</span><span>, Classes </span><span id="classes_count">0</span>
                            <div class="col-xs-12 text-right" style="padding: 0;">
                                <div class="price-div">
                                    <h4>TOTAL PRICE <span class="fnt-oswald-medium" id="currency">$</span><span class="fnt-oswald-medium" id="total">0</span></h4>
                                    <div class="form-actions">
                                        <button class="price-green button green" type="submit">Continue</button>
                                    </div>
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
                                <a href="#1">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-1" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" aria-expanded="false">
                                        <div class="sprite1 about_tm-01"></div>
                                        <h4 class="panel-title">About</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseOne" aria-expanded="false" style="height: 0px;">
                                    <div class="panel-body">
                                        <p>A Trademark is a symbol, phrase, design or word that helps distinguish one manufacturer of goods from another. It is a key identifier of a company used all over the world. An example of a famous trademark is Apple, which is represented by a bitten apple. This mark has no writing, so the image itself is the key identifier for Apple. Similarly, a service mark follows the same features but is different because it is used to identify a service. An example of a well-known service mark is McDonald's whose mark is a golden 'M' which is globally recognized by all ages since 1955. Additionally, in certain circumstances, trade/service marks can also involve colours, music, and smell. For example, Coca-Cola is well known for its red and white colour combination, and Nokia is known for its unique ringtone.
                                        </p><b>Property and Intellectual Property</b>
                                        <p>'Intellectual property,' however, has no physical embodiment that one can see, touch or feel such as literature and music. Trade names, artistic designs and digital programming are also part of the intellectual property band. Like physical property, the intellectual property can be owned, purchased, sold, transferred, and/or licensed. Systems of ownership of intellectual property are relatively new historically.
                                        </p><b>Trademark Rights</b>
                                        <p>Trademarks adopt rights in two ways: 1) by registration, and 2) by using the mark first. Both ways can be protected. By registering, you will gain many advantages from the federal law, including the use of the ® symbol on your trademark. You will also have the ability to show others of your ownership to the brand, making it less likely for others to consume. Under common law, being the first to use a specific trademark also comes with certain rights that may stop others from using your mark. However, this can be risky because it does not come with as many benefits as a registered trademark would.</p>
                                        <p><b>TIP</b></p>
                                        <p>The more unique a trademark is, the less chance it has for it to be duplicated, which means more protection. It is also good to know that successful marks are normally those that have no relation to the service or goods.
                                        </p><b>Trademark Registration</b>
                                        <p>Before adopting a new mark, it is advisable to have a search conducted and evaluated by a qualified attorney. Someone else may already have rights to virtually the same mark, and it is better to know about that or other potentially conflicting marks before you have made an investment in your new mark. Lack of knowledge is normally not a defense to trademark infringement. The extent of searching that is warranted depends on the nature of the mark, the goods or services for which it is to be used, and the countries in which the mark is intended to be used. Basic searches typically focus on trademark registration databases. Usually, an application to register a trademark is made to the national trademark office in the country or region where the applicant wishes to protect the mark. The application will usually include the name and address of the applicant, a representation of the mark, a listing of the goods or services that are desired to be covered by the registration, and the official filing fee. In some jurisdictions, it may also be necessary to file specimens showing how the mark is used. However, most countries do not require a mark to be used before it is registered.</p><b>Trademark Symbols</b>
                                        <p>Trademarks are often used with designations or symbols, i.e. ®, also known as Reg., TM, and SM. These symbols work as trademark identifiers classifying whether or not a trademark is registered. Unregistered Trademarks use the symbols TM and SM to notify competitors and potential customers of their plan to become legal and are used to discourage others from using them. Each designation is used for a different purpose; SM is used for a service mark, whereas TM is used for a trademark. The ® symbol refers to a registered trademark. This small but powerful symbol will allow the owner to claim against infringement if an issue occurs. It is always a good idea to register your trademark to have secure benefits. The protection of your trademark will depend on your country of registration which has its ups and downs. Not all regional offices will give out the same benefits, so choose your country wisely so that you receive the all the information and protection you need. Your mark should represent your business in a creative yet effective way, making sure the meaning explains your business accurately. It is only when your mark is used consistently, i.e same font type and colour, that your mark becomes respected and desired.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- start-->
                            <div class="panel panel-default">
                                <a href="#2">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-2" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false">
                                        <div class="sprite1 about_tm-02"></div>
                                        <h4 class="panel-title">Registration</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseTwo" aria-expanded="false">
                                    <div class="panel-body">
                                        <p>A Trademark is the key identifier of a business so it is only normal to want to protect it from unauthorized users. Using a trademark without registration will not come with many benefits. The main concern is that there will always be a high risk of losing it at a later stage as others would see it as available and register it. By registering your trademark, you will hold all the rights as well as the ability to take legal action against anyone who uses it unlawfully. If, however, you do not decide to register your trademark, you will risk your chances of it being registered by someone else.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- end-->
                            <!-- start-->
                            <div class="panel panel-default">
                                <a href="#3">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-3" data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false">
                                        <div class="sprite1 about_tm-03"></div>
                                        <h4 class="panel-title">Our Pricelist</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseThree" aria-expanded="false">
                                    <div class="panel-body">
                                        <p>At Agent Legal, we make sure that our customers receive the best prices possible for their trademark registration. Please keep in mind that each jurisdiction will have a trademark authority, used to protect your trademark for a small fee.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- end-->
                            <!-- start-->
                            <div class="panel panel-default">
                                <a href="#4">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-4" data-toggle="collapse" data-parent="#accordion" data-target="#collapseFour" aria-expanded="false">
                                        <div class="sprite1 about_tm-04"></div>
                                        <h4 class="panel-title">Search</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseFour" aria-expanded="false">
                                    <div class="panel-body">
                                        <p>Before registering, it is recommended to check the availability of your suggested trademark. You can do this by simply conducting a search using our 'Trademark Search' section. By doing a thorough search, you eliminate any possibilities of plagiarism with existing companies.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- end-->
                            <!-- start-->
                            <div class="panel panel-default">
                                <a href="#5">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-5" data-toggle="collapse" data-parent="#accordion" data-target="#collapseFive" aria-expanded="false">
                                        <div class="sprite1 about_tm-05"></div>
                                        <h4 class="panel-title">Watch</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseFive" aria-expanded="false">
                                    <div class="panel-body">
                                        <p>Still not convinced to perform a Trademark search? You will be shocked to find out that not all trademark authorities go through the process of investigating whether or not a trademark already exists. This can accumulate chaos as authorities from different parts of the world may register the same mark at different times creating a legal mess. That's why it should be your priority to monitor similar or identical registered trademarks. It is only by monitoring that you can identify whether or not legal action should be imposed.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- end-->
                            <!-- start-->
                            <div class="panel panel-default">
                                <a href="#6">
                                    <div class="panel-heading accordion-toggle collapsed" id="accordion-toggle-6" data-toggle="collapse" data-parent="#accordion" data-target="#collapseSix" aria-expanded="false">
                                        <div class="sprite1 about_tm-06"></div>
                                        <h4 class="panel-title">WorkFlow</h4></div>
                                </a>
                                <div class="panel-collapse collapse" id="collapseSix" aria-expanded="false">
                                    <div class="panel-body">
                                        <p>Registering your trademark at Agent Legal is simple, and we understand that you may want to know the process. So, for your acknowledgement, we have created a workflow showing the whole registration process.</p>
                                        <div class="mar-btm-20">
                                            <p><strong>1. Place your order online </strong></p>
                                            <p>Verify your order and pay online through our secured payment system.</p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>2. We contact you</strong></p>
                                            <p>Once your order has been submitted, we will send you an order confirmation email and one of our attorneys will contact you to advise further procedure.
                                            </p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>3. Trademark Application</strong></p>
                                            <p>We will complete your trademark application in the territory or country you wish to register your trademark by sending it to the Trademark Authority.
                                            </p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>4. Application accepted</strong></p>
                                            <p>Once your application has been accepted by the Trademark Authority, we will send you a notification letter which will include the application number and submission date.</p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>5. Examination of the trademark application</strong></p>
                                            <p>Once your application has been processed by the Trademarks Authority, examiners will begin the initial examination to ensure that all the formal requirements of the application form have been satisfied as set out in the Trademarks Act. In case your application is refused you will be informed accordingly.
                                            </p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>6. Publication of the trademark application</strong></p>
                                            <p>Publication of the trademark in the Official Gazette is mandatory as third parties have the right to object to the registration within a specific time frame by filing an opposition. In case a third party opposes your registration, you will be informed accordingly.</p>
                                        </div>
                                        <div class="mar-btm-20">
                                            <p><strong>7. Registration of your trademark</strong></p>
                                            <p>If no opposition is received, the Trademark Office will proceed with trademark registration and in a certain period you will be provided with a certificate of registration of your trademark.</p>
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