/////////////////////JavaScript Objects

//Object ler de değişkenlerdir. Diğer değişkenlerden farklı olarak, objectler birçok değer içerebilir
//verileri düzenli bir şekilde depolamak için kullanışlıdır.
//özelliklerden oluşmaktadır. Bir özellik bir "name: value" çiftidir.
/* Example:
var dog = {
  name: "Rocky",
  legs: 4,
  tail: 1,
  qualities: ["loyalty","companionship"]
  };
*/

////////////Object Özelliklerine Erişim

/* Nesne özelliklerine erişmenin iki yolu vardır;
1- objectName.propertyName
2- objectName['propertyName']
*/

/* Example;
var dog = {
  name: "Rocky",
  legs: 4,
  tail: 1,
  qualities: ["loyalty","companionship"]
  };

var myDog=dog.name;
var yourDog=dog["name"] ;
*/

///////////Object methods

//Object lerin function ları olabilir.
//Bir object method, özellik olarak depolanan bir function dur.
//Bir object method a erişmek için aşağıdaki syntax ı kullanabiliriz.
//objectName.methodName()

/* Example;
var dog = {
  name: "Rocky",
  legs: 4,
  tail: 1,
  qualities: ["loyalty","companionship"],
  bark : function() {
    console.log("woof");  },
  result : function() {
    return this.name+ " has " + this.legs + " legs.";
  }
  };

dog.bark();
console.log(dog.result());
*/

//////////Object Constructor (object oluşturucu)
///////this

//Tek bir türden çok sayıda nesneye ihtiyacımız varsa, bir nesne türü(object type) belirlememiz gerekir.
//Bir object type oluşturmak için bir object constructor function kullanabiliriz.

/* Example 
function dog(name, legs, tail) {
        this.name = name;
        this.legs = legs;
        this.tail = tail;
      }
*/
////P.S: this, geçerli nesneye başvuran bir anahtar kelimedir. Bu bir değişken değildir. Ve bunun değerini değiştiremeyiz.

/////////////new 
//Bir object constructor olduktan sonra, new anahtar sözcüğüyle aynı türden yeni object ler oluşturabiliriz.

/* Example
function dog(name, legs, tail) {
        this.name = name;
        this.legs = legs;
        this.tail = tail;
}

var dog1 = new dog("Riley", 4, 1);
var dog2 = new dog("Ginger", 4, 1);

document.write(dog1.name); // Output: "Riley"
document.write(dog2.tail); // Output: 1
*/

////////////////////////Classes 
//Class, bir function türüdür, ancak onu başlatmak için function anahtar kelimesini kullanmak yerine, class keyword sözcüğünü kullanırız ve özellikleri bir constructor() method una atarız.
//Class lar "özel fucntion lardır" ve class syntax ının, tıpkı function ifadelerini ve function bildirimlerini tanımlayabileceğiniz gibi iki componenti vardır: class expression(ifade) ları ve class declaration(bildirim) ları.
//Bir classı tanımlamanın standart yolu, bir class bildirimi kullanmaktır. Bir classı belirtmek için class keywordünü class adıyla birlikte kullanırsınız ve her zaman constructor() methodunu eklersiniz.

/* Example
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
}

//Artık Dog classını kullanarak object ler oluşturabilirsiniz:

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
}
myDog = new Dog("Buldog")  

*/

/////////////Methods 
//constructor yöntemi unique dir, özelliği başlattığınız yerdir, bir class başlatıldığında otomatik olarak adlandırılır ve tam adı "constructor" olmalıdır, ayrıca, bir constructor yönteminiz yoksa, JavaScript bir görünmez ve boş constructor methodu ekleyebilir.
/* Example
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current(){
     return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
  }
}
myDog = new Dog("Buldog", 4) 
document.getElementById("content").innerHTML = myDog.current(); //I have a Bulldog and it has 4 legs.
*/

/////////////Static Methods
//Static method lar prototypte değil, class ın kendisinde tanımlanır.
//Bu, object de değil, class ta static bir method çağırabileceğiniz anlamına gelir.
/* Example:
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  static hello(){
     return "Hello";
  }
}
myDog = new Dog("Buldog") 
document.getElementById("content").innerHTML = Dog.hello();
*/

//////////////Inheritance
//Bir class inheritance oluşturmak için extensions anahtar sözcüğünü kullanın.
//class inheritance ile oluşturulan bir class, tüm yöntemleri başka bir classtan miras alır.

/* Example
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current(){
     return "I have a " + this.dogName;
  }
}

class Specy extends Dog {
  constructor(name, foot, char) {
    super(name, foot);
    this.character = char;
  }
  show() {
    return this.current() + ', it is  ' + this.character;
  }
}

myDog = new Specy("Buldog", 4, "curious");
document.getElementById("content").innerHTML = myDog.show();
*/

//super() methodu, parent class a başvurur.
//constructor methodu super() yöntemini çağırarak parent ının constructor methodunu çağırır ve parent özelliklerine ve methodlarına erişim sağlarız.

///////////////////////Getters and Setters

//Classlar ayrıca getters(alıcılar)ı ve setters(ayarlayıcılar)ı kullanmamıza da izin verir.
//Classa getterse ve setters eklemek için get ve set keyword lerini kullanın.

/*Example
class Song {
        constructor(genre) {
          this.genre = genre;
        }
        get sgenre() {
          return this.genre;
        }
        set sgenre(newgenre) {
          this.genre = newgenre;
        }
      }

      mysong = new Song("Classical");

      document.getElementById("content").innerHTML =
        "My favourite is " + mysong.sgenre;         //My favourite is Classical
*/

//İpuçları: Getter bir method olsa bile özellik değerini almak istediğinizde parantez kullanmazsınız.

//Bir setter kullanmak için, parantez olmadan bir özellik değeri ayarladığınızda olduğu gibi aynı syntaxı kullanın.
/* Example 
class Song {
        constructor(genre) {
          this.genre = genre;
        }
        get sgenre() {
          return this.genre;
        }
        set sgenre(newgenre) {
          this.genre = newgenre;
        }
      }

      mysong = new Song("Classical");
      mysong.sgenre = "Jazz";

      document.getElementById("content").innerHTML =
        "My favourite is " + mysong.sgenre;         //My favourite is Jazz
*/
