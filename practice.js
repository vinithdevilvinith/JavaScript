/*
🔹 Q1 — for loop

📦 Shop la 10 products iruku.
👉 “Product 1 available” nu start panni
👉 “Product 10 available” vara print pannanum.

🔹 Q2 — for loop (numbers)

🚦 Traffic signal count
👉 1 to 20 la iruka
👉 even numbers mattum print pannu.

🔹 Q3 — while loop

🔋 Mobile charging
👉 battery = 15
👉 battery 100 aagura vara
👉 “Charging… battery: ___” nu print pannanum
👉 battery each time +15 increase aaganum

🔹 Q4 — while loop (user input)

🔐 Login system
👉 correct password = "admin"
👉 correct password type pannura vara
👉 prompt show aaganum

🔹 Q5 — do...while loop

🎮 Game play again option
👉 user "yes" nu type panna
👉 game repeat aaganum
👉 minimum 1 time game run aaganum


🧠 Practice Questions — if / else if (5)
🔹 Q1 — Age Check

👶👦👨
👉 age input vaangu

age < 13 → "Child"

age 13–19 → "Teenager"

age ≥ 20 → "Adult"





🔹 Q4 — Mobile Battery Status

🔋
👉 battery percentage input vaangu

battery ≥ 80 → "Battery Full"

battery ≥ 40 → "Battery Medium"

battery ≥ 15 → "Low Battery"

battery < 15 → "Charge Now"

🔹 Q5 — Login Role

🔐
👉 username input vaangu

"admin" → "Welcome Admin"

"user" → "Welcome User"

else → "Invalid User"
*/

// for(let i=1;i<=10;i++){
//     console.log('product '+i+' Available');
// }

// for(let i=1;i<=20;i++){
//        if(i%2==0){
//        console.log(i);
//        }
// }

// battery=15;
// while(battery<=100){
//     console.log(battery);
//     battery = battery+15;
   
// }

// pass=prompt("Enter the Password:")
// while(pass=='admin'){
//     console.log("pass");
// }

// let correctPassword = "admin";
// let userPassword = prompt("Enter password:");

// while (userPassword !== correctPassword) {
//   userPassword = prompt("Wrong password! Enter again:");
// }

// alert("Login Successful ✅");

// let correctPassword = "admin";
// let userPassword = "";
// let count = 1;

// while (userPassword !== correctPassword) {
//   userPassword = prompt("Attempt " + count + ": Enter password");
//   count++;
// }

// alert("Login Successful ✅");


// let choice;

// do {
//   console.log("🎮 Game is running...");

//   choice = prompt("Play again? (yes / no)");
// } while (choice === "yes");

// console.log("Game Over");


// let age=prompt('enter the age: ');
// if(age<=13){

//  console.log("children")
// }
// else if(age>13 && age<19){
//   console.log("Teenager");
  
// }
// else{
//   console.log('Adult');
  
// }
// console.log();


// 🔹 Q2 — Traffic Signal

// 🚦
// 👉 signal input vaangu ("red", "yellow", "green")

// red → "Stop"

// yellow → "Get Ready"

// green → "Go"

// let signal =prompt("Enter the Singal: ")

// if(signal==='red'){
//   console.log('stop');
//   ;
// }
// else if(signal==='yellow'){
//   console.log('get Ready');
  
// }
// else if(signal==='green'){
//   console.log('go');
// }

// else{
//   console.log('invalid input');
  
// }

// 🔹 Q3 — Marks Result

// 📚
// 👉 marks input vaangu

// marks ≥ 90 → "Grade A"

// marks ≥ 75 → "Grade B"

// marks ≥ 50 → "Grade C"

// marks < 50 → "Fail"


// let username = "admin";
// let password = "134";

// if(username=='admin'){
//   console.log("Login Successfull");
// }
// else if(password!=='admin'){
//   console.log("Invalid User");
  
// }
// else if(password=='1234'){
//   console.log("Login Successfull");
// }
// else if(password!=='1234'){
//   console.log("wrong password");
  
// }


let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} 
else if (username === "admin") {
    console.log("Wrong password");
} 
else {
    console.log("Invalid user");
}
