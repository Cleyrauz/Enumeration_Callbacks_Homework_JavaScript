const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  return this.films.map(function functionName(film) {
    return film.title;
  })
};
// The find() method returns the value of the first element in the array that
// satisfies the provided testing function. Otherwise undefined is returned.
Cinema.prototype.findByTitle = function(title){
  return this.films.find(function(film){
    if(film.title === title){
      return film;
    }
  });
}
// The filter() method creates a new array with all elements that pass
// the test implemented by the provided function.
Cinema.prototype.filmsByGenre = function(genre){
  return this.films.filter(function(film){
    if(film.genre === genre){
      return film;
    }
  });
}
// The some() method tests whether at least one element in the array passes the
// test implemented by the provided function.
Cinema.prototype.filmsByYear = function(year){
  return this.films.some(function(film){
    if(film.year === year){
      return film;
    }
  });
}
// The every() method tests whether all elements in the array pass the test
// implemented by the provided function.
Cinema.prototype.filmsOverALength = function(length){
  return this.films.every(function(film){
    if(film.length > length){
      return film;
    }
  });
}
// The reduce() method applies a function against an accumulator and each element
// in the array (from left to right) to reduce it to a single value.
Cinema.prototype.totalRunningTime = function(){
  return this.films.reduce(function(runningTotal, film){
    return runningTotal + film.length;
  }, 0)
};



module.exports = Cinema;
