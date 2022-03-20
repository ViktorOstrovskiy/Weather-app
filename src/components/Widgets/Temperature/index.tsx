/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
// types
import { WeatherAll } from 'core/types';
// img
import hot from 'assets/img/hot.png';
import cold from 'assets/img/cold.png';
// styles
import s from './Temperature.module.scss';

export const Temperature: FC = () => {
	const { daily }: WeatherAll = useSelector(weatherAllSelector);

	const minTemp: Array<number> = daily.map(temp => temp.temp.min);
	const maxTemp: Array<number> = daily.map(temp => temp.temp.max);

	return (
		<div className={s.wrapper}>
			<h3>Min & Max temperature</h3>

			<div className={s.wrapper__temperature}>
				<p>
					<img src={cold} alt="" />
					{Math.round(minTemp[0])}°
				</p>
				<p>
					<img src={hot} alt="" />
					{Math.round(maxTemp[0])}°
				</p>
			</div>
		</div>
	);
};

export default Temperature;
