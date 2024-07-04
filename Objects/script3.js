function latestClock(a, b, c, d) {
    const digits = [a, b, c, d];
    let maxTime = -1;
   
     for (let i = 0; i < digits.length; i++) {
       for (let j = 0; j < digits.length; j++) {
         for (let k = 0; k < digits.length; k++) {
           if (i === j || j === k || i === k) {
             continue;
           }
   
           const hours = digits[i] * 10 + digits[j];
           const minutes = digits[k] * 10 + digits[6 - i - j - k];
   
           if (hours < 24 && minutes < 60) {
             const timeInMinutes = hours * 60 + minutes;
             maxTime = Math.max(maxTime, timeInMinutes);
           }
         }
       }
     }
   
     if (maxTime === -1) {
       return "Not possible to form a valid time";
     }
   
     const maxHours = Math.floor(maxTime / 60);
     const maxMinutes = maxTime % 60;
   
     return `${maxHours.toString().padStart(2, '0')}:${maxMinutes.toString().padStart(2, '0')}`;
   }
   