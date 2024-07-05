function objectPropertyError(obj) {
    try {
        return obj.property;
    } catch(error) {
        if (error instanceof TypeError) {
            return(" ERROR : PROPERTY IS UNDEFINED")
        }
        else {
            throw error;
        }
    }

}

let undefinedObject = undefined;
console.log(accessObjectProperty(undefinedObject));