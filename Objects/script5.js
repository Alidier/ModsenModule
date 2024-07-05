function bubbleSort(array) {
     let len = array.length;
     for (let i = 0; i < len; i++) {
        for (let j=0; j < len - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
     }
     return array;
}

const someArray = [1,6,53,12,102];
console.log(bubbleSort(someArray));
