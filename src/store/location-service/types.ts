import { Coord } from 'core/types';
import { SET_COORDINATES } from 'store/action-types';

export type ILocationReducer = {
	coordinates: Coord;
};

interface ISetCoord {
	type: typeof SET_COORDINATES;
	payload: Coord;
}

export type ActionTypes = ISetCoord;
