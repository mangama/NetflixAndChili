var inputRecipe;
var movie;

$("#recipeButton").on("click", function () {
  $("#recipe-card").empty();
  $("#movie-card").empty();
  var button = $("#recipeButton")
  button.text("Get Another Recipe!");
  button.css("background-color", "red");
  button.css("width", "250px");

var movie = $("#search").val().trim()
console.log ("movie " + movie)
// var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
    // do the ajax call to OMBD
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     
  //set variables to dig into the response
  var title = response.Title;
  var poster = response.Poster;
  var plot = response.Plot; 
  var genre = response.Genre;
  
  //create a movie div and put it in the movie card
  //add title to the movie div
  var movieDiv = $("<p>").text(title);
  $(movieDiv).addClass("movieTitleText");
  $("#movie-card").append(movieDiv);

  // //create an element to hold the image then add image to the movie div
  var image = $("<img id = 'movie-image'>").attr("src", poster);
  $("#movie-card").append(image)

  //create a new p for the plot then add plot to the movie div
  var plotPara = $("<p class='plotClass'>").text("Plot: " + plot);
  $("#movie-card").append(plotPara);
  
  // pull the genre array and set to var genre 
  var changeGenre = genre.split(", ");
  // var stringGenre = JSON.stringify(changeGenre)
  var genreLength = changeGenre.length
  var randomNumber = Math.floor(Math.random() * genreLength);

      var randomGenre = changeGenre[randomNumber];

      switch(randomGenre){
        case "Action":
          inputRecipe = "hamburger"
          break;
          case "Adventure":
          inputRecipe = "pie"
          break;
          case "Drama":
          inputRecipe = "southern"
          break;
          case "Romanch":
          inputRecipe = "french"
          break;
          case "Crime":
          inputRecipe = "italian"
          break;
          case "Musical":
          inputRecipe = "austrian"
          break;
          case "Fantasy":
          inputRecipe = "cake"
          break;
          case "Comedy":
          inputRecipe = "chinese"
          break;
          case "Animation":
          inputRecipe = "japanese"
          break;
          case "Family":
          inputRecipe = "pizza"
          break;
          case "Horror":
          inputRecipe = "thai"
          break;
          case "Mystery":
          inputRecipe = "mediterranean"
          break;
          case "Thriller":
          inputRecipe = "middle eastern"
          break;
          default:
          inputRecipe = "salad"
      }




        $.ajax({
          url: "https://api.edamam.com/search?q=" + inputRecipe + "&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512", //"chicken" will be replaced with inputRecipe
          method: "GET"
        }).then(function (response) {
          console.log(response);
      
          var randomRecipe = Math.floor(Math.random() * 10);
          var recipeArray = response.hits[randomRecipe].recipe;
      
          var recipePhoto = recipeArray.image;
          var ingredient = recipeArray.ingredientLines;
          var recipeTitle = recipeArray.label;
          var directions = recipeArray.url;
      
          //need to create if/else statement to set inputRecipe = variables based on genre of movie inputed
      
          //puts recipe Title onto the page
          var recipeTitleText = $("<p>").text(recipeTitle);
          $(recipeTitleText).addClass("recipeTitle");
          $("#recipe-card").append(recipeTitleText);
      
          //puts recipe image onto the page
          var image = $("<img id = 'recipe-image'>").attr("src", recipePhoto);
          $("#recipe-card").append(image);
      
      
          var ingredientText = $("<p class='recipeIngredients'>").text(ingredient);
          //puts ingredient list onto the page
          $("#recipe-card").append(ingredientText);
      
          //creates link to the original recipe source, giving directions
          var directionText = $("<a>").attr({
            "href": directions,
            "target": "_blank"
          });
          $(directionText).text("Like this recipe?")
          $("#recipe-card").append(directionText);
      
      
      });
      
});
});


// displayMovieInfo();

