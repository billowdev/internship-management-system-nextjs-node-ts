"use strict"
import { Model } from "sequelize"
import { IInternshipAttributes } from "@/interfaces/types/models/internship.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class Internship extends Model<IInternshipAttributes> implements IInternshipAttributes {
		id!: string;
		is_send!: string;
		is_confirm!: string;

		static associate(models: any) {
			// define association here
			Internship.belongsTo(models.Student, {
				foreignKey: "student_id",
			});
			Internship.belongsTo(models.Company,{foreignKey: "company_id"});
	
			Internship.hasMany(models.CoInternship, {
				foreignKey: "internship_id",
			});
		}

	}
	Internship.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			is_send: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			is_confirm: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			}
		},
		{
		  sequelize,
		  underscored: true,
		  modelName: "Internship",
		}
	  );
	  return Internship;
	};
	