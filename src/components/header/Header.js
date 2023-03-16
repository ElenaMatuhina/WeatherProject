import { Search } from '../../features/search/Search';
import { HeaderWrapper, HeaderImg, HeaderText} from './style';

function Header() {
  return (
    <HeaderWrapper >
      <HeaderImg></HeaderImg>
      <HeaderText>Погода в городах России и в мире</HeaderText>
      <Search />
    </HeaderWrapper>
  );
}

export { Header };
