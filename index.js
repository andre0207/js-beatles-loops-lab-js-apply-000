// add solution here

const theBeatlesPlay = (musicians, instruments) => {
  let newArr = [];
  for (let i = 0; i < musicians.length; i++) {
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArr;
};

const johnLennonFacts = (array) => {
  let i = 0
  arrFacts = [];
  while (i < array.length) {
    arrFacts.push(`${array[i]}!!!`)
    i++
  }
  
  return arrFacts
}