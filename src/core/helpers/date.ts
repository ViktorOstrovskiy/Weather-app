import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const formatDays = (zoneTime: string) => {
	dayjs.extend(timezone);
	dayjs.extend(utc);

	return dayjs().tz(zoneTime).format('dddd,HH:mm');
};
