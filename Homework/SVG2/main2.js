/* 	Dirk Zomerdijk
	10530274	*/

var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

var color_codes = ['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529'];
var jsonString = '{"points" : [ {"Country": "Afghanistan", "Data": "4.3"},{"Country": "Albania", "Data": "1.8"},{"Country": "Algeria", "Data": "5.7"},{"Country": "American Samoa", "Data": "7.0"},{"Country": "Andorra", "Data": "14.6"},{"Country": "Angola", "Data": "2.1"},{"Country": "Antigua", "Data": "10.6"},{"Country": "Argentina", "Data": "7.2"},{"Country": "Armenia", "Data": "3.5"},{"Country": "Australia", "Data": "10.6"},{"Country": "Austria", "Data": "3.5"},{"Country": "Azerbaijan", "Data": "3.5"},{"Country": "Grand Bahama", "Data": "5.5"},{"Country": "Bahrain", "Data": "0.4"},{"Country": "Bangladesh", "Data": "3.3"},{"Country": "Barbados", "Data": "8.3"},{"Country": "Belarus", "Data": "1.1"},{"Country": "Belgium", "Data": "5.1"},{"Country": "Belize", "Data": "8.5"},{"Country": "Bolivia", "Data": "4.3"},{"Country": "Bosnia", "Data": "2.8"},{"Country": "Brazil", "Data": "2.6"},{"Country": "Brunei Darussalam", "Data": "0.02"},{"Country": "Bulgaria", "Data": "2.5"},{"Country": "Burkina Faso", "Data": "2.9"},{"Country": "Cambodia", "Data": "3.5"},{"Country": "Canada", "Data": "12.6"},{"Country": "Cape Verde", "Data": "8.1"},{"Country": "Chad", "Data": "0.9"},{"Country": "Chile", "Data": "11.3"},{"Country": "Colombia", "Data": "2.3"},{"Country": "Comoros", "Data": "2.9"},{"Country": "Costa Rica", "Data": "1.0"},{"Country": "Croatia", "Data": "5.2"},{"Country": "Cyprus", "Data": "4.4"},{"Country": "Czech", "Data": "15.2"},{"Country": "Denmark", "Data": "5.5"},{"Country": "Dominica", "Data": "10.8"},{"Country": "DRC", "Data": "0.3"},{"Country": "Ecuador", "Data": "0.7"},{"Country": "Egypt", "Data": "6.2"},{"Country": "El Salvador", "Data": "0.4"},{"Country": "England", "Data": "6.6"},{"Country": "Estonia", "Data": "6.0"},{"Country": "Ethiopia", "Data": "2.6"},{"Country": "Faroe Islands", "Data": "2.2"},{"Country": "Fiji", "Data": "5.1"},{"Country": "Finland", "Data": "3.1"},{"Country": "France", "Data": "8.6"},{"Country": "Georgia", "Data": "2.7"},{"Country": "Germany", "Data": "4.8"},{"Country": "Ghana", "Data": "21.5"},{"Country": "Gibraltar", "Data": "5.2"},{"Country": "Greece", "Data": "1.7"},{"Country": "Greenland", "Data": "7.6"},{"Country": "Grenada", "Data": "10.8"},{"Country": "Guam", "Data": "18.4"},{"Country": "Guatemala", "Data": "4.8"},{"Country": "Guyana", "Data": "2.6"},{"Country": "Haiti", "Data": "1.4"},{"Country": "Honduras", "Data": "0.8"},{"Country": "Hong Kong", "Data": "0.4"},{"Country": "Hungary", "Data": "2.3"},{"Country": "Iceland", "Data": "3.4"},{"Country": "India", "Data": "3.2"},{"Country": "Indonesia", "Data": "0.4"},{"Country": "Iran", "Data": "4.2"},{"Country": "Ireland", "Data": "6.3"},{"Country": "Isle of Man", "Data": "9.4"},{"Country": "Israel", "Data": "8.9"},{"Country": "Italy", "Data": "14.6"},{"Country": "Jamaica", "Data": "9.9"},{"Country": "Sakhalin", "Data": "0.1"},{"Country": "Hokkaido", "Data": "0.1"},{"Country": "Honshu", "Data": "0.1"},{"Country": "Jordan", "Data": "2.1"},{"Country": "Kazakhstan", "Data": "4.2"},{"Country": "Kenya", "Data": "2.1"},{"Country": "Kuwait", "Data": "3.1"},{"Country": "Kyrgyzstan", "Data": "6.4"},{"Country": "Laos", "Data": "0.9"},{"Country": "Latvia", "Data": "4.9"},{"Country": "Lebanon", "Data": "1.9"},{"Country": "Libya", "Data": "0.05"},{"Country": "Liechtenstein", "Data": "8.6"},{"Country": "Lithuania", "Data": "5.6"},{"Country": "Luxembourg", "Data": "7.6"},{"Country": "Macau", "Data": "0.7"},{"Country": "Macedonia", "Data": "0.6"},{"Country": "Madagascar", "Data": "9.1"},{"Country": "Malaysia", "Data": "1.6"},{"Country": "Maldives", "Data": "0.5"},{"Country": "Mali", "Data": "7.8"},{"Country": "Malta", "Data": "4.5"},{"Country": "Marshall Islands", "Data": "5.5"},{"Country": "Mauritius", "Data": "3.9"},{"Country": "Mexico", "Data": "1.2"},{"Country": "Moldova", "Data": "0.9"},{"Country": "Monaco", "Data": "8.9"},{"Country": "Montenegro", "Data": "0.2"},{"Country": "Morocco", "Data": "4.2"},{"Country": "Myanmar", "Data": "0.9"},{"Country": "Namibia", "Data": "3.9"},{"Country": "Nepal", "Data": "3.2"},{"Country": "Netherlands", "Data": "5.4"},{"Country": "New Caledonia", "Data": "1.9"},{"Country": "New Zealand South Island", "Data": "14.6"},{"Country": "New Zealand North Island", "Data": "14.6"},{"Country": "Nicaragua", "Data": "1.1"},{"Country": "Nigeria", "Data": "14.3"},{"Country": "Ulster", "Data": "7.2"},{"Country": "Northern Mariana Islands", "Data": "22.2"},{"Country": "Norway", "Data": "4.6"},{"Country": "Oman", "Data": "0.1"},{"Country": "Pakistan", "Data": "3.9"},{"Country": "Palau", "Data": "24.2"},{"Country": "Panama", "Data": "3.6"},{"Country": "Papua New Guinea", "Data": "29.5"},{"Country": "Paraguay", "Data": "1.6"},{"Country": "Peru", "Data": "0.7"},{"Country": "Philippines", "Data": "0.8"},{"Country": "Poland", "Data": "2.7"},{"Country": "Portugal", "Data": "3.3"},{"Country": "Puerto Rico", "Data": "4.9"},{"Country": "Qatar", "Data": "0.1"},{"Country": "South Korea", "Data": "0.3"},{"Country": "Romania", "Data": "0.4"},{"Country": "Russia", "Data": "3.5"},{"Country": "Saint Kitts", "Data": "11.7"},{"Country": "Saint Lucia", "Data": "9.0"},{"Country": "Saint Vincent", "Data": "7.1"},{"Country": "Saudi", "Data": "0.3"},{"Country": "Scotland", "Data": "8.4"},{"Country": "Senegal", "Data": "2.8"},{"Country": "Serbia", "Data": "4.1"},{"Country": "Sierra Leone", "Data": "16.1"},{"Country": "Singapore", "Data": "0.004"},{"Country": "Slovakia", "Data": "6.9"},{"Country": "Slovenia", "Data": "4.1"},{"Country": "Somalia", "Data": "2.5"},{"Country": "South Africa", "Data": "4.3"},{"Country": "Spain", "Data": "10.6"},{"Country": "SriLanka", "Data": "1.5"},{"Country": "Suriname", "Data": "4.3"},{"Country": "Sweden", "Data": "1.2"},{"Country": "Switzerland", "Data": "3.4"},{"Country": "Syria", "Data": "2"},{"Country": "Taiwan", "Data": "0.3"},{"Country": "Tajikistan", "Data": "3.4"},{"Country": "Tanzania", "Data": "0.2"},{"Country": "Thailand", "Data": "1.2"},{"Country": "Togo", "Data": "1.0"},{"Country": "Trinidad", "Data": "4.7"},{"Country": "Turkey", "Data": "1.9"},{"Country": "Uganda", "Data": "1.4"},{"Country": "Ukraine", "Data": "2.5"},{"Country": "United Arab Emirates", "Data": "5.4"},{"Country": "Uruguay", "Data": "6.0"},{"Country": "Britain", "Data": "60.4"},{"Country": "USA", "Data": "13.7"},{"Country": "Uzbekistan", "Data": "4.2"},{"Country": "Vanuatu", "Data": "0.1"},{"Country": "Venezuela", "Data": "0.9"},{"Country": "VietNam", "Data": "0.3"},{"Country": "Zambia", "Data": "9.5"},{"Country": "Zimbabwe", "Data": "6.9 "} ] }'
var d = JSON.parse(jsonString);

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	document.getElementById(id).setAttribute('fill', color);
}

// onload of window start runing code
window.onload = function() {
    // iterate trough list of countrys with data
    restartLoop:
	for (var i = 0; i < d.points.length; i++){
        // convert the country name to lowercases
        var country_id = d.points[i].Country.toLowerCase();
        // if there is no country on the map with the id, restart the loop
        if (document.getElementById(country_id) == null){
            continue restartLoop;
        };
        // initiate variable containing corresponding data of country
        var country_data = d.points[i].Data;

        // determine color code of country using the data
		if (country_data <= 1){
			var dColor = color_codes[0];
		}
		else if (country_data > 1 && country_data <= 5){
			var dColor = color_codes[1];
		}
		else if (country_data > 5 && country_data <= 10){
			var dColor = color_codes[2];
		}
		else if (country_data > 10 && country_data <= 15){
			var dColor = color_codes[3];
		}
		else if (country_data > 15 && country_data <= 20){
			var dColor = color_codes[4];
		}
		else if (country_data > 20 && country_data <= 25){
			var dColor = color_codes[5];
		}
		else if (country_data > 25 && country_data <= 30){
			var dColor = color_codes[6];
		}
		else if (country_data > 30 && country_data <= 35){
			var dColor = color_codes[7];
		}
		else if (country_data > 35){
			var dColor = color_codes[8];
		}
		else { 
			var dColor = '#ffffff';
		}
        // change color on the map by id
		changeColor(country_id, dColor);
	}
}
