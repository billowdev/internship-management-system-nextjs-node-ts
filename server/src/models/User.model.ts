"use strict";

import { Model } from "sequelize";
import { IUserAttributes, rolesUserEnums } from "../interfaces/types/models/user.model.types";


module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<IUserAttributes> implements IUserAttributes {
    id!: string;
    username!: string;
    password!: string;
    roles!: rolesUserEnums;
    is_active!: boolean;

    static associate(models: any) {
      // define association here
      User.hasOne(models.Student, {
        onDelete: "cascade",
      });
      User.hasOne(models.Director, {
        onDelete: "cascade",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      roles: {
        type: DataTypes.ENUM(["admin", "director", "student"]),
        allowNull: false,
        defaultValue: "student",
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    {
      sequelize,
      underscored: true,
      modelName: "User",
    }
  );
  return User;
};
