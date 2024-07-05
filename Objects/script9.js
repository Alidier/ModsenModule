async function fetchUsetData(userID) {
    try {
        const response = await fetch(`/users/${userID}`);
        const userData = await response.json();
        return userData;

    }
    catch {
        console.error("Error!", error);
        return null;
    }
}

async function getUserData(userID) {
    try {
        const userData = await fetchUsetData(userID);
        if (userData) {
            console.log(userData);
        } else {
            console.log("Failed");

        }
    }
    catch(error) {
           console.error("Error!", error);
    } 
}

getUserData(1,2,3);