import { ICON_URL } from '../../config';
import { WeatherItemTemp, WeatherItemContainer, WeatherItemName } from './style';
import { useNavigate } from 'react-router-dom';

function WeatherItem({ name, temp, icon }) {
  const navigate = useNavigate();
  const changeNavName = (search) => {
    navigate(`/town/${search}`);
  };

  return (
    <>
      <WeatherItemContainer onClick={() => changeNavName(name)}>
        <WeatherItemName>{name}</WeatherItemName>
      </WeatherItemContainer>
      {temp && <WeatherItemTemp WeatherItemTemp>{temp.toFixed(0)}°</WeatherItemTemp>}
      <WeatherItemContainer>
        <img src={ICON_URL(icon)} />
      </WeatherItemContainer>
    </>
  );
}

export { WeatherItem };
