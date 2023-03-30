import styled from 'styled-components';
import { ICON_URL } from '../../config';

export const WeatherListWrapper = styled.div`
  width: 997px;
  padding: 1.5rem;
  background: rgb(240, 252, 252);
`;

export const WeatherTable = styled.div`
  margin-top: 20px;
  width: 500px;
  text-align: bottom;
  display: grid;
  grid-template-columns: 350px 50px 100px;
  grid-template-rows: 50px;
`;

export const WeatherItemContainer = styled.div`
  line-height: 50px;
`;

export const WeatherItemName = styled.div`
  cursor: pointer;
  &:hover {
    color: #0069c2;
  }
`;

export const WeatherItemTemp = styled(WeatherItemContainer)`
  margin-left: auto;
  margin-right: 30px;
`;

// export const WeatherItemIcon = styled.div`
//   background-image: url(${(props) => ICON_URL(props.icon)});
// `;
