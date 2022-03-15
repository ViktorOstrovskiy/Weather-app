import { WEATHER_CITY, WEATHER_DAYS, SET_COUNTS } from "../action-types";
import { ActionTypes, IWeatherReducer } from "../types";

const initialState: IWeatherReducer = {
  weatherCity: {},
  weather: {},
  counter: {
    lat: 49.2328,
    lng: 28.481,
  },
};

const reducer = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case WEATHER_CITY:
      return {
        ...state,
        weatherCity: payload,
      };
    case WEATHER_DAYS:
      return {
        ...state,
        weather: payload,
      };
    case SET_COUNTS:
      return {
        ...state,
        counter: payload,
      };

    default:
      return state;
  }
};

export default reducer;
