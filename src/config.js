const API_KEY = process.env.REACT_APP_API_KEY;

export const FIRST_PAGE_URL = (idTowns) =>
  `http://api.openweathermap.org/data/2.5/group?id=${idTowns}&units=metric&APPID=${API_KEY}`;

// http://api.openweathermap.org/data/2.5/group?id=498817,1496747&units=metric&APPID=445d67e6c0bc8f6c2a86699238cd9b4a

export const SEARCH_URL = (nameTown) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${nameTown}&lang=ru&units=metric&APPID=${API_KEY}`;

export const ICON_URL = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

export const FORECAST = (name) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${API_KEY}`;

// https://api.openweathermap.org/data/2.5/forecast?q=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&appid=445d67e6c0bc8f6c2a86699238cd9b4a


