"use strict";
import { Model } from "sequelize";
import { IContactPersonAttributes } from "../interfaces/types/models/contactPerson.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
  class ContactPerson extends Model<IContactPersonAttributes> implements IContactPersonAttributes {
	id!: string;
	first_name!: string;
	last_name!: string;
	relationship!: string;
	created_at?: Date | undefined;
	updated_at?: Date | undefined;
    
    static associate(models: any) {
      // define association here
	  ContactPerson.belongsTo(models.Student, { foreignKey: "student_id" });
	  ContactPerson.belongsTo(models.Address, { foreignKey: "address_id" })
    }
  }
  ContactPerson.init(
    {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		first_name: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		last_name: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		relationship: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
    },
    {
      sequelize,
      underscored: true,
      modelName: "ContactPerson",
    }
  );
  return ContactPerson;
};
