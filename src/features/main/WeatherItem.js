import { ICON_URL } from '../../config';
import {
  WeatherTableWrapper,
  WeatherTable,
  WeatherItemTr,
  ItemTown,
  ItemTemp,
  ItemIcon,
} from './style';

function WeatherItem({ name, temp, icon }) {
  return (
    <WeatherTableWrapper>
      <WeatherTable>
        <WeatherItemTr>
          <ItemTown>{name}</ItemTown>
          {temp && <ItemTemp>{temp.toFixed(0)}°</ItemTemp>}
          <ItemIcon>
            <img src={ICON_URL(icon)} className="temp-image" />
          </ItemIcon>
        </WeatherItemTr>
      </WeatherTable>
    </WeatherTableWrapper>
  );
}

export { WeatherItem };

