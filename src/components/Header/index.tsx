/* eslint-disable react/function-component-definition */
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
import { nanoid } from 'nanoid';
// types
import { Daily, Hourly, WeatherAll } from 'core/types';
// helpers
import { countTempatureValueByType } from 'core/helpers';
// consts
import { BASE_ICONS_URL, days } from 'core/constants';
// components
import { Button } from 'components/shared';
// styles
import s from './Header.module.scss';

const Header: FC = () => {
	const weatherAll: WeatherAll = useSelector(weatherAllSelector);

	const [temperatureValue, setTemperatureValue] = useState(false);
	const [forecastWeekOrDay, setForecastWeekOrDay] = useState(true);

	const temperatureCelcius = () => setTemperatureValue(false);
	const temperatureFahrenheit = () => setTemperatureValue(true);

	return (
		<div className={s.wrapper}>
			<div className={s.wrapper__btns}>
				<div className={s.wrapper__view}>
					<Button
						variant="text"
						title="Today"
						onClick={() => setForecastWeekOrDay(false)}
						active={!forecastWeekOrDay}
					/>
					<Button
						variant="text"
						title="Week"
						onClick={() => setForecastWeekOrDay(true)}
						active={forecastWeekOrDay}
					/>
				</div>
				<div className={s.wrapper__temperature}>
					<Button title="°C" active={!temperatureValue} onClick={temperatureCelcius} />
					<Button title="°F" active={temperatureValue} onClick={temperatureFahrenheit} />
				</div>
			</div>
			<div className={s.wrapper__content}>
				{(forecastWeekOrDay ? weatherAll.daily : weatherAll.hourly).slice(0, 8).map((temp: Daily | Hourly) => (
					<div className={s.wrapper__block} key={nanoid()}>
						<p>{days[new Date(temp.dt * 1000).getDay()]}</p>
						<img src={`${BASE_ICONS_URL}${temp.weather[0].icon}@2x.png`} alt="" />
						{forecastWeekOrDay ? (
							<>
								<p>{countTempatureValueByType((temp as Daily).temp.min, temperatureValue)}</p>
								<p>{countTempatureValueByType((temp as Daily).temp.max, temperatureValue)}</p>
							</>
						) : (
							<>
								<p>{countTempatureValueByType(temp.temp as number, temperatureValue)}</p>
								<p>{new Date(temp.dt * 1000).getHours()} : 00</p>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Header;
