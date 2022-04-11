// types
import { Coord } from 'core/types';
import { SET_COORDINATES } from 'store/action-types';

export const setCoordinates = (data: Coord): object => ({
	type: SET_COORDINATES,
	payload: data,
});
