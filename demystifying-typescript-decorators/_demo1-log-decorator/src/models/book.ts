
import Rating from './rating';

export default class Book {
  title: string;
  publisher: string;
  ratings: Rating[] = [];

  // executed when new Book is invoked
  constructor(title: string, publisher: string) {
    this.title = title;
    this.publisher = publisher;
  }

  addRating(username: string, rating: number, comment: string): Rating {
    let arguements = [username, rating, comment]

    // console.log(`addRating method called with args: ${JSON.stringify(arguements)}`)

    let ratingObj = new Rating(username, rating, comment);
    this.ratings.push(ratingObj);

    // console.log(`addRating method return value: ${JSON.stringify(ratingObj)}`);

    return ratingObj;
  }
}
