import { Daily } from 'core/types';

export const humudityPer = (humidity: Daily | number): string => {
	if (humidity >= 70) return 'Poor high';

	if (humidity >= 60 && humidity < 70) return 'Fair';

	if (humidity >= 30 && humidity < 60) return 'Maintain';

	if (humidity >= 25 && humidity < 30) return 'Fair';

	return 'Poor low';
};

export const uviIndex = (uvi: Daily | number): number => {
	if (uvi === 0) return 0;
	if (uvi === 2) return 0.05;
	if (uvi <= 4) return 0.1;
	if (uvi <= 6) return 0.35;
	if (uvi <= 8) return 0.65;
	if (uvi <= 10) return 0.856;

	return 1;
};

export const getHumidityStyle = (humidity: number): object => ({
	background: `linear-gradient(360deg, #08E ${humidity}%, #fff 50%)`,
});

export const timeSunRiseSunSet = (time: number): string =>
	`${new Date(time * 1000).getHours()}:${String(new Date(time * 1000).getMinutes()).padStart(2, '0')}`;

export const countTempatureValueByType = (data: number, value: boolean): string => {
	if (!value) {
		return `${Math.round(data)} °C`;
	}

	return `${(Math.round(data) * 9) / 5 + 32} °F`;
};
