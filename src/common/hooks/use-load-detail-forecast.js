import { loadingForecast } from '../../features/details/detail-slice';
import { weatherForecastSelector, forecastInfoSelector, isHiddenSelector } from '../../features/details/detail-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoadDetailForecast = (nameTown) => {
  const dispatch = useDispatch();
  const forecast = useSelector(weatherForecastSelector);
  const { status, error } = useSelector(forecastInfoSelector);
  const hiddenSelector = useSelector(isHiddenSelector);

  useEffect(() => {
    dispatch(loadingForecast(nameTown));
  }, [dispatch, nameTown]);

  return [forecast, status, error, hiddenSelector];
};
