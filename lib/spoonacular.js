require('dotenv').config();
const axios = require('axios');

// https://spoonacular.com/food-api/docs

function makeQueryString(
  numberResults = 2,
  query,
  maxReadyTime = 0,
  includeIngredients = [],
  excludeIngredients = [],
  fillIngredients = true,
  addRecipeInformation = true,
) {
  let queryString = 'complexSearch?';
  queryString += `query=${query}`;

  if (maxReadyTime !== 0) {
    queryString += `&maxReadyTime=${maxReadyTime}`;
  }

  if (includeIngredients.length !== 0) {
    const ingredientList = includeIngredients.toString();
    queryString += `&includeIngredients=${ingredientList}`;
  }

  if (excludeIngredients.length !== 0) {
    const ingredientList = excludeIngredients.toString();
    queryString += `&excludeIngredients=${ingredientList}`;
  }

  queryString += `&fillIngredients=${fillIngredients}`;
  queryString += `&addRecipeInformation=${addRecipeInformation}`;
  queryString += `&number=${numberResults}`;

  return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPN_KEY}&${queryString}`;
}

function makeGeneralQuery(queryString, cb) {
  axios.get(queryString)
    .then((response) => {
      // console.log(response.data);
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function recipeInformation(id, includeNutrition = false, cb) {
  const queryString = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPN_KEY}&includeNutrition=${includeNutrition}`;
  axios.get(queryString)
    .then((response) => {
      // console.log(response.data);
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  makeGeneralQuery,
  makeQueryString,
  recipeInformation,
};
