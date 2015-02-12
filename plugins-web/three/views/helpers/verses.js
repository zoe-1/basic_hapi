module.exports = function() {
   var verses = [
      "Happy Day..",
      "Love, Joy, and Peace",
      "Do not loose hope",
      "Nothing new under the sun",
      "To teach is to learn.",
      "Boom the algorythm worked",
      "Faith, Hope, and Love",
      "The greatest of these is love...",
      "OK working ",
      "Have a nice day!"
   ];
   var x = Math.floor(Math.random() * verses.length);
   return verses[x];
};
