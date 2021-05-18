// Movie array
var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Harry Potter']

// randomize movie
var randomNumber = Math.floor((Math.random() * randomMovieArray.length +1) -1);
var randomMovie = randomMovieArray[randomNumber];

// find movie input
var searchMovieEl = document.getElementById('movie');

// find results
var movieResultEl = document.getElementById('results');

    // console.log(randomMovieArray);
    // console.log(randomMovie);

function apiMovie() {
    
    // variable for movie search
    var userSearch= searchMovieEl.value;
    console.log(userSearch);
    
    // fetch API
    $.getJSON('http://www.omdbapi.com/?t=' + userSearch + '&apikey=6147d66e')
    .then(function(response){
        console.log(response);

        movieResultEl.innerHTML="";

        var movieTitle= document.createElement('p')
        movieTitle.textContent=response.Actors
        movieResultEl.appendChild(movieTitle)

        var moviePoster= document.getElementById('movie-img')
        moviePoster.setAttribute('src', response.Poster)
        // movieResultEl.appendChild(moviePoster)


    });

    
}

document.getElementById('rand-movie').addEventListener('click', apiMovie);
