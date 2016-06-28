'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Stat', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    level: DataTypes.INTEGER,
    hitpoints: DataTypes.INTEGER,
    shield_hitpoints: DataTypes.INTEGER,
    targetid: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    damage2: DataTypes.INTEGER,
    damage_typeid: DataTypes.INTEGER,
    hit_speed: DataTypes.DECIMAL,
    speedid: DataTypes.INTEGER,
    range: DataTypes.DECIMAL,
    deploy_time: DataTypes.DECIMAL,
    lifetime: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    death_damage: DataTypes.INTEGER,
    radius: DataTypes.DECIMAL,
    production_speed: DataTypes.DECIMAL,
    crown_damage: DataTypes.INTEGER,
    transportation: DataTypes.INTEGER,
    spwanstatid: DataTypes.INTEGER
  });
}
