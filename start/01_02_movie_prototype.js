// Write your code here
class Movie {
  constructor(title, director, genre, release, year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.release = release;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.release}. It received a rating of ${this.rating}`;
  }
}

const StarWarsIV = new Movie("Star Wars IV", "Sci-fi", 1974, 8.9);
const StarWarsV = new Movie("Star Wars V", "Sci-fi", 1978, 8);
const StarWarsVI = new Movie("Star Wars VI", "Sci-fi", 1982, 9);

console.log(StarWarsIV.getOverview());
console.log(StarWarsV.getOverview());
console.log(StarWarsVI.getOverview());