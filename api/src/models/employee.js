module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define("employee", {
    name: DataTypes.STRING,
    gender: DataTypes.ENUM(["m", "f"]),
    age: DataTypes.TINYINT({ unsigned: true }),
    role: DataTypes.STRING(50),
    salary: DataTypes.DECIMAL(10, 2).UNSIGNED
  });

  return employee;
};
