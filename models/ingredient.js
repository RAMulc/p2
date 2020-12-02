module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsTo(models.Recipe, { foreignKey: { allowNull: false } });
  };

  return Ingredient;
};
