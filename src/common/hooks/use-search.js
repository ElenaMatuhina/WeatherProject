import { useDispatch, useSelector } from 'react-redux';
import { searchTownSelector } from '../../features/search/search-selectors';
import { setSearch } from '../../features/search/search-slice';

//название с маленькой буквы

export const UseSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchTownSelector);

  const handlesearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handlesearch];
};
