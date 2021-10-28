////////////Senkron Kod(Synchronous Code)
//Senkronize programlarda, iki satır kodunuz varsa (L1 ardından L2), L1 yürütmeyi bitirene kadar L2 çalışmaya başlayamaz.
//Bunu, tren bileti almak için bekleyen bir insan kuyruğundaymış gibi hayal edebilirsiniz. Önünüzdeki tüm insanlar kendi biletlerini almayı bitirmeden tren bileti almaya başlayamazsınız. Benzer şekilde, arkanızdaki insanlar da sizinkini alana kadar biletlerini almaya başlayamaz.

////////////Asenkron Kod(Asynchronous Code)
//Eşzamansız programlarda, iki satır kodunuz olabilir (L1'in ardından L2); burada L1 bazı görevleri gelecekte çalıştırılmak üzere planlar, ancak L2 bu görev tamamlanmadan önce çalışır.
//Oturarak bir restoranda yemek yiyormuş gibi hayal edebilirsiniz. Diğer insanlar yemeklerini sipariş eder. Yemeklerinizi de sipariş verebilirsiniz. Sipariş vermeden önce yiyeceklerini almalarını ve yemeyi bitirmelerini beklemek zorunda değilsiniz.Benzer şekilde, diğer insanlar sipariş vermeden önce yemeğinizi almanızı ve yemeyi bitirmenizi beklemek zorunda değildir. Yemek biter bitmez herkes yemeğini alacak.
//example:
console.log("Hello.");
setTimeout(function() {
    console.log("Goodbye!");
}, 2000);
console.log("Hello again");

//"Hello." de
//"Hello again" de
//2 saniye boyunca bir şey yapma
//"Goodbye!" de

//Eşzamansızın(asynchronous) eşzamanlı(concurrent) veya çok iş parçacıklı(multi-threaded) ile aynı anlama gelmediğini unutmayın. JavaScript eşzamansız koda sahip olabilir, ancak genellikle tek iş parçacıklıdır.
//Bu, tüm bekleme ve pişirme işlemlerini yapan tek bir çalışanı olan bir restoran gibidir. Ancak bu çalışan yeterince hızlı çalışıyorsa ve görevler arasında yeterince verimli geçiş yapabiliyorsa, restoranın birden fazla çalışanı var gibi görünüyor.


///////////Asenkron Callbackler (Async callbacks)
//arka planda kod yürütmeye başlayacak bir function çağrılırken bağımsız variable olarak belirtilen functionlardır.
//Arka plan kodu çalışmayı bitirdiğinde, işin bittiğini veya ilgilendiğiniz bir şeyin olduğunu size bildirmek için callback function ı çağırır.
//Callback'leri kullanmak artık biraz eski moda, ancak yine de bir dizi eski ama hala yaygın olarak kullanılan API'lerde kullanımda olduklarını göreceksiniz.
//Bir async callback örneği, addEventListener() yönteminin ikinci parametresidir (yukarıdaki eylemde gördüğümüz gibi):
btn.addEventListener('click',()=>{
    alert('You clicked me!');

    let pElem = documnet.createElement('p');
    pElem.textContent ='This is a newly-added paragraph.';
    documnet.body.appendChild(pElem);
});
//İlk parametre, event listener ın türüdür ve ikinci parametre ise olay başlatıldığında çağrılan bir callback function dır.

///////////Promises (vaatler)
//Promises, modern Web API'lerinde kullanıldığını göreceğiniz yeni async kod stilidir.
//İyi bir örnek, temelde çok verimli olan fetch() API'dir. Sunucudan veri alma makalemizden hızlı bir örneğe bakalım:
fetch('products.json')
.then(function(response){
    return response.json();
})
.then(function(json){
    products=json;
    initialize();
})
.catch(function(err){
    console.log("Fetch problem: "+err.message);
});
//İki then() bloğu. Her ikisi de, önceki işlem başarılı olursa çalışacak bir callback function ı içerir ve her callback, önceki başarılı işlemin sonucunu girdi olarak alır, böylece ileri gidebilir ve ona başka bir şey yapabilirsiniz.
//Sondaki catch() bloğu, .then() bloklarından herhangi biri başarısız olursa çalışır - eşzamanlı try...catch bloklarına benzer bir şekilde, catch() içinde bir hata nesnesi kullanılabilir hale getirilir ve bu nesne aşağıdakileri yapmak için kullanılabilir: meydana gelen hatanın türünü bildir

///////////////Async/await
//async keyword ü bir function ın önüne yerleştirilebilir. Bir function dan önceki "async" kelimesi basit bir anlama gelir: bir işlev her zaman bir promise verir. Diğer değerler otomatik olarak çözümlenmiş bir promise e sarılır.
async function f() {
    return 1;
}

//Örneğin, bu function 1 sonucuyla çözümlenmiş bir promise verir; test edelim:
async function f() {
    return 1;
}
  
f().then(console.log); // 1

//await keyword ü, JavaScript'i bu promise yerine gelene kadar bekletir ve sonucunu döndürür.
// yalnızca async function lar içinde çalışır
let value = await promise;

//İşte 1 saniyede çözülen bir promise içeren bir örnek:
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "done!"
}
f();

