// const a=10;
// console.log(a);
// //a=25;

// const users=["ram","sam","ravi"];
// console.log(users);
// users.push('tiya');
// console.log(users);


// const student = {
//   fullname: 'Ram',
//   age: 12,
//   father: 'sam',
//   address: 'Cherry Road',
//   city: "salem",
//   about: function(){
//     return `${this.fullname} is from ${this.city}`;
//   },
//   eligibility: function(){
//     return this.age >= 18;
//   },
// };

// console.log(student);
// console.log(student.about());
// console.log(student.eligibility());

function addStudent(fullname, father, age, address, city){
  const user = {};
  user.fullname = fullname;
  user.father = father;
  user.age = age;
  user.address = address;
  user.city = city;
  user. about= function(){
    return `${this.fullname} is from ${this.city}`;
  };
  user.eligibility= function(){
    return this.age >= 18;
  };
  return user;
}
console.log(addStudent("sam","Raja",25,"Ghandi road", "salem"));

  
// const studentmethod = {
//    about: function(){
//     return `${this.fullname} is from ${this.city}`;
//   },
//   eligibility: function(){
//     return this.age >= 18;
//   },
// }
// function addStudent(fullname, father, age, address, city){
//   const user = Object.create(studentmethod);
//   user.fullname = fullname;
//   user.father = father;
//   user.age = age;
//   user.address = address;
//   user.city = city;
//   user.about = studentmethod.about;
//   user.eligiblity = studentmethod.eligibility;

//   return user;
// }
// console.log(addStudent("sam","Raja",25,"Ghandi road", "salem"));
// console.log(addStudent("sam","Ras",25,"Ghandi road", "salem"));
 
//  const obj1 = {
//   key1: "value1",
//   key2: "value2",
//  };

//  console.log(obj1);

// //  const obj2= { key3: "value3"}; 

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// //obj2.key2 = "new val 2";
// console.log(obj2);
// console.log(obj2.key1);
// console.log(obj2.key2);


// // optional chaining

// // const user={
// //   name:'stanly',
//  // address:{
//   //  city:'salem'
//  // }
// // };
// // console.log(user);
// // console.log(user.address);
// // console.log(user.address.city);

// // const user={
// //   name:'stanly',
// //  address:{
// //    city:'salem'
// //  }
// // };

// //option 1;
// console.log(user.address?user.address.city:undefined);
// //option 2;
// console.log(user.address && user.address.city);
// //option 3;
// console.log(user.address?.city);
// //option 4;
// let key="city";
// console.log(user.address?.[key]);


// const user_details={
//     userId:'456',
//     account:{
//         accountNumber:'AE75457',
//         holder:{
//             profile:{
//                 firstname:'vinith',
//                 lastname:"kumar",
//                 birthDate:'2004-10-31'
//             }
//         },
//         contact:{
//             address:{
//                 city:"salem",
//                 state:'tamil Nadu',
//                 country:'india'
//             },
//             phone:[
//                {
//                 type:'Home',
//                 phonenumber:'409879597'
//                },
//                {
//                 type:'office',
//                 phoneNumber:'9876543210'
//                }                
//             ]
//         }
//     }
// }

// // console.log(user_details);
// // console.log(user_details.account.holder.profile.birthDate);
// console.log(user_details.account && user_details.account.holder && user_details.account.holder.profile && user_details.account.holder.profile.birthDate);
// console.log(user_details.account?.holder.profile?.birthDate);

// user_details.name='vini';
// console.log(user_details);

// //function inside object;
// const object={
//     name:'Vinith',
//     age:22,
//     // method:function(){
//     //     console.log("I am Method");   
//     // }
//     // method(){
//     //     console.log("I am Method");   
//     // }
//     method:()=>{
//         console.log("I am Method");   
//     }
// }
// console.log(object);
// console.log(object.name);
// object.method();

// console.log(this);

// var age=25;

// function info()
// {
//     console.log(this.age);
//     console.log(this);    
// }

// window.info();

// const user={
//     age:45,
//     fun:info,
//     nested:{
//         age:15,
//         fun:info
//     }

// }
// user.fun();
// user.nested.fun()

// const student= {
//     age:25,
//     fun1:function(){
//         console.log("fun 1 :",this.age);
//         console.log("fun 1 :",this);
//         function fun2(){
//             console.log('fun2 :',this.age);
//             console.log('fun2 :',this);
//         }
//         fun2();
//           const fun3=()=>{
//             console.log('fun2 :',this.age);
//             console.log('fun2 :',this);
//         }
//         fun3();
        
//     }
// }
// student.fun1();

// const fun4=()=>{
//     console.log('fun4 :',this.age);
//     console.log('fun4 :',this);
// }
// fun4();


//Array Destructuring:
//Before ES6

// const numbers = [1,2,3,4,5];
// const first = numbers[0];
// const second = numbers[1];
// const rest = numbers.slice(2);
// console.log(first);
// console.log(second);
// console.log(rest);

//After Es6:
// const numbers = [1,2,3,4,5];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// object Destructing:
// before ES6:
// const person = {name: 'vinith',age:22,gender:"male"};
// const name = person.name;
// const age = person["age"];
// const gender = person.gender;
// console.log(name);
// console.log(age);
// console.log(gender);

//After ES6:

// const person = {name: 'vinith',age:22,gender:"male"};
// const {name,age,gender} = person;
// console.log(name);
// console.log(age);
// console.log(gender);

//Default Values:
// numbers = [1,2];
// const {x,y,z=3} =numbers;
// console.log(x);
// console.log(y);
// console.log(z);

// const person = {name: 'joes', age:30};
// const {name,age,gender = male}=person;
// console.log(name);
// console.log(age);
// console.log(gender);

//Swaping Variables:
// let a=1;
// let b=2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//skipping unwanted items with destructuring Assignment

// let myArray = [1,2,3,4,5];
// let [first, , , fourth] = myArray;
// console.log(first);
// console.log(fourth);

// let myArray = [1,2,3,4,5,6,7];
// let [first,second, ...rest] = myArray;
// console.log(first);
// console.log(second);
// console.log(rest);

// let myObj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7};

// let {a, b, ...rest} = myObj;
// console.log(a);
// console.log(b);
// console.log(rest);

// const user = {
//     name:"vinith",
//     address:{
//         city: 'salem',
//         state: 'Tamilnadu',
//         country: "india",
//     },
// };

// const {
//     name,address:{city, state},
// }=user;
//  console.log(name);
//  console.log(city);
//  console.log(state)
 
//  const numbers = [1,2,[3,4,[5,6]]];
//  const [a, b, [c, d,[e, f]]] = numbers;
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);
//  console.log(e);
//  console.log(f);
 
// const user = [
//   {
//     name: "vinith",
//     address: {
//       city: 'salem',
//       state: 'Tamilnadu',
//       country: "india",
//     },
//   },
//   {
//     name: "vani",
//     address: {
//       city: 'elampillai',
//       state: 'Tamilnadu',
//       country: "india",
//     },
//   },
// ];

// const [
//   {
//     name: name1,
//     address: { city: city1 },
//   },
//   {
//     name: name2,
//     address: { city: city2 },
//   },
// ] = user;

// console.log(name1); // vinith
// console.log(city1); // salem
// console.log(name2); // vani
// console.log(city2); // elampillai

//creating objects in Javascript

//Using object literals:
// const person ={
//     name:'vinith',
//     age:22,
//     job:"Developer"
// };
// console.log(person);


//Using the object constructor:
// const person = new Object();
// person.name='vinith';
// person.age=22;
// person.job="Developer";
// console.log(person);

// using the object.create() method:
// const personProto={
//     sayHello:function(){
//         console.log(`hello, my name is ${this.name}`);
        
//     }
// }

// const person=Object.create(personProto);
// person.name='vinith';
// person.age=22;
// person.job="Developer";
// console.log(person);
// person.sayHello();

//using class:

// class person
// {
//    constructor(name,age,job){
//     this.name=name;
//     this.age=age;
//     this.job=job;
//    } 
// }

// const person=new person("Tiya",25,"Developer");
// console.log(person);

//Dot Notation and Bracket Notation in Javascript

// const user ={
//     name: "vinith",
//     age:22,
//     job:"Developer"

// };
// console.log(user);
// //Dot Notation"
// console.log(user.name);
// user.name = 'vani';
// console.log(user.name);
// console.log(user);

// //Bracket Notation:
// console.log(user["age"]);
// user["age"]=23;
// console.log(user["age"]);
// console.log(user);


// const prop="name";
// console.log(user[prop]);
// console.log(user.prop);

// let user = {
//     "first name":"vinith",
//     'last name':'kumar'
// };
// console.log(user['first name']);
// console.log(user['last name']);


// let key = 'first name';
// console.log(user[key]);


//Iterating Through Javascript Objects
// //Using the For in loop
// const user = {
//   name: "tiya",
//   age: 30,
//   job:"Programmer"
// };

// console.log(user);

// for(let key in user){
//   console.log(`${key} : ${user[key]}`);
  
// }


//using object.keys()
// const keys=Object.keys(user);
// console.log(keys);
// keys.forEach(key=>{
//   console.log(`${key} : ${user[key]}`);
  
// })

// //using object.values()
// const values=Object.values(user);
// console.log(values);
// keys.forEach(value=>{
//   console.log(`${value}`);
  
// })
// //using object.entries()
// const entries = Object.entries(user);
// console.log(entries);
// entries.forEach(entry=>{
//   console.log(`${entry[0]}: ${entry[1]}`);
  
// })

// for(let i=0;i<entries.length; i++){
//   console.log(`${entries[i][0]}: ${entries[i][1]}`);
  
// }


//objects inside Arrays in Js:
const users=[
  {name:'vinith', age:25, email: 'vinith@gmail.com'},
  {name:'vani', age:35, email: 'vani@gmail.com'},
  {name:'vini', age:45, email: 'vini@gmail.com'},
];
console.log(users);

for(const user of users)
{
  console.log(user);
  console.log(user.name);
}

const olderUsers=users.filter(user=>user.age>30);
console.log(olderUsers);

//difference between rest parameter and Spread operator in Js:

function myFunction(first, second, ...rest){
  console.log(first);
  console.log(second);
  console.log(rest); 
}

myFunction(10,20,30,40,50);

//spread operator:
let myArray = [1,2,3];
let newArray = [...myArray, 4, 5];
console.log(newArray);


//Parameter Destructuring:
// function sayHello({name,age=25})
// {
//   console.log(`hello,${name}!`);
//   console.log(`age is, ${age}`);
// }
// const person = {name: 'vinith', age:34};
// sayHello(person);

// const numbers = [1,2,3];

// function add([a,b,c]){
//     return a+b+c;
// }

// console.log(add(numbers));


// const person = {name: 'vinith', age:34, city: "salem",country:'india'};

// function sayHello({name, age, ...rest}){
//   console.log(`hello, ${name}! you are ${age} years old`);
//   console.log(rest);
  
// }
// sayHello(person);


// //Call Apply and Bind Methods in js:
// function vinith(){
//   console.log(this);
  
// }
// console.log(vinith.name);
// console.log(vinith.toString());

// vinith();
// vinith.call();

// // var user_name = 'vinith';
// function welcome() {
//   console.log("welcome :"+ this.user_name);
  
// }
// const student = {user_name: 'Kumar'}
// welcome.call(student);

// function total(eng,math){
//   console.log(this.user_name + " Got " + (eng+math) + ' Marks ');
// }

// total(25,35);
// total.call(student, 34, 56)

// let subjects = [34,56];
// total.apply(student, subjects);

// const fun = total.bind(student, 85, 95);
// console.log(fun);
// fun();

const person = {
  firstName: 'vinith',
  lastName: 'Kumar',
  fullName: function(){
    return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName());

const anotherPerson = {
  firstName: "Ram",
  lastName: 'Kumar',
};

console.log(person.fullName.call(anotherPerson));








