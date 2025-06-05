'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate(models) {
      // Один вопрос относится к одной теме
      Question.belongsTo(models.Theme, {
        foreignKey: 'theme_id',
        as: 'theme',
      });

      // Один вопрос может иметь много ответов
      Question.hasMany(models.Answer, {
        foreignKey: 'qwestion_id',
        as: 'answers',
      });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      theme_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
