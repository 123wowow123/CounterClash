/**
 * Sequelize initialization module
 */

 'use strict';

 import path from 'path';
 import config from '../config/environment';
 import Sequelize from 'sequelize';

 var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Card = db.sequelize.import('../api/card/card.model');
db.Stat = db.sequelize.import('../api/stat/stat.model');

module.exports = db;
