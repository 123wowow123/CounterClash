'use strict';

// 

// Development specific configuration
// ==================================
// module.exports = {

//   // Sequelize connection opions
//   sequelize: {
//     uri: 'sqlite://',
//     options: {
//       logging: false,
//       storage: 'dev.sqlite',
//       define: {
//         timestamps: false
//       }
//     }
//   },

//   // Seed database on startup
//   seedDB: true

// };

module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: process.env.SEQUELIZE_URI ,
    options: {
      logging: false,
      //storage: 'dev.sqlite',
      dialectOptions: {
        encrypt: true
      },
      define: {
        timestamps: false,
        freezeTableName: true
      }
    }
  },

  // Seed database on startup
  seedDB: true

};