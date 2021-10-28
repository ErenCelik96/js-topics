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

function call(object, callback) {
    obj.push(object);
    callback();
}

let ekle = {title:"title4"};

call(ekle, show);

//Sayfamızda bir liste oluşturduk, obj adında bir obje oluşturduk sonrasında show adında bir fonksiyon ile obj deki title isimli elemanları listeye yazdırdırdık. Sonrasında call ile ekle elemanını önce obj ye ekledik sonra callback kullanarak show fonksiyonunu bir parametre olarak çağırıp eklemeden sonra çalıştırdık.
