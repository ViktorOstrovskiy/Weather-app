import { Dispatch } from "react";
import { SET_COUNTS, WEATHER_CITY, WEATHER_DAYS } from "./action-types";

export interface IWeatherReducer {
  weathers?: any;
  weatherCity: object;
  weather: {};
  counter: {
    lat: number;
    lng: number;
  };
}

interface IWeatherCity {
  type: typeof WEATHER_CITY;
  payload: object;
}

interface IWeatherDays {
  type: typeof WEATHER_DAYS;
  payload: object;
}

interface ISetCount {
  type: typeof SET_COUNTS;
  payload: object;
}

export type ActionTypes = IWeatherCity | ISetCount | IWeatherDays;
