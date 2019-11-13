"use strict";

const faker = require("faker");
faker.locale = "pt_BR";

const generateEmployees = (number = 1) => {
  const employees = [];

  for (let i = 0; i < number; i++) {
    let genders = ["male", "female"];
    let gender = faker.random.arrayElement(genders);
    employees.push({
      gender: gender.substr(0, 1),
      name: faker.name.firstName(gender) + " " + faker.name.lastName(gender),
      age: faker.random.number({ min: 20, max: 55 }),
      role: faker.name.jobTitle(),
      salary: faker.finance.amount(1300, 10000, 2)
    });
  }

  return employees;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("employees", generateEmployees(50));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null);
  }
};
