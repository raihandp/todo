const { sequelize } = require("../../config");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define(
  "todos",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ACTIVITIES",
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "very-high",
    },
    deleted_at: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = { Todo };
