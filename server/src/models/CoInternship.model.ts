"use strict"
import { Model } from "sequelize"
import { ICoInternshipAttributes } from "@/interfaces/types/models/coInternship.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class CoInternship extends Model<ICoInternshipAttributes> implements ICoInternshipAttributes {
		id!: string;
		student_id?: string | undefined;
		internship_id?: string | undefined;

		static associate(models: any) {
			// define association here
			CoInternship.belongsTo(models.Internship);
			CoInternship.belongsTo(models.Student);
		}

	}

	CoInternship.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			}
		},
		{
			sequelize,
			underscored: true,
			modelName: "CoInternship",
		}
	);
	return CoInternship;
};
