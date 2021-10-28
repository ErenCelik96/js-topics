////////this
//fonksiyon içerisinde nesnenin kendisine erişmek istediğimizde kullanılır, o an ki nesneye hitap eder


//parent class
class Person { //class olduğu için baş harfi büyük
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear= birthYear;
        this.employment = "";
    }

    selamla(){
        console.log(`Merhaba ${this.firstName} ${this.lastName}`);
    }
}

//child class
class Student extends Person { //extend = miras alıyor, üstüne ekleme yapabiliyor
    constructor(firstName,lastName, bY) { //bu değerler ile parent class ındaki değerleri çağırmamız gerekiyor onu da super() ile yapıyoruz
        console.log("Initializing student object")
        super(firstName, lastName, bY);//super parent ı, this bu class ı ilgilendirir
        this.employment='Student';
    }

    dersCalis() {
        console.log("Studying JS...")
    }
}

//teacher 
class Teacher extends Person {

}

let eren = new Student('Eren', 'Çelik', 1996); //student olduğu için prototype ı person, parent class
eren.selamla(); // merhaba eren çelik
eren.dersCalis(); //Studying JS...

//arrow function ı nerede çağırırsan this i orası olur, dışarıda çağırırsak window, func içinde çağırırsak o func olur