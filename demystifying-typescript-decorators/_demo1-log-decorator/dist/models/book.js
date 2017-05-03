"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rating_1 = require("./rating");
var Book = (function () {
    // executed when new Book is invoked
    function Book(title, publisher) {
        this.ratings = [];
        this.title = title;
        this.publisher = publisher;
    }
    Book.prototype.addRating = function (username, rating, comment) {
        var arguements = [username, rating, comment];
        console.log("addRating method called with args: " + JSON.stringify(arguements));
        var ratingObj = new rating_1.default(username, rating, comment);
        this.ratings.push(ratingObj);
        console.log("addRating method return value: " + JSON.stringify(ratingObj));
        return ratingObj;
    };
    return Book;
}());
exports.default = Book;
