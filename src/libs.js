export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

export const sleep = msec => {
  return new Promise(resolve => setTimeout(resolve, msec));
}
