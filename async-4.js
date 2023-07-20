//senkron kodlar sırayla çalışır ama asenkron kodlar sırayla çalışmaz...

// fetch ile bir kaynağa istek talebi gönderiyoruz: get veri çekme isteğidi, post veri gönderme isteği veya put güncelleme içindir

let isError=false;
const getNews = async function () {
  //function kelimesinin önüne async kesinlikle eklenmesi gerekir...

  const API_KEY = "25fecc7fc7dd4985a889c7dee30c56cb"; //bunun sonunda b harfi var bilerek sildik ki suni hata olsun
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  




  try {  
    const res = await fetch(url); //await ile bekletiyoruz
    if (!res.ok){//burada gelen response başarılı ise veri gelmiştir ama değilse hata fırlat dedik
      isError = true;
      console.log(data.articles)
      // throw new Error(`something went wrong ${res.status}`) bunu kapatmasak resimi göremiyoruz kod bloklanıyor eğer hata varsa burada...yani hata varsa ve bu kod açıksa kod burada biter aşağılara geçmez...
      //res.status bize hatanın türünü verdi... 
    }
    const data = await res.json();//datayı json formata çevirip aşağıda okuduk...
    
    renderNews(data.articles);
    
  } catch(error){
    console.log(error);//401 hatası yazısı buradan geldi... 

  }
};


const renderNews = (news)=>{

  const newsList = document.querySelector("#news-list");

  if (isError){
    newsList.innerHTML += `<h2>news can not be fetched<h2/> <img src="https://www.alastyr.com/blog/wp-content/uploads/2020/11/bilgisayar-hatalari-nelerdir.jpg" alt="go"/>`;
  }
  news.forEach((item)=>{
    const {title,description,urlToImage,url} = item;

    newsList.innerHTML += `
    <div class="col col-sm-6 col-md-4 col-lg-3">
    <div class="card" style="width: 18rem;">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" target="_blank" class="btn btn-primary">Go details for news...</a>
  </div>
</div>
<div/>
    
    `;
   })
}


window.addEventListener("load",getNews);

// getNews();


//target = "_blank" yaparsak sayfayı harici bir yerde açar...


// console.log(data.articles);

// const get = async()=>{

// };

// console.log(data);
//await yazmdan bunu yazsaydık veri gelmeden okurdu ve boş dosya döndürürdü..