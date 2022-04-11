/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { cityWeatherDataSelector } from 'store/weather-service/selectors';
// types
import { CurrentWeather } from 'core/types';
// styles
import s from './AverageVisibility.module.scss';

export const AverageVisibility: FC = () => {
	const { visibility }: CurrentWeather = useSelector(cityWeatherDataSelector);

	return (
		<div className={s.visibility}>
			<h3>Visibility</h3>
			<span>{visibility}m/h</span>
			<p>Good visibility</p>
		</div>
	);
};
