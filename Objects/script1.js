const DayTime = (a) => {
    const oddNumbers = a.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return a.map(num => num % 2 !== 0 ? oddNumbers.shift() : num); 
  } 
  
  const SomeArray = [1, 5,4, 3,6, 7, 15, -10, -12, 13, 11];
  console.log(DayTime(SomeArray));
  
  