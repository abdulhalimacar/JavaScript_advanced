//parse:derlemek>ete kemiğe büründürmek demektir!!!

/*bu seçimle onu getirip rengini değiştirebiliriz
document.getElementById("header")

<header id=​"header">​…​</header>​<h1>​DOOM​</h1>​</header>​
*/

/*şu şekil rengini değiştirdik

document.getElementById("header").style.color="green"

*/

/*class name göre de seçebilirsin

document.getElementsByClassName("header")>>bu bize dizi olarak sonuç döndürür dolayısılya seçme işlemini şöyle yaparız:
document.getElementsbyClassName("header")[0]

bunun background color değiştirilebilir:
document.getElementsbyClassName("header")[0].style.background="green"

*/

/* 
document.getElementsByTagName("ul")>bana tüm ul etiketlerini getir demektir>bu bize html collection yani dizi olarak sonuç döndürür dolayısıyla seçme işlemi indis ile yapılır

document.getElementsByTagName("ul").style.border="1px solid red"
*/

/*

h1'in class adını değiştirmek istiyorum:
h1.id = "go"
h1'in yeni id'si go dur artık..
*/

/* 
h1.style.fontSize="5rem"
*/

//example-1
const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "green";
h1.style.backgroundColor = "wheat";

/* 
h1.style.width 
h1.style.borderRadius
h1.style.border
h1.style.padding
h1.style.color
h1.style.background=h1.style.backgroundColor
*/

//example-2
const list = document.getElementsByTagName("li"); //tüm li'leri seçtik burada
console.log(list);
list[2].style.color = "red";
list[0].style.fontSize = "5rem";
list.item(1).style.fontSize = "3rem"; //item da kullanılabilir dikkat!

const elementthreee = list.item(3);
elementthreee.style.color = "blue";
elementthreee.textContent = "React/Vue/Angular";

list.item(2).textContent = "C/ C++ / Assembly";
list.item(2).style.color = "green";

list.item(1).textContent = "Python / Django / Flask";
list.item(1).style.color = "wheat";

//innerhtml güvenli değildir çünkü müdaheleye açık hale geliyor bunun yerine textContent kullanmak daha mantıklı

const list2 = document.getElementsByClassName("list");
console.log(list2);

for (let i = 0; i < list2.length; i++) {
  console.log(list2[i]);
}

const mylistarray = Array.from(list2);
console.log(mylistarray);
console.log(mylistarray[0]);
console.log(mylistarray[0].innerText); //çok güzel bir örnek buna bak
mylistarray.forEach((p) => console.log(p));
mylistarray.forEach((p) => console.log(p.innerText));

//not:biz html collectionları normal for döngüleri ile dolaşamayız yani onları düz for ile yazdıramayız. 1.yol array from metodudur ikinci yol spread metodudur

//spread
[...mylistarray].forEach((p) => console.log(p.innerText));

[...mylistarray].forEach((p) => (p.style.color = "blue"));

//QUERYSELECTOR()
//queryselector ile class,id vesaire hepsini seçmeye izin verir

const mylis = document.querySelector("li");
console.log(mylis); //akışta gördüğü ilk li'yi seçer
console.log(mylis.innerText);
mylis.style.color = "wheat";

const headerr = document.querySelector("#header");
console.log(headerr);
console.log(headerr.innerText);

//QUERYSELECTORALL()

const listtt = document.querySelectorAll("ul li");
console.log(listtt); //nodelist döndürür bu nodelist html collect list'e benzemekle birlikte aynı değiller
//html collectiov ve nodelist tam dizi değillerdir array-like dırlar

listtt.forEach((p) => console.log(p));
listtt.forEach((p) => console.log(p.innerText));

console.log(document.querySelectorAll("section ul li:nth-child(3)")[0].innerText);
