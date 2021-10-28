//OOP: örnekleyerek açıklarsak, gerçek hayatta gördüğümüz birçok nesnenin bilgisayar ortamına aktarılma şeklidir. Yani bir nesnenin rengi, durumu, ismi, üretim yılı gibi birçok özelliklerin bilgisayar ortamında gösterilmesi buna örnek olarak verilebilir.
/*Soyutlama (Abstraction)
Kapsülleme (Encapsulation): Davranış ve özellikler soyutlanır ve saklanır. Kapsülleme ile hangi özellik ve davranışın dışarıdan kullanılacağını belirleyebiliriz. Örneğin: Kişinin bizi ilgilendirmeyen kısımlarını private ederek yani saklayarak gizleyebiliriz. Bu olaya kapsülleme adı verilir. metod ve fonksiyonların bir arada saklanması. Public: Herkesin kullanabildiği özellik ve davranışlara verilen isimdir. Private: Sadece kendi sınıfında kullanılan özellik ve davranışlara verilen isimdir.
Miras Alma (Inheritance)
Çok Biçimlilik (Polymorphism): Alt sınıflar üst sınıfın gösterdiği davranışları göstermek zorunda değildir. Alt sınıfların farklı davranışları göstermesine Çok biçimlilik denilmektedir.
Örneğin Gemi ve araba sınıflarını ele aldığımızda bunların hareket tipleri bulunmaktadır. Gemi su üzerinden giderken araba karada hareket etmektedir. Kısaca farklı nesnelerin (araba ve gemi gibi) aynı olaya (hareket tipine) farklı şekilde cevap vermesidir. (Farklı nesnelerin (kedi ve  balık gibi), aynı olaya (beslenme), farklı şekilde icra etmesi vermesidir.)*/
//JS de 

let myName = new String('Matthew');
console.log('myName :>> ', myName);
console.log('myName.length :>> ', myName.length);
console.log('typeof myName :>> ', typeof myName);
const a = function() {
  return 'hello';
}
console.log('typeof a ==>', typeof a);
console.log('a ==> ', a.prototype);
const while = 42;
const student = {
  x: 5,
  y: 6,
  ad: 'Matthew',
  'Okul Adı': 'Saint Joseph',
}
student.dob = 2014;
student['Baba Adi'] = 'Daniel'
delete student.ad;
console.log('student :>> ', student);
console.log('okul adı :>> ', student['Okul Adı']);
console.log('adı :>> ', student.ad);
