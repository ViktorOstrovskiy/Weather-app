/* eslint-disable default-param-last */
// types
import { SET_COORDINATES } from 'store/action-types';
import { ActionTypes, ILocationReducer } from './types';

const initialState: ILocationReducer = {
	coordinates: {
		lat: 49.2328,
		lng: 28.481,
	},
};

const locationReducer = (state = initialState, action: ActionTypes): ILocationReducer => {
	const { type, payload } = action;

	switch (type) {
		case SET_COORDINATES:
			return {
				...state,
				coordinates: payload,
			};

		default:
			return state;
	}
};

export default locationReducer;
