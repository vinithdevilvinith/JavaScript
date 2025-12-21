//Alert("Welcome to JS from external File");
 
// console.log("Welcome to JavaScript");
// console.log(123456);
// console.log(123456);
// console.log(15.4);
// console.log(true);
// console.log([25,34,53,55,76]);
// console.log({fname:'vinith',age:22});
// console.table({fname:'vinith',age:22});
// console.error("sample error");
// console.warn("sample warn");
// console.time("timer");
// console.timeEnd("timer");


//1. variable Declaration:

/*
1. var -1997
2015 E6
2. let
3. const
*/

// var a=34;
// var b=54;
// console.log(a+b);

//scope:
// if(true)   var is a Global Scope--->
// {
//     var msg="welcome to JS";
// }
// console.log(msg);

// if(true)  Let is a Local Scope--->
// {
//     let msg="welcome to JS";
//     console.log(msg);
// }
// console.log(msg);

// if(true)
// {
//     const msg="welcome to JS";   const also a Local Scope--->
//     console.log(msg);
// }
// console.log(msg);

//2. Variable Redeclaration:
/*
var a=25;       (Redeclare Aagum )
console.log(a)  
var a=45;
console.log(a)

let a=25;       (Redeclare Aagathu )
console.log(a)
let a=45;
console.log(a)

const a=25;      (Redeclare Aagathu )
console.log(a)
const a=45;
console.log(a)
*/

//3. Value Assignment;
/*
var a=25;
console.log(a);
a=35;
console.log();

let a=25;
console.log(a);
a=35;
console.log();

const a=25;
console.log(a);
a=35; //Constant Error
console.log();
*/

//const with object:
// const student={'name':"Ram","age":22};
// console.table(student)
// console.log(student.name);
// student.name='Vinith';
// console.table(student)

//Data Types in JS;  JS Dynamic Programing...
// Two type of Data types:
/*
Premitive Types:
string ex: alphabets in ""
Number ex: 1.23, 34
Boolean ex: True, False
Null
Undefined
Symbols E6

Reference types:
Array
Object Literals
Date
*/

//How to find the type of Variables:

// var a=23;
// console.log(typeof a);

// var fname="vinith";
// console.log(typeof fname);

// var isValid=true;
// console.log(typeof isValid);

// let b=null;
// console.log(typeof b);

// var r;
// console.log(typeof r);


// const s1=Symbol()
// console.log(s1);
// const s2=Symbol()
// console.log(s2);

// console.log(s1==s2);


// var courses=['c', 'c++', 'java'];
// console.log(typeof courses);

// var student={
//   name:'vinith',
//   age:22
// }
// console.log(typeof student);

// var d=new Date();
// console.log(d);
// console.log(typeof d);

// type conversion
/*
let a;
a=25;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);


a=25.4;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);


a=true;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=new Date();
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=[1,2,3,4,5];
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=24;
console.log(a,typeof a);
a=a.toString();
console.log(a,typeof a);

// string to Nnumber
a='125';
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a=false;
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a=[1,2,3,4,5];
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a='vinith';
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a='125';
console.log(a,typeof a);
a=parseInt(a);
console.log(a,typeof a);

a='125.6';
console.log(a,typeof a);
a=parseFloat(a);
console.log(a,typeof a);
*/

//Type coercion;

let a="25";
let b=10;
console.log(a+b);

a=Number(a)
console.log(a+b);





