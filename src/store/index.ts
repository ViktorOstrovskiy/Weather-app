import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from 'store/location-service/reducer';
import weatherReducer from 'store/weather-service/reducer';

const rootReducer = combineReducers({
	weathers: weatherReducer,
	coordinates: locationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type Store = ReturnType<typeof rootReducer>;
