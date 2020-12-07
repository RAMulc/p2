
$(document).ready(function () {

  $(document).on('click', '#addNewIngredient', addIngredient);
  $(document).on('click', '#addNewStep', addStep);
  const addrecipeForm = $("form#newRecipeForm");


  function addIngredient() {
    const quantityEntered = $("#quantity-input").val();
    const ingredientsEntered = $("#ingredient-input").val();
    const ingrownumId = $("#ingredientRowNum").val();
    const ingrownumInt = parseInt(ingrownumId);

    var markup = "<tr id='" + ingrownumInt + "'><td>" + quantityEntered + "</td><td>" + ingredientsEntered + "</td>"
    $("#ingredientsList").append(markup);

    const ingnewrowval = ingrownumInt + 1;
    $("#ingredientRowNum").val(ingnewrowval);
    $("#quantity-input").val('');
    $("#ingredient-input").val('');

  };

  // Add step to table
  function addStep() {
    const stepsEntered = $("#step-input").val();
    const steprownumId = $("#stepRowNum").val();
    const steprownumInt = parseInt(steprownumId);
    var button = "<button class='btn btn-outline-danger'>Delete</button>"
    var markup = "<tr><td>" + steprownumInt + "</td><td>" + stepsEntered + "</td>"
    $("#stepsList").append(markup);
    const stepnewrowval = steprownumInt + 1;
    $("#stepRowNum").val(stepnewrowval);
    $("#step-input").val('');

  }

  addrecipeForm.on("submit", function (event) {
    event.preventDefault();
    var recipedata = {
      recipeName: $("#newrecipeTitle").val().trim(),
      prepTime: $("#newprepTime").val().trim(),
      cookTime: $("#newcookTime").val().trim()
    };

    var ingData = new Array();

    $('#ingredientsList tr').each(function (row, tr) {
      ingData[row] = {
        "quantity": $(tr).find('td:eq(0)').text()
        , "name": $(tr).find('td:eq(1)').text()
      }
    });
    ingData.shift();

    console.log(ingData);

    var stepData = new Array();

    $('#stepsList tr').each(function (row, tr) {
      stepData[row] = {
        "stepNumber": $(tr).find('td:eq(0)').text()
        , "details": $(tr).find('td:eq(1)').text()
      }
    });
    stepData.shift();

    console.log(stepData);


    if (!recipedata.recipeName || !recipedata.prepTime || !recipedata.cookTime || !ingData || !stepData) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    saveRecipeDB(recipedata.recipeName, recipedata.prepTime, recipedata.cookTime, ingData, stepData);

  });


  function saveRecipeDB(recipeName, prepTime, cookTime, ingData, stepData) {

    $.get("/api/user_data").then(function (data) {
      console.log(data.id);
      const userId = data.id;
      return userId;
    }).then(function (userId) {
      console.log(userId)
      $.post('/api/recipes', {
        title: recipeName,
        preptime: prepTime,
        cooktime: cookTime,
        UserId: userId,
      }).then(function (recipe) {
        console.log(recipe.id);
        for (key in ingData) {
          $.post('/api/ingredients', {
            name: ingData[key].name,
            quantity: ingData[key].quantity,
            RecipeId: recipe.id,
          })
        }
        for (key in stepData) {
          $.post('/api/instructions', {
            stepNumber: stepData[key].stepNumber,
            details: stepData[key].details,
            RecipeId: recipe.id,
          })
        }
        location.reload();

      })
    })

  };

});
