/* eslint-disable react/function-component-definition, arrow-body-style */
import { FC } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
// types
import { Libraries } from 'core/types';
// components
import {
	AverageVisibility,
	Humidity,
	IndexUvi,
	SunInfo,
	Temperature,
	WindStatus,
	Map,
} from 'components/Widgets/components';
// styles
import s from './Widgets.module.scss';

const libraries: Libraries = ['places'];
const GOOGLE_API: string | undefined = process.env.REACT_APP_GOOGLE_API;

const Widgets: FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: String(GOOGLE_API),
		libraries,
	});
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<IndexUvi />
				<WindStatus />
				<SunInfo />
				<Humidity />
				<AverageVisibility />
				<Temperature />
			</div>
			<div className={s.map}>{isLoaded ? <Map /> : <h2>Loading</h2>}</div>
		</div>
	);
};

export default Widgets;
