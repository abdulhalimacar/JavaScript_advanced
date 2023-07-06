//mouseover

//events üzerine geldiğimizde renk değişsin
//header'ın içerisindeki h1 = header'ın firstelement childı diyerek 2 yolla seçebiliriz

const h1 = document.querySelector("#header h1");//headerın içerisindeki h1'i seç
console.log(h1);

h1.onmouseover = function(){

    h1.style.color="red";
    h1.style.fontWeight = "100";

}

h1.onmouseout = ()=>{

    h1.style.color="black";
    h1.style.fontWeight="900";
}

h1.addEventListener("click",()=>{
    alert("h1 pressed");
})

//getelementbyid sadece id seçer
document.getElementById("btn").addEventListener("click",function(){
       const input = document.querySelector("#input");
    //    if(!input.value){
    //     alert("please enter an item");
    //    }else{
    //     alert(`${input.value} entered`);
    //    }

    /*!input.value ? alert("please enter an item"):alert(`you have ${input.value} entered`)*/

    input.value
      ? alert(`you have ${input.value} entered`)
      : alert("please enter an item");

      input.value="";//add'e tıkladıktan sonra girilen değerin gitmesi için bunu yaptık
});