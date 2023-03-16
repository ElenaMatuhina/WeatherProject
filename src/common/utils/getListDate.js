
//получение 5 ближайших дат
export const getlistDate = (day) => {
  let arr = [];
  arr[0]= day;
  for (let i = 1; i < 5; i++) {
    arr[i] = new Date(arr[i - 1].getTime() + 24 * 60 * 60 * 1000);
  }
  return arr;
};