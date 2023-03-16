import { useSelector, useDispatch } from 'react-redux';
import { clearSearch } from '../../features/search/search-slice';
import { searchTownSelector } from '../../features/search/search-selectors';

export const useClear = () => {
  const dispatch = useDispatch();

  const clearSearch = () => {
    dispatch(clearSearch());
  };

  return [clearSearch];
};
