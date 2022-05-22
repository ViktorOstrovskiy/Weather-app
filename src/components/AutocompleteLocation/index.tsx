/* eslint-disable camelcase  */
/* eslint-disable react/function-component-definition */
import { useEffect, FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useJsApiLoader } from '@react-google-maps/api';
import usePlacesAutocomplete, { GeocodeResult, getGeocode, getLatLng, Suggestion } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
// function
import { getWeathers, getWeathersInfoByCity } from 'store/weather-service/action';
import { setCoordinates } from 'store/location-service/action';
// types
import { Libraries } from 'core/types';
// components
import ButtonGps from 'components/ButtonGps';
// style
import s from './AutocompleteLocation.module.scss';

const libraries: Libraries = ['places'];
const GOOGLE_API: string | undefined = process.env.REACT_APP_GOOGLE_API;

const AutocompleteLocation: FC = () => {
	const dispatch = useDispatch();

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: String(GOOGLE_API),
		libraries,
	});

	const {
		ready,
		value,
		suggestions: { status, data },
		init,
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		initOnMount: false,
		debounce: 300,
	});

	useEffect(() => {
		if (isLoaded) init();
	}, [isLoaded, init]);

	const ref = useOnclickOutside(() => {
		clearSuggestions();
	});

	const handleInput = ({ target }: any): void => {
		setValue(target.value);
	};

	const handleSelect = (suggestion: Suggestion) => async (): Promise<void> => {
		try {
			setValue(suggestion.description, false);
			clearSuggestions();
			const locationResult: Array<GeocodeResult> = await getGeocode({ address: suggestion.description });
			const coordinates = await getLatLng(locationResult[0]);
			dispatch(setCoordinates(coordinates));
			dispatch(getWeathers(coordinates));
			dispatch(getWeathersInfoByCity(coordinates));
		} catch (error) {
			console.log('😱 Error: ', error);
		}
	};

	const renderSuggestions = (): JSX.Element[] =>
		data.map(suggestion => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;
			return (
				<li className={s.listSuggestion} key={place_id} onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			);
		});

	const memoizedSuggestions: JSX.Element[] = useMemo(() => renderSuggestions(), [data]);

	return (
		<div ref={ref} className={s.dropdown}>
			<input
				value={value}
				onChange={handleInput}
				disabled={!ready}
				placeholder="Type address"
				className={s.input}
				onClick={() => setValue('')}
			/>
			<ButtonGps />
			{status === 'OK' && <ul className={s.suggestions}>{memoizedSuggestions}</ul>}
		</div>
	);
};

export default AutocompleteLocation;
