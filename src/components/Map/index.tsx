import { GoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
// types
import { IWeatherReducer } from '../../store/types';
// styles
import s from './Map.module.scss';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwheel: false,
	disableDoubleClickZoom: false,
	fullScreenControl: false,
};
const Map = () => {
	const { placeRequest }: IWeatherReducer = useSelector((state: IWeatherReducer) => state.weathers);

	return (
		<div className={s.map}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={placeRequest}
				zoom={10}
				options={defaultOptions}
			></GoogleMap>
		</div>
	);
};

export default Map;
