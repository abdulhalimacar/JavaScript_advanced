const book = {
    title:"the karamazov brothers",  
    author:"dossoyevski",  
    year:1886, 
    getsummary: function(){//burada görüldüğü üzere expression ile fonksiyonu yazdık çünkü arrow yazsaydık içeride this ifadesini kullanamazdık...  
        return `${this.title} was written by ${this.author} in the year of ${this.year}`
    }
};

console.log(book);

console.log(book.getsummary());

//obje türetecek fonksiyon = objection constructor... == aslında burada biz bir kalıp oluşturduk
function Book(title,author,year){

    this.title = title,
    this.author = author,
    this.year = year
    this.getSummary = function(){

        return `${this.title} was written by ${this.author} in the year of ${this.year}`;
    };
};


const book1 = new Book("1984","george orwell",1900);//bunun adı instancedır
const book2 = new Book("eylül","rauf orbay",1970);//bunun adı instancedır 

console.log(book1);

//book1'e olmayan bir şey ekleyelim
// book1.price=100;
// console.log(book1);

//kitabın yaşını hesapla>>global alan>protype demektir...

Book.prototype.getage = function(){

    return new Date().getFullYear() - this.year;
};

console.log(book1.getage());

//hepsinin fiyatını 100 yapalım>protype ile yapacaksın bunu...

Book.prototype.price =300;
console.log(book1);
console.log(book2.price);

console.log(Book.prototype);
console.log(book1.__proto__);