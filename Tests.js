//Hoisting
console.log(myFunction()); //'Hello'
function myFunction(){
    return 'Hello';
}

console.log(myVariable); //undefined
var myVariable = 'Hello';

//var
console.log(a); //undefined
var a = 5;
console.log(a);
//Function Scope
function varExample(){
    var b = 10;
    if(true){
        var b = 20;
        console.log(b); //20
    }
    console.log(b); //20
}
varExample();

//let
//Introduced at ES6
//No Hoisting behaviour
//console.log(c); //ReferenceError: Cannot access 'z' before initialization
let c = 5;
console.log(c); //5
//Block Scope
function letExample(){
    let d = 10;
    if(true){
        let d = 20;
        console.log(d); //20
    }
    console.log(d); //10
}
letExample();

//const
//Introduced at ES6
//No Hoisting behaviour
//console.log(e); //ReferenceError: Cannot access 'z' before initialization
const e = 5;
//Block Scope
function constExample(){
    const f = 10;
    //f = 20; //TypeError: Assignment to constant variable.
    console.log(f); //10
}
constExample();

//spreadOperator
let fruitsExample = ['apple', 'banana'];
let newFruits = [...fruitsExample, 'orange']; //[ 'apple', 'banana', 'orange' ]
console.log(newFruits); //[ 'apple', 'banana', 'orange' ]

//push
//Adds element at last position of Array
let brandCars = ['Volvo', 'Ferrari'];
brandCars.push('BMW'); 
console.log(brandCars); //['Volvo', 'Ferrari', 'BMW'];  

//pop
//Extracts from last position of Array
let brandClothes = ['Chanel', 'Gucci', 'Adidas'];
let lastBrandClothe = brandClothes.pop();
console.log(lastBrandClothe); //Adidas
console.log(brandClothes); //[ 'Chanel', 'Gucci' ]

//shift
//Extracts the first element of Array
let idioms = ['English', 'Portuguese', 'Italiano'];
let firstIdiom = idioms.shift(); //English
console.log(firstIdiom); //English
console.log(idioms); //['Portuguese', 'Italiano'];

//unshift
//Adds element in the first position of Array
let countries = ['USA', 'China'];
countries.unshift('Russia');
console.log(countries); //[ 'Russia', 'USA', 'China' ]

//lastIndexOf
//Returns position of last element found
let text = 'Hello, world! Hello there!';
console.log(text.lastIndexOf("Hello")); //14
//Returns position of last element found, until a index provided
console.log(text.lastIndexOf("Hello", 12)); //0
console.log(text.lastIndexOf("world", 12)); //7
console.log(text.lastIndexOf("hello")); //-1

//indexOf
//Returns position of first element found
let cities = ['New York', 'Los Angeles', 'Tokio', 'Los Angeles'];
console.log(cities.indexOf('Los Angeles')); //1

//slice
//Copies for a new array given the interval (begin, stops)
const diseases = ['Parkinson', 'Myopia', 'Caract','Malaria'];
const eyesDiseases = diseases.slice(1,3); 
console.log('diseases: ', diseases); //[ 'Parkinson', 'Myopia', 'Caract', 'Malaria' ]
console.log('eyesDiseases: ', eyesDiseases); //[ 'Myopia', 'Caract' ] 
const salutare = "Ciao! Buongiorno!";
const ciao = salutare.slice(0,5);
console.log(ciao); //Ciao!
console.log(salutare); //Ciao! Buongiorno!

//splice
//array.splice(begins, qty, item1, item2...)
//Modify array (add/remove) contents in exact index provided given quantity (index included)
const tasks = ['Study', 'Buy bread', 'See doctor', 'Pay Bills', 'Feed pet'];
//Removing two elements
const removedTasks = tasks.splice(1,2);
console.log('removedTasks: ', removedTasks); //[ 'Buy bread', 'See doctor' ]
console.log('tasks: ', tasks); //[ 'Study', 'Pay Bills', 'Feed pet' ]
//Adding two elements
tasks.splice(2,0,'Clean Kitchen', 'Vaccum cleaner');
console.log('tasks: ', tasks); [ 'Study', 'Pay Bills', 'Clean Kitchen', 'Vaccum cleaner', 'Feed pet' ]
//Replace elements
const guests = ['Ana', 'Carlos', 'Márcia', 'Paulo'];
const substituteGuests = guests.splice(1, 2, 'Júlia', 'Ricardo');
console.log('substitueGuest: ', substituteGuests);
console.log('guests: ', guests);
