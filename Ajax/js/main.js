var counterPage = 1;
$(document).ready(function(){
//when the button got clicked;
  $("#btn").click(function(){
    
    var ourRequest = new XMLHttpRequest();

    //inbuild method - open : to decide wether send data('POST') or receive data('GET')
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+counterPage+'.json');

    //what should happen when the data loaded
    ourRequest.onload = function() {

        //tell the browser it's JSON file
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    counterPage++;
    if(counterPage>3) {
        $("#btn").css('visibility','hidden');
    }
  });

  var animalContainer = $('#animal-info');
  
  function renderHTML(data) {
    var htmlString = "";
    for (var i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a " + data[i].species + "</p>"
    }
    animalContainer.append(htmlString);
  }
});

