import { Dispatch } from 'redux';
import api from 'core/api/instance';
// types
import { CurrentWeather, Coord, WeatherAll } from 'core/types';
import { GET_INFO_BY_CITY, GET_WHEATHER_ALL } from 'store/action-types';

const WEATHER_API: string | undefined = process.env.REACT_APP_WEATHER_API;

export const getWeathers =
	(coordinates: Coord) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.get(
				`onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&units=imperial&exclude={part}&appid=${WEATHER_API}`
			);

			const getWeatherAll = data;
			dispatch(setWeather(getWeatherAll));
		} catch (err) {
			console.log('Error', err);
		}
	};

export const getWeathersInfoByCity =
	(coordinates: Coord) =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			const { data } = await api.get(
				`weather?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&appid=${WEATHER_API}`
			);

			const city = data;

			dispatch(setWeatherInfoCity(city));
		} catch (err) {
			console.log('Error', err);
		}
	};

const setWeatherInfoCity = (data: CurrentWeather) => ({
	type: GET_INFO_BY_CITY,
	payload: data,
});

const setWeather = (data: WeatherAll) => ({
	type: GET_WHEATHER_ALL,
	payload: data,
});
