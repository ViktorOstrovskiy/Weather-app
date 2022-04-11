/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { weatherAllSelector } from 'store/weather-service/selectors';
// types
import { WeatherAll } from 'core/types';
// helpers
import { uviIndex } from 'core/helpers';
// styles
import s from './IndexUVI.module.scss';

export const IndexUvi: FC = () => {
	const { daily }: WeatherAll = useSelector(weatherAllSelector);

	const uvi: Array<number> = daily.map(item => item.uvi);

	return (
		<div className={s.wrapper}>
			<h3>UI index</h3>

			<div className={s.wrapper__uvi}>
				<div className={s.gradient}>
					<svg id="half-circle" viewBox="0 0 106 57" width="150">
						<defs>
							<linearGradient id="orange-to-pink" x1="1" x2="0" y1="0" y2="0">
								<stop offset={`${uviIndex(uvi[0])}`} stopColor="orange" />
								<stop
									offset={`${uviIndex(uvi[0])}` === '0' ? 0 : 0.7}
									stopColor="rgba(236, 233, 233, 0.89)"
								/>
							</linearGradient>
						</defs>
						<path d="M101 4c0 27.1-21.9 49-49 49S4 31.1 4 4">.</path>
					</svg>

					<span>1</span>
					<span>6</span>
					<span>9</span>
					<span>12</span>
					<span>{uvi[0]}</span>
				</div>
			</div>
		</div>
	);
};
