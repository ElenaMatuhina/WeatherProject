import { WeatherDayDetails, WeatherDayDetailsValue } from './styles';

export const WeatherNextDayDetails = ({ hours, temp }) => {
  return (
    <WeatherDayDetails>
      <WeatherDayDetailsValue> {hours}</WeatherDayDetailsValue>
      <WeatherDayDetailsValue> {temp} </WeatherDayDetailsValue>
    </WeatherDayDetails>
  );
};
