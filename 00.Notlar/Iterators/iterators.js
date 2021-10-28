/////////////Iterators
//Iterator ler JavaScript'teki herhangi bir array üzerinde döngü oluşturmanın yeni bir yoludur. ES6'da tanıtıldılar ve çok kullanışlı oldukları ve çeşitli yerlerde kullanıldıkları için gerçekten popüler hale geldiler.


////////////For/in statements
//for ... in ifadesi, inherit edilen numaralandırılabilir özellikler de dahil olmak üzere, stringler tarafından anahtarlanan (Semboller tarafından anahtarlananları yok sayarak) bir nesnenin tüm numaralandırılabilir özellikleri üzerinde yinelenir.
/* Example
let obj = {x: 1, y: 2, z: 3};
for (let a in obj) {
  console.log(a);
} 
output :
x
y
z
*/ 

//p.s: for ... in döngüsü, dizin sırasının önemli olduğu diziler üzerinde yineleme yapmak için kullanılmamalıdır, çünkü JavaScript motoruna bağlı olarak rastgele bir sırayla yinelenebilir. 

///////////for/of Statement
//for ... of ifadesi, yerleşik String, Array, Array benzeri objectler (örneğin, bağımsız değişkenler veya NodeList), TypedArray, Map, Set ve kullanıcı tanımlı yinelenebilirler dahil olmak üzere yinelenebilir objectler üzerinde yinelenen bir döngü oluşturur. Object in her bir farklı özelliğinin değeri için yürütülecek ifadelerle özel bir yineleme kancasını çağırır.
/* Example
var names = ['Aaron', 'James', 'Oliver'];
var a;

for (a of names) {
  console.log(a);
}
output: 
Aaron
James
Oliver
*/

//////////Array.from()
//Array.from() statik methodu, array benzeri veya iterable(yinelenebilir) bir nesneden yeni bir Array örneği oluşturur.

/* Example
Array.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg)
*/

//arrayLike Bir diziye dönüştürülecek dizi benzeri veya yinelenebilir bir nesne.
//mapFn array in her öğesini çağırmak için isteğe bağlı Map function. mapFn functiondaki parametreler (currentValue, index, array):
//currentValue üzerinde çalıştığımız mevcut değerdir 
//index, bu geçerli öğenin index numarasıdır 
//array array in kendisidir 
//mapFn yürütülürken bu olarak kullanılacak thisArg İsteğe Bağlı Değer

/* Example
// from string
Array.from('foo');
// [ "f", "o", "o" ]

// from set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

// from map
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

// from a nodelist
const savings = Array.from(document.querySelectorAll('.savings'));
console.log(savings);

// using mapFn function
const movements = Array.from(document.querySelectorAll('.savings'), (el) =>
    Number(el.textContent.replace('$', ''))
);
// we take textContent of each nodelist and put it into newly created array
console.log(movements);
​
// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x * x));
// [1, 4, 9]

// new syntax
console.log(Array.from({ length: 5 }));
// [undefined, undefined, undefined, undefined, undefined]
// creates an array with 5 elements with assigning length property of an object
// all of them are undefined again

console.log(Array.from({ length: 5 }, (_, i) => i));
// [0, 1, 2, 3, 4]
// as we used mapFn function now we assigned index values as values to this array.
*/

///////////Making Range Method with Generators
/*
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
      // setting length property of this new array
    (_, i) => start + i * step
      // adding values from start and every time increasing it with step
  );
​
console.log(range(4, 10, 1));
// [4, 5, 6, 7, 8, 9]
​
console.log(range(1, 10, 2));
// [1, 3, 5, 7, 9]
*/

////////////////////Iteratorleri Anlamak
//iteratorler, bir diziyi tanımlayan ve sonlandırıldığında potansiyel olarak bir dönüş değeri tanımlayan bir object dir. iteratorler, iki özelliğe sahip bir nesne döndüren bir next() yöntemine sahip olarak iteratorler protokolünü uygulayan herhangi bir nesnedir:

//value: iterator dizisindeki bir sonraki değer.
//done: arraydeki son değer zaten tüketilmişse bu doğrudur. Yapılanın yanında değer varsa, yineleyicinin dönüş değeridir.

/* Example
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
            // this time we assinged number of elements to value. 
        },
    };
    return rangeIterator;
}
*/

//Bu function, yineleme yapmak için next() methoduna sahip bir ıterator nesnesi döndürür.
//Bu next() yöntemi, değeri ve done özellikleri olan bir nesne döndürür. değer, geçerli yinelenen değeri depolar.
//done yinelemenin bitip bitmediğini belirleyen doğru veya yanlış değeri saklar.

/* Example
const it = makeRangeIterator(1, 10, 2);
​
let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}
​
console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]
*/

//Şimdi değişken, yineleyici functioni tarafından oluşturulan bir nesnedir. Önce next() yöntemini çağırıyoruz. Bu yöntem, değerli ve done özelliklerine sahip bir nesne döndürür.
//Her seferinde next() yöntemini çağırarak ve her döngü yinelemesinde özellik kontrolü yaparak while döngüsü ile değişken üzerinde döngü yapıyoruz. done özelliğinde true gördüğümüzde while döngüsü biter.
//done özelliğinde true gördüğümüzde değer, yineleme öğelerinin bir parçası değildir ve bu yinelemede öğe sayısını depoladık ve bu bize bu yinelemenin boyutunu/uzunluğunu verir.

/////////////Generators
//Özel yineleyiciler kullanışlı bir araç olsa da, dahili durumlarını açıkça koruma ihtiyacı nedeniyle bunların oluşturulması dikkatli bir programlama gerektirir.
//Generator (üreteç) functionleri güçlü bir alternatif sunar: yürütmesi sürekli olmayan tek bir function yazarak yinelemeli bir algoritma tanımlamanıza olanak tanır.
//Normal functionler yalnızca bir, tek bir değer (veya hiçbir şey) döndürür. Generators, isteğe bağlı olarak birbiri ardına birden çok değer döndürebilir ("yield").
/* Example
function* generateSequence() {
    yield 1;
    console.log('I start working from here');
    yield 2;
    yield 3;
}
​
const genSeq = generateSequence();
// unlike regular functions, generator functions do not invoke when they are called.
​
console.log(genSeq);
// output is: generateSequence {<suspended>}
​
let item = genSeq.next();
// now we start invoking
// it stops its execution when it sees yield
// and in next calling it will continue after that yield line
​
while (!item.done) {
    console.log(item);
    item = genSeq.next();
}
​
console.log(item);
// {value: undefined, done: true}
// done is true
​
console.log(Array.from(generateSequence()));
// [1, 2, 3]
*/
