let prasanthBirthCertificate = {
    name: "Prasanth",
    dob: "11-06-2003"
}

function changeDob(birthCertificate, yearToIncrease){
    let dob = birthCertificate.dob;
    let dobObject = new Date(dob);
    dobObject.setFullYear(dobObject.getFullYear() + yearToIncrease);
    birthCertificate.dob = `${dobObject.getDate()}-${dobObject.getMonth()}-${dobObject.getFullYear()}`;

    return birthCertificate;
}

function changingOriginalValue(){
    let newBirthCerticate = changeDob(prasanthBirthCertificate, 3);
    console.log(newBirthCerticate);
    console.log(prasanthBirthCertificate);
}

function creatingCopyOfOriginalValue(){
    let copyOfBirthCertificate = {...prasanthBirthCertificate};
    let newBirthCertificate = changeDob(copyOfBirthCertificate, 4);
    console.log(newBirthCertificate);
    console.log(prasanthBirthCertificate);
}

// changingOriginalValue();
creatingCopyOfOriginalValue();