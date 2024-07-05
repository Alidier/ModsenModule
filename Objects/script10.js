function printNumbersWithDelay(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(number);
            resolve(number);
        }, 1000)
    });
}

function printSequence(start) {
    printNumbersWithDelay(start)
    .then((number) => {
        if(number < 10) {
            return printSequence(number+1);
        }
    });
    
}
printSequence(1);