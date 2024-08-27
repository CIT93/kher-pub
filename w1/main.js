console.log('Hello from inside the main.js file')

//let myVar;
const myVar = null;
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log('myVarType ${myVarType}');

if(myVarType === "string") {
    console.log('this line will not run')
} else {
    console.log('this line will run')
} 

function runNow () {
    if(myVarType === "number") {
        console.log('will 11 this one run?')
    } else {
        console.log('will 13 this one run?')
}}

runNow();
runNow();

// myVar can be a number also

