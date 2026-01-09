//Javascript supports functional programming and functional programming is mostly used in React.

function add(a,b){
    let sum = a + b;
    return sum;
}

function sub(a,b){
    let difference = a - b;
    return difference;
}

const log = (message) => {
    console.log(message);
}

function checkingHowFunctionWorksInArr(){
    let arr = [11,add,12];
    console.log(arr[1](1,2));
}


function functionsAsArguments(){
    function calculator(operation,a,b){
        let result = operation(a,b);
        console.log(result);
    }

    calculator(add,1,2);
    calculator(sub,5,4);
}

function functionAsReturnValues(){
    const createScream = (logger) => {
        return function(message){
            logger(message.toUpperCase() + "!!!");
        }
    }

    const scream = createScream(message => console.log(message));
    scream("hello");
    scream("Dei una thanda");
}

function usingMultipleArrowFunctions(){
    function convertToUpperCase(message){
        return message.toUpperCase();
    }

    const convertCase = specificConvertion => {
        return (message) => log(specificConvertion(message))
    }

    let upperCaseFunction = convertCase(convertToUpperCase);
    upperCaseFunction("Hello moni.");
}

// checkingHowFunctionWorksInArr();
// functionsAsArguments();
// functionAsReturnValues();
usingMultipleArrowFunctions();
