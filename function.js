// // Math Function:
// let c;
// c=Math.PI;
// c=Math.E;
// c=Math.round(5.6);
// c=Math.floor(5.4);
// c=Math.ceil(5.3);
// c=Math.sqrt(90);
// c=Math.abs(-35);
// c=Math.trunc(2.58);
// c=Math.pow(2,4);
// c=Math.max(1,2,4,5,7);
// c=Math.min(1,2,4,5,7);
// c=Math.random();
// c=Math.floor((Math.random()*50+1));
// c=Math.sign(25);
// c=Math.sin(45);
// c=Math.cos(45);
// c=Math.log(45);
// c=Math.log2(45);

// console.log(c);

//Javascript String method:


// let first_name="Vinith"
// let last_name='kumar'

// //concatenation:
// let c=first_name+" "+last_name;
// console.log("concatenation: "+c);

// //concat;
// c=first_name.concat(' ',last_name);
// console.log("concat: "+c);

// //append;
// c='vinith ';
// c+='kumar';
// console.log("append: "+c);

// //escaping:
// c='she can\'t run';
// console.log(c);

// //length
// c=first_name.length;
// console.log("length: "+c);

// //change case
// c=first_name.toUpperCase();
// console.log("toUpperCase; "+c);

// c=last_name.toLowerCase();
// console.log("toLowerCase; "+c);

// //indexof
// c=first_name.indexOf('i');
// console.log("indexof: "+c);

// c=first_name.lastIndexOf('i');
// console.log("lastindexof: "+c);

// c=first_name.charAt(1);
// console.log('charAt; '+c);

// c=first_name.charCodeAt(1);
// console.log('charcodeAt: '+c);


// c=first_name.substr(0,3);
// console.log("substr: "+c);


// //substring:
// let text = '0123456789';
// c=text.substring(0,4)
// console.log("substring: "+c);

// c=text.substring(4);
// console.log("substring: "+c);

// c=text.substring(4,0)
// console.log("substring: "+c);


// c=text.substring(45,23);
// console.log("substring invalid length: "+c);

// c=text.substring(-3);
// console.log(c);


// //slicing:
// c=text.slice(2,4);
// console.log("slice: "+c);

// c=text.slice(4,2);
// console.log("slice: "+c);

// c=text.slice(45,23);
// console.log("slice: "+c);

// c=text.slice(-3);
// console.log("slice: "+c);

// //split;
// let a="vinith kumar from salem";
// c=a.split(' ')
// console.log('split: '+c);
// console.table(c);

// // replace:
//  a="I am From Salem";
//  console.log("Before replace :"+a);
//  c=a.replace('salem','Erode');
//  console.log("after replace :"+a);

//  //includes;
//  const pets = ['cat','dog','bat'];
//  console.log(pets.includes('cat'));
//  console.log(pets.includes('rat'));


// //  Trim
// a= ' vinith ';
// console.log('Before trim; '+a.length);
// a=a.trim();
// console.log('After trim; '+a.length);

// //padstart padend;
// a='5';
// a=a.padStart(5,0);
// console.log(a);

// b="3"
// b=b.padEnd(4,0);
// console.log(b);

// // long literals
// let longString="Lorem, ipsum dolor sit amet consetur adipisicmo earum quo magnam suscipit iusto omnis!"+
// "Lorem, ipsum dolor sit amet consetur adipisicmo earum quo magnam suscipit iusto omnis"+
// "Lorem, ipsum dolor sit amet consetur adipisicmo earum quo magnam suscipit iusto omnis!";
// console.log(longString);

// //fromcharcode:

// console.log(String.fromCharCode(65,66,67));

// // functions in JS
// //Function with a return statement:
// function add(a,b){
//     return a+b;
// }
// console.log(add(12,12));
// console.log(add(33,22));

//Functions with Arbitary Arguments:

function sum()
{
    total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]//total=total+arguments
    }
    return total;

}
console.log(sum(12,12,12,12));

//Spread operator:
function total(...args){
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i];//total=total+arguments[i];
    }
    return total;
}
console.log(total(12,12,12,12));

 
 
 
 
