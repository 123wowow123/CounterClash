'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    elixir: DataTypes.INTEGER,
    name: DataTypes.STRING,
    typeid: DataTypes.INTEGER,
    rarityid: DataTypes.INTEGER,
    statid: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  });
}
