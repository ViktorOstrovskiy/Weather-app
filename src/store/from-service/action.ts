import { WEATHER_CITY, WEATHER_DAYS, SET_COUNTS } from "../action-types";
import instance from "../../axios/instance";
import { Dispatch } from "react";

export const weathers =
  () =>
  async (dispatch: Dispatch, getState: any): Promise<void> => {
    const apiKey = "ed2569a9d32e582df59b1bda438d168c";
    const { counter } = getState().weathers;

    try {
      const { data } = await instance.get(
        `onecall?lat=${counter.lat}&lon=${counter.lng}&units=metric&units=imperial&exclude={part}&appid=${apiKey}`
      );
      const weatherDays = data;
      console.log(data, "data");
      dispatch(setWeatherDays(weatherDays));
    } catch (err) {}
  };

export const weathersCity =
  () =>
  async (dispatch: Dispatch, getState: any): Promise<void> => {
    const apiKey = "ed2569a9d32e582df59b1bda438d168c";
    const { counter } = getState().weathers;

    try {
      const { data } = await instance.get(
        `weather?lat=${counter.lat}&lon=${counter.lng}&units=metric&appid=${apiKey}`
      );
      const city = data;
      dispatch(setWeatherCity(city));
    } catch (err) {}
  };

const setWeatherCity = (data: object) => {
  return {
    type: WEATHER_CITY,
    payload: data,
  };
};
const setWeatherDays = (data: object) => {
  return {
    type: WEATHER_DAYS,
    payload: data,
  };
};

export const setCounters = (data: object) => {
  return {
    type: SET_COUNTS,
    payload: data,
  };
};
