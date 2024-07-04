var countBits = function(n) {
     let binary = (n>>>0).toString(2);
     let count = 0;
     for (let i=0; i < binary.length; i++) {
        if (binary[i] === '1') {
          count++;
        }
     }
     return count;
  };


let Number = 1234;
console.log(countBits(Number));
