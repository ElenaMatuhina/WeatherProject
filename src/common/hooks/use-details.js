import { useDispatch, useSelector } from 'react-redux';
import {
  weatherDetailSelector,
  searchInfoSelector,
} from '../../features/search/search-selectors';
import { searchWeather, clearSearch } from '../../features/search/search-slice';
import { useEffect } from 'react';

//название с маленькой буквы

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const weatherData = useSelector(weatherDetailSelector);
  const {status, error} = useSelector(searchInfoSelector);
  

  useEffect(() => {
    dispatch(searchWeather(name));
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  return [weatherData, status, error];
};
