/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
// types
import { WeatherAll } from 'core/types';
// styles
import s from './WindStatus.module.scss';

export const WindStatus: FC = () => {
	const { daily }: WeatherAll = useSelector(weatherAllSelector);

	const windStatus: Array<number> = daily.map(wind => wind.wind_speed);

	return (
		<div className={s.windStatus}>
			<h3>WindStatus</h3>
			<span>{windStatus[0]}km/h</span>
			<p>Light breeze</p>
		</div>
	);
};
