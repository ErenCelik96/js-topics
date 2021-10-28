function add (n1,n2) {
    return n1+n2;
}

const WORKING_HOURS_WEEK = 40; //45

let counter = 0;

function inc(amount=1) {
    counter+=amount;
    return counter;
}

function dec(amount=1) {
    counter--;
    return counter;
}

let localCounter = 5;

// const moduleName = "this is module 1";
export default moduleName; //module ü export ettik

// export default function greet(name) {
//     console.log(`hello ${name}`);
// }

export {
    WORKING_HOURS_WEEK as WHW,//WORKING_HOUR_WEEK i WHW olarak export ettik
    add as sum,//add i sum olarak export ettik
    counter, 
    dec,
    inc
} 

console.log('module1 is loaded!');