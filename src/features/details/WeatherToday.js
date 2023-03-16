import { useDetails } from '../../common/hooks/use-details';
import {
  Description,
  DetailWrapper,
  TitleDetail,
  TempWrapper,
  Temp,
  WindPressureHumidity,
  Sys,
} from './styles';
import { Preloader } from '../../components/Preloader';
import { useNavigate, useParams } from 'react-router-dom';


function WeatherToday({ name }) {
  const [weatherData, status, error] = useDetails(name);
  const nameTown = weatherData.name;
  const tempTown = weatherData.main?.temp;
  const icon = weatherData.weather && weatherData.weather[0].icon;
  const description = weatherData.weather && weatherData.weather[0].description;
  const visibility = weatherData.visibility;
  const wind = weatherData?.wind?.speed;
  const gust = weatherData?.wind?.gust;
  const humidity = weatherData.main?.humidity;
  const pressure = weatherData.main?.pressure;

  const minutes = (min) => (min < 10 ? '0' + min : min);

  //Время восхода
  const sunrise = weatherData.sys?.sunrise;
  const dateSunrise = new Date(sunrise * 1000);
  const hoursSunrise = dateSunrise.getHours();
  const minSunrise = minutes(dateSunrise?.getMinutes());

  //Время заката
  const sunset = weatherData.sys?.sunset;
  const dateSunset = new Date(sunset * 1000);
  const hoursSunset = dateSunset.getHours();
  const minSunset = minutes(dateSunset?.getMinutes());
  const navigate = useNavigate();

  if (error) {
    return <h2>{error}</h2>;
  }

  if (status === 'loading') {
    return <Preloader />;
  }

  return (
    <>
        <DetailWrapper>
          {nameTown && <TitleDetail>{nameTown} cейчас</TitleDetail>}
          <Description>
            {icon && <img src={require(`/src/common/icon/${icon}.gif`)} alt={description} />}
            <TempWrapper>
              <Temp>{tempTown && <>{tempTown.toFixed(0)}°C</>}</Temp>
              <p>{description}</p>
              <p>Видимость: {(visibility / 1000).toFixed(1)} км</p>
            </TempWrapper>
            <WindPressureHumidity>
              {wind && (
                <p>
                  Ветер: {wind.toFixed(0)} м/с
                  <br />
                  {gust && <>(порывы ветра до {gust.toFixed(0)} м/с)</>}
                </p>
              )}
              <p>Давление: {pressure} мм рт.ст.</p>
              <p>Влажность: {humidity}%</p>
            </WindPressureHumidity>
            <Sys>
              <p>
                Восход: {hoursSunrise}:{minSunrise}
              </p>
              <p>
                Закат: {hoursSunset}:{minSunset}
              </p>
            </Sys>
          </Description>
        </DetailWrapper>
       
  
    </>
  );
}

export { WeatherToday };
