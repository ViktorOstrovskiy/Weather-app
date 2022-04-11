import { CurrentWeather, WeatherAll } from 'core/types';
import { Store } from 'store';

export const weatherAllSelector = (state: Store): WeatherAll => state.weathers.all;
export const cityWeatherDataSelector = (state: Store): CurrentWeather => state.weathers.cityWeatherData;
