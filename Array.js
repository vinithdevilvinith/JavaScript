// let a=[1,2,3,4];
// console.log(a);
// console.table(a);
// console.log(a[1]);

// let b=new Array(10,20,30,40);
// console.log(b);

// let c=new Array('Vinith',22,true,{m1:100,m2:100,m3:100});
// console.log(c);
// console.table(c);

// //forEach method:

// const num=[1,2,3,4,5,6,7,8,9];

// num.forEach((value)=>{
//     console.log(value); 
// })

// num.forEach((value, index) => {
//     console.log("index : " + index + " value: " + value);
// });

// const users =[
//     {full_name:"vinith",age:22,city:'salem',salary:2000},
//     {full_name:"vani",age:22,city:'erode',salary:5050},
//     {full_name:"vinitha",age:23,city:'chennai',salary:2000},
//     {full_name:"jothi",age:17,city:'madurai',salary:2000},
//     {full_name:"hari",age:24,city:'namakkal',salary:2000},

// ];
// console.table(users);
// users.forEach((value)=>{
//     console.log(value.city);
// })

// //1 .using the foreach method to take the array values:
// const fruits = ['Apple',"Banana",'Orange'];
// console.log(fruits);
// fruits.forEach(fruit=>console.log(fruit));


// //2. Using the foreach method to sum all elements of an array:
// const numbers = [1,2,3,4,5];
// let total=0;
// numbers.forEach(number=>{
//     total+=number;
// })
// console.log(total);

// //3. Using foreach method to create a new array from  an existing one:
// const doubledNumber = [];
// numbers.forEach(number=>{
//     doubledNumber.push(number*2)
// })
// console.log(doubledNumber);

// //4. using the foreach method to find the max element of an array: 
// console.log(numbers);
// let max=numbers[0];
// numbers.forEach(number=>{
//     if(number>max){
//         max=number;
//     }
// })
// console.log(max);

// //5. using foreach method to calculate the average of an array:
// console.log(numbers);
// total=0;
// numbers.forEach(number=>{
//     total+=number;
// })
// console.log(total/numbers.length);

// total=0;
// let count = 0;
// numbers.forEach(number=>{
//     total+=number;
//     count++;
// })
// console.log(total/count);

// //6. using the Foreach method to filter an array:
// const no = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers=[];
// no.forEach(number=>{
//     if(number%2===0){
//         evenNumbers.push(number);
//     }
// })
// console.log(evenNumbers);

// //7. using the foreach method to update elements of an array:

// const names = ['john','mike','bob','jane'];

// console.log(names);
// names.forEach((name,index)=>{
//     console.log(name,index);
//     names[index]=name.toLocaleUpperCase();
// })
// console.log(names);

// //Map example 1:
// const Numbers = [1,2,3,4,5,6,7,8,9,10];

// let sqrt=Numbers.map((value)=>{
//     return Math.sqrt(value).toFixed(2);
// })
// console.table(sqrt);


// //2.
// const user = [
//     {name:"vinith",age:22,city:'salem',salary:2000},
//     {name:"vani",age:22,city:'erode',salary:5050},
//     {name:"vinitha",age:23,city:'chennai',salary:2000},
//     {name:"jothi",age:17,city:'madurai',salary:2000},
//     {name:"hari",age:24,city:'namakkal',salary:2000},

// ];

// console.table(user);

// let eligible_status=users.map((user)=>({
//     name:user.name,
//     age:user.age,
//     city:user.city,
//     salary:user.salary,
//     status:user.age>=18?"Eligible":'Not Eligible'
// }));
// console.table(eligible_status);

//  eligible_status=users.map((user)=>({
//    ...user,
//     status:user.age>=18?"Eligible":'Not Eligible'
// }));
// console.table(eligible_status);

//3.
// const numbers = [1,2,3,4,5];
// const doubledNumber=numbers.map(number=>number*2);
// console.log(doubledNumber);
// /*
// syntax;
// originalArray.map(current_value,index,originalArray);
// */

// //Modifying Array Elements;
// const words = ['Hello', 'World'];
// console.log(words);
// const capitalizedWord=words.map(word=>word.toLocaleUpperCase());
// console.log(capitalizedWord);

// //combining Arrays:
// const fruits = ['apple','banana'];
// const colors = ['red','Yellow'];

// const fruitColors=fruits.map((fruit,index)=>fruit+"-"+colors[index]);
// console.log(fruitColors);

//Filtering an Array:
// const numbers = [1,2,3,4,5];
// const evenNumbers=numbers.map(num=>num%2===0);
// console.log(evenNumbers);

//Extracting Properties from an array of objects:
// const users = [
//     {name: 'ram', age:30},
//     {name: 'sam', age:30},
//     {name: 'dam', age:30}
// ];

// const names=users.map(users.name);
// console.log(names);

// //Modifying an Array of objects:
// console.log(users);

// const updatedUsers=users.map(user=>{
//     return {
//         name:user.name,
//         age:user.age+1
//     }
// });
// console.log(updatedUsers);

// const words = ['apple','banana','orange'];

// const wordstats = words.map(function(currentValue, index, array) {
//     return {
//         word: currentValue,
//         length: currentValue.length,
//         position: index,
//         totalWords: array.length
//     };
// });

// console.log(wordstats);

//filter() method in js:
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(number=>number%2==0);
// console.log(evenNumbers);


// //2.
// let users=[
//     {name: 'alice', age: 65},
//      {name: 'mike', age: 23},
//       {name: 'will', age: 45},
// ];
// let eligible= users.filter(user=>user.age>30);
// console.log(eligible);

// //3.
// let words = ['cat','dog','elephant','fish'];

// let filterWord = words.filter(word=>word.length===3);
// console.log(filterWord);

// //4

// let items =[
//         {name: 'apple', category: 'fruit'},
//      {name: 'onion', category: 'vegatable'},
//       {name: 'banana', category: 'fruit'}
// ];

// let fruits=items.filter(item=>item.category==='fruit');
// console.log(fruits);


// let words = ['cat','dog','elephant','fish'];

// let wordStartE=words.filter(word=>word.startswith('e'));
// console.log(wordStartE);

// const products = [
//     {name: 'apple', category: 'fruit' , price:100},
//     {name: 'onion', category: 'vegatable', price:50},
//     {name: 'banana', category: 'fruit' ,price:150},
//     {name: 'carrot', category: 'vegatable' ,price:120}
// ];

// const expensiveFruits =products.filter(product=>product.category==='fruit' && product.price>100);
// console.log(expensiveFruits);

//reduce() in javascript:

/*
array.reduce(function(accumulator,currentValue,currentIndex,array){
},initialValue);
*/
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
// console.log(sum);
 
// //Flattening an array:
// let nestedArray =[[1,2],[3,4],[5,6]];
// console.log(nestedArray);
// let flattenedArray =nestedArray.reduce((accumulator,currentValue)=>accumulator.concat(currentValue));
// console.log(flattenedArray);


// let colors = ['red','blue','green','red',"blue",'yellow'];
// let colorCounts = colors.reduce((accumulator, currentValue)=>{
//     if(currentValue in accumulator){
//         accumulator[currentValue]++;
//     }else{
//         accumulator[currentValue]=1;
//     }
//     return accumulator;
// },{});
// console.log(colorCounts);


// let numbers = [55,10,15,20,25];

// let largest = numbers.reduce((accumulator,currentValue)=>{
//     return Math.max(accumulator,currentValue);
// });
// console.log(largest);

// let people = [
//     {name:'vinith', age:22, city:'salem'},
//     {name:'vani', age:22, city:'chennai'},
//     {name:'vinitha', age:22, city:'salem'}

// ];

// let groupedbycity = people.reduce((accumulator, currentValue)=>{
//     if(currentValue.city in accumulator){
//         accumulator[currentValue.city].push(currentValue);
//     }else{
//         accumulator[currentValue.city]=[currentValue];
//     }
//     return accumulator;
// },{});
// console.log(groupedbycity);


//Slice method:  slice(start,end);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);
// console.log('slice :'+numbers.slice());
// console.log('slice(2) :'+numbers.slice(2));
// console.log('slice(2,5) :'+numbers.slice(2,5));

// //splice method:
// // splice is to remove elements in Array
// // it will change original Array

// //Removed_element=splice(start,length,new elements)

// const n1 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n1);
// let Removed_element=n1.splice(2);
// console.log("Removed Items :"+Removed_element);
// console.log("After Splice :"+n1);

// const n2 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n2);
// let Removed_elements=n2.splice(2,2);
// console.log("Removed Items :"+Removed_elements);
// console.log("After Splice :"+n2);

// const n3 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n3);
//  Removed_elements=n3.splice(2,2,25,26);
// console.log("Removed Items :"+Removed_elements);
// console.log("After Splice :"+n3);

// const n4=[1,2,3,4,5,6,7,8,9,10];
// console.log('Before Splice :'+n4);
// n4.splice(2,0,100,300);
// console.log("After Splice :"+n4);

// //concat:
// const a=[10,20,30];
// const b=[40,50,60];
// const c=[70,80,90];

// let d=a.concat(b);
// console.log(d);

// d=a.concat(b,c);
// console.log(d);
// d=a.concat(b,c,23,45,55,66);
// console.log(d);


// d=a.concat(b,c,23,45,55,66['a','b','c']);
// console.log(d);

// console.table(d);

// //Sort;
// const names=["vinith",'Aureen','Joes','Zara','vani'];
// console.log("Before Sort : "+names);
// names.sort();
// console.log("After Sort : "+names);


// const num=[10,100,25,150,45,80,9];
// console.log("Before Sort : "+num);
// num.sort();
// console.log("After Sort : "+num);

// num.sort((a,b)=>{
//     return a-b;
// });
// console.log("Compare Sort : "+num);


// num.sort((a,b)=>{
//     return b-a;
// });
// console.log("Compare Sort : "+num);

//  const users = [
//      {name:"vinith",age:22,city:'salem',salary:2000},
//      {name:"vani",age:22,city:'erode',salary:5050},
//      {name:"vinitha",age:23,city:'chennai',salary:2000},
//      {name:"jothi",age:17,city:'madurai',salary:2000},
//      {name:"hari",age:24,city:'namakkal',salary:2000}

//  ];

//  console.table(users);
//  users.sort((a,b)=>{
//     return a.age-b.age;
//  });
//  console.table(users);

//  users.sort((a,b)=>{
//     if(a.name>b.name) return 1;
//     if(a.name<b.name) return -1;
//     return 0;
//  });

//  console.table(users);

// //  Fill(value,start,end):
// let n=[1,2,3,4,5];

// console.log("Before Fill : "+n);
// //n.fill(20);
// //n.fill(20,3);
// //n.fill(20,3,5);
// console.log("After Fill : "+n);


//includes(value,start-index);

// const products = ['pen','pencil','Eraser','box'];
// let result=products.includes('pen');
// console.log(result);
// result=products.includes("Scale");
// console.log(result);
// result=products.includes("pen",2);
// console.log(result);

//array.join(seperator);
// const products = ['pen','pencil','Eraser','box'];
// console.log(products);

// console.log(products.join()); //Default , as Seperator;
// console.log(products.join("|"));//| as seperator;

//reverse in js:
// const n = [1,2,3,4,5];

// console.log("before reverse : ",n);
// n.reverse();
// console.log("after Reverse : ",n);

// //Array Element with length Property:
// const x = {0: 10,1:20,2:30,4:40,length: 4};
// console.log(x);

// Array.prototype.reverse.call(x);
// console.log(x);

// push in js:
// let n=[1,2,3,4,5];
// console.log(n);
// console.log(n.push(6));
// console.log(n);

// n.push(70,45,55,33);
// console.log(n.push(70,45,55,33));
// console.log(n);


// let fruits = ['apple'];
// console.log(fruits);
// fruits.push('orange');
// console.log(fruits);
// fruits.push('Mango','grapes');
// console.log(fruits);

// //merging two Arrays:
// let users = ['ram','ravi'];
// let users1 = ['vini','vani'];

// users.push(...users1);
// console.log(users);

//Pop in js;
//  let users = ['ram','ravi','vani','vini'];
//  console.log(users);
//  console.log(users.pop());
//  console.log(users);
//   console.log(users.pop());
//   console.log(users);

// //Shift in JS;
// let students = ['vinith','vani','roni','jothi'];
// console.log('before :'+students);
// element  = students.shift();
// console.log('after :'+students);
// console.log("Removed element ; "+element);

// console.log('before :'+students);
// const element  = students.shift();
// console.log('after :'+students);
// console.log("Removed element ; "+element);

//Unshift:
//Add First element at Start:

// students = ['kumar','vani','vinith','eleven','hop'];
// console.log('before unshift :'+students);

// let len=students.unshift('tiya');
// console.log("length :"+ len);
// console.log('after unshift :'+students);

// len=students.unshift('riya',"diya");
// console.log("length :"+ len);
// console.log('after unshift :'+students);


//indexof;

// students = ['kumar','vani','vinith','eleven','hop'];

// let i= students.indexOf("kumar");
// console.log('index ;'+i);

// let user="Vinith Devil";
// let index=user.indexOf("i",4);
// console.log('index :'+index);

//lastindexOf:

// students = ['kumar','vani','vinith','kumar','eleven','hop'];
// let i= students.indexOf("kumar");
// console.log('index ;'+i);

// i= students.lastIndexOf("kumar");
// console.log('index ;'+i);

// let address='Vinith kumar from salem vinith';
// i=address.indexOf('vinith');
// console.log(i);
// i=address.lastIndexOf('vinith')
// console.log(i);

// //Every & Some:
// n=[1,12,20,14];

// let result=n.every((value)=>{
//   return value%2==0;
// })
// console.log(result);

// n=[1,12,20,14];

//  result=n.some((value)=>{
//   return value%2==0;
// })
// console.log(result);

// function checkEven(value){
//   return value%2==0;
// }
// result=n.every(checkEven);
// console.log(result);

// const users = [
//   {name:'vini',age: 4},
//   {name:'vino',age: 26},
//   {name:'vinith',age: 22},
//   {name:'vani',age: 34}
// ];

// function isEligible(element){
//   return element.age>=18;
// }

// result = users.every(isEligible);
// console.log("Every eligible :", result);

// result = users.some(isEligible);
// console.log("Some eligible :", result);

//Primitive and reference data types:
// let name="vinith kumar";
// console.log(typeof name);
// let age=30;
// console.log(typeof age);
// let isstudent=true;
// console.log(typeof isstudent);
// let x;
// console.log(typeof x);
// let id=symbol();
// console.log(typeof id);

// let a=10;
// let b=a;
// console.log("A :"+a);
// console.log("B :"+b);
// a=25;
// console.log("A :"+a);
// console.log("B :"+b);


//Reference type:
// let user={name:"vinith",age:22};
// let user2=user;
// console.log("user 1: ",user);
// console.log("user 2: ",user2);
// user.age=25;
// console.log("user 1: ",user);
// console.log("user 2: ",user2);

//Array:
// let arr1=[10,20,30];
// let arr2=arr1;
// console.log("Array 1;",arr1);
// console.log("Array 2;",arr2);
// arr1.push(40);
// console.log("Array 1;",arr1);
// console.log("Array 2;",arr2);

//Object clone use Spread and object. in javascipt
// const obj1 = {a: 1,b:2};
// const obj2 = {c: 3,d:4};

// const obj3 = Object.assign({},obj1,obj2);
// const obj3={...obj1,...obj2};
// console.log(obj3);

//Multiple ways to clone an array javascript:

//spread:
// let originalArray=[1,2,3];
// let clonedArray=[...originalArray];
// console.log(clonedArray);

//slice:
// let clonedArray=originalArray.slice();
// console.log(clonedArray);

//concat:
// let clonedArray=[].concat(originalArray);
// console.log(clonedArray);

//From:
// let clonedArray=Array.from(originalArray);
// console.log(clonedArray);

//JSON.parse(),JSON.stringify();
// let clonedArray=JSON.parse(JSON.stringify(originalArray));
// console.log(clonedArray);

const a=10;
console.log(a);
//a=25;

const users=["ram","sam","ravi"];
console.log(users);
users.push('tiya');
console.log(users);




  

 
 










 

 






