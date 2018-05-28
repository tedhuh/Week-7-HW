var topics = ["baskeball", "baseball", "football"]

function createGifButton(){
    var buttonId = 0
    $("#made-button").on("click", function(event){
    event.preventDefault();
    var gifButton = $("#forms").val()
    gifButton = buttonElem;
    var buttonElem = $("<button>").text(gifButton);
    buttonElem.attr("id", "data-sport" + buttonId)
    $(".buttons").append(buttonElem);
    buttonId++;
    })
    }
    createGifButton();
  
  
  
  $("button").on("click", function(){
    var sportButton = $(this).attr("data-sport");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportButton + "&api_key=eq7r86RZgKxPYHDQbFgbAa1JxUdRNf5J&limit=10"
    axios.get(queryURL) 
    .then(function(response){
      var results = response.data.data;
        for(var i = 0; i < results.length; i++) {
            var sportImage = $("<img>");
            sportImage.attr("src", results[i].images.downsized.url);
            sportImage.attr("data-state");
            $("#gif-images").append(sportImage) 
            console.log(response.data)
        }
    $("img").on("click", function(){
      var state = $(this).attr("data-state");
      var still = $(this).attr("data-still");
      if (state === still){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
          console.log(state);
      }
    });
  
    
      })
    })