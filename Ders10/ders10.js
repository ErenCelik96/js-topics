// DOM (DOCUMENT OBJECT MODEL)

//DOCUMENT > HTML > HEAD-BODY > TİTLE - P - H1 > TEXT

//document = sayfanın tamamı

//document. ile döküman içerisinde alacağımız bir bilgiyi isteyebiliriz


//document.getElementBy..

// const myDom = document.getElementById("dom"); //html deki dom id isimli öğeyi çağırıp atadık
// console.log(myDom); //<h1 id="dom">DOM</h1>

// const instructor = document.getElementById("info"); //divi çağırdık ve div altındaki herşeye ulaştık ve atadık
// console.log(instructor);

// const instructor = document.getElementById("instructor"); //id si instructor olan h1 etiketini çağırıp atadık
// console.log(instructor);


//className..

// const withClassName = document.getElementsByClassName("class-info"); //aynı class adına sahip tüm elementler i alır
// console.log(withClassName);


//tagName..

// const cw = document.getElementsByTagName("h3"); //tag adı girerek o tag adındaki tüm öğeleri çağırabiliriz.
// console.log(cw);


//document.querySelector...

// const inst = document.querySelector(".class-info");//class ararken başına . koymamız lazım ki class aradığını anlasın // querySelectorAll yazarsak tüm gördüklerini döndürür, yazmazsak sadece ilk gördüğünü
// console.log(inst);

// console.log(document.querySelector("#instructor")); //id ararken de başına # işareti koymamız gerekir

// const liste = document.querySelectorAll("h1"); //tüm h1 leri çağırdık
// console.log(liste);

// console.log(document.querySelectorAll("#header h1"));

////////////////////////////////////////////////////////

//Manipulation

const brands = document.querySelector("#brands"); //listeyi çağırdık
// console.log(brands);

// brands.innerHTML += "<li>Firma1</li> <li> Firma2 </li> <h1>Başlık</h1>" //birden fazla tag ekeleyebiliriz
// console.log(brands);

// brands.innerHTML = "<li>NioayaTech</li>" //ekledik ama diğerleri silindi eklenen kaldı listede
// console.log(brands);
// brands.innerHTML += "<li>NioayaTech</li>" // += ile mevcut listenin sonuna ekledik
// console.log(brands);

// const classBrands = document.querySelectorAll('.brand');
// console.log(classBrands[3].innerText); //brand class larından 3. elemanı çağırıp içerisindeki yazdırdık
//classBrands[3].innerHTML = "Yeni firma" //3.elemanın içerisine yeni text atadık

// const copyRight = document.querySelector("#copy-right"); //footer içindekileri çağırıp atadık
// copyRight.innerText = "&copy; 2021 clarusway.com"; //innerText dediğimiz için sembolü & işareti olarak yazdı, text olarak algıladı. innetHTML kullansaydık sembolü olduğu gibi yazardı
// console.log(copyRight);

// const copyRight = document.querySelector("#copy-right"); 
// copyRight.innerHTML = `<h1>&copy</h1>`; //içerisine h1 tagi ekledik
// console.log(copyRight);


//aşağıdaki liste elemanlarını lessons ul una ekleyin
// const lessonList = [
//     { id: 1, name: 'HTML' },
//     { id: 1, name: 'CSS' },
//     { id: 1, name: 'JS' },
//     { id: 1, name: 'REACT'}
//   ];

// let liste = document.querySelector('#lessons');//html deki lessons id li ul u tanıttık
// for (let i = 0; i < lessonList.length; i++) {
//   liste.innerHTML += `<li>${lessonList[i].name}</br></li>`;
// } //.name ile lessonList içerisindeki elemanların name lerini yazdırdık

// for each ile yapımı
// const lessonElm = document.getElementById('lessons');
// lessonList.forEach((element) => { //element: for each yapısına özel keyword
//   lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;
// });

/////////////////////////////////////////////////////////////
// setAttribute getAttribute

// const mdn = document.querySelector("#mdn");
// const mdnHrefAttr = mdn.getAttribute("href");//mdn href attribute unaulaştık
// mdn.setAttribute("href", "https://www.w3schools.com/");// href değerine farklı link verdik ve hedefi değiştirdik
// mdn.innerHTML = "W3Schools" //a taginin adını değiştirdi mdn yi w3schools yaptık


//frontları yeşil backend lere kırmızı ile yazdır
// const insElm = document.querySelectorAll('#instructors li');
// // console.log(insElm);
// insElm.forEach((item) => {
//   console.log(item.innerText.includes('FrontEnd'));
//   if (item.innerText.includes('FrontEnd')) {
//     item.setAttribute('class', 'front-end');
//   } else if (item.innerText.includes('BackEnd')) {
//     item.setAttribute('class', 'back-end');
//   }
// });


// add style manually with js style //manuel olara js üzerinden style vermek

// const jsPrg = document.querySelector('#js-prg');
// jsPrg.style.color= "green"; //renk verdik
// jsPrg.style.backgroundColor ="red"; //background renk verdik
// jsPrg.style.fontSize ="1rem"; //font size verdik
// jsPrg.style.margin = "10px"; //margin değeri verdik


//attribute eklemek ve silmek

// const cwBanner = document.getElementById('cw-banner');
// // console.log(cwBanner);
// console.log(cwBanner.classList); //classlist bir method
// cwBanner.classList.add('imp'); //attribute ekledik
// cwBanner.classList.remove('banner'); //attribute sildik


//tag ve değer yaratıp eklemek eklemek 

// const cwQuote = document.querySelector('#quote-div');//div i çağırdık
// cwElm = document.createElement("h2"); //çağırılan div içerisine createElement ile h2 tagi ekledik
// console.log(cwElm);
// cwElm.innerText = "clarusway"; //içerisine text verdik
// cwQuote.appendChild(cwElm);//appendChild ile çağırılan div içerisine ekledik

//en hızlı çalışan getElemtnById+cache, sonra querySelector, sonra getElementById
