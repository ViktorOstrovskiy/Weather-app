export type WeatherAll = {
	name: string;
	curWeather: CurrentWeather | null;
	timezone: string;
	timezone_offset: number;
	current: InfoWeather | null;
	minutely: Minutely | null;
	hourly: Hourly[];
	daily: Daily[];
};

export type CurrentWeather = {
	coord: Coord | null;
	weather: Weather[];
	base: string;
	main:
		| Main
		| {
				temp: number;
		  };
	visibility: number;
	wind: Wind | null;
	clouds: Clouds | null;
	dt: number;
	sys: InternalParameters | null;
	timezone: number;
	id: number;
	name: string;
	cod: number;
};
export type InfoWeather = {
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
};
export type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
};
export type Coord = {
	lng: number;
	lat: number;
};
export type Minutely = {
	dt: number;
	precipitation: number;
};
export type Temperature = {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
};
export type Hourly = {
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
};
export type Daily = {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temperature;
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
};
export type FeelsLike = {
	day: number;
	night: number;
	eve: number;
	morn: number;
};
export type Main = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
};
export type Wind = {
	speed: number;
	deg: number;
};
export type Clouds = {
	all: number;
};

export type InternalParameters = {
	type: number;
	id: number;
	message: number;
	country: string;
	sunrise: number;
	sunset: number;
};

export type Libraries = ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[];
