//bulunduğumuz yerin bir üstü veya bir alta gitmek istersek traversing kullanırız...

//yukarı yönde:parent
//aşağı yönde:children
//yatay yönde:sibling

//YUKARI YÖNLÜ SEÇİM, PARENT
const list = document.querySelector(".list");
console.log(list.parentNode);
const ul = list.parentNode;
ul.style.border = "2px solid red";

//listenin ikinci atası kimdir?
console.log(list.parentNode.parentNode);//1.yol
console.log(list.closest("section"));//2.yol

//AŞAĞI YÖNLÜ CHILDREN TRAVERSİNG

const additem = document.querySelector(".add-item");
console.log(additem);
console.log(additem.children);
const h2 = additem.children[0];
h2.style.color = "green";

console.log(additem.parentNode.parentNode);
console.log(additem.parentNode.parentNode.children[0]);

//YATAY YÖNDE SİBLİNG>YAN YANA OLAN ELEMENT SEÇİMİNDE KULLANILIR

const mylist = ul.children;
console.log(mylist);

const java = mylist[2];//javascripti getirmek istiyorum
console.log(java);
//ben javayı seçtim ama css ve c yi değiştirmek istiyorum?
const css = java.previousElementSibling;
console.log(css);
console.log(css.innerText);//evet css'e ulaşmayı başardık

const C = java.nextElementSibling;
console.log(C);
console.log(C.innerText);

//arka arkaya previous kullanmak uygun mudur?
console.log(java.previousElementSibling.previousElementSibling.innerText);

//
console.log(ul.firstChild.innerText);












