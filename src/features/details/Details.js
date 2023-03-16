import { useNavigate, useParams } from 'react-router-dom';
import { WeatherToday } from './WeatherToday';
import { PageWrapper } from '../../wrapper';
import { ButtonNav, ButtonForecast, TodayWrapper } from './styles';
import { WeatherListDays } from './WeatherListDays';
import { useHidden } from '../../common/hooks/use-hidden';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [isHidden, handleHidden] = useHidden();




  if (!isHidden) {
    return (
      <PageWrapper>
        <ButtonNav onClick={() => navigate(-1)}>Назад</ButtonNav>
        <ButtonNav onClick={() => navigate('/')}>На главную</ButtonNav>
        <TodayWrapper>
          <ButtonForecast onClick={handleHidden}>Прогноз на 5 дней</ButtonForecast>
          <WeatherToday name={name} />
        </TodayWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ButtonNav onClick={() => navigate(-1)}>Назад</ButtonNav>
      <ButtonNav onClick={() => navigate('/')}>На главную</ButtonNav>
      <TodayWrapper>
        <ButtonForecast onClick={handleHidden}>Прогноз на 5 дней</ButtonForecast>
        <WeatherToday name={name} />
      </TodayWrapper>
      <WeatherListDays name={name} />
    </PageWrapper>
  );
};
