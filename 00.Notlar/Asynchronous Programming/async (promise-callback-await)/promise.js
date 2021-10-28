let liste = document.querySelector("#liste");
const obj = [
    {title : "title1"},
    {title : "title2"}
];

function show() {
    let listeItems = "";
    obj.forEach(item=>{
        listeItems += `<li>${item.title}</li>`
    });
    liste.innerHTML = listeItems;
}

function call(todo) {
    return new Promise((resolve, reject) => {
      obj.push(todo);  
      const e = false;
      if (!e) {
        resolve()
        ()
      }else {
         reject();
      }
    })   
}

call(
    {title:"title4"}
).then(response => {
    show();
}).catch(e => {
    console.log("hata var..")
})

//Sayfamızda bir liste oluşturduk, obj adında bir obje oluşturduk sonrasında show adında bir fonksiyon ile obj deki title isimli elemanları listeye yazdırdırdık. Call fonksiyonunda promise kullanarak if yapısı ile todo yu obj mize ekledik sonrasında  