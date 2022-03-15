import { Dispatch } from "react";
import { SET_COUNTS, WEATHER_CITY, WEATHER_DAYS } from "./action-types";

export type IWeatherReducer = {
  weathers?: any;
  weatherCity: {} | CurWeather;
  weather: {} | IWeatherAll;
  placeRequest: ICoord;
};
export interface IWeatherAll {
  name: any;
  curWeather: CurWeather;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  minutely: Minutely;
  hourly: IHourly[];
  daily: IDaily[];
}

export interface CurWeather {
  coord: ICoord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface ICurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
}
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface ICoord {
  lng: number;
  lat: number;
}
export interface Minutely {
  dt: number;
  precipitation: number;
}
export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
export interface IHourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop: number;
}
export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  uvi: number;
}
export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface IWeatherCity {
  type: typeof WEATHER_CITY;
  payload: CurWeather;
}

interface IWeatherDays {
  type: typeof WEATHER_DAYS;
  payload: IWeatherAll;
}

interface ISetCount {
  type: typeof SET_COUNTS;
  payload: ICoord;
}

export type ActionTypes = IWeatherCity | ISetCount | IWeatherDays;
