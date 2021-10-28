const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each

//Çözüm
arrDeposits = movements.filter((element) => (element>0))
console.log(arrDeposits);
arrWithdrows = movements.filter((element) => (element<0))
console.log(arrWithdrows);
for (let index = 0; index < arrDeposits.length; index++) {
    const element = arrDeposits[index];
    console.log(element)
}
for (let index = 0; index < arrWithdrows.length; index++) {
    const element = arrWithdrows[index];
    console.log(element)
}





/******** */

// map initials
const str = 'Clarusway Online Career IT Training School';

const arrayStr=str.split(" ")
console.log(arrayStr);
const firstel=arrayStr.map(element => element[0])
const joinStr=firstel.join("")
console.log(joinStr)






/***** */
// map

const str1 = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const arrayOutput=[]
for (let index = 0; index < str1.length; index++) {
    const element = str1[index];
    if (element===element.toUpperCase()) {
        arrayOutput.push(element.toLowerCase())
    }
    if (element===element.toLowerCase()) {
        arrayOutput.push(element.toUpperCase())
    }
}
console.log(arrayOutput.join(""))















// filter words longer than 6 letters
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'Clarusway',
  'Future',
];
const filteredWords=words.filter(element=>element.length>6)
console.log(filteredWords)