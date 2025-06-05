'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      // Игра относится к теме
      Game.belongsTo(models.Theme, {
        foreignKey: 'theme_id',
        as: 'theme',
      });
    }
  }
  Game.init(
    {
      user_name: DataTypes.BIGINT,
      theme_id: DataTypes.BIGINT,
      score: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
