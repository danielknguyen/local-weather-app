$(document).ready(function(){
	// grabbing current location of user
	navigator.geolocation.getCurrentPosition(function(position) {

		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		weatherUrl = 'https://api.darksky.net/forecast/df35bff65738d6e81b904f50a9198a85/' + latitude + ',' + longitude;

		// Asynchronous retrieving of weather data
		$.ajax({
			url:weatherUrl,
			type:'GET',
			dataType:'jsonp',
			success: function(data) {
				weatherLocation = data.timezone;
				weatherDescription = data.currently.summary;
				weatherFahrenheit = Math.floor(data.currently.apparentTemperature);
				weatherCelsius = Math.floor((weatherFahrenheit - 32) * 5/9);
				weatherIcon = data.currently.icon;

				console.log(data);

				//add user location
				$('.weather-location')
					.text(weatherLocation + ',')
					.css('font-size', '2.5em')
					.css('color', '#FFFFFF');
				//add description of weather
				$('.weather-description')
					.text(weatherDescription)
					.css('font-size', '2.5em')
					.css('color', '#FFFFFF');
				//add temperature in fahrenheit
				$('.weather-temperature')
					.text(weatherFahrenheit + ' F')
					.css('font-size', '2.5em')
					.css('color', '#FFFFFF');
				//add weather icon according to the specific weather
				var icons = new Skycons({"color": "orange"});
				
				if(weatherIcon.indexOf("partly-cloudy-day") >= 0) {
					icons.set("weather-icon", Skycons.PARTLY_CLOUDY_DAY);	
				} else if (weatherIcon.indexOf("clear-day") >= 0) {
					icons.set("weatherDescription", Skycons.CLEAR_DAY);
				} else if (weatherIcon.indexOf("clear-night") >= 0) {
					icons.set("weatherDescription", Skycons.CLEAR_NIGHT);
				} else if (weatherIcon.indexOf("partly-cloudy-night") >= 0) {
					icons.set("weatherDescription", Skycons.PARTLY_CLOUDY_NIGHT);
				} else if (weatherIcon.indexOf("cloudy") >= 0) {
					icons.set("weatherDescription", Skycons.CLOUDY);
				} else if (weatherIcon.indexOf("rain") >= 0) {
					icons.set("weatherDescription", Skycons.RAIN);
				} else if (weatherIcon.indexOf("sleet") >= 0) {
					icons.set("weatherDescription", Skycons.SLEET);
				} else if (weatherIcon.indexOf("snow") >= 0) {
					icons.set("weatherDescription", Skycons.SNOW);
				} else if (weatherIcon.indexOf("wind") >= 0) {
					icons.set("weatherDescription", Skycons.WIND);
				} else if (weatherIcon.indexOf("fog") >= 0) {
					icons.set("weatherDescription", Skycons.FOG);
				}
				icons.play();
			}
			
		});
	
	//mouse click temperature to change to celsius
	// $('.weather-temperature').on('click', function(){
	// 	$('.weather-temperature')
	// 		.text(weatherCelsius + ' C')
	// 		.css('font-size', '2.5em')
	// 		.css('color', '#FFFFFF');
	// });
	//mouse click temperature to change to fahrenheit
	// $('.weather-temperature').on('click', function(){
	// 	$('.weather-temperature')
	// 		.text(weatherFahrenheit + ' F')
	// 		.css('font-size', '2.5em')
	// 		.css('color', '#FFFFFF');
			
	});	
});
