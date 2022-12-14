const { sequelize } = require("../../config");
const { DataTypes } = require("sequelize");

const Activity = sequelize.define(
  "ACTIVITIES",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    deleted_at: {
      type: DataTypes.DATEONLY,
    },
    //   timestamps: true,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = { Activity };
