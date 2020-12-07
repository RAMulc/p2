// script to create a sample dataset for user at id:1


  
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
    ['broccoli','2 cups', 45],
    ['cauliflower','2 head', 45],
    ['coconut oil','1 T', 45],
    ['cooked brown rice','3 cups', 45],
    ['garlic','5 cloves', 45],
    ['grapeseed oil','1 T', 45],
    ['low sodium soy sauce','3 T', 45],
    ['peas','1 cup', 45],
    ['salt','to taste', 45],
    ['scallion','7', 45],
    ['sesame oil','2 T', 45],
    ['basil','1/4 cup', 46],
    ['flour','1 cup', 46],
    ['garlic powder','1/4 T', 46],
    ['garlic salt','2 servings', 46],
    ['potatoes','4', 46],
    ['vegetable oil','2 servings', 46],
    ['banana','1/4 cup', 47],
    ['graham cracker crumbs','2 tbsp', 47],
    ['soy milk','1 cup', 47],
    ['strawberries','1/2 cup', 47],
    ['vanilla yogurt','1 container', 47],
    ['balsamic vinegar','3 tbsp', 48],
    ['garlic','1 clove', 48],
    ['kale','1 bunch', 48],
    ['olive oil','2 servings', 48],
    ['canned black beans','15 oz', 49],
    ['canned green chile peppers','4 oz', 49],
    ['canned tomatoes','28 oz', 49],
    ['chicken broth','1 oz', 49],
    ['chili','2 tsp', 49],
    ['fresh cilantro','1/4 cup', 49],
    ['onion','1', 49],
    ['skinless boneless chicken breasts','2', 49],
    ['water','1 1/4 cups', 49],
    ['whole kernel corn','1 can', 49],
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
    [1, "Remove the cauliflower's tough stem and reserve for another use.", 45],
    [2, "Using a food processor, pulse cauliflower florets until they resemble rice or couscous.", 45],
    [3, "You should end up with around four cups of cauliflower rice.", 45],
    [4, "Heat 1T butter and 1T oil in a large skillet over medium heat.", 45],
    [5, "Add garlic and the white and light green pieces of scallion.", 45],
    [6, "Sauté about a minute.", 45],
    [7, "Add the cauliflower to the pan.", 45],
    [8, "Stir to coat with oil, then spread out in pan and let sit;", 45],
    [9, "You want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness.", 45],
    [10, "After a couple of minutes, stir and spread out again.", 45],
    [11, "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter.", 45],
    [12, "Raise heat to medium-high.", 45],
    [13, "Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.", 45],
    [14, "Let it sit for about two minutes—so the rice can get toasted and a little crispy.", 45],
    [15, "Add the peas and broccoli and stir again.", 45],
    [16, "Drizzle soy sauce and toasted sesame oil over rice.", 45],
    [17, "Cook for another minute or so and turn off heat.", 45],
    [18, "Add chopped scallion tops and toss.", 45],
    [19, "I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.", 45],
    [20, "Season to taste with salt and, if you'd like, more soy sauce.", 45],
    [21, "Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.", 45],
    [1, "Peel the potatoes.", 46],
    [2, "Mix ingredients.", 46],
    [3, "Cook.", 46],
    [1, "Take some yogurt in your favorite flavor and add 1 container to your blender.", 47],
    [2, "Add in the berries, banana, and soy milk and blend.", 47],
    [3, "Top your glass with a few graham cracker crumbs and serve.", 47],
    [1, "Heat the olive oil in a large pot over medium heat.", 48],
    [2, "Add the kale and cover.", 48],
    [3, "Stir occasionally until the volume of the kale is reduced by half.", 48],
    [4, "Uncover.", 48],
    [5, "Add garlic and basalmic.", 48],
    [6, "Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.", 48],
    [7, "Serve hot.", 48],
    [1, "Carefully add the ingredients into the slow cooker.", 49],
    [2, "Cook for 4 hours.", 49],
    [7, "Serve with a flagon of your finest ale.", 49],
  ];
  
  makeInstructions(instructions);
