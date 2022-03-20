/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
// selectors
import { coordinatesSelector } from 'store/location-service/selectors';
// types
import { Coord } from 'core/types';
// consts
import { MAP_OPTIONS_DEFAULT } from 'core/constants';

// styles
import s from './Map.module.scss';

export const Map: FC = () => {
	const coordinates: Coord = useSelector(coordinatesSelector);

	return (
		<div className={s.map}>
			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '100%' }}
				center={coordinates}
				zoom={10}
				options={MAP_OPTIONS_DEFAULT}
			/>
		</div>
	);
};

export default Map;
