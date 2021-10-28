// const cat = {
//     name:"pamuk",
//     age:"2",
//     legs:"4",
//     type:"street cat"
// }

// console.log(cat["name"]);
// console.log(cat.type)

// /////////////////////////////////////////////////

// function kedi(age, legs, name) {
//     this.age = age;
//     this.legs = legs;
//     this.name=name
// }

// var kedi1 = new kedi("Pamuk", 4, 1); 
// var kedi2 = new kedi("boncuk", 4, 1);

// console.log(kedi1.age); //Pamuk
// console.log(kedi2.name); //1

// ////////////////////////////////////////////////

// class car{
//     constructor(model, year){
//         this.model=model;
//         this.year=year;
//     }
//     current(){
//         return "Benim bir " + this.year + " model " + this.model + " arabam var.";
//     }
// }

// myCar = new car("Reanult Clio", 2012);
// console.log(myCar.current());


class dog {
    constructor(name, foot){
        this.name=name;
        this.foot=foot
    }
    static Hello(){
        return "hello";
    }
}
myDog = new dog("bulldog")
console.log(dog.Hello()); //hello