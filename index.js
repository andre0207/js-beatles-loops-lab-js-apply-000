// add solution here

const theBeatlesPlay = (musicians, instruments) => {
  let newArr = [];
  for (let i = 0; i < musicians.length; i++) {
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArr;
};

const johnLennonFacts = (facts) => {
  let i = 0
  let arrFacts = [];
  while (i < facts.length) {
    arrFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  return arrFacts
}

const iLoveTheBeatles = () => {
  
  do {
  cupsAdded++
} while ( cupsOfSugarNeeded > cupsAdded);

console.log(cupsAdded)
}