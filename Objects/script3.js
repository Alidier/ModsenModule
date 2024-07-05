function lastCharacter(str) {
    if(str.length === 0) {
        console.log("Empty string.")
    }
    else {
        console.log("Last symbol:" + str.charAt(str.length-1));
    }

}

lastCharacter("SomeString");
lastCharacter("");