$(document).ready(function () {
  var recipeList = [];
  $.get("/api/ingredients").then(function (ingredientdata) {
    const knownIngredients = ingredientdata;

    for (key in knownIngredients) {

      $('#ingredientChoices')
        .append($('<option>', { value: knownIngredients[key].DISTINCT })
          .text(knownIngredients[key].DISTINCT));
    }
    console.log(knownIngredients);
  });


  $('#ingredientChoices').change(function () {
    $("#recipeListCollection tbody tr").remove()
    var value = $(this).val();
    console.log(value);
    $.get("/api/ingredients/" + value).then(function (dataIngredients) {

      for (key in dataIngredients) {

        $.get("/api/recipes/" + dataIngredients[key].RecipeId).then(function (recipe) {

          recipeList.push(recipe);


          var id = recipe.id;
          var recipetitle = recipe.title;
          var preptime = recipe.preptime;
          var cooktime = recipe.cooktime;
          var button = "<button id='"+id+"' class='btn cookMeButton'>Cook Me</button>"
          var markup = "<tr id='"+id+"'><td>" + recipetitle + "</td><td>" + cooktime + "</td><td>" + preptime + "</td><td>"+button+"</td>"
          $("#recipeListCollection").append(markup);
          console.log(recipe);

        });

      }
      console.log(recipeList);
      console.log(recipeList[0]);
    });

  });
});




    
  
    
