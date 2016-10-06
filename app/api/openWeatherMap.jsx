var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=07bd99558d851e113067bbf72926ec66&units=metric';

var checkCityName = function (string1, string2) {

}


module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(function(res) {
			var cityFromResponse = res.data.name.toLowerCase().trim().replace(" ", "");
			var cityFromUser = decodeURI(encodedLocation.toLowerCase().trim()).replace(" ", "");
			if (cityFromUser !== cityFromResponse) {
				throw new Error(` Oops! This city cannot be found!`);
			}
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);			
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
			});
	}
}