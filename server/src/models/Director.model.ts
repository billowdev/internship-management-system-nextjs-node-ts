"use strict";

import { Model } from "sequelize";
import { IDirectorAttributes } from "../interfaces/types/models/director.model.types";


module.exports = (sequelize: any, DataTypes: any) => {
  class Director extends Model<IDirectorAttributes> implements IDirectorAttributes {
	id!: string;
	first_name!: string;
	last_name!: string;
	phone!: string;
	program!: string;
	department!: string;
	created_at?: Date | undefined;
	updated_at?: Date | undefined;

    static associate(models: any) {
      // define association here
	  Director.belongsTo(models.User, {
		foreignKey: "user_id",
	});
    }
  }
  Director.init(
    {
		id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
			allowNull: false,
		},
		first_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
		program: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		department: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
    },
    {
      sequelize,
      underscored: true,
      modelName: "Director",
    }
  );
  return Director;
};
