function Book(title, author, year) {
  (this.title = title), (this.author = author), (this.year = year);
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year of ${this.year}`;
  };
} 


//parent class: book
//child class: magazine 

function Magazine(title,author,year,month){
    Book.call(this,title,author,year);//book objesini buraya kopyaladık
    this.month=month;
};

const mag1 = new Magazine("scientific research","einstein",1932,"September");

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.price);

