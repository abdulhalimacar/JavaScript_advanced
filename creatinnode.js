console.log("CREATE A NODE");

const newp = document.createElement("p");
newp.id = "new-par";//id'i verdik
newp.setAttribute("class","new-class");//new-class clasın adı
const text = document.createTextNode("this is a new p");
newp.appendChild(text);
console.log(newp);
//buraya kadar sıfırdan bir node oluşturduk ama daha bu nodun yeri/konumu/ikameti belli değil. ben bu newp elementini item listin altına koymak istiyorum

const h2 = document.querySelector(".item-list h2");//item listin altındaki h2'yi seçtik
console.log(h2.innerText);

h2.after(newp)//h2'nin hemen sonrasına

//
console.log(newp.classList.contains("par"));//newp de par diye bir class var mı?
newp.classList.add("new-class");//newp'ye yeni bir klas atadık
console.log(newp);
newp.classList.remove("new-class");//
console.log(newp);
