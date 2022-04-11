import { Coord } from 'core/types';
import { Store } from 'store';

export const coordinatesSelector = (state: Store): Coord => state.coordinates.coordinates;
