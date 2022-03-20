/* eslint-disable react/function-component-definition */
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
// helpers
import { timeSunRiseSunSet } from 'core/helpers';
// types
import { WeatherAll } from 'core/types';
// img
import sunRises from 'assets/img/sunrise.png';
import sunSets from 'assets/img/sunset.png';
// styles
import s from './SunInfo.module.scss';

export const SunInfo = () => {
	const { daily }: WeatherAll = useSelector(weatherAllSelector);

	const sunRise: Array<number> = daily.map(sun => sun.sunrise);
	const sunSet: Array<number> = daily.map(sun => sun.sunset);

	return (
		<div className={s.suninfo}>
			<h3>Sunrise & Sunset</h3>
			<p>
				<img src={sunRises} alt="" />
				{timeSunRiseSunSet(sunRise[0])}
			</p>

			<p>
				<img src={sunSets} alt="" />
				{timeSunRiseSunSet(sunSet[0])}
			</p>
		</div>
	);
};
