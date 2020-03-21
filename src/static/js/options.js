/*jslint browser: true, forin: true, eqeq: true, white: true, sloppy: true, vars: true, nomen: true */
/*global $, jQuery, _, asm, common, config, controller, dlgfx, format, header, html, validate */

$(function() {

    var BACKGROUND_COLOURS = {
        "asm":              "#ffffff",
        "base":             "#ffffff",
        "black-tie":        "#333333",
        "blitzer":          "#cc0000",
        "cupertino":        "#deedf7",
        "dark-hive":        "#444444",
        "dot-luv":          "#0b3e6f",
        "eggplant":         "#30273a",
        "excite-bike":      "#f9f9f9",
        "flick":            "#dddddd",
        "hot-sneaks":       "#35414f",
        "humanity":         "#cb842e",
        "le-frog":          "#3a8104",
        "mint-choc":        "#453326",
        "overcast":         "#dddddd",
        "pepper-grinder":   "#ffffff",
        "redmond":          "#5c9ccc",
        "smoothness":       "#cccccc",
        "south-street":     "#ece8da",
        "start":            "#2191c0",
        "sunny":            "#817865",
        "swanky-purse":     "#261803",
        "trontastic":       "#9fda58",
        "ui-darkness":      "#333333",
        "ui-lightness":     "#ffffff",
        "vader":            "#888888"
    };

    var options = {

        /** Where we have a list of pairs, first is value, second is label */
        two_pair_options: function(o, isflag) {
            var s = [];
            $.each(o, function(i, v) {
                var ds = "";
                if (isflag) {
                    ds = 'data-style="background-image: url(static/images/flags/' + v[0] + '.png)"';
                }
                s.push('<option value="' + v[0] + '" ' + ds + '>' + v[1] + '</option>');
            });
            return s.join("\n");
        },

        render_tabs: function() {
            return [
                '<ul>',
                '<li><a href="#tab-shelterdetails">' + _("Shelter Details") + '</a></li>',
                '<li><a href="#tab-accounts">' + _("Accounts") + '</a></li>',
                '<li><a href="#tab-adding">' + _("Add Animal") + '</a></li>',
                '<li><a href="#tab-agegroups">' + _("Age Groups") + '</a></li>',
                '<li><a href="#tab-animalcodes">' + _("Animal Codes") + '</a></li>',
                '<li><a href="#tab-animalemblems">' + _("Animal Emblems") + '</a></li>',
                '<li><a href="#tab-costs">' + _("Costs") + '</a></li>',
                '<li><a href="#tab-data-protection">' + _("Data Protection") + '</a></li>',
                '<li><a href="#tab-defaults">' + _("Defaults") + '</a></li>',
                '<li><a href="#tab-diaryandmessages">' + _("Diary and Messages") + '</a></li>',
                '<li><a href="#tab-display">' + _("Display") + '</a></li>',
                '<li><a href="#tab-documents">' + _("Documents") + '</a></li>',
                '<li><a href="#tab-email">' + _("Email") + '</a></li>',
                '<li><a href="#tab-findanimalperson">' + _("Find Animal/Person") + '</a></li>',
                '<li><a href="#tab-homepage">' + _("Home page") + '</a></li>',
                '<li><a href="#tab-insurance">' + _("Insurance") + '</a></li>',
                '<li><a href="#tab-lostandfound">' + _("Lost and Found") + '</a></li>',
                '<li><a href="#tab-medical">' + _("Medical") + '</a></li>',
                '<li><a href="#tab-movements">' + _("Movements") + '</a></li>',
                '<li><a href="#tab-quicklinks">' + _("Quicklinks") + '</a></li>',
                '<li><a href="#tab-unwanted">' + _("Remove") + '</a></li>',
                '<li><a href="#tab-search">' + _("Search") + '</a></li>',
                '<li><a href="#tab-shelterview">' + _("Shelter view") + '</a></li>',
                '<li><a href="#tab-waitinglist">' + _("Waiting List") + '</a></li>',
                '</ul>'
            ].join("\n");
        },

        render_shelterdetails: function() {
            return [
                '<div id="tab-shelterdetails">',
                '<table>',
                '<tr>',
                '<td><label for="organisation">' + _("Organization") + '</label></td>',
                '<td><input id="organisation" type="text" class="asm-doubletextbox" data="Organisation" />',
                '</tr>',
                '<tr>',
                '<td><label for="address">' + _("Address") + '</label></td>',
                '<td><textarea id="address" rows="3" class="asm-textareafixeddouble" data="OrganisationAddress"></textarea>',
                '</tr>',
                '<tr>',
                '<td><label for="city">' + _("City") + '</label></td>',
                '<td><input id="city" type="text" class="asm-textbox" data="OrganisationTown" />',
                '</tr>',
                '<tr>',
                '<td><label for="state">' + _("State") + '</label></td>',
                '<td><input id="state" type="text" class="asm-textbox" data="OrganisationCounty" />',
                '</tr>',
                '<tr>',
                '<td><label for="zipcode">' + _("Zipcode") + '</label></td>',
                '<td><input id="zipcode" type="text" class="asm-textbox" data="OrganisationPostcode" />',
                '</tr>',
                '<tr>',
                '<td><label for="country">' + _("Country") + '</label></td>',
                '<td><input id="country" type="text" class="asm-textbox" data="OrganisationCountry" />',
                '</tr>',
                '<tr>',
                '<td><label for="telephone">' + _("Telephone") + '</label></td>',
                '<td><input id="telephone" type="text" class="asm-textbox" data="OrganisationTelephone" />',
                '</tr>',
                '<tr>',
                '<td><label for="telephone2">' + _("Telephone") + '</label></td>',
                '<td><input id="telephone2" type="text" class="asm-textbox" data="OrganisationTelephone2" />',
                '</tr>',
                '<tr>',
                '<td><label for="timezone">' + _("Server clock adjustment") + '</label></td>',
                '<td><select id="timezone" type="text" class="asm-selectbox" data="Timezone">',
                '<option value="-12">-12:00</option>',
                '<option value="-11">-11:00</option>',
                '<option value="-10">-10:00</option>',
                '<option value="-9.5">-09:30</option>',
                '<option value="-9">-09:00</option>',
                '<option value="-8">-08:00 (USA PST)</option>',
                '<option value="-7">-07:00 (USA MST)</option>',
                '<option value="-6">-06:00 (USA CST)</option>',
                '<option value="-5">-05:00 (USA EST)</option>',
                '<option value="-4">-04:00</option>',
                '<option value="-3.5">-03:30</option>',
                '<option value="-3">-03:00</option>',
                '<option value="-2.5">-02:30</option>',
                '<option value="-2">-02:00</option>',
                '<option value="-1">-01:00</option>',
                '<option value="0">' + _("No adjustment") + ' (GMT/UTC)</option>',
                '<option value="1">+01:00 (CET)</option>',
                '<option value="2">+02:00 (EET)</option>',
                '<option value="3">+03:00 (FET)</option>',
                '<option value="3.5">+03:30</option>',
                '<option value="4">+04:00</option>',
                '<option value="4.5">+04:30</option>',
                '<option value="5">+05:00</option>',
                '<option value="5.5">+05:30 (IST)</option>',
                '<option value="5.75">+05:45</option>',
                '<option value="6">+06:00</option>',
                '<option value="6.5">+06:30</option>',
                '<option value="7">+07:00</option>',
                '<option value="8">+08:00 (AWST)</option>',
                '<option value="8.5">+08:30</option>',
                '<option value="8.75">+08:45</option>',
                '<option value="9">+09:00 (JST)</option>',
                '<option value="9.5">+09:30 (ACT)</option>',
                '<option value="10">+10:00 (AET)</option>',
                '<option value="10.5">+10:30</option>',
                '<option value="11">+11:00</option>',
                '<option value="12">+12:00</option>',
                '<option value="12.75">+12:45</option>',
                '<option value="13">+13:00</option>',
                '<option value="13.75">+13:45</option>',
                '<option value="14">+14:00</option>',
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="olocale">' + _("Locale") + '</label>',
                '<span id="callout-olocale" class="asm-callout">' + _("The locale determines the language ASM will use when displaying text, dates and currencies.") + '</span>',
                '</td>',
                '<td><select id="olocale" type="text" class="asm-doubleselectbox asm-iconselectmenu" data="Locale">',
                options.two_pair_options(controller.locales, true),
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_accounts: function() {
            return [
                '<div id="tab-accounts">',
                '<p><input data="rc:DisableAccounts" id="disableaccounts" type="checkbox" class="asm-checkbox" />',
                '<label for="disableaccounts">' + _("Enable accounts functionality") + '</label>',
                '<br />',
                '<input data="CreateDonationTrx" id="createdonations" type="checkbox" class="asm-checkbox" />',
                '<label for="createdonations">' + _("Creating payments and payments types creates matching accounts and transactions") + '</label>',
                '<br />',
                '<input data="CreateCostTrx" id="createcost" type="checkbox" class="asm-checkbox" />',
                '<label for="createcost">' + _("Creating cost and cost types creates matching accounts and transactions") + '</label>',
                '<br />',
                '<input data="DonationTrxOverride" id="donationtrxoverride" type="checkbox" class="asm-checkbox" />',
                '<label for="donationtrxoverride">' + _("When receiving payments, allow the deposit account to be overridden") + '</label>',
                '<br />',
                '<input data="DonationQuantities" id="donationquantities" type="checkbox" class="asm-checkbox" />',
                '<label for="donationquantities">' + _("When receiving payments, allow a quantity and unit price to be set") + '</label>',
                '<br />',
                '<input data="DonationFees" id="donationfees" type="checkbox" class="asm-checkbox" />',
                '<label for="donationfees">' + _("When receiving payments, allow a transaction fee to be set") + '</label>',
                '<br />',
                '<input data="VATEnabled" id="vatenabled" type="checkbox" class="asm-checkbox" />',
                '<label for="vatenabled">' + _("When receiving payments, allow recording of sales tax with a default rate of") + '</label>',
                '<input data="VATRate" class="asm-textbox asm-halftextbox asm-numberbox" type="text" />%',
                '<br />',
                '<input data="DonationDateOverride" id="donationdateoverride" type="checkbox" class="asm-checkbox" />',
                '<label for="donationdateoverride">' + _("When receiving multiple payments, allow the due and received dates to be set") + '</label>',
                '<br />',
                '<input data="AccountPeriodTotals" id="accountperiodtotals" type="checkbox" class="asm-checkbox" />',
                '<label for="accountperiodtotals">' + _("Only show account totals for the current period, which starts on ") + '</label>',
                '<input data="AccountingPeriod" id="accountingperiod" class="asm-datebox asm-textbox" />',
                '</p>',
                '<table>',
                '<td><label for="defaulttrxview">' + _("Default transaction view") + '</td>',
                '<td><select data="DefaultAccountViewPeriod" id="defaulttrxview" class="asm-selectbox">',
                '<option value="0">' + _("This Month") + '</option>',
                '<option value="1">' + _("This Week") + '</option>',
                '<option value="2">' + _("This Year") + '</option>',
                '<option value="3">' + _("Last Month") + '</option>',
                '<option value="4">' + _("Last Week") + '</option>',
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="csourceaccount">' + _("Default source account for costs") + '</td>',
                '<td><select data="CostSourceAccount" id="csourceaccount" class="asm-selectbox">',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="destinationaccount">' + _("Default destination account for payments") + '</td>',
                '<td><select data="DonationTargetAccount" id="destinationaccount" class="asm-selectbox">',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="mapdt1">' + _("Payments of type") + '</td>',
                '<td><select id="mapdt1" class="asm-selectbox donmap">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select>',
                '</td>',
                '<td>' + _("are sent to") + '</td>',
                '<td><select id="mapac1" class="asm-selectbox">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="mapdt2">' + _("Payments of type") + '</td>',
                '<td><select id="mapdt2" class="asm-selectbox donmap">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select>',
                '</td>',
                '<td>' + _("are sent to") + '</td>',
                '<td><select id="mapac2" class="asm-selectbox">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="mapdt3">' + _("Payments of type") + '</td>',
                '<td><select id="mapdt3" class="asm-selectbox donmap">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select>',
                '</td>',
                '<td>' + _("are sent to") + '</td>',
                '<td><select id="mapac3" class="asm-selectbox">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="mapdt4">' + _("Payments of type") + '</td>',
                '<td><select id="mapdt4" class="asm-selectbox donmap">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select>',
                '</td>',
                '<td>' + _("are sent to") + '</td>',
                '<td><select id="mapac4" class="asm-selectbox">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="mapdt5">' + _("Payments of type") + '</td>',
                '<td><select id="mapdt5" class="asm-selectbox donmap">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select>',
                '</td>',
                '<td>' + _("are sent to") + '</td>',
                '<td><select id="mapac5" class="asm-selectbox">',
                '<option value="-1">' + _("[None]") + '</option>',
                html.list_to_options(controller.accounts, "ID", "CODE"),
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_adding: function() {
            return [
                '<div id="tab-adding">',
                '<p>',
                '<input data="AddAnimalsShowBreed" id="aashowbreed" class="asm-checkbox" type="checkbox" /> <label for="aashowbreed">' + _("Show the breed fields") + '</label><br />',
                '<input data="UseSingleBreedField" id="singlebreed" class="asm-checkbox" type="checkbox" /> <label for="singlebreed">' + _("Use a single breed field") + '</label><br />',
                '<input data="AddAnimalsShowColour" id="aashowcolour" class="asm-checkbox" type="checkbox" /> <label for="aashowcolour">' + _("Show the color field") + '</label><br />',
                '<input data="AddAnimalsShowFee" id="aashowfee" class="asm-checkbox" type="checkbox" /> <label for="aashowfee">' + _("Show the adoption fee field") + '</label><br />',
                '<input data="AddAnimalsShowLocation" id="aashowlocation" class="asm-checkbox" type="checkbox" /> <label for="aashowlocation">' + _("Show the internal location field") + '</label><br />',
                '<input data="AddAnimalsShowLocationUnit" id="aashowlocationunit" class="asm-checkbox" type="checkbox" /> <label for="aashowlocationunit">' + _("Show the location unit field") + '</label><br />',
                '<input data="AddAnimalsShowFosterer" id="aashowfosterer" class="asm-checkbox" type="checkbox" /> <label for="aashowfosterer">' + _("Allow a fosterer to be selected") + '</label><br />',
                '<input data="AddAnimalsShowCoordinator" id="aashowcoordinator" class="asm-checkbox" type="checkbox" /> <label for="aashowcoordinator">' + _("Allow an adoption coordinator to be selected") + '</label><br />',
                '<input data="AddAnimalsShowAcceptance" id="aashowacceptance" class="asm-checkbox" type="checkbox" /> <label for="aashowacceptance">' + _("Show the litter ID field") + '</label><br />',
                '<input data="AddAnimalsShowSize" id="aashowsize" class="asm-checkbox" type="checkbox" /> <label for="aashowsize">' + _("Show the size field") + '</label><br />',
                '<input data="AddAnimalsShowWeight" id="aashowweight" class="asm-checkbox" type="checkbox" /> <label for="aashowweight">' + _("Show the weight field") + '</label><br />',
                '<input data="AddAnimalsShowNeutered" id="aashowneutered" class="asm-checkbox" type="checkbox" /> <label for="aashowneutered">' + _("Show the altered fields") + '</label><br />',
                '<input data="AddAnimalsShowMicrochip" id="aashowmicrochip" class="asm-checkbox" type="checkbox" /> <label for="aashowmicrochip">' + _("Show the microchip fields") + '</label><br />',
                '<input data="AddAnimalsShowTattoo" id="aashowtattoo" class="asm-checkbox" type="checkbox" /> <label for="aashowtattoo">' + _("Show the tattoo fields") + '</label><br />',
                '<input data="AddAnimalsShowEntryCategory" id="aashowentrycategory" class="asm-checkbox" type="checkbox" /> <label for="aashowentrycategory">' + _("Show the entry category field") + '</label><br />',
                '<input data="AddAnimalsShowDateBroughtIn" id="aashowdatebroughtin" class="asm-checkbox" type="checkbox" /> <label for="aashowdatebroughtin">' + _("Show the date brought in field") + '</label><br />',
                '<input data="AddAnimalsShowTimeBroughtIn" id="aashowtimebroughtin" class="asm-checkbox" type="checkbox" /> <label for="aashowtimebroughtin">' + _("Show the time brought in field") + '</label><br />',
                '<input data="AddAnimalsShowOriginalOwner" id="aashoworiginalowner" class="asm-checkbox" type="checkbox" /> <label for="aashoworiginalowner">' + _("Show the original owner field") + '</label><br />',
                '<input data="AddAnimalsShowBroughtInBy" id="aashowbroughtinby" class="asm-checkbox" type="checkbox" /> <label for="aashowbroughtinby">' + _("Show the brought in by field") + '</label><br />',
                '<input data="AddAnimalsShowTransferIn" id="aashowtransferin" class="asm-checkbox" type="checkbox" /> <label for="aashowtransferin">' + _("Show the transfer in field") + '</label><br />',
                '<input data="AddAnimalsShowHold" id="aashowhold" class="asm-checkbox" type="checkbox" /> <label for="aashowhold">' + _("Show the hold fields") + '</label><br />',
                '<input data="WarnSimilarAnimalName" id="warnsimilaranimal" class="asm-checkbox" type="checkbox" /> <label for="warnsimilaranimal">' + _("Warn if the name of the new animal is similar to one entered recently") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_agegroups: function() {
            return [
                '<div id="tab-agegroups">',
                html.info(_("Age groups are assigned based on the age of an animal. The figure in the left column is the upper limit in years for that group.")),
                '<table>',
                '<tr>',
                '<td>' + _("Age Group 1") + '</td>',
                '<td><input id="agegroup1" type="text" class="asm-numberbox asm-textbox" data="AgeGroup1" /></td>',
                '<td><input id="agegroup1name" type="text" class="asm-textbox" data="AgeGroup1Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 2") + '</td>',
                '<td><input id="agegroup2" type="text" class="asm-numberbox asm-textbox" data="AgeGroup2" /></td>',
                '<td><input id="agegroup2name" type="text" class="asm-textbox" data="AgeGroup2Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 3") + '</td>',
                '<td><input id="agegroup3" type="text" class="asm-numberbox asm-textbox" data="AgeGroup3" /></td>',
                '<td><input id="agegroup3name" type="text" class="asm-textbox" data="AgeGroup3Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 4") + '</td>',
                '<td><input id="agegroup4" type="text" class="asm-numberbox asm-textbox" data="AgeGroup4" /></td>',
                '<td><input id="agegroup4name" type="text" class="asm-textbox" data="AgeGroup4Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 5") + '</td>',
                '<td><input id="agegroup5" type="text" class="asm-numberbox asm-textbox" data="AgeGroup5" /></td>',
                '<td><input id="agegroup5name" type="text" class="asm-textbox" data="AgeGroup5Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 6") + '</td>',
                '<td><input id="agegroup6" type="text" class="asm-numberbox asm-textbox" data="AgeGroup6" /></td>',
                '<td><input id="agegroup6name" type="text" class="asm-textbox" data="AgeGroup6Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 7") + '</td>',
                '<td><input id="agegroup7" type="text" class="asm-numberbox asm-textbox" data="AgeGroup7" /></td>',
                '<td><input id="agegroup7name" type="text" class="asm-textbox" data="AgeGroup7Name" /></td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Age Group 8") + '</td>',
                '<td><input id="agegroup8" type="text" class="asm-numberbox asm-textbox" data="AgeGroup8" /></td>',
                '<td><input id="agegroup8name" type="text" class="asm-textbox" data="AgeGroup8Name" /></td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_animalcodes: function() {
            return [
                '<div id="tab-animalcodes">',
                html.info(
                    _("Code format tokens:") + '<br />' +
                    _("T = first letter of animal type") + '<br />' +
                    _("TT = first and second letter of animal type") + '<br />' + 
                    _("E = first letter of animal entry category") + '<br />' +
                    _("EE = first and second letter of animal entry category") + '<br />' + 
                    _("S = first letter of animal species") + '<br />' +
                    _("SS = first and second letter of animal species") + '<br />' + 
                    _("YY or YYYY = current year") + '<br />' +
                    _("MM = current month") + '<br />' +
                    _("DD = current day") + '<br />' + 
                    _("UUUUUUUUUU or UUUU = unique number") + '<br />' +
                    _("XXX or XX = number unique for this year") + '<br />' +
                    _("NNN or NN = number unique for this type of animal for this year") + '<br />' +
                    _("Defaults formats for code and shortcode are TYYYYNNN and NNT")),
                '<table>',
                '<tr>',
                '<td><label for="codeformat">' + _("Animal code format") + '</label></td>',
                '<td><input data="CodingFormat" id="codeformat" type="text" class="asm-textbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="shortformat">' + _("Animal shortcode format") + '</label></td>',
                '<td><input data="ShortCodingFormat" id="shortformat" type="text" class="asm-textbox" /></td>',
                '</tr>',
                '</table>',
                '<p>',
                '<input data="ManualCodes" id="manualcodes" type="checkbox" class="asm-checkbox" /> <label for="manualcodes">' + _("Manually enter codes (do not generate)") + '</label>',
                '<br />',
                '<input data="UseShortShelterCodes" id="shortcodes" type="checkbox" class="asm-checkbox" /> <label for="shortcodes">' + _("Show short shelter codes on screens") + '</label>',
                '<br />',
                '<input data="DisableShortCodesControl" id="disableshortcodes" type="checkbox" class="asm-checkbox" /> <label for="disableshortcodes">' + _("Remove short shelter code box from the animal details screen") + '</label>',
                '<br />',
                '<input data="ShelterViewShowCodes" id="shelterviewshowcodes" type="checkbox" class="asm-checkbox" /> <label for="shelterviewshowcodes">' + _("Show codes on the shelter view screen") + '</label>',
                '<br />',
                '<input data="LockCodes" id="lockcodes" type="checkbox" class="asm-checkbox" /> <label for="lockcodes">' + _("Once assigned, codes cannot be changed") + '</label>',
                '<br />',
                '<input data="AllowDuplicateMicrochip" id="duplicatechip" type="checkbox" class="asm-checkbox" /> <label for="duplicatechip">' + _("Allow duplicate microchip numbers") + '</label>',
                '<br />',
                '<input data="rc:UniqueLicenceNumbers" id="uniquelicence" type="checkbox" class="asm-checkbox" /> <label for="uniquelicence">' + _("Allow duplicate license numbers") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_animalemblems: function() {
            var emblemvalues = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                emblemoptions = [], i = 0;
            for (i = 0; i < emblemvalues.length; i=i+1) { emblemoptions.push('<option>' + emblemvalues[i] + '</option>'); }
            return [
                '<div id="tab-animalemblems">',
                html.info(_("Animal emblems are the little icons that appear next to animal names in shelter view, the home page and search results.")),
                '<table>',
                '<tr><td>',
                '<p>',
                '<input data="EmblemAlwaysLocation" type="checkbox" id="alwaysshowlocation" class="asm-checkbox" type="checkbox" />',
                    html.icon("location") + ' <label for="alwaysshowlocation">' + _("Always show an emblem to indicate the current location") + '</label><br />',
                '<input data="EmblemBonded" type="checkbox" id="showbonded" class="asm-checkbox" type="checkbox" />',
                    html.icon("bonded") + ' <label for="showbonded">' + _("Bonded") + '</label><br />',
                '<input data="EmblemCrueltyCase" type="checkbox" id="showcrueltycase" class="asm-checkbox" type="checkbox" />',
                    html.icon("case") + ' <label for="showcrueltycase">' + _("Cruelty Case") + '</label><br />',
                '<input data="EmblemDeceased" type="checkbox" id="showdeceased" class="asm-checkbox" type="checkbox" />',
                    html.icon("death") + ' <label for="showdeceased">' + _("Deceased") + '</label><br />',
                '<input data="EmblemHold" type="checkbox" id="showhold" class="asm-checkbox" type="checkbox" />',
                    html.icon("hold") + ' <label for="showhold">' + _("Hold") + '</label><br />',
                '<input data="EmblemLongTerm" type="checkbox" id="longterm" class="asm-checkbox" type="checkbox" />',
                    html.icon("calendar") + ' <label for="longterm">' + _("Long term") + '</label><br />',
                '<input data="EmblemNonShelter" type="checkbox" id="shownonshelter" class="asm-checkbox" type="checkbox" />',
                    html.icon("nonshelter") + ' <label for="shownonshelter">' + _("Non-Shelter") + '</label><br />',
                '<input data="EmblemNotForAdoption" type="checkbox" id="shownotforadoption" class="asm-checkbox" type="checkbox" />',
                    html.icon("notforadoption") + ' <label for="shownotforadoption">' + _("Not For Adoption") + '</label><br />',
                '<input data="EmblemNotMicrochipped" type="checkbox" id="showunmicrochipped" class="asm-checkbox" type="checkbox" />',
                    html.icon("microchip") + ' <label for="showunmicrochipped">' + _("Not Microchipped") + '</label><br />',
                '<input data="EmblemPositiveTest" type="checkbox" id="showpositivetest" class="asm-checkbox" type="checkbox" />',
                    html.icon("positivetest") + ' <label for="showpositivetest">' + _("Positive for Heartworm, FIV or FLV") + '</label><br />',
                '<input data="EmblemQuarantine" type="checkbox" id="showquarantine" class="asm-checkbox" type="checkbox" />',
                    html.icon("quarantine") + ' <label for="showquarantine">' + _("Quarantine") + '</label><br />',
                '<input data="EmblemReserved" type="checkbox" id="showreserved" class="asm-checkbox" type="checkbox" />',
                    html.icon("reservation") + ' <label for="showreserved">' + _("Reserved") + '</label><br />',
                '<input data="EmblemSpecialNeeds" type="checkbox" id="showspecialneeds" class="asm-checkbox" type="checkbox" />',
                    html.icon("health") + ' <label for="showspecialneeds">' + _("Special Needs") + '</label><br />',
                '<input data="EmblemTrialAdoption" type="checkbox" id="showtrialadoption" class="asm-checkbox" type="checkbox" />',
                    html.icon("trial") + ' <label for="showtrialadoption">' + _("Trial Adoption") + '</label><br />',
                '<input data="EmblemUnneutered" type="checkbox" id="showunneutered" class="asm-checkbox" type="checkbox" />',
                    html.icon("unneutered") + ' <label for="showunneutered">' + _("Unaltered") + '</label><br />',
                '</p>',
                '</td><td>',
                html.info(_("You can assign a custom emblem to your additional animal flags")),
                '<br/>',
                '<select data="EmblemsCustomFlag1" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue1" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag2" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue2" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag3" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue3" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag4" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue4" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag5" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue5" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag6" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue6" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag7" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue7" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag8" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue8" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag9" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue9" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '<br/>',
                '<select data="EmblemsCustomFlag10" class="asm-selectbox"><option></option>' + html.list_to_options(controller.animalflags, "FLAG", "FLAG") + '</select>',
                '<select data="EmblemsCustomValue10" class="asm-selectbox"><option></option>' + emblemoptions.join("") + '</select>',
                '</td></tr></table>',
                '</div>'
            ].join("\n");
        },

        render_costs: function() {
            return [
                '<div id="tab-costs">',
                '<table>',
                '<tr>',
                '<td><label for="dailyboardingcost">' + _("Default daily boarding cost") + '</label></td>',
                '<td><input data="DefaultDailyBoardingCost" id="dailyboardingcost" class="asm-currencybox asm-textbox" type="text" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="costtype">' + _("Boarding cost type") + '</label></td>',
                '<td><select data="BoardingCostType" id="costtype" class="asm-selectbox">',
                html.list_to_options(controller.costtypes, "ID", "COSTTYPENAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td></td>',
                '<td>',
                '<input data="CreateBoardingCostOnAdoption" id="costonadoption" type="checkbox" class="asm-checkbox" /> <label for="costonadoption">' + _("Create boarding cost record when animal is adopted") + '</label><br />',
                '<input data="ShowCostAmount" id="showcostamount" type="checkbox" class="asm-checkbox" /> <label for="showcostamount">' + _("Show a cost field on medical/test/vaccination screens") + '</label><br />',
                '<input data="ShowCostPaid" id="showcostpaid" type="checkbox" class="asm-checkbox" /> <label for="showcostpaid">' + _("Show a separate paid date field with costs") + '</label>',
                '</td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_data_protection: function() {
            return [
                '<div id="tab-data-protection">',
                '<p>',
                '<input data="AnonymisePersonalData" id="anonymisepersonaldata" type="checkbox" class="asm-checkbox" /> <label for="anonymisepersonaldata">' + _("Anonymize personal data after this many years") + '</label>',
                '<span id="callout-anonymise" class="asm-callout">' + _("This many years after creation of a person record, the name, address and telephone data will be anonymized.") + '</span>',
                '<input data="AnonymiseAfterYears" type="text" class="asm-textbox asm-intbox" />', 
                '<br />',
                '<input data="AutoRemoveDocumentMedia" id="autoremovedocumentmedia" type="checkbox" class="asm-checkbox" /> <label for="autoremovedocumentmedia">' + _("Remove HTML and PDF document media after this many years") + '</label>',
                '<input data="AutoRemoveDMYears" type="text" class="asm-textbox asm-intbox" />', 
                '<br />',
                '<input data="ShowGDPRContactOptIn" id="showgdprcontact" type="checkbox" class="asm-checkbox" /> <label for="showgdprcontact">' + _("Show GDPR Contact Opt-In field on person screens") + '</label>',
                '<br />',
                '<input data="GDPRContactChangeLog" id="gdprcontactchangelog" type="checkbox" class="asm-checkbox" /> <label for="gdprcontactchangelog">' + _("When I set a new GDPR Opt-In contact option, make a note of it in the log with this type") + '</label>',
                '<select data="GDPRContactChangeLogType" id="gdprcontactchangelogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select>',
                '</p>',
                '</div>'
            ].join("\n");
        },


        render_defaults: function() {
            return [
                '<div id="tab-defaults">',
                html.info(_("These are the default values for these fields when creating new records.")),
                '<table>',
                '<tr>',
                '<td><label for="defaultspecies">' + _("Default Species") + '</label></td>',
                '<td><select data="AFDefaultSpecies" id="defaultspecies" class="asm-selectbox">',
                html.list_to_options(controller.species, "ID", "SPECIESNAME"),
                '</select></td>',
                '<td><label for="defaulttype">' + _("Default Type") + '</label></td>',
                '<td><select data="AFDefaultType" id="defaulttype" class="asm-selectbox">',
                html.list_to_options(controller.types, "ID", "ANIMALTYPE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultlocation">' + _("Default Location") + '</label></td>',
                '<td><select data="AFDefaultLocation" id="defaultlocation" class="asm-selectbox">',
                html.list_to_options(controller.locations, "ID", "LOCATIONNAME"),
                '</select></td>',
                '<td><label for="defaultentry">' + _("Default Entry Reason") + '</label></td>',
                '<td><select data="AFDefaultEntryReason" id="defaultentry" class="asm-selectbox">',
                html.list_to_options(controller.entryreasons, "ID", "REASONNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultcolour">' + _("Default Color") + '</label></td>',
                '<td><select data="AFDefaultColour" id="defaultcolour" class="asm-selectbox">',
                html.list_to_options(controller.colours, "ID", "BASECOLOUR"),
                '</select></td>',
                '<td><label for="defaultdeath">' + _("Default Death Reason") + '</label></td>',
                '<td><select data="AFDefaultDeathReason" id="defaultdeath" class="asm-selectbox">',
                html.list_to_options(controller.deathreasons, "ID", "REASONNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultreturn">' + _("Default Return Reason") + '</label></td>',
                '<td><select data="AFDefaultReturnReason" id="defaultreturn" class="asm-selectbox">',
                html.list_to_options(controller.entryreasons, "ID", "REASONNAME"),
                '</select></td>',
                '<td><label for="defaultsize">' + _("Default Size") + '</label></td>',
                '<td><select data="AFDefaultSize" id="defaultsize" class="asm-selectbox">',
                html.list_to_options(controller.sizes, "ID", "SIZE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultlog">' + _("Default Log Filter") + '</label></td>',
                '<td><select data="AFDefaultLogFilter" id="defaultlog" class="asm-selectbox">',
                '<option value="-1">' + _("(all)") + '</option>',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select></td>',
                '<td><label for="defaultcoattype">' + _("Default Coat Type") + '</label></td>',
                '<td><select data="AFDefaultCoatType" id="defaultcoattype" class="asm-selectbox">',
                html.list_to_options(controller.coattypes, "ID", "COATTYPE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultlogtype">' + _("Default Log Type") + '</label></td>',
                '<td><select data="AFDefaultLogType" id="defaultlogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select></td>',
                '<td><label for="defaultdiary">' + _("Default Diary Person") + '</label></td>',
                '<td><select data="AFDefaultDiaryPerson" id="defaultdiary" class="asm-selectbox">',
                '<option value=""></option>',
                html.list_to_options(controller.usersandroles, "USERNAME", "USERNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultdonation">' + _("Default Payment Type") + '</label></td>',
                '<td><select data="AFDefaultDonationType" id="defaultdonation" class="asm-selectbox">',
                html.list_to_options(controller.donationtypes, "ID", "DONATIONNAME"),
                '</select></td>',
                '<td><label for="defaultvaccination">' + _("Default Vaccination Type") + '</label></td>',
                '<td><select data="AFDefaultVaccinationType" id="defaultvaccination" class="asm-selectbox">',
                html.list_to_options(controller.vaccinationtypes, "ID", "VACCINATIONTYPE"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="defaultbreed">' + _("Default Breed") + '</label></td>',
                '<td><select data="AFDefaultBreed" id="defaultbreed" class="asm-selectbox">',
                html.list_to_options(controller.breeds, "ID", "BREEDNAME"),
                '</select>',
                '</td>',
                '<td><label for="defaulttest">' + _("Default Test Type") + '</label></td>',
                '<td><select data="AFDefaultTestType" id="defaulttest" class="asm-selectbox">',
                html.list_to_options(controller.testtypes, "ID", "TESTNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="DefaultIncident">' + _("Default Incident Type") + '</label></td>',
                '<td>',
                '<select id="DefaultIncident" data="DefaultIncidentType" class="asm-selectbox">',
                html.list_to_options(controller.incidenttypes, "ID", "INCIDENTNAME"),
                '</select>',
                '</td>',
                '<td><label for="DefaultReservationStatus">' + _("Default Reservation Status") + '</label></td>',
                '<td><select data="AFDefaultReservationStatus" id="DefaultReservationStatus" class="asm-selectbox">',
                html.list_to_options(controller.reservationstatuses, "ID", "STATUSNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="DefaultPaymentMethod">' + _("Default Payment Method") + '</label></td>',
                '<td>',
                '<select id="DefaultPaymentMethod" data="AFDefaultPaymentMethod" class="asm-selectbox">',
                html.list_to_options(controller.paymenttypes, "ID", "PAYMENTNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="DefaultBroughtInBy">' + _("Default Brought In By") + '</label></td>',
                '<td>',
                '<input id="DefaultBroughtInBy" data="DefaultBroughtInBy" type="hidden" class="asm-personchooser" value=\'\' />',
                '</td>',
                '<td><label for="defaultshift">' + _("Default Rota Shift") + '</label></td>',
                '<td>',
                '<input id="defaultshift" data="DefaultShiftStart" type="text" class="asm-textbox asm-halftextbox asm-timebox" />',
                '<input id="defaultshiftend" data="DefaultShiftEnd" type="text" class="asm-textbox asm-halftextbox asm-timebox" />',
                '</td>',
                '</tr>',
                '</table>',
                '<p>',
                '<input data="AutoNotForAdoption" id="autonotadopt" type="checkbox" class="asm-checkbox" /> <label for="autonotadopt">' + _("Mark new animals as not for adoption") + '</label>',
                '<br />',
                '<input data="AutoNewImagesNotForPublish" id="autoimagesnotforpublish" type="checkbox" class="asm-checkbox" /> <label for="autoimagesnotforpublish">' + _("Exclude new animal photos from publishing") + '</label>',
                '<br />',
                '<input data="AutoMediaNotes" id="automedianotes" type="checkbox" class="asm-checkbox" /> <label for="automedianotes">' + _("Prefill new media notes for animal images with animal comments if left blank") + '</label>',
                '<br />',
                '<input data="DefaultMediaNotesFromFile" id="medianotesfile" type="checkbox" class="asm-checkbox" /> <label for="medianotesfile">' + _("Prefill new media notes with the filename if left blank") + '</label>',
                '<br />',
                '<input data="HoldChangeLog" id="holdchangelog" type="checkbox" class="asm-checkbox" /> <label for="holdchangelog">' + _("When I mark an animal held, make a note of it in the log with this type") + '</label>',
                '<select data="HoldChangeLogType" id="holdchangelogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select>',
                '</br />',
                '<input data="LocationChangeLog" id="locationchangelog" type="checkbox" class="asm-checkbox" /> <label for="locationchangelog">' + _("When I change the location of an animal, make a note of it in the log with this type") + '</label>',
                '<select data="LocationChangeLogType" id="locationchangelogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select>',
                '<br />',
                '<input data="WeightChangeLog" id="weightchangelog" type="checkbox" class="asm-checkbox" /> <label for="weightchangelog">' + _("When I change the weight of an animal, make a note of it in the log with this type") + '</label>',
                '<select data="WeightChangeLogType" id="weightchangelogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_diaryandmessages: function() {
            return [
                '<div id="tab-diaryandmessages">',
                '<p class="asm-header">' + _("Diary") + '</p>',
                '<p>',
                '<input data="AllDiaryHomePage" id="alldiaryhomepage" class="asm-checkbox" type="checkbox" /> <label for="alldiaryhomepage">' + _("Show the full diary (instead of just my notes) on the home page") + '</label><br />',
                '<input data="EmailDiaryNotes" id="emaildiarynotes" class="asm-checkbox" type="checkbox" /> <label for="emaildiarynotes">' + _("Email users their outstanding diary notes once per day") + '</label><br />',
                '<input data="EmailDiaryOnChange" id="emaildiaryonchange" class="asm-checkbox" type="checkbox" /> <label for="emaildiaryonchange">' + _("Email users immediately when a diary note assigned to them is created or updated") + '</label><br />',
                '<input data="EmailDiaryOnComplete" id="emaildiaryoncomplete" class="asm-checkbox" type="checkbox" /> <label for="emaildiaryoncomplete">' + _("Email diary note creators when a diary note is marked complete") + '</label>',
                '</p>',
                '<p class="asm-header">' + _("Messages") + '</p>',
                '<input data="EmailMessages" id="emailmessages" class="asm-checkbox" type="checkbox" /> <label for="emailmessages">' + _("When a message is created, email it to each matching user") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_display: function() {
            return [
                '<div id="tab-display">',
                '<p>',
                '<input data="rc:DisableEffects" id="disableeffects" class="asm-checkbox" type="checkbox" /> <label for="disableeffects">' + _("Enable visual effects") + '</label><br />',
                '<!-- <input data="FancyTooltips" id="fancytooltips" class="asm-checkbox" type="checkbox" /> <label for="fancytooltips">' + _("Use fancy tooltips") + '</label><br /> -->',
                '<input data="rc:DontUseHTML5Scaling" id="disablehtml5scaling" class="asm-checkbox" type="checkbox" /> <label for="disablehtml5scaling">' + _("Use HTML5 client side image scaling where available to speed up image uploads") + '</label><br />',
                '<input data="PicturesInBooks" id="picsinbooks" class="asm-checkbox" type="checkbox" /> <label for="picsinbooks">' + _("Show animal thumbnails in movement and medical books") + '</label><br />',
                '<input data="ShowPersonMiniMap" id="minimap" class="asm-checkbox" type="checkbox" /> <label for="minimap">' + _("Show a minimap of the address on person screens") + '</label><br />',
                '<input data="ShowLatLong" id="latlong" class="asm-checkbox" type="checkbox" /> <label for="latlong">' + _("Allow editing of latitude/longitude with minimaps") + '</label><br />',
                '<input data="ShowWeightInLbs" id="showlbs" class="asm-checkbox" type="checkbox" /> <label for="showlbs">' + _("Show weights as lb and oz") + '</label><br />',
                '<input data="ShowWeightInLbsFraction" id="showlbsf" class="asm-checkbox" type="checkbox" /> <label for="showlbsf">' + _("Show weights as decimal lb") + '</label><br />',
                '<input data="ShowFullCommentsInTables" id="showfullcommentstables" class="asm-checkbox" type="checkbox" /> <label for="showfullcommentstables">' + _("Show complete comments in table views") + '</label><br />',
                '<input data="StickyTableHeaders" id="floatingheaders" class="asm-checkbox" type="checkbox" /> <label for="floatingheaders">' + _("Keep table headers visible when scrolling") + '</label><br />',
                '<input data="RecordNewBrowserTab" id="recordnewbrowsertab" class="asm-checkbox" type="checkbox" /> <label for="recordnewbrowsertab">' + _("Open records in a new browser tab") + '</label><br />',
                '<input data="ReportNewBrowserTab" id="reportnewbrowsertab" class="asm-checkbox" type="checkbox" /> <label for="reportnewbrowsertab">' + _("Open reports in a new browser tab") + '</label><br />',
                '<input data="ReportMenuAccordion" id="reportmenuaccordion" class="asm-checkbox" type="checkbox" /> <label for="reportmenuaccordion">' + _("Show report menu items in collapsed categories") + '</label><br />',
                '<input data="LocationFiltersEnabled" id="locationfilters" class="asm-checkbox" type="checkbox" /> <label for="locationfilters">' + _("Enable location filters") + '</label><br />',
                '<input data="MultiSiteEnabled" id="multisite" class="asm-checkbox" type="checkbox" /> <label for="multisite">' + _("Enable multiple sites") + '</label><br />',
                '<input data="InactivityTimer" id="inactivitytimer" class="asm-checkbox" type="checkbox" /> <label for="inactivitytimer">' + _("Auto log users out after this many minutes of inactivity") + '</label>',
                '<input data="InactivityTimeout" id="inactivitytimeout" class="asm-textbox asm-numberbox" /><br />',
                '<label for="ownernameformat" style="margin-left: 24px">' + _("When displaying person names, use the format") + '</label> ',
                '<select data="OwnerNameFormat" id="ownernameformat" type="text" class="asm-selectbox">',
                '<option value="{ownertitle} {ownerforenames} {ownersurname}">' + _("Title First Last") + '</option>',
                '<option value="{ownertitle} {ownerinitials} {ownersurname}">' + _("Title Initials Last") + '</option>',
                '<option value="{ownerforenames} {ownersurname}">' + _("First Last") + '</option>',
                '<option value="{ownersurname}, {ownerforenames}">' + _("Last, First") + '</option>',
                '<option value="{ownersurname} {ownerforenames}">' + _("Last First") + '</option>',
                '</select><br />',
                '<label for="ownernameformat" style="margin-left: 24px">' + _("When displaying calendars, the first day of the week is") + '</label> ',
                '<select data="FirstDayOfWeek" id="firstdayofweek" type="text" class="asm-selectbox">',
                '<option value="0">' + _("Sunday") + '</option>',
                '<option value="1">' + _("Monday") + '</option>',
                '</select>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_documents: function() {
            return [
                '<div id="tab-documents">',
                '<p>',
                '<input data="AllowODTDocumentTemplates" id="allowodttemp" class="asm-checkbox" type="checkbox" /> <label for="allowodttemp">' + _("Allow use of OpenOffice document templates") + '</label><br />',
                '<input data="JSWindowPrint" id="jswprint" class="asm-checkbox" type="checkbox" /> <label for="jswprint">' + _("Printing word processor documents uses hidden iframe and window.print") + '</label><br />',
                '<input data="PDFInline" id="pdfinline" class="asm-checkbox" type="checkbox" /> <label for="pdfinline">' + _("Show PDF files inline instead of sending them as attachments") + '</label><br />',
                '<input data="IncludeIncompleteMedicalDoc" id="includeincompletemedical" type="checkbox" class="asm-checkbox" /> <label for="includeincompletemedical">' + _("Include incomplete medical records when generating document templates") + '</label><br />',
                '<input data="GenerateDocumentLog" id="generatedocumentlog" type="checkbox" class="asm-checkbox" /> <label for="generatedocumentlog">' + _("When I generate a document, make a note of it in the log with this type") + '</label>',
                '<select data="GenerateDocumentLogType" id="generatedocumentlogtype" class="asm-selectbox">',
                html.list_to_options(controller.logtypes, "ID", "LOGTYPENAME"),
                '</select>',
                '<br />',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_email: function() {
            return [
                '<div id="tab-email">',
                '<table>',
                '<tr>',
                '<td><label for="emailaddress">' + _("Email address") + '</label></td>',
                '<td><input data="EmailAddress" id="emailaddress" type="text" class="asm-doubletextbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="emailsig">' + _("Email signature") + '</label></td>',
                '<td><div data="EmailSignature" id="emailsig" data-margin-top="24px" data-height="200px" data-width="380px" class="asm-richtextarea"></div></td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_findanimalperson: function() {
            return [
                '<div id="tab-findanimalperson">',
                html.info(_("These fields determine which columns are shown on the find animal and find person screens.")),
                '<table>',
                '<tr>',
                '<td><label for="findanimalcols">' + _("Find animal columns") + '</label></td>',
                '<td><select id="searchcolumns" class="asm-bsmselect" data="SearchColumns" multiple="multiple">',
                options.two_pair_options(controller.animalfindcolumns),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="findpersoncols">' + _("Find person columns") + '</label></td>',
                '<td>',
                '<select id="findpersoncols" class="asm-bsmselect" data="OwnerSearchColumns" multiple="multiple">',
                options.two_pair_options(controller.personfindcolumns),
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '<p>',
                '<input data="AdvancedFindAnimal" id="advancedfindanimal" type="checkbox" class="asm-checkbox" /> <label for="advancedfindanimal">' + _("Default to advanced find animal screen") + '</label>',
                '<br />',
                '<input data="AdvancedFindAnimalOnShelter" id="advancedfindanimalos" type="checkbox" class="asm-checkbox" /> <label for="advancedfindanimalos">' + _("Advanced find animal screen defaults to on shelter") + '</label>',
                '<br />',
                '<input data="AdvancedFindOwner" id="advancedfindperson" type="checkbox" class="asm-checkbox" /> <label for="advancedfindperson">' + _("Default to advanced find person screen") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_homepage: function() {
            return [
                '<div id="tab-homepage">',
                '<p>',
                '<input data="rc:DisableTips" id="disabletips" class="asm-checkbox" type="checkbox" /> <label for="disabletips">' + _("Show tips on the home page") + '</label><br />',
                '<input data="ShowAlertsHomePage" id="showalerts" class="asm-checkbox" type="checkbox" /> <label for="showalerts">' + _("Show alerts on the home page") + '</label><br />',
                '<input data="ShowTimelineHomePage" id="showtimeline" class="asm-checkbox" type="checkbox" /> <label for="showtimeline">' + _("Show timeline on the home page") + '</label><br />',
                '<input data="rc:ShowDeceasedHomePage" id="showhdeceased" class="asm-checkbox" type="checkbox" /> <label for="showhdeceased">' + _("Hide deceased animals from the home page") + '</label><br />',
                '<input data="rc:ShowFinancialHomePage" id="showhfinancial" class="asm-checkbox" type="checkbox" /> <label for="showhfinancial">' + _("Hide financial stats from the home page") + '</label><br />',
                '</p>',
                '<p class="asm-header">' + _("Alerts") + '</p>',
                '<table class="asm-left-table">',
                '<tr>',
                '<td>' + _("Show an alert when these species of animals are not microchipped") + '</td>',
                '<td>',
                '<select id="alertmicrochip" multiple="multiple" class="asm-bsmselect" data="AlertSpeciesMicrochip">',
                html.list_to_options(controller.species, "ID", "SPECIESNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td>' + _("Show an alert when these species of animals are not altered") + '</td>',
                '<td>',
                '<select id="alertmicrochip" multiple="multiple" class="asm-bsmselect" data="AlertSpeciesNeuter">',
                html.list_to_options(controller.species, "ID", "SPECIESNAME"),
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '<p class="asm-header">' + _("Stats") + '</p>',
                html.info(_("Stats show running figures for the selected period of animals entering and leaving the shelter on the home page.")),
                '<table class="asm-left-table">',
                '<tr>',
                '<td><label for="statmode">' + _("Stats period") + '</label></td>',
                '<td>',
                '<select id="statmode" class="asm-selectbox" data="ShowStatsHomePage">',
                '<option value="none">' + _("Do not show") + '</option>',
                '<option value="today">' + _("Today") + '</option>',
                '<option value="thisweek">' + _("This week") + '</option>',
                '<option value="thismonth">' + _("This month") + '</option>',
                '<option value="thisyear">' + _("This year") + '</option>',
                '<option value="alltime">' + _("All time") + '</option>',
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '<p class="asm-header">' + _("Animal Links") + '</p>',
                '<table class="asm-left-table">',
                '<tr>',
                '<td><label for="linkmode">' + _("Type of animal links to show") + '</label></td>',
                '<td>',
                '<select id="linkmode" class="asm-selectbox" data="MainScreenAnimalLinkMode">',
                '<option value="none">' + _("Do not show") + '</option>',
                '<option value="recentlychanged">' + _("Recently Changed") + '</option>',
                '<option value="recentlyentered">' + _("Recently Entered Shelter") + '</option>',
                '<option value="recentlyadopted">' + _("Recently Adopted") + '</option>',
                '<option value="recentlyfostered">' + _("Recently Fostered") + '</option>',
                '<option value="adoptable">' + _("Up for adoption") + '</option>',
                '<option value="longestonshelter">' + _("Longest On Shelter") + '</option>',
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="linkmax">' + _("Number of animal links to show") + '</label></td>',
                '<td><input type="text" id="linkmax" data="MainScreenAnimalLinkMax" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '</table>',

                '</div>'
            ].join("\n");
        },

        render_insurance: function() {
            return [
                '<div id="tab-insurance">',
                html.info(_("These numbers are for shelters who have agreements with insurance companies and are given blocks of policy numbers to allocate.")),
                '<table>',
                '<tr>',
                '<td></td>',
                '<td><input data="UseAutoInsurance" id="autoinsurance" type="checkbox" class="asm-checkbox" /> <label for="autoinsurance">' + _("Use Automatic Insurance Numbers") + '</label></td>',
                '</tr>',
                '<tr>',
                '<td><label for="insurancestart">' + _("Start at") + '</label></td>',
                '<td><input data="AutoInsuranceStart" id="insurancestart" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="insuranceend">' + _("End at") + '</label></td>',
                '<td><input data="AutoInsuranceEnd" id="insuranceend" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="insurancenext">' + _("Next") + '</label></td>',
                '<td><input data="AutoInsuranceNext" id="insurancenext" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_lostandfound: function() {
            return [
                '<div id="tab-lostandfound">',
                '<p>',
                '<input data="rc:DisableLostAndFound" id="disablelostfound" type="checkbox" class="asm-checkbox" /> <label for="disablelostfound">' + _("Enable lost and found functionality") + '</label>',
                '<br />',
                '<input data="MatchIncludeShelter" id="matchshelter" type="checkbox" class="asm-checkbox" /> <label for="matchshelter">' + _("When matching lost animals, include shelter animals") + '</label>',
                '</p>',
                '<table>',
                '<tr>',
                '<td class="bottomborder"><label for="matchpointfloor">' + _("Points required to appear on match report") + '</label></td>',
                '<td class="bottomborder"><input data="MatchPointFloor" id="matchpointfloor" type="text" class="asm-textbox asm-numberbox strong" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchmicrochip">' + _("Points for matching microchip") + '</label></td>',
                '<td><input data="MatchMicrochip" id="matchmicrochip" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchspecies">' + _("Points for matching species") + '</label></td>',
                '<td><input data="MatchSpecies" id="matchspecies" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchbreed">' + _("Points for matching breed") + '</label></td>',
                '<td><input data="MatchBreed" id="matchbreed" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchcolour">' + _("Points for matching color") + '</label></td>',
                '<td><input data="MatchColour" id="matchcolour" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchagegroup">' + _("Points for matching age group") + '</label></td>',
                '<td><input data="MatchAge" id="matchagegroup" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchsex">' + _("Points for matching sex") + '</label></td>',
                '<td><input data="MatchSex" id="matchsex" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matcharea">' + _("Points for matching lost/found area") + '</label></td>',
                '<td><input data="MatchAreaLost" id="matcharea" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchfeatures">' + _("Points for matching features") + '</label></td>',
                '<td><input data="MatchFeatures" id="matchfeatures" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="matchpostcode">' + _("Points for matching zipcode") + '</label></td>',
                '<td><input data="MatchPostcode" id="matchpostcode" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="match2weeks">' + _("Points for being found within 2 weeks of being lost") + '</label></td>',
                '<td><input data="MatchWithin2Weeks" id="match2weeks" type="text" class="asm-textbox asm-numberbox" /></td>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_medical: function() {
            return [
                '<div id="tab-medical">',
                '<p>',
                '<input data="IncludeOffShelterMedical" id="includeoffsheltermedical" type="checkbox" class="asm-checkbox" /> <label for="includeoffsheltermedical">' + _("Include off-shelter animals in medical calendar and books") + '</label>',
                '<br />',
                '<input data="ReloadMedical" id="reloadmedical" type="checkbox" class="asm-checkbox" /> <label for="reloadmedical">' + _("Reload the medical book/tab automatically after adding new medical items") + '</label>',
                '<br />',
                '<input data="AutoDefaultVaccBatch" id="autodefaultvaccbatch" type="checkbox" class="asm-checkbox" /> <label for="autodefaultvaccbatch">' + _("When entering vaccinations, default the last batch number and manufacturer for that type") + '</label>',
                '</br />',
                '<input data="FostererEmails" id="fostereremails" type="checkbox" class="asm-checkbox" /> <label for="fostereremails">' + _("Send a weekly email to fosterers with medical information about their animals") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_movements: function() {
            return [
                '<div id="tab-movements">',
                '<p><label for="cancelunadopted">' + _("Cancel unadopted reservations after") + '</label> <input data="AutoCancelReservesDays" id="cancelunadopted" type="text" class="asm-textbox asm-numberbox" title="' + html.title(_("Cancel unadopted reservations after this many days, or 0 to never cancel")) + '" /> ' + _(" days.") + '</p>',
                '<p><label for="autoremoveholddays">' + _("Remove holds after") + '</label> <input data="AutoRemoveHoldDays" id="autoremoveholddays" type="text" class="asm-textbox asm-numberbox" title="' + html.title(_("Cancel holds on animals this many days after the brought in date, or 0 to never cancel")) + '" /> ' + _(" days.") + '</p>',
                '<input data="FosterOnShelter" id="fosteronshelter" class="asm-checkbox" type="checkbox" /> <label for="fosteronshelter">' + _("Treat foster animals as part of the shelter inventory") + '</label><br />',
                '<input data="RetailerOnShelter" id="retaileronshelter" class="asm-checkbox" type="checkbox" /> <label for="retaileronshelter">' + _("Treat animals at retailers as part of the shelter inventory") + '</label><br />',
                '<input data="CancelReservesOnAdoption" id="cancelresadopt" class="asm-checkbox" type="checkbox" /> <label for="cancelresadopt">' + _("Automatically cancel any outstanding reservations on an animal when it is adopted") + '</label><br />',
                '<input data="ReturnFostersOnAdoption" id="returnfosteradopt" class="asm-checkbox" type="checkbox" /> <label for="returnfosteradopt">' + _("Automatically return any outstanding foster movements on an animal when it is adopted") + '</label><br />',
                '<input data="ReturnFostersOnTransfer" id="returnfostertransfer" class="asm-checkbox" type="checkbox" /> <label for="returnfostertransfer">' + _("Automatically return any outstanding foster movements on an animal when it is transferred") + '</label><br />',
                '<input data="MovementDonationsDefaultDue" id="donationsdue" class="asm-checkbox" type="checkbox" /> <label for="donationsdue">' + _("When creating payments from the Move menu screens, mark them due instead of received") + '</label><br />',
                '<input data="DonationOnMoveReserve" id="donationmovereserve" class="asm-checkbox" type="checkbox" /> <label for="donationmovereserve">' + _("Allow creation of payments on the Move-Reserve screen") + '</label><br />',
                '<input data="MovementNumberOverride" id="movementoverride" class="asm-checkbox" type="checkbox" /> <label for="movementoverride">' + _("Allow overriding of the movement number on the Move menu screens") + '</label><br />',
                '<input data="TrialAdoptions" id="trialadoptions" class="asm-checkbox" type="checkbox" /> <label for="trialadoptions">' + _("Our shelter does trial adoptions, allow us to mark these on movement screens") + '</label><br />',
                '<input data="TrialOnShelter" id="trialonshelter" class="asm-checkbox" type="checkbox" /> <label for="trialonshelter">' + _("Treat trial adoptions as part of the shelter inventory") + '</label><br />',
                '<input data="SoftReleases" id="softreleases" class="asm-checkbox" type="checkbox" /> <label for="softreleases">' + _("Our shelter does soft releases, allow us to mark these on movement screens") + '</label><br />',
                '<input data="SoftReleaseOnShelter" id="softreleaseonshelter" class="asm-checkbox" type="checkbox" /> <label for="softreleaseonshelter">' + _("Treat soft releases as part of the shelter inventory") + '</label>',
                '</p>',
                '<p class="asm-header">' + _("Warnings") + '</p>',
                '<p>',
                '<input data="WarnUnaltered" id="warnunaltered" class="asm-checkbox" type="checkbox" /> <label for="warnunaltered">' + _("Warn when adopting an unaltered animal") + '</label><br />',
                '<input data="WarnNoMicrochip" id="warnnomicrochip" class="asm-checkbox" type="checkbox" /> <label for="warnnomicrochip">' + _("Warn when adopting an animal who has not been microchipped") + '</label><br />',
                '<input data="WarnNoHomeCheck" id="warnnohomecheck" class="asm-checkbox" type="checkbox" /> <label for="warnnohomecheck">' + _("Warn when adopting to a person who has not been homechecked") + '</label><br />',
                '<input data="WarnBannedOwner" id="warnbanned" class="asm-checkbox" type="checkbox" /> <label for="warnbanned">' + _("Warn when adopting to a person who has been banned from adopting animals") + '</label><br />',
                '<input data="WarnOOPostcode" id="warnoopostcode" class="asm-checkbox" type="checkbox" /> <label for="warnoopostcode">' + _("Warn when adopting to a person who lives in the same area as the original owner") + '</label><br />',
                '<input data="WarnBroughtIn" id="warnbroughtin" class="asm-checkbox" type="checkbox" /> <label for="warnbroughtin">' + _("Warn when adopting to a person who has previously brought an animal to the shelter") + '</label><br />',
                '<input data="WarnMultipleReserves" id="warnmultiplereseves" class="asm-checkbox" type="checkbox" /> <label for="warnmultiplereserves">' + _("Warn when creating multiple reservations on the same animal") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_quicklinks: function() {
            return [
                '<div id="tab-quicklinks">',
                '<p>',
                '<input data="QuicklinksHomeScreen" id="disablequicklinks" class="asm-checkbox" type="checkbox" /> <label for="disablequicklinks">' + _("Show quick links on the home page") + '</label><br />',
                '<input data="QuicklinksAllScreens" id="disablequicklinks" class="asm-checkbox" type="checkbox" /> <label for="disablequicklinks">' + _("Show quick links on all pages") + '</label>',
                '<p>',
                html.info(_("Quicklinks are shown on the home page and allow quick access to areas of the system.")),
                '<p style="padding-bottom: 40px">',
                '<select id="quicklinksid" multiple="multiple" class="asm-bsmselect" data="QuicklinksID">',
                options.two_pair_options(controller.quicklinks),
                '</select>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_search: function() {
            return [
                '<div id="tab-search">',
                html.info(_("These options change the behaviour of the search box at the top of the page.")),
                '<p>',
                '<input data="ShowSearchGo" id="showsearchgo" class="asm-checkbox" type="checkbox" /> <label for="showsearchgo">' + _("Display a search button at the right side of the search box") + '</label>',
                '</p>',
                '<table>',
                '<tr>',
                '<td><label for="searchsort">' + _("Search sort order") + '</label></td>',
                '<td><select id="searchsort" class="asm-selectbox" data="SearchSort">',
                '<option value="0">' + _("Alphabetically A-Z") + '</option>',
                '<option value="1">' + _("Alphabetically Z-A") + '</option>',
                '<option value="2">' + _("Least recently changed") + '</option>',
                '<option value="3">' + _("Most recently changed") + '</option>',
                '<option value="6">' + _("Most relevant") + '</option>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render_shelterview: function() {
            return [
                '<div id="tab-shelterview">',
                '<table class="asm-left-table">',
                '<tr>',
                '<td><label for="shelterviewdefault">' + _("Default view") + '</label></td>',
                '<td>',
                '<select id="shelterviewdefault" class="asm-selectbox" data="ShelterViewDefault">',
                '<option value="altered">' + _("Altered") + '</option>',
                '<option value="coordinator">' + _("Adoption Coordinator") + '</option>',
                '<option value="coordinatorfosterer">' + _("Adoption Coordinator and Fosterer") + '</option>',
                '<option value="agegroup">' + _("Age Group") + '</option>',
                '<option value="entrycategory">' + _("Entry Category") + '</option>',
                '<option value="flags">' + _("Flags") + '</option>',
                '<option value="fosterer">' + _("Fosterer") + '</option>',
                '<option value="fostereractive">' + _("Fosterer (Active Only)") + '</option>',
                '<option value="location">' + _("Location") + '</option>',
                '<option value="locationspecies">' + _("Location and Species") + '</option>',
                '<option value="locationtype">' + _("Location and Type") + '</option>',
                '<option value="locationunit">' + _("Location and Unit") + '</option>',
                '<option value="name">' + _("Name") + '</option>',
                '<option value="pickuplocation">' + _("Pickup Location") + '</option>',
                '<option value="retailer">' + _("Retailer") + '</option>',
                '<option value="sex">' + _("Sex") + '</option>',
                '<option value="sexspecies">' + _("Sex and Species") + '</option>',
                '<option value="species">' + _("Species") + '</option>',
                '<option value="speciescode">' + _("Species and Code") + '</option>',
                '<option value="status">' + _("Status") + '</option>',
                '<option value="statusspecies">' + _("Status and Species") + '</option>',
                '<option value="type">' + _("Type") + '</option>',
                '</select>',
                '</td>',
                '</tr>',
                '</table>',
                '<p>',
                '<input data="ShelterViewDragDrop" type="checkbox" id="shelterviewdragdrop" class="asm-checkbox" type="checkbox" /> <label for="shelterviewdragdrop">' + _("Allow drag and drop to move animals between locations") + '</label><br />',
                '<input data="ShelterViewShowEmpty" type="checkbox" id="shelterviewempty" class="asm-checkbox" type="checkbox" /> <label for="shelterviewempty">' + _("Show empty locations") + '</label><br />',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_unwanted: function() {
            return [
                '<div id="tab-unwanted">',
                '<p>',
                '<input data="DisableClinic" id="disableclinic" class="asm-checkbox" type="checkbox" /> <label for="disableclinic">' + _("Remove clinic functionality from screens and menus") + '</label><br />',
                '<input data="DisableMovements" id="disablemovements" class="asm-checkbox" type="checkbox" /> <label for="disablemovements">' + _("Remove move menu and the movements tab from animal and person screens") + '</label><br />',
                '<input data="DisableRetailer" id="disableretailer" class="asm-checkbox" type="checkbox" /> <label for="disableretailer">' + _("Remove retailer functionality from the movement screens and menus") + '</label><br />',
                '<input data="DisableDocumentRepo" id="disabledocumentrepo" class="asm-checkbox" type="checkbox" /> <label for="disabledocumentrepo">' + _("Remove the document repository functionality from menus") + '</label><br />',
                '<input data="DisableOnlineForms" id="disableonlineforms" class="asm-checkbox" type="checkbox" /> <label for="disableonlineforms">' + _("Remove the online form functionality from menus") + '</label><br />',
                '<input data="DisableAnimalControl" id="disableanimalcontrol" class="asm-checkbox" type="checkbox" /> <label for="disableanimalcontrol">' + _("Remove the animal control functionality from menus and screens") + '</label><br />',
                '<input data="rc:IncidentPermissions" id="incidentpermissions" class="asm-checkbox" type="checkbox" /> <label for="incidentpermissions">' + _("Remove fine-grained animal control incident permissions") + '</label><br />',
                '<input data="DisableRota" id="disablerota" class="asm-checkbox" type="checkbox" /> <label for="disablerota">' + _("Remove the rota functionality from menus and screens") + '</label><br />',
                '<input data="DisableStockControl" id="disablestockcontrol" class="asm-checkbox" type="checkbox" /> <label for="disablestockcontrol">' + _("Remove the stock control functionality from menus and screens") + '</label><br />',
                '<input data="DisableTransport" id="disabletransport" class="asm-checkbox" type="checkbox" /> <label for="disabletransport">' + _("Remove the transport functionality from menus and screens") + '</label><br />',
                '<input data="DisableTrapLoan" id="disabletraploan" class="asm-checkbox" type="checkbox" /> <label for="disabletraploan">' + _("Remove the trap loan functionality from menus and screens") + '</label><br />',
                '<input data="DisableAsilomar" id="disableasilomar" class="asm-checkbox us" type="checkbox" /> <label for="disableasilomar" class="us">Remove the asilomar fields from the entry/deceased sections</label><br class="us" />',
                '<input data="HideTownCounty" id="towncounty" class="asm-checkbox" type="checkbox" /> <label for="towncounty">' + _("Remove the city/state fields from person details") + '</label><br />',
                '<input data="HideCountry" id="hcountry" class="asm-checkbox" type="checkbox" /> <label for="hcountry">' + _("Remove the country field from person details") + '</label><br />',
                '<input data="DontShowInsurance" id="insuranceno" class="asm-checkbox" type="checkbox" /> <label for="insuranceno">' + _("Remove the insurance number field from the movement screens") + '</label><br />',
                '<input data="DontShowCoatType" id="coattype" class="asm-checkbox" type="checkbox" /> <label for="coattype">' + _("Remove the coat type field from animal details") + '</label><br />',
                '<input data="DontShowSize" id="size" class="asm-checkbox" type="checkbox" /> <label for="size">' + _("Remove the size field from animal details") + '</label><br />',
                '<input data="DontShowWeight" id="weight" class="asm-checkbox" type="checkbox" /> <label for="weight">' + _("Remove the weight field from animal details") + '</label><br />',
                '<input data="DontShowMicrochip" id="microchip" class="asm-checkbox" type="checkbox" /> <label for="microchip">' + _("Remove the microchip fields from animal identification details") + '</label><br />',
                '<input data="DontShowTattoo" id="tattoo" class="asm-checkbox" type="checkbox" /> <label for="tattoo">' + _("Remove the tattoo fields from animal identification details") + '</label><br />',
                '<input data="DontShowNeutered" id="neutered" class="asm-checkbox" type="checkbox" /> <label for="neutered">' + _("Remove the neutered fields from animal health details") + '</label><br />',
                '<input data="DontShowDeclawed" id="declawed" class="asm-checkbox" type="checkbox" /> <label for="declawed">' + _("Remove the declawed box from animal health details") + '</label><br />',
                '<input data="DontShowRabies" id="rabiestag" class="asm-checkbox" type="checkbox" /> <label for="rabiestag">' + _("Remove the Rabies Tag field from animal health details") + '</label><br />',
                '<input data="DontShowGoodWith" id="goodwith" class="asm-checkbox" type="checkbox" /> <label for="goodwith">' + _("Remove the good with fields from animal notes") + '</label><br />',
                '<input data="DontShowHeartworm" id="heartworm" class="asm-checkbox" type="checkbox" /> <label for="heartworm">' + _("Remove the heartworm test fields from animal health details") + '</label><br />',
                '<input data="DontShowCombi" id="combitest" class="asm-checkbox" type="checkbox" /> <label for="combitest">' + _("Remove the FIV/L test fields from animal health details") + '</label><br />',
                '<input data="DontShowAdoptionFee" id="fee" class="asm-checkbox" type="checkbox" /> <label for="fee">' + _("Remove the adoption fee field from animal details") + '</label><br />',
                '<input data="DontShowAdoptionCoordinator" id="coordinator" class="asm-checkbox" type="checkbox" /> <label for="coordinator">' + _("Remove the adoption coordinator field from animal entry details") + '</label><br />',
                '<input data="DontShowLitterID" id="litterid" class="asm-checkbox" type="checkbox" /> <label for="litterid">' + _("Remove the Litter ID field from animal details") + '</label><br />',
                '<input data="DontShowLocationUnit" id="subunit" class="asm-checkbox" type="checkbox" /> <label for="subunit">' + _("Remove the location unit field from animal details") + '</label><br />',
                '<input data="DontShowBonded" id="bonded" class="asm-checkbox" type="checkbox" /> <label for="bonded">' + _("Remove the bonded with fields from animal entry details") + '</label><br />',
                '<input data="DontShowPickup" id="pickup" class="asm-checkbox" type="checkbox" /> <label for="pickup">' + _("Remove the picked up fields from animal entry details") + '</label>',
                '</p>',
                '</div>'
            ].join("\n");
        },

        render_waitinglist: function() {
            return [
                '<div id="tab-waitinglist">',
                '<p>',
                '<input data="rc:DisableWaitingList" id="disablewl" class="asm-checkbox" type="checkbox" /> <label for="disablewl">' + _("Enable the waiting list functionality") + '</label><br />',
                '<input data="WaitingListRankBySpecies" id="wlrank" class="asm-checkbox" type="checkbox" /> <label for="wlrank">' + _("Separate waiting list rank by species") + '</label>',
                '</p>',
                '<table>',
                '<tr>',
                '<td><label for="wlupdate">' + _("Waiting list urgency update period in days") + '</label>',
                '<span id="callout-wlupdate" class="asm-callout">' + _("Set to 0 to never update urgencies.") + '</span>',
                '</td>',
                '<td>',
                '<input data="WaitingListUrgencyUpdatePeriod" id="wlupdate" class="asm-textbox asm-numberbox" type="text" title="' + _("The period in days before waiting list urgency is increased") + '" />',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="wldu">' + _("Default urgency") + '</label></td>',
                '<td><select data="WaitingListDefaultUrgency" id="wldu" class="asm-selectbox">',
                html.list_to_options(controller.urgencies, "ID", "URGENCY"),
                '</select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="wlcolumns">' + _("Columns displayed") + '</label></td>',
                '<td>',
                '<select id="wlcolumns" class="asm-bsmselect" data="WaitingListViewColumns" multiple="multiple">',
                options.two_pair_options(controller.waitinglistcolumns),
                '</select>',
                '</tr>',
                '</table>',
                '</div>'
            ].join("\n");
        },

        render: function() {
            return [
                html.content_header(_("System Options")),
                '<div class="asm-toolbar">',
                '<button id="button-save" title="' + _("Update system options") + '">' + html.icon("save") + ' ' + _("Save") + '</button>',
                '</div>',
                '<div id="tabs">',
                this.render_tabs(),
                this.render_shelterdetails(),
                this.render_accounts(),
                this.render_adding(),
                this.render_agegroups(),
                this.render_animalcodes(),
                this.render_animalemblems(),
                this.render_costs(),
                this.render_data_protection(),
                this.render_defaults(),
                this.render_diaryandmessages(),
                this.render_display(),
                this.render_documents(),
                this.render_email(),
                this.render_findanimalperson(),
                this.render_homepage(),
                this.render_insurance(),
                this.render_lostandfound(),
                this.render_medical(),
                this.render_movements(),
                this.render_quicklinks(),
                this.render_search(),
                this.render_shelterview(),
                this.render_unwanted(),
                this.render_waitinglist(),
                '</div>',
                html.content_footer()
            ].join("\n");
        },

        bind: function() {
            var get_donation_mappings = function() {
                var mappings = "";
                $(".donmap").each(function() {
                    var t = $(this);
                    var idx = t.attr("id").substring(5, 6);
                    if (t.val() != "" && t.val() != "0" && t.val() != "-1") {
                        if (mappings != "") { mappings += ","; }
                        mappings += t.val() + "=" + $("#mapac" + idx).val();
                    }
                });
                return encodeURIComponent(mappings);
            };

            // Toolbar buttons
            $("#button-save").button().click(function() {
                $("#button-save").button("disable");
                validate.dirty(false);
                var formdata = "mode=save&" + $("input, select, textarea, .asm-richtextarea").toPOST(true);
                formdata += "&DonationAccountMappings=" + get_donation_mappings();
                header.show_loading(_("Saving..."));
                common.ajax_post("options", formdata)
                    .then(function() { 
                        // Needs to do full reload to get updated config.js
                        common.route_reload(true); 
                    });
            });

            // Components
            $("#tabs").tabs({ show: "slideDown", hide: "slideUp" });

            $("#button-save").button("disable");

            // Load default values from the config settings
            $("input, select, textarea, .asm-richtextarea").each(function() {
                if ($(this).attr("data")) {
                    var d = $(this).attr("data");
                    if ($(this).is(".asm-currencybox")) {
                        $(this).val( html.decode(config.currency(d)));
                    }
                    else if ($(this).is(".asm-richtextarea")) {
                        $(this).richtextarea("value", config.str(d));
                    }
                    else if ($(this).is("input:text")) {
                        $(this).val( html.decode(config.str(d)));
                    }
                    else if ($(this).is("input:checkbox")) {
                        if (d.indexOf("rc:") != -1) {
                            // it's a reverse checkbox, not it before setting
                            if (!config.bool(d.substring(3))) {
                                $(this).attr("checked", "checked");
                            }
                        }
                        else if (config.bool(d)) {
                            $(this).attr("checked", "checked");
                        }
                    }
                    else if ($(this).is("input:hidden")) {
                        $(this).val( config.str(d));
                    }
                    else if ($(this).is(".asm-selectbox") || $(this).is(".asm-doubleselectbox")) {
                        $(this).select("value", config.str(d));
                    }
                    else if ($(this).is(".asm-bsmselect")) {
                        var ms = config.str(d).split(",");
                        var bsm = $(this);
                        $.each(ms, function(i, v) {
                            bsm.find("option[value='" + $.trim(v + "']")).attr("selected", "selected");
                        });
                        $(this).change();
                    }
                    else if ($(this).is("textarea")) {
                        $(this).val( html.decode(config.str(d)));
                    }
                    else if ($(this).is(".asm-richtextarea")) {
                        $(this).richtextarea("value", config.str(d));
                    }
                }
            });

            // When the visual theme is changed, switch the CSS file so the
            // theme updates immediately.
            $("#systemtheme").change(function() {
                var theme = $("#systemtheme").val();
                var href = asm.jqueryuicss.replace("%(theme)s", theme);
                $("#jqt").attr("href", href);
                $("body").css("background-color", BACKGROUND_COLOURS[theme]);
            });

            // Set donation type maps from DonationAccountMappings field
            var donmaps = config.str("DonationAccountMappings");
            if (donmaps != "") {
                var maps = donmaps.split(",");
                $.each(maps, function(i, v) {
                    var dt = v.split("=")[0];
                    var ac = v.split("=")[1];
                    var idx = i + 1;
                    $("#mapdt" + idx).select("value", dt);
                    $("#mapac" + idx).select("value", ac);
                });
            }

            // Hide options not applicable for some locales
            if (asm.locale != "en") {
                $(".us").hide();
            }

            validate.bind_dirty();

        },

        destroy: function() {
            validate.unbind_dirty();
            common.widget_destroy("#DefaultBroughtInBy", "personchooser");
        },

        name: "options",
        animation: "options",
        autofocus: "#organisation",
        title: function() { return _("Options"); },
        routes: {
            "options": function() { common.module_loadandstart("options", "options"); }
        }

    };

    common.module_register(options);

});

