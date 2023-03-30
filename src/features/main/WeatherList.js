import { WeatherItem } from './WeatherItem';
import { useLoadFirstPage } from '../../common/hooks/use-load-first-page';
import { townList } from '../../common/const/townLists';
import { WeatherListWrapper, WeatherTable } from './style';

function WeatherList() {
  const towns = [];
  townList.map((item) => towns.push(item.id)).join(',');

  const tempTown = useLoadFirstPage(towns);

  console.log(tempTown);

  if (tempTown.length) {
    //добавить прелоудер!!
    for (let i = 0; i < tempTown.length; i++) {
      townList[i].temp = tempTown[i].main.temp;
      townList[i].icon = tempTown[i].weather[0].icon;
    }
  }

  return (
    <WeatherListWrapper>
      <h3 >Погода в основных городах России:</h3>
      <WeatherTable>
        {townList.map((town) => (
          <WeatherItem key={town.id} name={town.name} temp={town.temp} icon={town.icon} />
        ))}
      </WeatherTable>
    </WeatherListWrapper>
  );
}

export { WeatherList };

// {error && <h2>Can't fetch data</h2>}
// {status === 'loading' && <h2>Loading...</h2>}
// {status === 'recieved' && {townsList.map((town) => (
//         <WeatherItem key={town.id} name={town.name} temp={town.temp} />
//         ))}
