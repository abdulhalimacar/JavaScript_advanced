//example

const list = document.querySelectorAll(".list");

list.forEach((p) => {
  p.style.transition = "all 0.5s";
  //   p.style.transition = "font-size 1s";

  //   p.style.transition = "transform 0.8s, font-size 1s";
  p.style.lineHeight = "2rem";

  p.onmouseover = () => {
    p.style.fontSize = "2rem";
    p.style.transform = "translateX(10px)"; //10px kayar üzerine gittiğimizde eğer biz bunu mouseout'a eksi 10 olarak uygulamazsak yerine dönmez mousout olduğu zaman
  };

  p.onmouseout = () => {
    p.style.fontSize = "1rem";
    p.style.transform = "translateX(-10px)";
  };
});

//sayfa yeniden yüklendiğinde input box'a odaklansın...

window.onload = function () {
  document.querySelector("#input").focus();
};

//id javascript için verilit
//class lar ise styling yani css için verilir

//input'u tanımlama

const input = document.querySelector("#input");
console.log(input);

//add butonunu tanımlama
const add = document.querySelector("#btn");
console.log(add);

//delete butonunu tanımlama
const delet = document.querySelector("#deletebtn");
console.log(delet);

//langlist tanımlama
const langlist = document.querySelector("#lang-list"); //id olduğu için burada getelementbyid olarak alabilirdik
console.log(langlist);

const neuUl = document.createElement("ul"); //yeni bir element oluşturma
langlist.appendChild(neuUl); //yeni oluşturulan ul langlistin hemen altına child olarak atadık

//şimdi add butonuna tıkladığımız zaman ul nin altına li olarak gitmesi lazım girilen şeylerin

add.addEventListener("click", () => {
  if (input.value === "") {
    alert("please enter a language");
  } else {
    //eğer biz + eklersek aşağıya artık eskisini silmez

    neuUl.innerHTML += `<li>${input.value}</li>`; //innerhtml kısa ama güvenli değildir...
    input.value = ""; //ekledikten sonra input box'ın içerisindeki şeyi siler
  }
  input.focus(); //ekledikten sonra inputa focuslanmak için
});

// focus için addevenlistener

/*
window.addEventListener("load",()=>{
    input.focus();
});
*/

//şimdi delete butonunu yapıyoruz! ul nin childlarından en sonuncusunu silecez
delet.addEventListener("click", () => {
  neuUl.childElementCount > 0
    ? neuUl.removeChild(neuUl.lastElementChild)
    : alert("there is no item to delete");
  neuUl.removeChild(neuUl.lastElementChild); //silecek eleman kalmadığı zaman delete yaparsak arka tarafta hata verir!!! bunun için yukarıda çocuk sayısını döndürebiliriz: neuUl.childElementCount>0
});

//örneğin ben add işlemini enter ile yapmak istiyorum
//keydown tuşa basıldığında

input.addEventListener("keydown", (event) => {
  // console.log(event);
  // console.log(event.target);
  /*console.log(event.code);*/ //enter'e bastığımız zaman enter gözükür console da
  //  console.log(event.keyCode); buradan anlıyoruz ki enter ın key codu 13 tür

  if (event.keyCode === 13) {
    add.onclick(); //entera basılırsa add butonunun onclick fonksiyonunu çağır demektir bu kod...
  }

  if (event.code === "Delete") {
    delet.click();
  }
});

//silme işlemini delete tuşuyla yapmak istiyorum
