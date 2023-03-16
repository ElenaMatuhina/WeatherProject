import { useDispatch, useSelector } from 'react-redux';
import { loadingWeather } from '../../features/main/weather-slice';
import { weatherTownSelector } from '../../features/main/weather-selecor';
import { useEffect } from 'react';


//название с маленькой буквы


export const useLoadFirstPage = (towns) => {
  const dispatch = useDispatch();
  const tempTown = useSelector(weatherTownSelector);

  useEffect(() => {
    dispatch(loadingWeather(towns));
  }, [dispatch]);

  return tempTown;
};
