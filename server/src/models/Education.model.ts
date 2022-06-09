"use strict";
import { Model } from "sequelize";
import { IEducationAttributes } from "@/interfaces/types/models/education.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class Education extends Model<IEducationAttributes> implements IEducationAttributes {
		id!: string;
		academy!: string;
		level!: string;
		gpa!: number;
		created_at?: Date | undefined;
		updated_at?: Date | undefined;

		static associate(models: any) {
			// define association here
			Education.belongsTo(models.Student, {
				foreignKey: "student_id",
			});
		}
	}
	Education.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			academy: {
				type: DataTypes.STRING(100),
			},
			level: {
				type: DataTypes.STRING(100),
			},
			gpa: {
				type: DataTypes.FLOAT(4),
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "Education",
		}
	);
	return Education;
};
