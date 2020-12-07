# Cooking Made Simple
An application to store a users recipes in an online database for easy searching, and addition of recipes.

---------------

[Links](#Links)
<br>
[Description](#Description)
<br>
[Installation](#Installation)
<br>
[Usage](#Usage)

<br>
[FutureDevelopment](#FutureDevelopment)

<br>
---------------

## Links

[GitHub Repository:](https://github.com/RAMulc/p2)

[Heroku:](https://aqueous-anchorage-19621.herokuapp.com/)

[About Me:](https://ramulc.github.io/Portfolio/)

## Description

A simple application to store and search all your favourite recipes using MySQL, Node, Express and Handlebars.  It follows the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

The app is deployed to Heroku and makes use of JawsDB for the backend database.

Storage is online with JawsDB and allows the user to search all their stored recipes by ingredient. An option to save a new recipe to the users favourites is presented for new recipes.

***Welcome Page***

The user is presented with the options to either signup or login.

![StartScreen](https://github.com/RAMulc/p2/blob/main/assets/img/StartScreen.png)

***Login***

The online database is checked for valid username (email) and valid password, prior to allowing entry to the users stored recipes.

![Login](https://github.com/RAMulc/p2/blob/main/assets/img/Login.png)

***Signup***

New users are requested to signup to make use of the application. A unique email address is required to establish an account.

![Signup](https://github.com/RAMulc/p2/blob/main/assets/img/Signup.png)

***Search***

To search for a particular recipe, enter an "ingredient". 

![Signup](https://github.com/RAMulc/p2/blob/main/assets/img/Search.png)

***Results***

The user is presented with the results of the search from the selected "ingredient". 

![Signup](https://github.com/RAMulc/p2/blob/main/assets/img/Results.png)

***View Recipe***

Click the "Cook Me" button next to the selected recipe to view your recipe in detail. 

![Signup](https://github.com/RAMulc/p2/blob/main/assets/img/SelectedRecipe.png)

***Add a Recipe***

Fill in all the fields to manually enter a recipe. This is added to the database for future use.

![Signup](https://github.com/RAMulc/p2/blob/main/assets/img/addRecipe.png)



## Installation

Run npm install to install the required packages.

## Usage

- Run 'node server.js' at the command line to start the program or [run from Heroku.](https://aqueous-anchorage-19621.herokuapp.com/)


## FutureDevelopment

- As an option the user may select to search the "spoonacular api" to receive results not stored in the users personal database. 

