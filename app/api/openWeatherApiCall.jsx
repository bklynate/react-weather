var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1c7a9a4d063dab90faee76482e805a53&units=imperial'

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      debugger
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp
      }
    }, function (response) {
      throw new Error(response.data.message);
    });
  }
}
