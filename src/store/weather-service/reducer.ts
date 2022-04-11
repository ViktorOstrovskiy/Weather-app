/* eslint-disable default-param-last */
// types
import { GET_INFO_BY_CITY, GET_WHEATHER_ALL } from 'store/action-types';
import { ActionTypes, IWeatherReducer } from './types';

const initialState: IWeatherReducer = {
	cityWeatherData: {
		coord: null,
		weather: [],
		base: '',
		main: {
			temp: 0,
		},
		visibility: 0,
		wind: null,
		clouds: null,
		dt: 0,
		sys: null,
		timezone: 0,
		id: 0,
		name: '',
		cod: 0,
	},
	all: {
		name: '',
		curWeather: null,
		timezone: '',
		timezone_offset: 0,
		current: null,
		minutely: null,
		hourly: [],
		daily: [],
	},
};

const weatherReducer = (state = initialState, action: ActionTypes): IWeatherReducer => {
	const { type, payload } = action;

	switch (type) {
		case GET_INFO_BY_CITY:
			return {
				...state,
				cityWeatherData: payload,
			};
		case GET_WHEATHER_ALL:
			return {
				...state,
				all: payload,
			};

		default:
			return state;
	}
};

export default weatherReducer;
