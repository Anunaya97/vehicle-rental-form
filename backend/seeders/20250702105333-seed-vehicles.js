'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      {
        name: 'Swift',
        typeId: 1, // Hatchback
        modelNumber: 'SW1234',
        available: true,
        pricePerDay: 1500.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thar',
        typeId: 2, // SUV
        modelNumber: 'TH5678',
        available: true,
        pricePerDay: 3000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Royal Enfield',
        typeId: 3, // Cruiser
        modelNumber: 'RE2025',
        available: false,
        pricePerDay: 1200.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
