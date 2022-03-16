import { Dispatch } from "redux";
import { WEATHER_CITY, WEATHER_DAYS, SET_COUNTS } from "../action-types";
import instance from "../../axios/instance";
// types
import { CurWeather, ICoord, IWeatherAll, IWeatherReducer } from "../types";

export const weathers =
  () =>
  async (dispatch: Dispatch, getState: any): Promise<void> => {
    const apiKey = "ed2569a9d32e582df59b1bda438d168c";
    const { placeRequest }: IWeatherReducer = getState().weathers;

    try {
      const { data } = await instance.get(
        `onecall?lat=${placeRequest.lat}&lon=${placeRequest.lng}&units=metric&units=imperial&exclude={part}&appid=${apiKey}`
      );
      const weatherDays = data;
      dispatch(setWeatherDays(weatherDays));
    } catch (err) {}
  };

export const weathersCity =
  () =>
  async (dispatch: Dispatch, getState: any): Promise<void> => {
    const apiKey = "ed2569a9d32e582df59b1bda438d168c";
    const { placeRequest }: IWeatherReducer = getState().weathers;

    try {
      const { data } = await instance.get(
        `weather?lat=${placeRequest.lat}&lon=${placeRequest.lng}&units=metric&appid=${apiKey}`
      );
      const city = data;

      dispatch(setWeatherCity(city));
    } catch (err) {}
  };

const setWeatherCity = (data: CurWeather) => {
  return {
    type: WEATHER_CITY,
    payload: data,
  };
};
const setWeatherDays = (data: IWeatherAll) => {
  return {
    type: WEATHER_DAYS,
    payload: data,
  };
};

export const setCounters = (data: ICoord) => {
  return {
    type: SET_COUNTS,
    payload: data,
  };
};
