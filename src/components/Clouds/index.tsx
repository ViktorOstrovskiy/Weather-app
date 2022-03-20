import { useSelector } from 'react-redux';
// types
import { CurWeather, IWeatherReducer } from '../../store/types';
// styles
import s from '../Clouds/Clouds.module.scss';

const Clouds = () => {
	const { weatherCity } = useSelector((state: IWeatherReducer) => state.weathers);
	const clouds: CurWeather = weatherCity.clouds?.all;
	return (
		<div className={s.clouds}>
			<p>Weather Details:</p>
			<ul>
				<li>
					<span>Clouds</span>
					<span>{clouds}%</span>
				</li>
			</ul>
		</div>
	);
};

export default Clouds;
