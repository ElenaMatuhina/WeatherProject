import { WeatherDayDetails, WeatherDayDetailsValue } from './styles';

export const WeatherNextDayDetails = ({
  hours,
  temp,
  icon,
  description,
  wind,
  pressure,
  humidity,
}) => {
  return (
    <WeatherDayDetails>
      <WeatherDayDetailsValue> {hours}</WeatherDayDetailsValue>
      <WeatherDayDetailsValue>{temp && Math.round(temp)}</WeatherDayDetailsValue>
      <WeatherDayDetailsValue>
        {' '}
        {icon && (
          <img
            src={require(`/src/common/icon/${icon}.gif`)}
            alt={description}
            style={{ width: '50px' }}
          />
        )}{' '}
      </WeatherDayDetailsValue>
      <WeatherDayDetailsValue> {description} </WeatherDayDetailsValue>
      <WeatherDayDetailsValue> {wind.toFixed(0)} м/с </WeatherDayDetailsValue>
      <WeatherDayDetailsValue> {pressure} мм рт.ст. </WeatherDayDetailsValue>
      <WeatherDayDetailsValue> {humidity} % </WeatherDayDetailsValue>
    </WeatherDayDetails>
  );
};
