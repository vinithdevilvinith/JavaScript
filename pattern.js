for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for(let i=1;i<=4;i++){
  console.log("hello"); 
}

for(let i=2; i<=10;i+=2){
  console.log(i);
}

let names=['ram','hari','vinith'];
for(i=0;i<names.length;i++){
  console.log(names[i]);
  
}

sum=0;
for(let i=0;i<=10;i++){
  sum+=i;
}
console.log(sum);

t=2;
for(i=1;i<=10;i++){
  console.log(i+ "x"+t +"="+(i*t));
  
}

p="";
for(let i=1;i<=4;i++){
  p += "*";
  console.log(p);
}

out="";
for(let i=1;i<=5;i++){
  out+=i;
  console.log(out);
  
}

let fruits=['mango','apple','orange'];

for(let fruit of fruits){
  console.log(fruit);
  
}

for(i=10;i>0;i--){
  console.log(i);
}

for(i=1;i<=20;i+=2){
  console.log(i);

}

 table=5;
for(i=1;i<=10;i++){
  console.log(i+'X'+table+'='+(i*table));
}

for(let i=5;i>=1;i--){
  let f='';
  for(let j=1;j<=i;j++){
    f += '*'; 
  }
  console.log(f);
}