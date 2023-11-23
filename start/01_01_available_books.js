// Write your code here
// create a book class title autho isbn 
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies =numCopies
  }

  get availabililty() {
    console.log('get availability');
    this.getAvailability();
  }
  getAvailability() {
    if( this.numCopies === 0) {
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock';
    } else {
      return 'in stock'
    }
  }
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold
  }
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzane Collins", 12345989, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());