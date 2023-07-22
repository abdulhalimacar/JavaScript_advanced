//ES6-İLE OBJE CREATE

//class tanımı
class Book {
    constructor(title,author,year){
        this.author = author;
        this.title = title;
        this.year = year;;
    }

    //bu kısımda yazılan fonksiyonlar protype manasında bulunur
    getAge(){
        return new Date().getFullYear()-this.year;
    }

    getSummary(){

        return `${this.title} was written by ${this.author} in the year of ${this.year}`;
    }
}

//şimdi instance tanımı
const book1 = new Book("kusağı","ömer seyfettin",1888);
console.log(book1);
console.log(book1.getAge());


//subclass>>>book clasından magazine adında yeni bir class oluşturacağız...

class Magazine extends Book{

    constructor(title,author,year,month){
        super(title,author,year)
        this.month = month;
    };
};

const mag1 = new Magazine("science","einstein",1926,"sep");
console.log(mag1);
console.log(mag1.getAge());