'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'question',
      });
    }
  }
  Answer.init(
    {
      var_on_answer: DataTypes.BIGINT,
      question_id: DataTypes.BIGINT,
      right: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Answer',
    }
  );
  return Answer;
};
