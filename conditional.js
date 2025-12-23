/*
if(condition){
-----
}
else{
    ------
}
 */
//IF & Else Statement:

// let age=prompt("Enter the Age: ")
// if(age!=null && age>=18)
// {
//     console.log("You are Eligible For Vote..");   
// }
// else
// {
//  console.log("You are Not Eligible for Vote");
    
// }
   
// // Else if Statement:
// /*
// if (Condition)
// {
//  --------
// }
//  else if (codition)
//  {
//   ---------
//  }
// else
// {
//  --------
// }
//  */

// // Example 1

// let number=1;

// if (number<0)
// {
//     console.log(number, 'is Negative Number'); 
// }
// else if(number>0)
// {
//     console.log(number, 'is Positive Number');
// }
// else
// {
//     console.log('Given Number is Zero');  
// }

// //Example 2
// /*
// avg=67;
// 90 - 100 A Grade
// 80 - 89 B Grade
// 70 - 70 C Grade
// <70 D Grade
// */

// let Avg=prompt('Enter the Mark to Get a Grade: ')
// if(Avg>=90 && Avg<=100)
// {
//     console.log('You are A Grade🎉');
// }
// else if(Avg>=80 && Avg<=89)
// {
//     console.log('You are B Grade🙂');  
// }
// else if(Avg>=70 && Avg<=79)
// {
//     console.log('You are c Grade🥲');  
// }
// else
// {
//     console.log('You are D Grade💔');
// }

//Nested if Condition:
/*
if(cond)
{
    if(cond)
    {

    }
}
min mark >=35 Pass NO Grade
91 - 100 A Grade
81 - 90 B Grade
71 - 80 C Grade
<70 D Grade
*/

// let english=100,tamil=100,maths=99;
// let total,avg;
// total=english+tamil+maths;
// avg=total/3;
// console.log('Total :'+total);
// console.log('Average :'+avg.toFixed(2));

// if(english>=35 && tamil>=35 && maths>=35)
// {
//     console.log('Result : Pass');
//     if(avg>90 && avg<=100)
//     {
//         console.log('Grade : A Grade');
//     }
//     else if(avg>80 && avg<=90)
//     {
//         console.log('Grade : B Grade');
//     }
//     else if(avg>70 && avg<=80)
//     {
//         console.log('Grade : C Grade');
//     }
//     else
//     {     
//         console.log('Grade : D Grade');
//     }
// }
// else
// {
//     console.log('Result : Fail'); 
// }

//Switch Statement:
/*
Switch(choice)
{
case choice:
    -------
    break;
case choice:
    -------
    break;
case choice:
    -------
    break;
}
*/

// let num=2;
// switch(num)
// {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default :
//         console.log('Invalid');
//         break;     
// }

// //Combining Switch case Statement;
// let letter="a";

// switch(letter)
// {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(letter+" is a Vowel");
//         break;
//     default:
//         console.log(letter+" is Not a Vowel");  
// }

//Looping Statement:
//While Loop;
/*
while (Condition){
  code Execute
}
*/

// let i=1;  //1  initialize
// while(i<=10){   //1>=10 2<=10 11<=10 false  condition Check
//     console.log(i);// 1 2 3
//     i++;// 2 3 4 5 6 7 8 9 10 11
    
// }

//Do While Loop:
// do{
//     //code to be executed if the condition is true
// }while(condition);

// let table=3;limit=5;i=1;

// do{
//     console.log(table+'X'+i+"="(table*i));
//     i++;//2
// }while(i<=limit);//2<=5 3<=5

// For Loop:
/*
for(initialize variable; condition;statement){
   // code to be Executed
}
*/

// for(i=1;i<=10;i++)
// {
//     console.log(i);   
// }

// let arr=[];
// for(i=0;i<100;i+=3)
// {
//     arr.push(i);
// }
// console.log(arr);
// console.log(arr[33]);

// // //Nested For Loop:
// let nums=[];
// for(let i=0;i<3;i++) //i=0 0<3 1<3
// {
//     nums.push([]); //nums[0] nums[1]
//     for(let j=0;j<3;j++)
//     {
//         nums[i].push(j)// num[1]={0,1,2}
//     }
// }
// console.log(nums);
// console.table(nums);


// let a = [];
// a.push([]);     // row
// a[0].push(10);  // column
// console.log(a);

// //For of Loop:
// let names = ['Tiya','vani','vinith','vinitha','jothika'];

// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i]);
    
// }

// console.log('For of Loop :');

// for(let v of names){
//     console.log(v);
// }

// // For in Loop:
// let user = {
//     name: "Vinith",
//     age: 22,
//     city: 'Salem',
//     contact:'9876543210'
// };

// for(let prop in user)
// {
//     console.log(prop+" : "+user[prop]);
    
// }

//Looping over objects by converting to an array

let user = {
    name: "Vinith",
    age: 22,
    city: 'Salem',
    contact:'9876543210'
};

let arr_keys=Object.keys(user);
console.table(arr_keys);
let arr_values=Object.values(user);
console.table(arr_values);

for(let i=0;i<arr_keys.length;i++)
{
    console.log(arr_keys[i]+' : '+arr_values[i]);
    //console.log(user[arr_keys[i]]);   
}

// Break Statement:

for(let i=0;i<=10;i++)
{
    console.log(i);
    if(i==4){
        break;
    }   
}

// Continue Statement:
for(let i=0;i<=10;i++)
{
  
    if(i==5){
        continue;
    }
      console.log(i)
}

for(let i=0;i<=10;i++)
{
  
    if(i%2==0){
        continue;
    }
      console.log(i)
}


//Label Block in JavaScript:
let groups = [
    ['Ram','Sam','Ravi'],
    ['Kumar','Tiya','Sundar'],
    ['Rajesh','Sara','Rahul'],
];

for(let group of groups)
{
    inner:
    for(let member of group)
        {
            if(member.startsWith('R')){
                console.log('Found one Starting with R:',member);
                break inner;
            }    
        }
}
