$(document).ready(function(){
	// grabbing current location of user
	navigator.geolocation.getCurrentPosition(function(position) {

		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=8478db85cf8851584a9cfd828d602f11';

		// Asynchronous retrieving of weather data
		$.getJSON(weatherUrl, function(data){

			weatherLocation = data.sys.country;
			weatherDescription = data.weather[0].description;
			weatherKelvin = data.main.temp;
			weatherFahrenheit = Math.floor(9/5 * weatherKelvin - 459.67);
			weatherCelsius = Math.floor((weatherFahrenheit - 32) * 5/9);
			weatherImage = data.weather[0].icon;

			console.log(data);
			$('.weather-location')
				.text(weatherLocation + ',')
				.css('font-size', '2.5em')
				.css('color', '#FFFFFF');
			$('.weather-description')
				.text(weatherDescription)
				.css('font-size', '2.5em')
				.css('color', '#FFFFFF');
			$('.weather-temperature')
				.text(weatherFahrenheit + ' F')
				.css('font-size', '2.5em')
				.css('color', '#FFFFFF');
			//add weather icon according to the specific weather
			// $('.weather-image')
			// 	.html()
		})
	});
	//mouse click temperature to change to celsius
	$('.weather-temperature').on('click', function(){
		$('.weather-temperature')
			.text(weatherCelsius + ' C')
			.css('font-size', '2.5em')
			.css('color', '#FFFFFF');
	});
	//mouse click temperature to change to fahrenheit
	// $('.weather-temperature').on('click', function(){
	// 	$('.weather-temperature')
	// 		.text(weatherFahrenheit + ' F')
	// 		.css('font-size', '2.5em')
	// 		.css('color', '#FFFFFF');
	// });
		
});
