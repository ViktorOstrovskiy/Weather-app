/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { cityWeatherDataSelector } from 'store/weather-service/selectors';
// types
import { CurrentWeather } from 'core/types';
// styles
import s from './Clouds.module.scss';

const Clouds: FC = () => {
	const { clouds }: CurrentWeather = useSelector(cityWeatherDataSelector);
	return (
		<div className={s.clouds}>
			<p>Weather Details:</p>
			<ul>
				<li>
					<span>Clouds</span>
					<span>{clouds?.all}%</span>
				</li>
			</ul>
		</div>
	);
};

export default Clouds;
