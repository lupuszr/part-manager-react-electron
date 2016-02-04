"use strict";

module.exports = function(sequelize, DataTypes) {
  var Parts = sequelize.define("Parts", {
    manufacturer: {type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex', validate: { notEmpty: true}},
    parttype: {type: DataTypes.STRING, allowNull: false,  unique: 'compositeIndex' , validate: { notEmpty: true}},
    rotation: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true}  },
    power: {type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex', validate: { notEmpty: true}},
    current: DataTypes.STRING,
    voltage: DataTypes.STRING,
    cosfi: DataTypes.STRING,
    capacity: DataTypes.STRING,
    stator_0: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true} },
    stator_1: DataTypes.STRING,
    stator_2: DataTypes.STRING,
    stator_3: DataTypes.STRING,
    stator_4: DataTypes.STRING,
    stator_5: DataTypes.STRING,
    stator_6: DataTypes.STRING,
    stator_7: DataTypes.STRING,
    rotor_0: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true} },
    rotor_1: DataTypes.STRING,
    rotor_2: DataTypes.STRING,
    rotor_3: DataTypes.STRING,
    partnote: DataTypes.STRING,
    img_path: DataTypes.STRING
  }, {
    classMethods: {
    }
  });

  return Parts;
};