// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 500_000_000);
//     return "task is completed.";
//   };
  
//   console.log("¯\\_(ツ)_/¯");
//   console.time("bir");
//   // setTimeout
//   console.log("hello1");
//   console.timeLog("bir");
//   slowTask();
//   setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
//   }, 1000);
//   console.log("hello2");
//   console.timeLog("bir");
//   console.log("hello3");
//   console.timeLog("bir");

////////////////dijital saat kodları
// const showTime = () => {
//     const timeLabel = document.querySelector("p");//p tagini seçiyoruz
//     const time = new Date();//boş bir date objesi oluşturuyor
  
  
//     timeLabel.innerHTML = time.toLocaleTimeString();//p nin içine local saati yazıyoruz
// };
// setInterval(() => {
//     showTime();
// }, 1000);

////////////////
// let counter = 0; //sayaç verdik
// const showTime = () => {
//     if(counter==10){
//         clearInterval(id); //10 kere counter ı çalıştırır ve counter 10 olduğunda durdurur
//     }
//     const timeLabel = document.querySelector("p"); //p tagini seçiyoruz
//     const time = new Date();//boş bir date objesi oluşturuyor
  
//     timeLabel.innerHTML = time.toLocaleTimeString();//p nin içine local saati yazıyoruz
//     counter++;
// };
// const id = setInterval(() => {
//     showTime();
// }, 1000);


/////////////////////// promise ==> tamamlanırsa(resolve) (.then())
///////////////////////         ==> tamamlanmazsa (reject) (.catch())

const myPromise = new Promise((resolve, reject) => {
  console.log("myPromise started");
  let condition = true;
  if (condition) {
    resolve("işlem tamam");
  }
  reject(Error("gerçekleşmedi"));
});
console.log("merhaba");
myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
console.log("gule gule");