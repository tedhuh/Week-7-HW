var topics = ["baskeball", "baseball", "football"]


function createGifButton(){
    $("#made-button").on("click", function(event){
    event.preventDefault();
      var gifButton = $("#forms").val()
      var buttonElem = $("<button>")
    buttonElem.text(gifButton);
    var input = $("#forms").val().trim();
    buttonElem.attr("id", input);
    $(".buttons").append(buttonElem);
    createGif();
      })
  }
    createGifButton();
  
  
function createGif(){
 $("button").on("click", function(){
  $("#gif-images").empty();
    var input = $(this).attr("id") 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + input +  "&api_key=eq7r86RZgKxPYHDQbFgbAa1JxUdRNf5J&limit=10"
    axios.get(queryURL) 
    .then(function(response){
      var results = response.data.data;
        for(var i = 0; i < results.length; i++) {
            var sportRating = $("<p>");
            sportRating.text("Rating: " + results[i].rating);
            $("#gif-images").append(sportRating);
            var sportImage = $("<img>");
            sportImage.attr("src", results[i].images.downsized.url);
            sportImage.attr("data-state");
            $("#gif-images").append(sportImage)
            console.log(response.data.data)
          }
      })
    })
  }



for(var j = 0; j < topics.length; j++){
  var initButton = $("<button>");
  initButton.text(topics[j]);
  initButton.attr("id", topics[j]);
  $(".buttons").append(initButton);
  createGif();
}




