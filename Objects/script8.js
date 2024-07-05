function callBackFunction(inputData, callback) {
    setTimeout(() => {
        if (inputData) {
            callback(null,"success");
        }
        else {
            callback("Error", null);
        }
    }, 1000); 
}

function promiseFunction(inputData) {
    return new Promise((resolve,reject) => {
        callBackFunction(inputData, (error,result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

promiseFunction(true)
 .then(result => {
    console.log(result);
 })
 .catch(error => {
    console.log(error);
 })