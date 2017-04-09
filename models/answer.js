'use strict';
module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("answer", {
        body: {
            type: DataTypes.STRING
        },
        mark: {
            type: DataTypes.DOUBLE
        },
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return Answer;
};