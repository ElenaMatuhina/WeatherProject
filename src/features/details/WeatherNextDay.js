import { Container, TitleDetail, WrapperDayDetails } from './styles';
import { WeatherNextDayDetails } from './WeatherNextDayDetails';
import { MONTHNAMES } from '../../common/const/monthNames';

export const WeatherNextDay = ({ date }) => {
  const day = date[0]?.date;
  const month = MONTHNAMES[date[0]?.month];

  return (
    <Container>
      <TitleDetail>
        {day} {month}
      </TitleDetail>
      <WrapperDayDetails>
        {date.map((item) => (
          <WeatherNextDayDetails {...item} />
        ))}
      </WrapperDayDetails>
    </Container>
  );
};
