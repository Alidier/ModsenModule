function amountOfPages(summary){
  let totalDigits = 0;
  let n=0;

  while (totalDigits < summary) {
    totalDigits += n.toString().length;
    n++;
  }
  return n;
}

let summary = 25;
console.log(amountOfPages(summary));