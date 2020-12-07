$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $("#recipeListCollection").on("click", ".cookMeButton", getCooking);
  $(document).on('click', '#addRecipeButton', addRecipeScreen);
  $(document).on('click', '#homeButton', homeScreen);

  

  function getCooking() {
    console.log(this.id);
    $('#homeScreen').css('display', 'none');
    $('#cookmeScreen').css('display', 'inline');
    $.get("/api/recipes/" + this.id).then(function (data) {
      console.log(data);

      $('#recipeTitle').append(data.title);
      $('#prepTime').append(data.preptime);
      $('#cookTime').append(data.cooktime);

      for (key in data.Ingredients){

        var markup = "<tr><td>" + data.Ingredients[key].quantity + "</td><td>" + data.Ingredients[key].name + "</td>"
        $("#ingredientsdisplay").append(markup);
      }

      for (key in data.Instructions){
        var markup = "<tr><td>" + data.Instructions[key].stepNumber + "</td><td>" + data.Instructions[key].details + "</td>"
    $("#stepsdisplay").append(markup);
      }

    })
  };

  function addRecipeScreen() {
    $('#homeScreen').css('display', 'none');
    $('#cookmeScreen').css('display', 'none');
    $('#homeButton').removeClass('active');
    $('#addrecipeScreen').css('display', 'inline');
    $('#addRecipeButton').addClass('active');

  };

  function homeScreen() {
location.reload();
  }

  $.get("/api/user_data").then(function (data) {
    $(".member-fname").text(data.firstName);
    $(".member-lname").text(data.lastName);
  });




});
