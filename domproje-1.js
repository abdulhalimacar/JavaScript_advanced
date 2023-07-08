let random = Math.round(Math.random() * 100);
console.log(random);

let score = 10;
let topscore = 0; //globalde tanımlandığı için her sayfa yenilendiğinde eski değeri kaybolur

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
      topscore = score;
      document.querySelector(".top-score").textContent = topscore; //textcontent yerine innnerhtml veya inner text de yazabilirdik aynı işlevi görürdü...
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
