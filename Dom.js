// console.log(document);
// document.title= "vinith, salem";
// document.bgColor="green";

//Accessing the Dom:
/*
document.getElementById()    returns as element Object
document.getElementsByClassName()  returns an HTMLCollection
document.getElementsByTagName()    returns an HtmlCollection
document.querySelector()           returns an element object
document.querySelectorAll()        returns an NodeLists
*/

// let brand = document.getElementById("brand");
// console.log(brand);
// console.log(brand.nodeType);
// console.log(brand.nodeName);
// brand.style.backgroundColor = "purple";
// brand.style.color = "white";

//  let stitle = document.getElementsByClassName("sub-title");
//  console.log(stitle);

//  stitle[0].style.color = "red";

//  stitle[1].style.color = "red";


// stitle.forEach(element) => {
//     element.style.color = "blue";
// });


// for (let i = 0; i< stitle.length; i++){
//     stitle[i].style.color = "blue";
// };

// let para = document.getElementsByTagName("p")

// for (let i = 0; i< para.length; i++){
//     para[i].style.color = "purple";
// };

// let heading = document.querySelector('h1');
// console.log(heading);
// heading.style.color = "orange";

// let qpara = document.querySelectorAll("p")
// console.log(qpara);
// qpara.forEach((element)=>{
//     element.style.color = "brown"
// });


// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li.length);
// let element = document.createElement('li');
// element.innerHTML = "Python";
// li[0].parentNode.appendChild(element);
// console.log(li);
// console.log(li.length);
// for (let i = 0; i<li.length; i++){
//     li[i].style.color = 'orange';
// }


// let li = document.querySelectorAll('li');
// console.log(li);
// console.log(li.length);
// let element = document.createElement('li');
// element.innerHTML = "Python";
// li[0].parentNode.appendChild(element);
// console.log(li);
// console.log(li.length);
// li.forEach((element)=>{
//     element.style.color = "brown"
// });

// let li = document.querySelectorAll('li');
// console.log(li);
// console.log(li.length);

//DOM Traversal:
// const para = document.getElementsByTagName("p");
// console.log(para);
// const parent = para[0].parentNode;
// console.log(parent);
// parent.style.backgroundColor = "green";
// parent.style.padding = "10px"


// const head = document.getElementsByTagName("h1");
// console.log(head);
// const pare = head[0].parentNode;
// console.log(pare);
// pare.style.backgroundColor = "palegreen";
// pare.style.padding = "10px"

// //firstchild
// const firstchild = parent.firstChild;
// console.log(firstchild);
// //lastchild
// const lastchild = parent.lastChild;
// console.log(lastchild);

// //firstElementChild
// const firstElementChild  = parent.firstElementChild;
// console.log(firstElementChild);

// //lastElementChild
// const lastElementChild  = parent.lastElementChild;
// console.log(lastElementChild);

// const section = document.getElementsByTagName("section")[0];
// console.log(section.firstChild);
// console.log(section.firstElementChild);
// console.log(section.lastChild);
// console.log(section.lastElementChild);

// console.log(head[0].firstChild);
// console.log(head[0].firstElementChild);
// console.log(head[0].lastChild);
// console.log(head[0].lastElementChild);


// const div = document.getElementsByTagName('div')[0];
// console.log(div);
// console.log(div.children[0]);
// console.log(div.children[1]);


//siblings:
// const p = document.getElementsByTagName('p')[0];
// console.log(p);
// console.log(p.previousSibling);
// console.log(p.previousElementSibling);

// const h2 = document.getElementsByTagName('h2')[0];
// console.log(h2);
// console.log(h2.nextSibling);
// console.log(h2.nextElementSibling);

// const section = document.getElementsByTagName("section")[0];
// console.log(section);
// console.log(section.previousSibling);
// console.log(section.previousElementSibling);
// console.log(section.nextSibling);
// console.log(section.nextElementSibling);


//closest:
// const h1_tag = document.querySelector("h1");
// console.log(h1_tag);
// const section = h1_tag.closest("section");
// console.log(section);

// section.style.background = "purple";


//Dom functions insertBefore,Appendchild ... etc..
// let para = document.createElement('p');
// para.innerText = "This is a Sample Paragraph";
// para.innerHTML = "This is a <i>Sample Paragraph</i>";
// para.style.color = "brown";

// const body = document.querySelector("body");
// body.appendChild(para)

// let h1 = document.createElement('h1');
// h1.innerHTML = "this is Heading";
// h1.style.color = "red";
// body.insertBefore(h1, para);


const removeBtns = document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn)=>{
    btn.addEventListener("click", function(){
        const tr = this.parentNode.parentNode;
        // tr.remove();
        let td = tr.childNodes[1];
        console.log(td);
        tr.removeChild(td)
        
    });
});

//Dom Functions innerhtml,innertext ...etc :
const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.backgroundColor = "palegreen";
h1.style.padding = "20px";

h1.innerText = "Learn more be smart";
h1.innerHTML = "Learn more <i>be smart</i>";

const body = document.querySelector("body");
let cloneH1 = h1.cloneNode(true);
let cloneH2 = h1.cloneNode(false);
body.appendChild(cloneH1);
body.appendChild(cloneH2);

// function sayHello() {
//     let clone = h1.cloneNode(true);
//     body.appendChild(clone);
// }

// setInterval(sayHello,2000);
let clockDiv = document.querySelector(".clock");
clockDiv.style.fontsize = "30px"
function clock() {
    const date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());

const time=date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + " : " + date.getMilliseconds();
    const div = document.createElement("div");
    clockDiv.innerHTML = time;
}
setInterval(clock,1000)








