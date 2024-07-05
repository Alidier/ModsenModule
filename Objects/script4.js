function halfSumArray(array) {
       let halfindex = Math.ceil(array.length / 2) ;
       let firsthalf = array.slice(0,halfindex);
      
       let sum = firsthalf.reduce((a,b) => a + b, 0);
       
       return sum;
}

let number = [1,2,3,5,6];

console.log(halfSumArray(number));