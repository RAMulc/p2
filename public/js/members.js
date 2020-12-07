$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $(document).on("click", ".cookMeButton", getCooking);
  
  function getCooking(){
    console.log(this.id)
    $.get("/api/recipes/"+this.id).then(function(data){
      console.log(data);

      $('#recipeTitle').append(data.title);
      $('#prepTime').append(data.preptime);
      $('#cookTime').append(data.cooktime);

    })
  }; 

  $.get("/api/user_data").then(function(data) {
    $(".member-fname").text(data.firstName);
    $(".member-lname").text(data.lastName);
  }); 
  



});
