/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { cityWeatherDataSelector, weatherAllSelector } from 'store/weather-service/selectors';
// types
import { CurrentWeather, WeatherAll } from 'core/types';
// helpers
import { formatDays } from 'core/helpers';
// consts
import { BASE_ICONS_URL } from 'core/constants';
// styles
import s from './WeatherBaseInfo.module.scss';

const WeatherBaseInfo: FC = () => {
	const { timezone }: WeatherAll = useSelector(weatherAllSelector);
	const { name, main, sys, weather }: CurrentWeather = useSelector(cityWeatherDataSelector);

	const img: Array<string> = weather.map(icon => icon.icon);

	return (
		<div className={s.info}>
			<img src={`${BASE_ICONS_URL}${img}@2x.png`} alt="" />
			<h1>{Math.round(main.temp)}°</h1>
			<div>
				<h3>
					{name},{sys?.country}
				</h3>

				<p className={s.day}>{!!timezone && formatDays(timezone)}</p>
			</div>
		</div>
	);
};

export default WeatherBaseInfo;
