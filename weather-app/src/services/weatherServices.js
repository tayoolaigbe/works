const getWeatherData = (infoType, searchParams) => {
	const url = new URL(`${import.meta.env.VITE_BASE_URL}/${infoType}`);
	url.search = new URLSearchParams({
		...searchParams,
		appid: import.meta.env.VITE_API_KEY,
	});

	return fetch(url).then(res => res.json());
};

const formatCurrentWeather = data => {
	const {
		coord: { lat, lon },
		main: { temp, feels_like, temp_min, temp_max, humidity },
		name,
		dt,
		sys: { country, sunrise, sunset },
		weather,
		wind: { speed },
	} = data;

	const { main: details, icon } = weather[0];

	return {
		lat,
		lon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details,
		icon,
		speed,
	};
};

const getFormattedWeatherData = async searchParams => {
	const formattedCurrentWeather = await getWeatherData(
		'weather',
		searchParams
	).then(formatCurrentWeather);

	const { lat, lon } = formattedCurrentWeather;

	const formattedForecastWeather = await getWeatherData('onecall', {
		lat,
		lon,
		exclude: 'current, minutely, alerts',
		units: searchParams.units,
	});

	return formatCurrentWeather;
};
