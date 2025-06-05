'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Тема может иметь много вопросов
      Theme.hasMany(models.Question, {
        foreignKey: 'theme_id',
        as: 'questions',
      });

      // Тема может быть использована в играх
      Theme.hasMany(models.Game, {
        foreignKey: 'theme_id',
        as: 'games',
      });
    }
  }
  Theme.init(
    {
      theme_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
