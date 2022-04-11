/* eslint-disable react/function-component-definition */
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AutocompleteLocation from 'components/AutocompleteLocation';
// selectors
import { coordinatesSelector } from 'store/location-service/selectors';
// functions
import { getWeathers, getWeathersInfoByCity } from 'store/weather-service/action';
// types
import { Coord } from 'core/types';
// components
import Clouds from 'components/Clouds';
import WeatherBaseInfo from 'components/WeatherBaseInfo';
// styles
import s from './Sidebar.module.scss';

const Sidebar: FC = () => {
	const dispatch = useDispatch();
	const coordinates: Coord = useSelector(coordinatesSelector);

	useEffect(() => {
		dispatch(getWeathers(coordinates));
		dispatch(getWeathersInfoByCity(coordinates));
	}, [coordinates]);
	return (
		<div className={s.sidebar}>
			<AutocompleteLocation />
			<WeatherBaseInfo />
			<Clouds />
		</div>
	);
};

export default Sidebar;
