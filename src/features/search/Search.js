import { UseSearch } from '../../common/hooks/use-search';
import { useNavigate } from 'react-router-dom';
import { UseDetails } from '../../common/hooks/use-details';
import { useParams } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [search, handlesearch] = UseSearch();

  const changeNavName = (search) => {
    navigate(`/town/${search}`);
  };

  return (
    <div className="search">
      <input
        className="input-search"
        placeholder="Поиск города"
        type="text"
        autoComplete="off"
        value={search}
        onChange={handlesearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            changeNavName(search);
          }
        }}
      />
      <button className="btn-search" onClick={() => changeNavName(search)}>
        Поиск
      </button>
    </div>
  );
}

export { Search };
