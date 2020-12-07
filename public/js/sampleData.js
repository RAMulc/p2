// script to create a sample dataset for user at id:1

function makeRecipes(recipes) {
    recipes.forEach(recipe => {
      $.post('/api/recipes', {
        title: recipe[0],
        preptime: recipe[1],
        cooktime: recipe[2],
        UserId: recipe[3]
      });
    });
  }
  
  const recipes = [
    // Spoonacular id: 716426
    ['Cauliflower, Brown Rice, and Vegetable Fried Rice', 10, 30, 1],
    // Spoonacular id: 715594
    ['Homemade Garlic and Basil French Fries', 10, 45, 1],
    // Spoonacular id: 715497
    ['Berry Banana Breakfast Smoothie', 5, 5, 1],
    // Spoonacular id: 644387
    ['Garlicky Kale', 20, 45, 1],
    // Spoonacular id: 715392
    ['Chicken Tortilla Soup (Slow Cooker)', 20, 45, 1]
  ];
  
  makeRecipes(recipes);
  
  function makeIngredients(ingredients) {
    ingredients.forEach(ingredient => {
      $.post("/api/ingredients", {
        name: ingredient[0],
        quantity: ingredient[1],
        RecipeId: ingredient[2]
      });
    });
  }
  
  const ingredients = [
    ['broccoli','2 cups', 1],
    ['cauliflower','2 head', 1],
    ['coconut oil','1 T', 1],
    ['cooked brown rice','3 cups', 1],
    ['garlic','5 cloves', 1],
    ['grapeseed oil','1 T', 1],
    ['low sodium soy sauce','3 T', 1],
    ['peas','1 cup', 1],
    ['salt','to taste', 1],
    ['scallion','7', 1],
    ['sesame oil','2 T', 1],
    ['basil','1/4 cup', 2],
    ['flour','1 cup', 2],
    ['garlic powder','1/4 T', 2],
    ['garlic salt','2 servings', 2],
    ['potatoes','4', 2],
    ['vegetable oil','2 servings', 2],
    ['banana','1/4 cup', 3],
    ['graham cracker crumbs','2 tbsp', 3],
    ['soy milk','1 cup', 3],
    ['strawberries','1/2 cup', 3],
    ['vanilla yogurt','1 container', 3],
    ['balsamic vinegar','3 tbsp', 4],
    ['garlic','1 clove', 4],
    ['kale','1 bunch', 4],
    ['olive oil','2 servings', 4],
    ['canned black beans','15 oz', 5],
    ['canned green chile peppers','4 oz', 5],
    ['canned tomatoes','28 oz', 5],
    ['chicken broth','1 oz', 5],
    ['chili','2 tsp', 5],
    ['fresh cilantro','1/4 cup', 5],
    ['onion','1', 5],
    ['skinless boneless chicken breasts','2', 5],
    ['water','1 1/4 cups', 5],
    ['whole kernel corn','1 can', 5],
  ];

  makeIngredients(ingredients);

  function makeInstructions(instructions) {
    instructions.forEach(instruction => {
      $.post("/api/instructions", {
        stepNumber: instruction[0],
        details: instruction[1],
        RecipeId: instruction[2]
      });
    });
  }

  const instructions = [
    [1, "Remove the cauliflower's tough stem and reserve for another use.", 1],
    [2, "Using a food processor, pulse cauliflower florets until they resemble rice or couscous.", 1],
    [3, "You should end up with around four cups of cauliflower rice.", 1],
    [4, "Heat 1T butter and 1T oil in a large skillet over medium heat.", 1],
    [5, "Add garlic and the white and light green pieces of scallion.", 1],
    [6, "Sauté about a minute.", 1],
    [7, "Add the cauliflower to the pan.", 1],
    [8, "Stir to coat with oil, then spread out in pan and let sit;", 1],
    [9, "You want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness.", 1],
    [10, "After a couple of minutes, stir and spread out again.", 1],
    [11, "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter.", 1],
    [12, "Raise heat to medium-high.", 1],
    [13, "Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.", 1],
    [14, "Let it sit for about two minutes—so the rice can get toasted and a little crispy.", 1],
    [15, "Add the peas and broccoli and stir again.", 1],
    [16, "Drizzle soy sauce and toasted sesame oil over rice.", 1],
    [17, "Cook for another minute or so and turn off heat.", 1],
    [18, "Add chopped scallion tops and toss.", 1],
    [19, "I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.", 1],
    [20, "Season to taste with salt and, if you'd like, more soy sauce.", 1],
    [21, "Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.", 1],
    [1, "Peel the potatoes.", 2],
    [2, "Mix ingredients.", 2],
    [3, "Cook.", 2],
    [1, "Take some yogurt in your favorite flavor and add 1 container to your blender.", 3],
    [2, "Add in the berries, banana, and soy milk and blend.", 3],
    [3, "Top your glass with a few graham cracker crumbs and serve.", 3],
    [1, "Heat the olive oil in a large pot over medium heat.", 4],
    [2, "Add the kale and cover.", 4],
    [3, "Stir occasionally until the volume of the kale is reduced by half.", 4],
    [4, "Uncover.", 4],
    [5, "Add garlic and basalmic.", 4],
    [6, "Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.", 4],
    [7, "Serve hot.", 4],
    [1, "Carefully add the ingredients into the slow cooker.", 5],
    [2, "Cook for 4 hours.", 5],
    [7, "Serve with a flagon of your finest ale.", 4],
  ];
  
  makeInstructions(instructions);
