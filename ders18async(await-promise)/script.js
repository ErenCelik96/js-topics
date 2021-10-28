//counter yapmak 

// setInterval ile
// function countSeconds(limit) {
//     let current = 0;
//     const intId = setInterval(() => {
//       if (current == limit) {
//         clearInterval(intId);
//         console.log('counter finished.');
//         return;
//       }
//       current++;
//       console.log(`${current} seconds passed.`);
//     }, 1000);
// }
// countSeconds(4);
  
//   // setTimeout ile
//   let current = 0;
//   function countSeconds2(limit) {
//     // recursive
//     if (current > limit) {
//       console.log('counter finished.');
//     } else {
//       if (current != 0) {
//         console.log(`${current} seconds passed.`);
//       }
//       current++;
//       setTimeout(countSeconds2, 1000, limit);
//     }
// }
// countSeconds2(3);

/////////////////////////////////////////////////////////////

// API = programlama kullanıcı arayüzü

//////////////hava durumu api si ve veri çekme yöntemi
// let city = "antalya"

// async function data() {
// const data = await fetch(`https://goweather.herokuapp.com/weather/${city}`);//api ye bağlandı
// const newData = await data.json();//apiyi json a çevirdi
// console.log(data)
// console.log(newData)
// console.log(newData.temperature) //json içindeki temp e girdi (sıcaklık)
// console.log(newData.wind) //rüzgar hızı
// }

// data()

/////////////////////////////////////////////////////

