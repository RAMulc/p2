USE recipes;

INSERT INTO Recipes (title, preptime, cooktime, Userid)
VALUES 
('Carbonara', 20, 40, 1),
('Tacos', 10, 35, 1),
('Greek Salad', 15, 5, 1),
('BLT Burger', 40, 60, 1);

INSERT INTO Ingredients (Name, RecipeId)
VALUES
('Bacon',1),
('Cheese',1),
('Cream',1),
('Egg',1),
('Spaghetti',1),
('Mince',2),
('Tomato',2),
('Cheese',2),
('Sour Cream',2),
('Lettuce',2),
('Carrot',2),
('Taco Shells',2),
('Lettuce',3),
('Feta',3),
('Olives',3),
('Onion',3),
('Onion',2),
('Bacon',4),
('Lettuce',4),
('Tomato',4),
('Burger Bun',4);