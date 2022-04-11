import { CurrentWeather, WeatherAll } from 'core/types';
import { GET_INFO_BY_CITY, GET_WHEATHER_ALL } from 'store/action-types';

export type IWeatherReducer = {
	cityWeatherData: CurrentWeather;
	all: WeatherAll;
};

interface IWeatherCity {
	type: typeof GET_INFO_BY_CITY;
	payload: CurrentWeather;
}

interface IWeatherAll {
	type: typeof GET_WHEATHER_ALL;
	payload: WeatherAll;
}

export type ActionTypes = IWeatherCity | IWeatherAll;
