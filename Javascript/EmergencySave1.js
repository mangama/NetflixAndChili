//need to add button id's to HTML
var inputRecipe;

        console.log("working")
        var searchEdamam = function(chili) {
          //Link to Edamam API
     var queryURL = "https://api.edamam.com/search?q=" + inputRecipe + "&app_id=997d5b1e&app_key=742f4d94c84ebe56fad332789e47f512";

     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(chili) {
      //  console.log(chili)
     });
     
    };
   
   $("#recipeButton").on("click", function(){
    var movie = $("#movie-search").val().trim();

 var movie = $(this).attr("data-name");
 var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
   console.log(response);
 });
 });

        
  //  $("#movies-view").text(JSON.stringify(response));

 
//How the hell do we pull one recipe?


    //  var genre = response.Genre;
    //  console.log(genre)
    // //  needs to generate a random recipe using the array we provide
    function recipeSelector(){
      if(genre == "Action"){
            inputRecipe = "hamburger";
            alert("HAMBURGERS!");
          }
          else if(genre == "Adventure"){
            inputRecipe = "pie";
          }
          else if(genre == "Drama"){
            inputRecipe = "southern"
          }
          else if(genre == "Romance"){
            inputRecipe = "french"
          }
          else if(genre == "Crime"){
            inputRecipe = "italian"
          }
          else if(genre == "Musical"){
            inputRecipe = "austrian"
          }
          else if(genre == "Fantasy"){
            inputRecipe = "cake"
          }
          else if(genre == "Comedy"){
            inputRecipe = "chinese"
          }
          else if(genre == "Animation"){
            inputRecipe = "japanese"
          }
          else if(genre == "Family"){
            inputRecipe = "pizza"
          }
          else if(genre == "Horror"){
            inputRecipe = "thai"
          }
          else if(genre == "Mystery"){
            inputRecipe = "mediterranean"
          }
          else if(genre == "Thriller"){
            inputRecipe = "middle eastern"
          }
          else{
            inputRecipe = "salad"
          }
        }
//   });
// });
  

   //need to connect
   searchEdamam();
   
        