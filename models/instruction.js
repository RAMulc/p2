module.exports = function (sequelize, DataTypes) {
    const Instruction = sequelize.define('Instruction', {
      stepNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Details: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
  
    });
  
    Instruction.associate = function (models) {
      Instruction.belongsTo(models.Recipe, { foreignKey: { allowNull: false } });
    };
  
    return Instruction;
  };