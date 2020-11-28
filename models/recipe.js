module.exports = function (sequelize, DataTypes) {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    preptime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cooktime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Recipe.associate = function (models) {
    Recipe.hasMany(models.Ingredient, { onDelete: 'cascade' });
    Recipe.hasMany(models.Instruction, { onDelete: 'cascade' });
    Recipe.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };

  return Recipe;
};
