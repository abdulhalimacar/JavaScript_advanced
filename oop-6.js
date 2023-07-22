class Book {

    #id = "123456";//private değişken tanımladık bunu biz ancak yazacağımız bir metotla göstericiye gösteririr...

constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.getTitle = function (){

        return this.title;
    }
  }

  //getId bir getter metottur... dışarıya kapalı olan birşeyi dışarıya açıyoruz bununla...getId içerisine kompleks bir logic koyabiliriz...örneğin gelen kullanıcı şuradan geldiyse okuyabilirsin diyebiliriz gibi...
  getId(){
    return this.#id; 
  };


  //dışarıdan değiştirmek için de setter lar kullanılır...
  setId(id){
    this.#id = id;
  }

};

const book1 = new Book("simyacı","paoloo cello",1999);

console.log(book1.getId());

//hata verir bize
// book1.#id = "1111";

book1.setId("578112");

console.log(book1.getId());