import { useDispatch, useSelector } from 'react-redux';
import { isHiddenSelector } from '../../features/details/detail-selectors';
import { setIsHidden } from '../../features/details/detail-slice';

export const useHidden = () => {
  const dispatch = useDispatch();
  const isHidden = useSelector(isHiddenSelector);

  const handleHidden = () => {
    dispatch(setIsHidden(isHidden));
  };

  return [isHidden, handleHidden];
};
