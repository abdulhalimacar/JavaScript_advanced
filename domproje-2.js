let random = Math.round(Math.random() * 100);
console.log(random);

let score = 10;
let topscore = localStorage.getItem("topscore") || 0; //okuma işlemini yaptık getitem ile...topscore içinde birşey varsa ata eğer yoksa sıfır ata//bu bizim lokalimizde olan bilgidir bizim bunun kullanıcının görmesi için doma'a atmamız lazım bunu da document.queryselector ile yapabiliriz...!

document.querySelector(".top-score").textContent = topscore;

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessinput = Number(document.querySelector(".guess-input").value); //biz bu guessinput değişkenini burada local yaptık daha efektif bir bellek kullanımı için;;;
  console.log(guessinput); //girilen değeri gördük clg ile

  if (!guessinput) {
    document.querySelector(".msg").innerText = "Please enter a number";
  } else if (random === guessinput) {
    // document.querySelector(".msg").innerText = "Congrats! You won!..";
    document.querySelector(
      ".msg"
    ).innerHTML = `Congrats! You won...<i class="fa-regular fa-face-grin-wink fa-3x"></i>`; //innertext olmaz innerhtml olur.fa 3x ile büyüttük
    document.querySelector("body").style.background = "green";
    document.querySelector(".check-btn").disabled = true;

    if (score > topscore) {
      localStorage.setItem("topscore", score); //localstoragın setitem metoduyla topscore değişkenine scoru ata dedik burada ama sadece bunu yazarsak topscore bilgisi dom'a gitmez..
      document.querySelector(".top-score").textContent = score; //textcontent yerine innnerhtml veya inner text de yazabilirdik aynı işlevi görürdü...
    }

    document.querySelector(".secret-number").textContent = random;
  } else {
    score--; //score--; her ikisi aynıdır
    if (score > 0) {
      guessinput > random
        ? (document.querySelector(
            ".msg"
          ).innerHTML = `DECREASE<i class="fa-solid fa-arrow-trend-down"></i>`)
        : (document.querySelector(
            ".msg"
          ).innerHTML = `INCREASE<i class="fa-solid fa-arrow-trend-up"></i>`);
    } else {
      document.querySelector(
        ".msg"
      ).innerHTML = `You lost...<i class="fa-solid fa-face-sad-tear fa-2x"></i>`; //innertext normalde ama şimdi innerhtml yapmalıyız
      document.querySelector("body").style.background = "red";
      document.querySelector(".check-btn").disabled = true;
    }
    document.querySelector(".score").textContent = score;
  }
});

//again butonuna tıklandığında oyun başlangıç değerlerine kur

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  random = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(random);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").style.background = "black";
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting...";
});

//enter tuşunu bağlama

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click(); //check butonunun click fonksiyonunu çalıştır demektir
  }
});

/*
obj = {a:1,b:2,c:3};
localstorage = localStorage.setItem("objem",JSON.stringify(obj));//local storage item ekledik
const readobj = localStorage.getItem("objem");//bize string olarak obje döndürür
const readOBJ = JSON.parse(localStorage.getItem("objem"));
console.log(readOBJ);
console.log(typeof readOBJ);
console.log(readobj);
console.log(typeof readobj);
*/
