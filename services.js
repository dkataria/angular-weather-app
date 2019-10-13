//SERVICES
weatherApp.service('cityService', function(){
    this.city = "Mumbai";
});

weatherApp.service('weatherService', ['$resource', function($resource){

    const API_KEY = '0b5739e7c4a108585a4a37dd63ab7a03';
    this.GetWeather = function(city, days) {
        var weatherAPI = 
        $resource(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&cnt=${days}`);
        return weatherAPI.get({});
    }
    

}]);