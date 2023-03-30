import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  width: 970px;
  min-height: 300px;
  box-shadow: 0 0 10px #0a9cd6;
  border-radius: 3px;
  position: relative;
  background-color: white;
`;

export const TodayWrapper = styled.div`
  margin: 0 auto;
  width: 970px;
  position: relative;
`;

export const DetailWrapper = styled.div`
  margin-bottom: 30px;
  width: 970px;
  min-height: 300px;
  box-shadow: 0 0 10px #0a9cd6;
  border-radius: 3px;
  position: relative;
  background-color: white;
`;

export const TitleDetail = styled.h3`
  position: relative;
  left: 5px;
  font-family: arial;
  width: 200px;
  padding: 7px;
`;

export const ButtonForecast = styled.button`
  position: relative;
  float: right;
  top: -40px;
  height: 40px;
  border: none;
  box-shadow: 0 0 10px #0a9cd6;
  border-radius: 3px;
  background: rgb(240, 252, 252);
  &:hover {
    cursor: pointer;
    background: #9dd1e8;
  }
`;

export const Description = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TempWrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid #0a9cd6;
  padding: 5px;
`;

export const Temp = styled.h1`
  font: 45px arial;
`;

export const WindPressureHumidity = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid #0a9cd6;
  padding: 5px;
`;

export const Sys = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid #0a9cd6;
  padding: 5px;
`;

export const ButtonNav = styled.button`
  margin: 5px;
  width: 100px;
  box-sizing: border-box;
  background: rgb(60, 156, 209);
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    cursor: pointer;
    background: rgb(0, 123, 167);
  }
`;
export const WrapperDayDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  left: 200px;
  width: 610px;
`;

export const WeatherDayDetails = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 1fr 80px 150px 80px;
  grid-template-rows: 75px;
  column-gap: 0.5em;
  width: 700px;
  line-height: 75px;
  border-bottom: 1px solid #dcdcdc;
`;

export const WeatherDayDetailsValue = styled.div`
  padding: 5px 2px;
`;
