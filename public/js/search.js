$(document).ready(function() {

  $.get("/api/ingredients").then(function(ingredientdata){
    const knownIngredients = ingredientdata;

    for( key in knownIngredients){
      
      $('#ingredientChoices')
      .append($('<option>', {value: knownIngredients[key].DISTINCT})
      .text(knownIngredients[key].DISTINCT));
    }
  
  });


   

  
});
