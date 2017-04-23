$(document).ready(function(){
	// grabbing current location of user
	navigator.geolocation.getCurrentPosition(function(position) {

		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=8478db85cf8851584a9cfd828d602f11';

		// Asynchronous retrieving of weather data
		$.ajax({
			url:weatherUrl,
			method:'get',
			crossDomain:true,
			headers:{
				'Access-Control-Allow-Origin': '*'
			},
			success: function(data) {
				weatherLocation = data.sys.country;
				weatherDescription = data.weather[0].description;
				weatherKelvin = data.main.temp;
				weatherFahrenheit = Math.floor(9/5 * weatherKelvin - 459.67);
				weatherCelsius = Math.floor((weatherFahrenheit - 32) * 5/9);
				weatherImage = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

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
				$('.weather-image')
					.prepend("<img src='" + weatherImage + "'" + "/>")
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
