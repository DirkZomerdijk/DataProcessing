/*	
Dirk Zomerdijk
10530274
*/

var container = d3.select("body").append("div")
	.attr("id", "container");
var header = container.append("text")
	.text("The total number of live births per 1,000 of a population in a year.");

var data = [
    {
        "Life_expectancy": "50.9", 
        "Country": "Afghanistan", 
        "Birthrate": "38.6", 
        "Deathrate": "13.9", 
        "Continent": "Asia", 
        "Population": "32564342"
    }, 
    {
        "Life_expectancy": "73.7", 
        "Country": "Egypt", 
        "Birthrate": "22.9", 
        "Deathrate": "4.8", 
        "Continent": "Africa", 
        "Population": "88487396"
    }, 
    {
        "Life_expectancy": "78.1", 
        "Country": "Albania", 
        "Birthrate": "12.9", 
        "Deathrate": "6.6", 
        "Continent": "Europe", 
        "Population": "3029278"
    }, 
    {
        "Life_expectancy": "76.6", 
        "Country": "Algeria", 
        "Birthrate": "23.7", 
        "Deathrate": "4.3", 
        "Continent": "Africa", 
        "Population": "39542166"
    }, 
    {
        "Life_expectancy": "75.1", 
        "Country": "American Samoa", 
        "Birthrate": "22.9", 
        "Deathrate": "4.8", 
        "Continent": "Oceania", 
        "Population": "54343"
    }, 
    {
        "Life_expectancy": "82.7", 
        "Country": "Andorra", 
        "Birthrate": "8.1", 
        "Deathrate": "7", 
        "Continent": "Europe", 
        "Population": "85580"
    }, 
    {
        "Life_expectancy": "55.6", 
        "Country": "Angola", 
        "Birthrate": "38.8", 
        "Deathrate": "11.5", 
        "Continent": "Africa", 
        "Population": "19625353"
    }, 
    {
        "Life_expectancy": "81.3", 
        "Country": "Anguilla", 
        "Birthrate": "12.7", 
        "Deathrate": "4.6", 
        "Continent": "North America", 
        "Population": "16418"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Antarctica", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Antarctica", 
        "Population": "0"
    }, 
    {
        "Life_expectancy": "76.3", 
        "Country": "Antigua and Barbuda", 
        "Birthrate": "15.9", 
        "Deathrate": "5.7", 
        "Continent": "North America", 
        "Population": "92436"
    }, 
    {
        "Life_expectancy": "63.9", 
        "Country": "Equatorial Guinea", 
        "Birthrate": "33.3", 
        "Deathrate": "8.2", 
        "Continent": "Africa", 
        "Population": "740743"
    }, 
    {
        "Life_expectancy": "77.7", 
        "Country": "Argentina", 
        "Birthrate": "16.6", 
        "Deathrate": "7.3", 
        "Continent": "South America", 
        "Population": "43431886"
    }, 
    {
        "Life_expectancy": "74.4", 
        "Country": "Armenia", 
        "Birthrate": "13.6", 
        "Deathrate": "9.3", 
        "Continent": "Asia", 
        "Population": "3056382"
    }, 
    {
        "Life_expectancy": "76.6", 
        "Country": "Aruba", 
        "Birthrate": "12.6", 
        "Deathrate": "8.2", 
        "Continent": "North America", 
        "Population": "112162"
    }, 
    {
        "Life_expectancy": "72.2", 
        "Country": "Azerbaijan", 
        "Birthrate": "16.6", 
        "Deathrate": "7.1", 
        "Continent": "Asia", 
        "Population": "9780780"
    }, 
    {
        "Life_expectancy": "61.5", 
        "Country": "Ethiopia", 
        "Birthrate": "37.3", 
        "Deathrate": "8.2", 
        "Continent": "Africa", 
        "Population": "99465819"
    }, 
    {
        "Life_expectancy": "82.2", 
        "Country": "Australia", 
        "Birthrate": "12.2", 
        "Deathrate": "7.1", 
        "Continent": "Australia", 
        "Population": "22751014"
    }, 
    {
        "Life_expectancy": "72.2", 
        "Country": "Bahamas", 
        "Birthrate": "15.5", 
        "Deathrate": "7.1", 
        "Continent": "North America", 
        "Population": "324597"
    }, 
    {
        "Life_expectancy": "78.7", 
        "Country": "Bahrain", 
        "Birthrate": "13.7", 
        "Deathrate": "2.7", 
        "Continent": "Asia", 
        "Population": "1346613"
    }, 
    {
        "Life_expectancy": "70.9", 
        "Country": "Bangladesh", 
        "Birthrate": "21.1", 
        "Deathrate": "5.6", 
        "Continent": "Asia", 
        "Population": "168957745"
    }, 
    {
        "Life_expectancy": "75.2", 
        "Country": "Barbados", 
        "Birthrate": "11.9", 
        "Deathrate": "8.4", 
        "Continent": "North America", 
        "Population": "290604"
    }, 
    {
        "Life_expectancy": "72.5", 
        "Country": "Belarus", 
        "Birthrate": "10.7", 
        "Deathrate": "13.4", 
        "Continent": "Europe", 
        "Population": "9589689"
    }, 
    {
        "Life_expectancy": "80.9", 
        "Country": "Belgium", 
        "Birthrate": "11.4", 
        "Deathrate": "9.6", 
        "Continent": "Europe", 
        "Population": "11323973"
    }, 
    {
        "Life_expectancy": "68.6", 
        "Country": "Belize", 
        "Birthrate": "24.7", 
        "Deathrate": "6", 
        "Continent": "Central America", 
        "Population": "347369"
    }, 
    {
        "Life_expectancy": "61.5", 
        "Country": "Benin", 
        "Birthrate": "36", 
        "Deathrate": "8.2", 
        "Continent": "Africa", 
        "Population": "10448647"
    }, 
    {
        "Life_expectancy": "81.2", 
        "Country": "Bermuda", 
        "Birthrate": "11.3", 
        "Deathrate": "8.2", 
        "Continent": "North America", 
        "Population": "70196"
    }, 
    {
        "Life_expectancy": "69.5", 
        "Country": "Bhutan", 
        "Birthrate": "17.8", 
        "Deathrate": "6.7", 
        "Continent": "Asia", 
        "Population": "741919"
    }, 
    {
        "Life_expectancy": "68.9", 
        "Country": "Bolivia", 
        "Birthrate": "22.8", 
        "Deathrate": "6.5", 
        "Continent": "South America", 
        "Population": "10800882"
    }, 
    {
        "Life_expectancy": "76.5", 
        "Country": "Bosnia and Herzegovina", 
        "Birthrate": "8.9", 
        "Deathrate": "9.8", 
        "Continent": "Europe", 
        "Population": "3867055"
    }, 
    {
        "Life_expectancy": "54.2", 
        "Country": "Botswana", 
        "Birthrate": "21", 
        "Deathrate": "13.4", 
        "Continent": "Africa", 
        "Population": "2182719"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Bouvet Island", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Antarctica", 
        "Population": "0"
    }, 
    {
        "Life_expectancy": "73.5", 
        "Country": "Brazil", 
        "Birthrate": "14.5", 
        "Deathrate": "6.6", 
        "Continent": "South America", 
        "Population": "204259812"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "British Indian Ocean Territory", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Africa", 
        "Population": "0"
    }, 
    {
        "Life_expectancy": "77", 
        "Country": "Brunei", 
        "Birthrate": "17.3", 
        "Deathrate": "3.5", 
        "Continent": "Asia", 
        "Population": "429646"
    }, 
    {
        "Life_expectancy": "74.4", 
        "Country": "Bulgaria", 
        "Birthrate": "8.9", 
        "Deathrate": "14.4", 
        "Continent": "Europe", 
        "Population": "7186893"
    }, 
    {
        "Life_expectancy": "55.1", 
        "Country": "Burkina Faso", 
        "Birthrate": "42", 
        "Deathrate": "11.7", 
        "Continent": "Africa", 
        "Population": "18931686"
    }, 
    {
        "Life_expectancy": "60.1", 
        "Country": "Burundi", 
        "Birthrate": "42", 
        "Deathrate": "9.3", 
        "Continent": "Africa", 
        "Population": "10742276"
    }, 
    {
        "Life_expectancy": "78.6", 
        "Country": "Chile", 
        "Birthrate": "13.8", 
        "Deathrate": "6", 
        "Continent": "South America", 
        "Population": "17508260"
    }, 
    {
        "Life_expectancy": "75.4", 
        "Country": "China", 
        "Birthrate": "12.5", 
        "Deathrate": "7.5", 
        "Continent": "Asia", 
        "Population": "1367485388"
    }, 
    {
        "Life_expectancy": "75.6", 
        "Country": "Cook Islands", 
        "Birthrate": "14.3", 
        "Deathrate": "8", 
        "Continent": "Oceania", 
        "Population": "9838"
    }, 
    {
        "Life_expectancy": "78.4", 
        "Country": "Costa Rica", 
        "Birthrate": "15.9", 
        "Deathrate": "4.6", 
        "Continent": "Central America", 
        "Population": "4814144"
    }, 
    {
        "Life_expectancy": "78", 
        "Country": "Curacao", 
        "Birthrate": "0", 
        "Deathrate": "8", 
        "Continent": "America", 
        "Population": "146836"
    }, 
    {
        "Life_expectancy": "79.2", 
        "Country": "Denmark", 
        "Birthrate": "10.3", 
        "Deathrate": "10.3", 
        "Continent": "Europe", 
        "Population": "5581503"
    }, 
    {
        "Life_expectancy": "56.9", 
        "Country": "Democratic Republic of the Congo", 
        "Birthrate": "34.9", 
        "Deathrate": "10.1", 
        "Continent": "Africa", 
        "Population": "79375136"
    }, 
    {
        "Life_expectancy": "80.6", 
        "Country": "Germany", 
        "Birthrate": "8.5", 
        "Deathrate": "11.4", 
        "Continent": "Europe", 
        "Population": "80854408"
    }, 
    {
        "Life_expectancy": "76.8", 
        "Country": "Dominica", 
        "Birthrate": "15.4", 
        "Deathrate": "7.9", 
        "Continent": "North America", 
        "Population": "73607"
    }, 
    {
        "Life_expectancy": "78", 
        "Country": "Dominican Republic", 
        "Birthrate": "18.7", 
        "Deathrate": "4.6", 
        "Continent": "North America", 
        "Population": "10478756"
    }, 
    {
        "Life_expectancy": "62.8", 
        "Country": "Djibouti", 
        "Birthrate": "23.7", 
        "Deathrate": "7.7", 
        "Continent": "Africa", 
        "Population": "828324"
    }, 
    {
        "Life_expectancy": "76.6", 
        "Country": "Ecuador", 
        "Birthrate": "18.5", 
        "Deathrate": "5.1", 
        "Continent": "South America", 
        "Population": "15868396"
    }, 
    {
        "Life_expectancy": "74.4", 
        "Country": "El Salvador", 
        "Birthrate": "16.5", 
        "Deathrate": "5.7", 
        "Continent": "Central America", 
        "Population": "6141350"
    }, 
    {
        "Life_expectancy": "58.3", 
        "Country": "Ivory Coast", 
        "Birthrate": "28.7", 
        "Deathrate": "9.6", 
        "Continent": "Africa", 
        "Population": "23295302"
    }, 
    {
        "Life_expectancy": "63.8", 
        "Country": "Eritrea", 
        "Birthrate": "30", 
        "Deathrate": "7.5", 
        "Continent": "Africa", 
        "Population": "6527689"
    }, 
    {
        "Life_expectancy": "76.5", 
        "Country": "Estonia", 
        "Birthrate": "10.5", 
        "Deathrate": "12.4", 
        "Continent": "Europe", 
        "Population": "1265420"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Falkland Islands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "South America", 
        "Population": "3361"
    }, 
    {
        "Life_expectancy": "80.2", 
        "Country": "Faroe Islands", 
        "Birthrate": "13.8", 
        "Deathrate": "8.7", 
        "Continent": "Europe", 
        "Population": "50196"
    }, 
    {
        "Life_expectancy": "72.4", 
        "Country": "Fiji", 
        "Birthrate": "19.4", 
        "Deathrate": "6", 
        "Continent": "Oceania", 
        "Population": "909389"
    }, 
    {
        "Life_expectancy": "80.8", 
        "Country": "Finland", 
        "Birthrate": "10.7", 
        "Deathrate": "9.8", 
        "Continent": "Europe", 
        "Population": "5476922"
    }, 
    {
        "Life_expectancy": "81.8", 
        "Country": "France", 
        "Birthrate": "12.4", 
        "Deathrate": "9.2", 
        "Continent": "Europe", 
        "Population": "66553766"
    }, 
    {
        "Life_expectancy": "76.1", 
        "Country": "French Guiana", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "South America", 
        "Population": "181000"
    }, 
    {
        "Life_expectancy": "77", 
        "Country": "French Polynesia", 
        "Birthrate": "15.2", 
        "Deathrate": "5", 
        "Continent": "Oceania", 
        "Population": "282703"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "French Southern and Antarctic Lands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Antarctica", 
        "Population": "0"
    }, 
    {
        "Life_expectancy": "52", 
        "Country": "Gabon", 
        "Birthrate": "34.5", 
        "Deathrate": "13.1", 
        "Continent": "Africa", 
        "Population": "1705336"
    }, 
    {
        "Life_expectancy": "64.6", 
        "Country": "Gambia", 
        "Birthrate": "30.9", 
        "Deathrate": "7.2", 
        "Continent": "Africa", 
        "Population": "1967709"
    }, 
    {
        "Life_expectancy": "76", 
        "Country": "Georgia", 
        "Birthrate": "12.7", 
        "Deathrate": "10.8", 
        "Continent": "Asia", 
        "Population": "4931226"
    }, 
    {
        "Life_expectancy": "66.2", 
        "Country": "Ghana", 
        "Birthrate": "31.1", 
        "Deathrate": "7.2", 
        "Continent": "Africa", 
        "Population": "26327649"
    }, 
    {
        "Life_expectancy": "79.3", 
        "Country": "Gibraltar", 
        "Birthrate": "14.1", 
        "Deathrate": "8.4", 
        "Continent": "Europe", 
        "Population": "29258"
    }, 
    {
        "Life_expectancy": "74", 
        "Country": "Grenada", 
        "Birthrate": "16", 
        "Deathrate": "8.1", 
        "Continent": "North America", 
        "Population": "110694"
    }, 
    {
        "Life_expectancy": "80.4", 
        "Country": "Greece", 
        "Birthrate": "8.7", 
        "Deathrate": "11.1", 
        "Continent": "Europe", 
        "Population": "10775643"
    }, 
    {
        "Life_expectancy": "72.1", 
        "Country": "Greenland", 
        "Birthrate": "14.5", 
        "Deathrate": "8.5", 
        "Continent": "North America", 
        "Population": "57733"
    }, 
    {
        "Life_expectancy": "77", 
        "Country": "Guadeloupe", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "North America", 
        "Population": "456000"
    }, 
    {
        "Life_expectancy": "79", 
        "Country": "Guam", 
        "Birthrate": "16.8", 
        "Deathrate": "5.1", 
        "Continent": "Oceania", 
        "Population": "161785"
    }, 
    {
        "Life_expectancy": "72", 
        "Country": "Guatemala", 
        "Birthrate": "24.9", 
        "Deathrate": "4.8", 
        "Continent": "Central America", 
        "Population": "14918999"
    }, 
    {
        "Life_expectancy": "82.5", 
        "Country": "Guernsey", 
        "Birthrate": "9.8", 
        "Deathrate": "8.8", 
        "Continent": "Europe", 
        "Population": "66080"
    }, 
    {
        "Life_expectancy": "60.1", 
        "Country": "Guinea", 
        "Birthrate": "35.7", 
        "Deathrate": "9.5", 
        "Continent": "Africa", 
        "Population": "11780162"
    }, 
    {
        "Life_expectancy": "50.2", 
        "Country": "Guinea-Bissau", 
        "Birthrate": "33.4", 
        "Deathrate": "14.3", 
        "Continent": "Africa", 
        "Population": "1726170"
    }, 
    {
        "Life_expectancy": "68.1", 
        "Country": "Guyana", 
        "Birthrate": "15.6", 
        "Deathrate": "7.3", 
        "Continent": "South America", 
        "Population": "735222"
    }, 
    {
        "Life_expectancy": "63.5", 
        "Country": "Haiti", 
        "Birthrate": "22.3", 
        "Deathrate": "7.8", 
        "Continent": "North America", 
        "Population": "10110019"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Heard Island and McDonald Islands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Antarctica", 
        "Population": "0"
    }, 
    {
        "Life_expectancy": "71", 
        "Country": "Honduras", 
        "Birthrate": "23.1", 
        "Deathrate": "5.2", 
        "Continent": "Central America", 
        "Population": "8746673"
    }, 
    {
        "Life_expectancy": "82.9", 
        "Country": "Hong Kong", 
        "Birthrate": "9.2", 
        "Deathrate": "7.1", 
        "Continent": "Asia", 
        "Population": "7141106"
    }, 
    {
        "Life_expectancy": "68.1", 
        "Country": "India", 
        "Birthrate": "19.6", 
        "Deathrate": "7.3", 
        "Continent": "Asia", 
        "Population": "1251695584"
    }, 
    {
        "Life_expectancy": "72.5", 
        "Country": "Indonesia", 
        "Birthrate": "16.7", 
        "Deathrate": "6.4", 
        "Continent": "Asia", 
        "Population": "255993674"
    }, 
    {
        "Life_expectancy": "81.1", 
        "Country": "Isle of Man", 
        "Birthrate": "11.1", 
        "Deathrate": "10.1", 
        "Continent": "Europe", 
        "Population": "87545"
    }, 
    {
        "Life_expectancy": "74.8", 
        "Country": "Iraq", 
        "Birthrate": "31.5", 
        "Deathrate": "3.8", 
        "Continent": "Asia", 
        "Population": "37056169"
    }, 
    {
        "Life_expectancy": "71.2", 
        "Country": "Iran", 
        "Birthrate": "18", 
        "Deathrate": "5.9", 
        "Continent": "Asia", 
        "Population": "81824270"
    }, 
    {
        "Life_expectancy": "80.7", 
        "Country": "Ireland", 
        "Birthrate": "14.8", 
        "Deathrate": "6.5", 
        "Continent": "Europe", 
        "Population": "4892305"
    }, 
    {
        "Life_expectancy": "83", 
        "Country": "Iceland", 
        "Birthrate": "13.9", 
        "Deathrate": "6.3", 
        "Continent": "Europe", 
        "Population": "331918"
    }, 
    {
        "Life_expectancy": "82.3", 
        "Country": "Israel", 
        "Birthrate": "18.5", 
        "Deathrate": "5.2", 
        "Continent": "Asia", 
        "Population": "8049314"
    }, 
    {
        "Life_expectancy": "82.1", 
        "Country": "Italy", 
        "Birthrate": "8.7", 
        "Deathrate": "10.2", 
        "Continent": "Europe", 
        "Population": "61855120"
    }, 
    {
        "Life_expectancy": "73.5", 
        "Country": "Jamaica", 
        "Birthrate": "18.2", 
        "Deathrate": "6.7", 
        "Continent": "North America", 
        "Population": "2950210"
    }, 
    {
        "Life_expectancy": "84.7", 
        "Country": "Japan", 
        "Birthrate": "7.9", 
        "Deathrate": "9.5", 
        "Continent": "Asia", 
        "Population": "126919659"
    }, 
    {
        "Life_expectancy": "65.2", 
        "Country": "Yemen", 
        "Birthrate": "30", 
        "Deathrate": "6.3", 
        "Continent": "Asia", 
        "Population": "26737317"
    }, 
    {
        "Life_expectancy": "81.8", 
        "Country": "Jersey", 
        "Birthrate": "11.9", 
        "Deathrate": "7.7", 
        "Continent": "Europe", 
        "Population": "97294"
    }, 
    {
        "Life_expectancy": "74.3", 
        "Country": "Jordan", 
        "Birthrate": "25.4", 
        "Deathrate": "3.8", 
        "Continent": "Asia", 
        "Population": "8117564"
    }, 
    {
        "Life_expectancy": "78.5", 
        "Country": "British Virgin Islands", 
        "Birthrate": "10.9", 
        "Deathrate": "5", 
        "Continent": "North America", 
        "Population": "33454"
    }, 
    {
        "Life_expectancy": "79.9", 
        "Country": "Virgin Islands", 
        "Birthrate": "10.3", 
        "Deathrate": "8.5", 
        "Continent": "North America", 
        "Population": "103574"
    }, 
    {
        "Life_expectancy": "81.1", 
        "Country": "Cayman Islands", 
        "Birthrate": "12.1", 
        "Deathrate": "5.5", 
        "Continent": "North America", 
        "Population": "56092"
    }, 
    {
        "Life_expectancy": "64.1", 
        "Country": "Cambodia", 
        "Birthrate": "23.8", 
        "Deathrate": "7.7", 
        "Continent": "Asia", 
        "Population": "15708756"
    }, 
    {
        "Life_expectancy": "57.9", 
        "Country": "Cameroon", 
        "Birthrate": "36.2", 
        "Deathrate": "10.1", 
        "Continent": "Africa", 
        "Population": "23739218"
    }, 
    {
        "Life_expectancy": "81.8", 
        "Country": "Canada", 
        "Birthrate": "10.3", 
        "Deathrate": "8.4", 
        "Continent": "North America", 
        "Population": "35099836"
    }, 
    {
        "Life_expectancy": "71.8", 
        "Country": "Cape Verde", 
        "Birthrate": "20.3", 
        "Deathrate": "6.1", 
        "Continent": "Africa", 
        "Population": "545993"
    }, 
    {
        "Life_expectancy": "70.5", 
        "Country": "Kazakhstan", 
        "Birthrate": "19.2", 
        "Deathrate": "8.2", 
        "Continent": "Asia", 
        "Population": "18157122"
    }, 
    {
        "Life_expectancy": "78.6", 
        "Country": "Qatar", 
        "Birthrate": "9.8", 
        "Deathrate": "1.5", 
        "Continent": "Asia", 
        "Population": "2194817"
    }, 
    {
        "Life_expectancy": "63.8", 
        "Country": "Kenya", 
        "Birthrate": "26.4", 
        "Deathrate": "6.9", 
        "Continent": "Africa", 
        "Population": "45925301"
    }, 
    {
        "Life_expectancy": "70.4", 
        "Country": "Kyrgyzstan", 
        "Birthrate": "23", 
        "Deathrate": "6.7", 
        "Continent": "Asia", 
        "Population": "5664939"
    }, 
    {
        "Life_expectancy": "65.8", 
        "Country": "Kiribati", 
        "Birthrate": "21.5", 
        "Deathrate": "7.1", 
        "Continent": "Oceania", 
        "Population": "105711"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Cocos Islands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Australia", 
        "Population": "596"
    }, 
    {
        "Life_expectancy": "75.5", 
        "Country": "Colombia", 
        "Birthrate": "16.5", 
        "Deathrate": "5.4", 
        "Continent": "South America", 
        "Population": "46736728"
    }, 
    {
        "Life_expectancy": "63.9", 
        "Country": "Comoros", 
        "Birthrate": "27.8", 
        "Deathrate": "7.6", 
        "Continent": "Africa", 
        "Population": "780971"
    }, 
    {
        "Life_expectancy": "58.8", 
        "Country": "Republic of the Congo", 
        "Birthrate": "35.9", 
        "Deathrate": "10", 
        "Continent": "Africa", 
        "Population": "4755097"
    }, 
    {
        "Life_expectancy": "69", 
        "Country": "Kosovo", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Europe", 
        "Population": "1870981"
    }, 
    {
        "Life_expectancy": "76.6", 
        "Country": "Croatia", 
        "Birthrate": "9.5", 
        "Deathrate": "12.2", 
        "Continent": "Europe", 
        "Population": "4464844"
    }, 
    {
        "Life_expectancy": "78.4", 
        "Country": "Cuba", 
        "Birthrate": "9.9", 
        "Deathrate": "7.7", 
        "Continent": "North America", 
        "Population": "11031433"
    }, 
    {
        "Life_expectancy": "77.8", 
        "Country": "Kuwait", 
        "Birthrate": "19.9", 
        "Deathrate": "2.2", 
        "Continent": "Asia", 
        "Population": "2788534"
    }, 
    {
        "Life_expectancy": "63.9", 
        "Country": "Laos", 
        "Birthrate": "24.3", 
        "Deathrate": "7.6", 
        "Continent": "Asia", 
        "Population": "6911544"
    }, 
    {
        "Life_expectancy": "52.9", 
        "Country": "Lesotho", 
        "Birthrate": "25.5", 
        "Deathrate": "14.9", 
        "Continent": "Africa", 
        "Population": "1947701"
    }, 
    {
        "Life_expectancy": "74.2", 
        "Country": "Latvia", 
        "Birthrate": "10", 
        "Deathrate": "14.3", 
        "Continent": "Europe", 
        "Population": "1986705"
    }, 
    {
        "Life_expectancy": "77.4", 
        "Country": "Lebanon", 
        "Birthrate": "14.6", 
        "Deathrate": "4.9", 
        "Continent": "Asia", 
        "Population": "6184701"
    }, 
    {
        "Life_expectancy": "58.6", 
        "Country": "Liberia", 
        "Birthrate": "34.4", 
        "Deathrate": "9.7", 
        "Continent": "Africa", 
        "Population": "4195666"
    }, 
    {
        "Life_expectancy": "76.3", 
        "Country": "Libya", 
        "Birthrate": "18", 
        "Deathrate": "3.6", 
        "Continent": "Africa", 
        "Population": "6411776"
    }, 
    {
        "Life_expectancy": "81.8", 
        "Country": "Liechtenstein", 
        "Birthrate": "10.5", 
        "Deathrate": "7.1", 
        "Continent": "Europe", 
        "Population": "37624"
    }, 
    {
        "Life_expectancy": "74.7", 
        "Country": "Lithuania", 
        "Birthrate": "10.1", 
        "Deathrate": "14.3", 
        "Continent": "Europe", 
        "Population": "2884433"
    }, 
    {
        "Life_expectancy": "82.2", 
        "Country": "Luxembourg", 
        "Birthrate": "11.4", 
        "Deathrate": "7.2", 
        "Continent": "Europe", 
        "Population": "570252"
    }, 
    {
        "Life_expectancy": "84.5", 
        "Country": "Macau", 
        "Birthrate": "8.9", 
        "Deathrate": "4.2", 
        "Continent": "Asia", 
        "Population": "592731"
    }, 
    {
        "Life_expectancy": "65.5", 
        "Country": "Madagascar", 
        "Birthrate": "32.6", 
        "Deathrate": "6.8", 
        "Continent": "Africa", 
        "Population": "23812681"
    }, 
    {
        "Life_expectancy": "60.7", 
        "Country": "Malawi", 
        "Birthrate": "41.6", 
        "Deathrate": "8.4", 
        "Continent": "Africa", 
        "Population": "17964697"
    }, 
    {
        "Life_expectancy": "74.8", 
        "Country": "Malaysia", 
        "Birthrate": "19.7", 
        "Deathrate": "5", 
        "Continent": "Asia", 
        "Population": "30513848"
    }, 
    {
        "Life_expectancy": "75.4", 
        "Country": "Maldives", 
        "Birthrate": "15.8", 
        "Deathrate": "3.9", 
        "Continent": "Asia", 
        "Population": "393253"
    }, 
    {
        "Life_expectancy": "55.3", 
        "Country": "Mali", 
        "Birthrate": "45", 
        "Deathrate": "12.9", 
        "Continent": "Africa", 
        "Population": "16955536"
    }, 
    {
        "Life_expectancy": "80.2", 
        "Country": "Malta", 
        "Birthrate": "10.2", 
        "Deathrate": "9.1", 
        "Continent": "Europe", 
        "Population": "413965"
    }, 
    {
        "Life_expectancy": "76.7", 
        "Country": "Morocco", 
        "Birthrate": "18.2", 
        "Deathrate": "4.8", 
        "Continent": "Africa", 
        "Population": "33322699"
    }, 
    {
        "Life_expectancy": "72.8", 
        "Country": "Marshall Islands", 
        "Birthrate": "25.6", 
        "Deathrate": "4.2", 
        "Continent": "Oceania", 
        "Population": "72191"
    }, 
    {
        "Life_expectancy": "78.3", 
        "Country": "Martinique", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "North America", 
        "Population": "395000"
    }, 
    {
        "Life_expectancy": "62.6", 
        "Country": "Mauritania", 
        "Birthrate": "31.3", 
        "Deathrate": "8.2", 
        "Continent": "Africa", 
        "Population": "3596702"
    }, 
    {
        "Life_expectancy": "75.4", 
        "Country": "Mauritius", 
        "Birthrate": "13.3", 
        "Deathrate": "6.9", 
        "Continent": "Africa", 
        "Population": "1339827"
    }, 
    {
        "Life_expectancy": "62.9", 
        "Country": "Mayotte", 
        "Birthrate": "39.3", 
        "Deathrate": "0", 
        "Continent": "Africa", 
        "Population": "223765"
    }, 
    {
        "Life_expectancy": "76", 
        "Country": "Macedonia", 
        "Birthrate": "11.6", 
        "Deathrate": "9.1", 
        "Continent": "Europe", 
        "Population": "2096015"
    }, 
    {
        "Life_expectancy": "75.7", 
        "Country": "Mexico", 
        "Birthrate": "18.8", 
        "Deathrate": "5.3", 
        "Continent": "North America", 
        "Population": "121736809"
    }, 
    {
        "Life_expectancy": "70.4", 
        "Country": "Moldova", 
        "Birthrate": "12", 
        "Deathrate": "12.6", 
        "Continent": "Europe", 
        "Population": "3546847"
    }, 
    {
        "Life_expectancy": "89.5", 
        "Country": "Monaco", 
        "Birthrate": "6.7", 
        "Deathrate": "9.2", 
        "Continent": "Europe", 
        "Population": "30535"
    }, 
    {
        "Life_expectancy": "69.3", 
        "Country": "Mongolia", 
        "Birthrate": "20.3", 
        "Deathrate": "6.4", 
        "Continent": "Asia", 
        "Population": "2992908"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Montenegro", 
        "Birthrate": "10.4", 
        "Deathrate": "9.4", 
        "Continent": "Europe", 
        "Population": "647073"
    }, 
    {
        "Life_expectancy": "74.1", 
        "Country": "Montserrat", 
        "Birthrate": "11.3", 
        "Deathrate": "6.3", 
        "Continent": "North America", 
        "Population": "5241"
    }, 
    {
        "Life_expectancy": "52.9", 
        "Country": "Mozambique", 
        "Birthrate": "38.6", 
        "Deathrate": "12.1", 
        "Continent": "Africa", 
        "Population": "25303113"
    }, 
    {
        "Life_expectancy": "66.3", 
        "Country": "Burma", 
        "Birthrate": "18.4", 
        "Deathrate": "8", 
        "Continent": "Asia", 
        "Population": "56320206"
    }, 
    {
        "Life_expectancy": "51.6", 
        "Country": "Namibia", 
        "Birthrate": "19.8", 
        "Deathrate": "13.9", 
        "Continent": "Africa", 
        "Population": "2212307"
    }, 
    {
        "Life_expectancy": "66.8", 
        "Country": "Nauru", 
        "Birthrate": "25", 
        "Deathrate": "5.9", 
        "Continent": "Oceania", 
        "Population": "9540"
    }, 
    {
        "Life_expectancy": "67.5", 
        "Country": "Nepal", 
        "Birthrate": "20.6", 
        "Deathrate": "6.6", 
        "Continent": "Asia", 
        "Population": "31551305"
    }, 
    {
        "Life_expectancy": "77.5", 
        "Country": "New Caledonia", 
        "Birthrate": "15.3", 
        "Deathrate": "5.5", 
        "Continent": "Oceania", 
        "Population": "271615"
    }, 
    {
        "Life_expectancy": "81", 
        "Country": "New Zealand", 
        "Birthrate": "13.3", 
        "Deathrate": "7.4", 
        "Continent": "Australia", 
        "Population": "4438393"
    }, 
    {
        "Life_expectancy": "73", 
        "Country": "Nicaragua", 
        "Birthrate": "18", 
        "Deathrate": "5.1", 
        "Continent": "Central America", 
        "Population": "5907881"
    }, 
    {
        "Life_expectancy": "81.2", 
        "Country": "Netherlands", 
        "Birthrate": "10.8", 
        "Deathrate": "8.7", 
        "Continent": "Europe", 
        "Population": "16947904"
    }, 
    {
        "Life_expectancy": "76.7", 
        "Country": "Netherlands Antilles", 
        "Birthrate": "14.2", 
        "Deathrate": "0", 
        "Continent": "North America", 
        "Population": "227049"
    }, 
    {
        "Life_expectancy": "55.1", 
        "Country": "Niger", 
        "Birthrate": "45.5", 
        "Deathrate": "12.4", 
        "Continent": "Africa", 
        "Population": "18045729"
    }, 
    {
        "Life_expectancy": "53", 
        "Country": "Nigeria", 
        "Birthrate": "37.6", 
        "Deathrate": "12.9", 
        "Continent": "Africa", 
        "Population": "181562056"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Niue", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Oceania", 
        "Population": "1190"
    }, 
    {
        "Life_expectancy": "70.1", 
        "Country": "North Korea", 
        "Birthrate": "14.5", 
        "Deathrate": "9.2", 
        "Continent": "Asia", 
        "Population": "24983205"
    }, 
    {
        "Life_expectancy": "77.8", 
        "Country": "Northern Mariana Islands", 
        "Birthrate": "18.3", 
        "Deathrate": "3.7", 
        "Continent": "Oceania", 
        "Population": "52344"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Norfolk Island", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Australia", 
        "Population": "2210"
    }, 
    {
        "Life_expectancy": "81.7", 
        "Country": "Norway", 
        "Birthrate": "12.1", 
        "Deathrate": "8.1", 
        "Continent": "Europe", 
        "Population": "5207689"
    }, 
    {
        "Life_expectancy": "75.2", 
        "Country": "Oman", 
        "Birthrate": "24.4", 
        "Deathrate": "3.4", 
        "Continent": "Asia", 
        "Population": "3286936"
    }, 
    {
        "Life_expectancy": "81.4", 
        "Country": "Austria", 
        "Birthrate": "9.4", 
        "Deathrate": "9.4", 
        "Continent": "Europe", 
        "Population": "8665550"
    }, 
    {
        "Life_expectancy": "67.7", 
        "Country": "Timor-Leste", 
        "Birthrate": "34.2", 
        "Deathrate": "6.1", 
        "Continent": "Asia", 
        "Population": "1231116"
    }, 
    {
        "Life_expectancy": "67.4", 
        "Country": "Pakistan", 
        "Birthrate": "22.6", 
        "Deathrate": "6.5", 
        "Continent": "Asia", 
        "Population": "199085847"
    }, 
    {
        "Life_expectancy": "75.7", 
        "Country": "Palestine", 
        "Birthrate": "23.4", 
        "Deathrate": "3.5", 
        "Continent": "Asia", 
        "Population": "2731052"
    }, 
    {
        "Life_expectancy": "72.9", 
        "Country": "Palau", 
        "Birthrate": "11.1", 
        "Deathrate": "8", 
        "Continent": "Oceania", 
        "Population": "21265"
    }, 
    {
        "Life_expectancy": "78.5", 
        "Country": "Panama", 
        "Birthrate": "18.3", 
        "Deathrate": "4.8", 
        "Continent": "Central America", 
        "Population": "3657024"
    }, 
    {
        "Life_expectancy": "67", 
        "Country": "Papua New Guinea", 
        "Birthrate": "24.4", 
        "Deathrate": "6.5", 
        "Continent": "Oceania", 
        "Population": "6672429"
    }, 
    {
        "Life_expectancy": "77", 
        "Country": "Paraguay", 
        "Birthrate": "16.4", 
        "Deathrate": "4.7", 
        "Continent": "South America", 
        "Population": "6783272"
    }, 
    {
        "Life_expectancy": "73.5", 
        "Country": "Peru", 
        "Birthrate": "18.3", 
        "Deathrate": "6", 
        "Continent": "South America", 
        "Population": "30444999"
    }, 
    {
        "Life_expectancy": "69", 
        "Country": "Philippines", 
        "Birthrate": "24.3", 
        "Deathrate": "6.1", 
        "Continent": "Asia", 
        "Population": "100998376"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Pitcairn Islands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Oceania", 
        "Population": "48"
    }, 
    {
        "Life_expectancy": "77.4", 
        "Country": "Poland", 
        "Birthrate": "9.7", 
        "Deathrate": "10.2", 
        "Continent": "Europe", 
        "Population": "38562189"
    }, 
    {
        "Life_expectancy": "79.2", 
        "Country": "Portugal", 
        "Birthrate": "9.3", 
        "Deathrate": "11", 
        "Continent": "Europe", 
        "Population": "10825309"
    }, 
    {
        "Life_expectancy": "79.2", 
        "Country": "Puerto Rico", 
        "Birthrate": "10.9", 
        "Deathrate": "8.7", 
        "Continent": "North America", 
        "Population": "3598357"
    }, 
    {
        "Life_expectancy": "72.7", 
        "Country": "Reunion", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Africa", 
        "Population": "699000"
    }, 
    {
        "Life_expectancy": "59.7", 
        "Country": "Rwanda", 
        "Birthrate": "33.8", 
        "Deathrate": "9", 
        "Continent": "Africa", 
        "Population": "12661733"
    }, 
    {
        "Life_expectancy": "74.9", 
        "Country": "Romania", 
        "Birthrate": "9.1", 
        "Deathrate": "11.9", 
        "Continent": "Europe", 
        "Population": "21666350"
    }, 
    {
        "Life_expectancy": "70.5", 
        "Country": "Russia", 
        "Birthrate": "11.6", 
        "Deathrate": "13.7", 
        "Continent": "Europe", 
        "Population": "142423773"
    }, 
    {
        "Life_expectancy": "75.1", 
        "Country": "Solomon Islands", 
        "Birthrate": "25.8", 
        "Deathrate": "3.9", 
        "Continent": "Oceania", 
        "Population": "622469"
    }, 
    {
        "Life_expectancy": "52.1", 
        "Country": "Zambia", 
        "Birthrate": "42.1", 
        "Deathrate": "12.7", 
        "Continent": "Africa", 
        "Population": "15066266"
    }, 
    {
        "Life_expectancy": "73.5", 
        "Country": "Samoa", 
        "Birthrate": "20.9", 
        "Deathrate": "5.3", 
        "Continent": "Oceania", 
        "Population": "197773"
    }, 
    {
        "Life_expectancy": "83.2", 
        "Country": "San Marino", 
        "Birthrate": "8.6", 
        "Deathrate": "8.5", 
        "Continent": "Europe", 
        "Population": "33020"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Saint Barthelemy", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "America", 
        "Population": "7237"
    }, 
    {
        "Life_expectancy": "64.6", 
        "Country": "Sao Tome and Principe", 
        "Birthrate": "34.2", 
        "Deathrate": "7.2", 
        "Continent": "Africa", 
        "Population": "194006"
    }, 
    {
        "Life_expectancy": "75", 
        "Country": "Saudi Arabia", 
        "Birthrate": "18.5", 
        "Deathrate": "3.3", 
        "Continent": "Asia", 
        "Population": "27752316"
    }, 
    {
        "Life_expectancy": "82", 
        "Country": "Sweden", 
        "Birthrate": "12", 
        "Deathrate": "9.4", 
        "Continent": "Europe", 
        "Population": "9801616"
    }, 
    {
        "Life_expectancy": "82.5", 
        "Country": "Switzerland", 
        "Birthrate": "10.5", 
        "Deathrate": "8.1", 
        "Continent": "Europe", 
        "Population": "8121830"
    }, 
    {
        "Life_expectancy": "61.3", 
        "Country": "Senegal", 
        "Birthrate": "34.5", 
        "Deathrate": "8.5", 
        "Continent": "Africa", 
        "Population": "13975834"
    }, 
    {
        "Life_expectancy": "75.3", 
        "Country": "Serbia", 
        "Birthrate": "9.1", 
        "Deathrate": "13.7", 
        "Continent": "Europe", 
        "Population": "7176794"
    }, 
    {
        "Life_expectancy": "74.5", 
        "Country": "Seychelles", 
        "Birthrate": "14.2", 
        "Deathrate": "6.9", 
        "Continent": "Africa", 
        "Population": "92430"
    }, 
    {
        "Life_expectancy": "57.8", 
        "Country": "Sierra Leone", 
        "Birthrate": "37", 
        "Deathrate": "10.8", 
        "Continent": "Africa", 
        "Population": "5879098"
    }, 
    {
        "Life_expectancy": "57", 
        "Country": "Zimbabwe", 
        "Birthrate": "32.3", 
        "Deathrate": "10.1", 
        "Continent": "Africa", 
        "Population": "14229541"
    }, 
    {
        "Life_expectancy": "84.7", 
        "Country": "Singapore", 
        "Birthrate": "8.3", 
        "Deathrate": "3.4", 
        "Continent": "Asia", 
        "Population": "5674472"
    }, 
    {
        "Life_expectancy": "77.6", 
        "Country": "Saint Martin", 
        "Birthrate": "13", 
        "Deathrate": "4.5", 
        "Continent": "America", 
        "Population": "39689"
    }, 
    {
        "Life_expectancy": "76.9", 
        "Country": "Slovakia", 
        "Birthrate": "9.9", 
        "Deathrate": "9.7", 
        "Continent": "Europe", 
        "Population": "5445027"
    }, 
    {
        "Life_expectancy": "78", 
        "Country": "Slovenia", 
        "Birthrate": "8.4", 
        "Deathrate": "11.4", 
        "Continent": "Europe", 
        "Population": "1983412"
    }, 
    {
        "Life_expectancy": "52", 
        "Country": "Somalia", 
        "Birthrate": "40.5", 
        "Deathrate": "13.6", 
        "Continent": "Africa", 
        "Population": "10616380"
    }, 
    {
        "Life_expectancy": "81.6", 
        "Country": "Spain", 
        "Birthrate": "9.6", 
        "Deathrate": "9", 
        "Continent": "Europe", 
        "Population": "48146134"
    }, 
    {
        "Life_expectancy": "76.6", 
        "Country": "Sri Lanka", 
        "Birthrate": "15.9", 
        "Deathrate": "6.1", 
        "Continent": "Asia", 
        "Population": "22053488"
    }, 
    {
        "Life_expectancy": "75.5", 
        "Country": "Saint Kitts and Nevis", 
        "Birthrate": "13.5", 
        "Deathrate": "7.1", 
        "Continent": "North America", 
        "Population": "51936"
    }, 
    {
        "Life_expectancy": "77.6", 
        "Country": "Saint Lucia", 
        "Birthrate": "13.7", 
        "Deathrate": "7.4", 
        "Continent": "North America", 
        "Population": "163922"
    }, 
    {
        "Life_expectancy": "80.4", 
        "Country": "Saint Pierre and Miquelon", 
        "Birthrate": "7.4", 
        "Deathrate": "9.7", 
        "Continent": "North America", 
        "Population": "5657"
    }, 
    {
        "Life_expectancy": "75.1", 
        "Country": "Saint Vincent and the Grenadines", 
        "Birthrate": "13.6", 
        "Deathrate": "7.2", 
        "Continent": "North America", 
        "Population": "102627"
    }, 
    {
        "Life_expectancy": "62.3", 
        "Country": "South Africa", 
        "Birthrate": "20.8", 
        "Deathrate": "9.9", 
        "Continent": "Africa", 
        "Population": "53675563"
    }, 
    {
        "Life_expectancy": "63.7", 
        "Country": "Sudan", 
        "Birthrate": "29.2", 
        "Deathrate": "7.7", 
        "Continent": "Africa", 
        "Population": "36108853"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "South Georgia and South Sandwich Islands", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Antarctica", 
        "Population": "30"
    }, 
    {
        "Life_expectancy": "80", 
        "Country": "South Korea", 
        "Birthrate": "8.2", 
        "Deathrate": "6.8", 
        "Continent": "Asia", 
        "Population": "49115196"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "South Sudan", 
        "Birthrate": "36.9", 
        "Deathrate": "8.2", 
        "Continent": "Africa", 
        "Population": "12042910"
    }, 
    {
        "Life_expectancy": "72", 
        "Country": "Suriname", 
        "Birthrate": "16.3", 
        "Deathrate": "6.1", 
        "Continent": "South America", 
        "Population": "579633"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Svalbard", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Europe", 
        "Population": "1872"
    }, 
    {
        "Life_expectancy": "51", 
        "Country": "Swaziland", 
        "Birthrate": "24.7", 
        "Deathrate": "13.6", 
        "Continent": "Africa", 
        "Population": "1435613"
    }, 
    {
        "Life_expectancy": "74.7", 
        "Country": "Syria", 
        "Birthrate": "22.2", 
        "Deathrate": "4", 
        "Continent": "Asia", 
        "Population": "17064854"
    }, 
    {
        "Life_expectancy": "67.4", 
        "Country": "Tajikistan", 
        "Birthrate": "24.4", 
        "Deathrate": "6.2", 
        "Continent": "Asia", 
        "Population": "8191958"
    }, 
    {
        "Life_expectancy": "80", 
        "Country": "Taiwan", 
        "Birthrate": "8.5", 
        "Deathrate": "7.1", 
        "Continent": "Asia", 
        "Population": "23415126"
    }, 
    {
        "Life_expectancy": "61.7", 
        "Country": "Tanzania", 
        "Birthrate": "36.4", 
        "Deathrate": "8", 
        "Continent": "Africa", 
        "Population": "51045882"
    }, 
    {
        "Life_expectancy": "74.4", 
        "Country": "Thailand", 
        "Birthrate": "11.2", 
        "Deathrate": "7.8", 
        "Continent": "Asia", 
        "Population": "67976405"
    }, 
    {
        "Life_expectancy": "64.5", 
        "Country": "Togo", 
        "Birthrate": "34.1", 
        "Deathrate": "7.3", 
        "Continent": "Africa", 
        "Population": "7552318"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Tokelau", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Oceania", 
        "Population": "1337"
    }, 
    {
        "Life_expectancy": "76", 
        "Country": "Tonga", 
        "Birthrate": "23", 
        "Deathrate": "4.9", 
        "Continent": "Oceania", 
        "Population": "106501"
    }, 
    {
        "Life_expectancy": "72.6", 
        "Country": "Trinidad and Tobago", 
        "Birthrate": "13.5", 
        "Deathrate": "8.6", 
        "Continent": "North America", 
        "Population": "1222363"
    }, 
    {
        "Life_expectancy": "49.8", 
        "Country": "Chad", 
        "Birthrate": "36.6", 
        "Deathrate": "14.3", 
        "Continent": "Africa", 
        "Population": "11631456"
    }, 
    {
        "Life_expectancy": "78.5", 
        "Country": "Czech Republic", 
        "Birthrate": "9.6", 
        "Deathrate": "10.3", 
        "Continent": "Europe", 
        "Population": "10644842"
    }, 
    {
        "Life_expectancy": "75.9", 
        "Country": "Tunisia", 
        "Birthrate": "16.6", 
        "Deathrate": "6", 
        "Continent": "Africa", 
        "Population": "11037225"
    }, 
    {
        "Life_expectancy": "74.6", 
        "Country": "Turkey", 
        "Birthrate": "16.3", 
        "Deathrate": "5.9", 
        "Continent": "Asia", 
        "Population": "79414269"
    }, 
    {
        "Life_expectancy": "69.8", 
        "Country": "Turkmenistan", 
        "Birthrate": "19.4", 
        "Deathrate": "6.1", 
        "Continent": "Asia", 
        "Population": "5231422"
    }, 
    {
        "Life_expectancy": "79.7", 
        "Country": "Turks and Caicos Islands", 
        "Birthrate": "16.1", 
        "Deathrate": "3.1", 
        "Continent": "North America", 
        "Population": "50280"
    }, 
    {
        "Life_expectancy": "66.2", 
        "Country": "Tuvalu", 
        "Birthrate": "23.7", 
        "Deathrate": "8.7", 
        "Continent": "Oceania", 
        "Population": "10869"
    }, 
    {
        "Life_expectancy": "54.9", 
        "Country": "Uganda", 
        "Birthrate": "43.8", 
        "Deathrate": "10.7", 
        "Continent": "Africa", 
        "Population": "37101745"
    }, 
    {
        "Life_expectancy": "71.6", 
        "Country": "Ukraine", 
        "Birthrate": "10.7", 
        "Deathrate": "14.5", 
        "Continent": "Europe", 
        "Population": "44429471"
    }, 
    {
        "Life_expectancy": "75.7", 
        "Country": "Hungary", 
        "Birthrate": "9.2", 
        "Deathrate": "12.7", 
        "Continent": "Europe", 
        "Population": "9897541"
    }, 
    {
        "Life_expectancy": "77", 
        "Country": "Uruguay", 
        "Birthrate": "13.1", 
        "Deathrate": "9.5", 
        "Continent": "South America", 
        "Population": "3341893"
    }, 
    {
        "Life_expectancy": "73.5", 
        "Country": "Uzbekistan", 
        "Birthrate": "17", 
        "Deathrate": "5.3", 
        "Continent": "Asia", 
        "Population": "29199942"
    }, 
    {
        "Life_expectancy": "73.1", 
        "Country": "Vanuatu", 
        "Birthrate": "25", 
        "Deathrate": "4.1", 
        "Continent": "Oceania", 
        "Population": "272264"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Holy See (Vatican City)", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Europe", 
        "Population": "842"
    }, 
    {
        "Life_expectancy": "74.5", 
        "Country": "Venezuela", 
        "Birthrate": "19.2", 
        "Deathrate": "5.3", 
        "Continent": "South America", 
        "Population": "29275460"
    }, 
    {
        "Life_expectancy": "77.3", 
        "Country": "United Arab Emirates", 
        "Birthrate": "15.4", 
        "Deathrate": "2", 
        "Continent": "Asia", 
        "Population": "5779760"
    }, 
    {
        "Life_expectancy": "79.7", 
        "Country": "United States", 
        "Birthrate": "12.5", 
        "Deathrate": "8.2", 
        "Continent": "North America", 
        "Population": "321368864"
    }, 
    {
        "Life_expectancy": "80.5", 
        "Country": "United Kingdom", 
        "Birthrate": "12.2", 
        "Deathrate": "9.4", 
        "Continent": "Europe", 
        "Population": "64088222"
    }, 
    {
        "Life_expectancy": "73.2", 
        "Country": "Vietnam", 
        "Birthrate": "16", 
        "Deathrate": "5.9", 
        "Continent": "Asia", 
        "Population": "94348835"
    }, 
    {
        "Life_expectancy": "79.6", 
        "Country": "Wallis and Futuna", 
        "Birthrate": "13.5", 
        "Deathrate": "5.1", 
        "Continent": "Oceania", 
        "Population": "15613"
    }, 
    {
        "Life_expectancy": "0", 
        "Country": "Christmas Island", 
        "Birthrate": "0", 
        "Deathrate": "0", 
        "Continent": "Australia", 
        "Population": "1530"
    }, 
    {
        "Life_expectancy": "62.6", 
        "Country": "Western Sahara", 
        "Birthrate": "30.2", 
        "Deathrate": "8.3", 
        "Continent": "Africa", 
        "Population": "570866"
    }, 
    {
        "Life_expectancy": "51.8", 
        "Country": "Central African Republic", 
        "Birthrate": "35.1", 
        "Deathrate": "13.8", 
        "Continent": "Africa", 
        "Population": "5391539"
    }, 
    {
        "Life_expectancy": "78.5", 
        "Country": "Cyprus", 
        "Birthrate": "11.4", 
        "Deathrate": "6.6", 
        "Continent": "Asia", 
        "Population": "1189197"
    }
]
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
    ["bo", "BOL", "Bolivia"],
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
    ["cg", "COG", "Republic of the Congo"],
    ["cd", "COD", "Democratic Republic of the Congo"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Ivory Coast"],
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
    ["ir", "IRN", "Iran"],
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
    ["kp", "PRK", "North Korea"],
    ["kr", "KOR", "South Korea"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Laos"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia"],
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
    ["md", "MDA", "Moldova"],
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
    ["ru", "RUS", "Russia"],
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
    ["sy", "SYR", "Syria"],
    ["tw", "TWN", "Taiwan"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania"],
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
    ["ve", "VEN", "Venezuela"],
    ["vn", "VNM", "Vietnam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];
var item = {}

var birthrate = []
for (var i = 0; i < data.length; i++) {
	birthrate.push(parseInt(data[i].Birthrate));
};
var max = Math.max.apply(Math, birthrate); 

var colorHex = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'];
var color;

function colorCode(pop){
	var percent = pop / max * 100;

	if (percent < 10){
		return '4.5';
	}
	if (percent < 20){
		return '4.5-9';
	}
	if (percent < 30){
		return '9-13.5';
	}
	if (percent < 40){
		return '13.5-18';
	}
	if (percent < 50){
		return '18-22.5';
	}
	if (percent < 60){
		return '22.5-27';
	}
	if (percent < 70){
		return '27-31.5';
	}
	if (percent < 80){
		return '31.5-36';
	}						
	if (percent >= 80){
		return '36-40.5';
	}
};

for (var i = 0; i < data.length; i++) {
	for (var j = 0; j < country_codes.length; j++) {
		if (data[i].Country == country_codes[j][2]){
			var key = country_codes[j][1];
			item[key] = {birthrate: data[i].Birthrate, population: data[i].Population, deathrate: data[i].Deathrate, life_expectancy: data[i].Life_expectancy, fillKey: colorCode(data[i].Birthrate)};
		};
	};
};

console.log(item)

var map = new Datamap({
	element: document.getElementById('container'),
	scope: 'world',
   	data: item,    
    geographyConfig: {
        borderColor: '#FDFDFD',
        popupTemplate: function(geo, data) {
       		if (data){ return "<div class='hoverinfo' <ul><strong>" + geo.properties.name + ":" +
       			"<li>Birthrate: " + data.birthrate + "</strong>" +
       			"<li>Deathrate: " + data.deathrate + "</li>" +
       			"<li>Life expectancy: " + data.life_expectancy + "</li>" +
       			"<li>Population: " + (data.population / 1000000).toFixed(2) + "M" + "</li>" +
       			"</ul></div>"
    		}
    	},
        highlightFillColor: '#4FD5D6',
        highlightBorderColor: false
    },
   	fills: {
   		"0-4.5": "#fff5f0",
   		"4.5-9": "#fee0d2",
   		"9-13.5": "#fcbba1",
   		"13.5-18": "#fc9272",
   		"18-22.5": "#fb6a4a",
   		"22.5-27": "#ef3b2c",
   		"27-31.5": "#cb181d",
   		"31.5-36": "#a50f15",
   		"36-40.5": "#67000d",
   		"No data of birth rate": "#000000",
   		defaultFill: "black"
   	}
});
map.legend();