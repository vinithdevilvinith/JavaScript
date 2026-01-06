//Class And Inheritance:
// ES5 Example:
// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayHello = function(){
//     console.log("Hello, my name is " + this.name);
    
// };

// var person = new Person("vinith");
// console.log(person);
// person.sayHello();

// function Student(name, age){
//     Person.call(this, name); 
//     this.age = age;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.eligiblity = function(){
//     console.log(
//         this.name + " age is " + this.age + " " +
//         (this.age >= 18 ? 'Eligible' : "Not Eligible")
//     );
// }

// var student = new Student("ram", 34);
// console.log(student);
// student.sayHello();
// student.eligiblity();


// //ES6 Example :
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log("Hello, my name is " + this.name);
//     }
// }

// var person = new Person("vinith");
// console.log(person);
// person.sayHello();


// class Student extends Person {
//     constructor(name,age){
//         super(name);
//         this.age = age;
//     }
//     eligiblity(){
//         console.log(
//         this.name + " age is " + this.age + " " +
//         (this.age >= 18 ? 'Eligible' : "Not Eligible")
//     );
//     }
// }
// var student = new Student('ram', 12);
// student.sayHello()
// student.eligiblity()


//Getter and setter in Js;
//Example 1: Getters and Setters with object literals

// const person = {
//     firstName: 'vinith',
//     lastName: "kumar",
//     get fullName(){
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName(name) {
//         const parts = name.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },
// };

// console.log(person);
// console.log(person.firstName);
// person.firstName = "ram";
// console.log(person.fullName);
// person.fullName = 'Vinoth kumar';
// console.log(person.fullName);

//Class type ;
// class person{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//          return this.firstName + " " + this.lastName;
//     }
//     set fullName(name) {
//         const parts = name.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//    }
// }

// const p1 = new person("vinith", 'kumar');
// console.log(p1);
// console.log(p1.fullName);
// p1.fullName = 'Raj Kumar'
// console.log(p1);
// console.log(p1.fullName);

class circle {
    constructor(radius){
       this.radius = radius; 
    }

    get diameter(){
        return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);
myCircle.diameter = 12;
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);


// static method:
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     info(){
//         console.log(this.name);
//     }
// }

// const person = new Person('vinith');
// person.info()


// class MyClass {
//     static myStaticProperty = "vinith"
//     static myStaticMethod(){
//         console.log("I am from Static method");
//     }
// }

// MyClass.myStaticMethod();
// console.log(MyClass.myStaticProperty);


// //Utility Classes
// class Mathutils {
//     static add(a,b){
//         return a + b;
//     }
//       static subtract(a,b){
//         return a - b;
//     }
//       static multiply(a,b){
//         return a * b;
//     }
//       static divide(a,b){
//         return a / b;
//     }
// }

// console.log(Mathutils.add(10,30));
// console.log(Mathutils.multiply(10,30));
// console.log(Mathutils.subtract(10,30));
// console.log(Mathutils.divide(10,30));

// //Example 2: Singleton Pattern 

class DataBase {
    static instance = "vinith";
    static getInstance() {
        if (!DataBase.instance){
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    query(sql) {}
}

const db1 = DataBase.getInstance();
const db2 = DataBase.getInstance();
console.log(db1 === db2);

// // static colors

// class Colors{
//     static RED = "#ff0000"
//     static GREEN = "#00ff00"
//     static BLUE = "#0000ffff"
// }

// console.log(Colors.RED);
// console.log(Colors.GREEN);
// console.log(Colors.BLUE);

//Prototype:
let arr = ["apple","orange"];

// let obj = {
//     name:"vinith",
//     city:"salem",
//     info: function (){
//         return `${this.name} from ${this.city}`;
//     },
// };

// function myFunction() {}


// let obj1 = {
//     name:"vinith",
//     city:"salem",
//     info: function (){
//         return `${this.name} from ${this.city}`;
//     },
// };

// let obj2 = {
//     name: "Raja",
//     city: "chennai",
// };

// obj2.__proto__ = obj1;
// const obj2 = Object.create(obj1);
// obj2.name = "Vani";

// Array.prototype.doubleLength = function() {
//     return this.length * 2;
// };

// Function.prototype.myBind = function (){
//     console.log("This is Bind Function in Prototype");
    
// };

// function fun() {}

// Person.prototype.greet = function () {
//     console.log(`hello, my name is ${this.name}.`);
// }