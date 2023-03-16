import { TitleDetail } from './styles';
import { WeatherNextDay } from './WeatherNextDay';
import { MONTHNAMES } from '../../common/const/monthNames';
import { getlistDate } from '../../common/utils/getListDate';
import { useLoadDetailForecast } from '../../common/hooks/use-load-detail-forecast';
import { useParams } from 'react-router-dom';

const WeatherListDays = ({ name }) => {
  const listDate = getlistDate(new Date());
  const [forecast, status, error, hiddenSelector] = useLoadDetailForecast(name);
  let forecastForRender = [];

  for (let item of forecast) {
    forecastForRender = [
      ...forecastForRender,
      {
        //перевод в милисекунды и Московское время
        date: new Date(item.dt * 1000 - 10800000).getDate(),
        month: new Date(item.dt * 1000 - 10800000).getMonth(),
        hours: new Date(item.dt * 1000 - 10800000).getHours(),
        temp: item.main.temp,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        wind: item.wind.speed,
        visibility: item.visibility,
      },
    ];
  }

  const newArr = forecastForRender.filter(
    (item) => item.hours === 0 || item.hours === 6 || item.hours === 12 || item.hours === 21
  );

 

  const time = [0, 6, 12, 21];
  const listDateValue = listDate.map((t) => newArr.filter((item) => item.date === t.getDate()));
  console.log(listDateValue);

  return (
    <>
      <TitleDetail>Прогноз на 5 дней</TitleDetail>
      {listDateValue.map((date) => {
        return <WeatherNextDay date={date} />;
      })}
    </>
  );
};

export { WeatherListDays };
