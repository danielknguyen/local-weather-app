$(document).ready(function(){
	// grabbing current location of user
	navigator.geolocation.getCurrentPosition(function(position) {

		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		weatherUrl ='http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + latitude + '&lon=' + longitude  + '&APPID=524a91657eafa89021d9d867b06ed414';

		// Asynchronous retrieving of weather data
		$.ajax({
			url:weatherUrl,
			crossDomain:true,
			success: function(data) {
				weatherLocation = data.sys.country;
				weatherDescription = data.weather[0].description;
				weatherKelvin = data.main.temp;
				weatherFahrenheit = Math.floor(weatherKelvin * 9/5 - 459.67);
				weatherCelsius = Math.floor((weatherFahrenheit - 32) * 5/9);
				weatherIcon =  data.weather[0].icon;

				console.log(data);

				//add user location
				$('.weather-location')
					.text(weatherLocation + ',')
					.css('font-size', '2em')
					.css('color', '#FFFFFF');
				//add description of weather
				$('.weather-description')
					.text(weatherDescription)
					.css('font-size', '2em')
					.css('color', '#FFFFFF');
				//add temperature in fahrenheit
				$('.weather-fahrenheit')
					.text(weatherFahrenheit + ' F')
					.css('font-size', '2em')
					.css('color', '#FFFFFF')
					.show();
				$('.weather-celsius')
					.text(weatherCelsius + ' C')
					.css('font-size', '2em')
					.css('color', '#FFFFFF')
					.hide();
				$('.weather-image').prepend('<img id="theWeatherIcon" src="http://openweathermap.org/img/w/' + weatherIcon + '.png' + '"' + '/>');
			}
			
		});
		$('.weather-fahrenheit').on('click', function(){
			$('.weather-fahrenheit').hide();
			$('.weather-celsius').show();
		})
		$('.weather-celsius').on('click', function(){
			$('.weather-celsius').hide();
			$('.weather-fahrenheit').show();
		})		
	});	
});

	