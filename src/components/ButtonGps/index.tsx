/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { useDispatch } from 'react-redux';
// function
import { getWeathers, getWeathersInfoByCity } from 'store/weather-service/action';
import { setCoordinates } from 'store/location-service/action';
// img
import home from 'assets/img/home.png';
// styles
import s from './ButtonGps.module.scss';

const ButtonGps: FC = () => {
	const dispatch = useDispatch();

	const getUserLocation = (): void => {
		navigator.geolocation.getCurrentPosition(
			position => {
				dispatch(
					setCoordinates({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
				);
				dispatch(
					getWeathers({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
				);

				dispatch(
					getWeathersInfoByCity({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
				);
			},
			error => {
				console.log(error);
			}
		);
	};

	return (
		<button className={s.btn} onClick={getUserLocation}>
			<img src={home} alt="" />
		</button>
	);
};

export default ButtonGps;
