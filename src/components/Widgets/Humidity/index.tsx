/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
// types
import { WeatherAll } from 'core/types';
// helpers
import { getHumidityStyle, humudityPer } from 'core/helpers';
// styles
import s from './Humidity.module.scss';

export const Humidity: FC = () => {
	const { daily }: WeatherAll = useSelector(weatherAllSelector);
	const humidity: Array<number> = daily.map(humidity => humidity.humidity);

	return (
		<div className={s.wrapper}>
			<h3>Humidity</h3>

			<div className={s.humudity}>
				<div className={s.humudity__percent}>
					<p>
						<span>{humidity[0]}</span> %
					</p>
					<p>{humudityPer(humidity[0])}</p>
				</div>
				<div className={s.frame}>
					<div style={getHumidityStyle(humidity[0])}>.</div>
				</div>
			</div>
		</div>
	);
};
