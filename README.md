Сайт учебный.
За основу был взят сайт https://pogoda7.ru/


//тема-светлая/темная


//styled components
//переписать на NEXT.
//оформление - стайл компонентс.
//перевести на TS.


01d - ясно https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_1_1.gif
02d - небольшая облачность https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_1_2.gif
03d - облачно https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_1_4.gif
04d - пасмурно https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_1_5.gif
09d - дождь со снегом https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_5_4.gif
10d - дождь https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_2_4.gif
11d - гроза https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_6_3.gif
13d - небольшой снегопад https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_4_4.gif
50d - туман https://pogoda7.ru/templates/pogoda/images/cloud/big_sun_1_5.gif


//00- ночь
//06 -утр
//12 - день
//18 - вечер



function WeatherItem({ name, temp, icon }) {
  return (
    <WeatherTableWrapper>
      <WeatherTable>
        <WeatherItemTr>
          <ItemTown>{name}</ItemTown>
          {temp && <ItemTemp>{temp.toFixed(0)}°</ItemTemp>}
          <ItemIcon>
            <img src={ICON_URL(icon)} className="temp-image" />
          </ItemIcon>
        </WeatherItemTr>
      </WeatherTable>
    </WeatherTableWrapper>
  );
}