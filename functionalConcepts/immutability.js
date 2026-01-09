let prasanthBirthCertificate = {
    name: "Prasanth",
    dob: "11-06-2003"
}

function changingOriginalValue(){
    function changeDob(birthCertificate, yearToIncrease){
        let dob = birthCertificate.dob;
        let dobObject = new Date(dob);
        dobObject.setFullYear(dobObject.getFullYear() + yearToIncrease);
        birthCertificate.dob = `${dobObject.getDate()}-${dobObject.getMonth()}-${dobObject.getFullYear()}`;

        return birthCertificate;
    }

    let newBirthCerticate = changeDob(prasanthBirthCertificate, 3);
    console.log(newBirthCerticate);
    console.log(prasanthBirthCertificate);
}

function creatingCopyOfOriginalValue(){
    let changeDob = (birthCertificate, yearToIncrease) =>{
        
    }
}

changingOriginalValue();