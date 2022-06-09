"use strict"
import { Model } from "sequelize"
import { ISubDistrictAttributes } from "@/interfaces/types/models/subDistrict.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class SubDistrict extends Model<ISubDistrictAttributes> implements ISubDistrictAttributes {
		id!: string;
		code!: string;
		name_th!: string;
		name_en!: string;

		static associate(models: any) {
			SubDistrict.belongsTo(models.District);
		}
	}
	SubDistrict.init(
		{
			id: {
				type: DataTypes.STRING(5),
				primaryKey: true
			},
			code: {
				type: DataTypes.STRING(2),
			},
			name_th: {
				type: DataTypes.STRING(150),
			},
			name_en: {
				type: DataTypes.STRING(150),
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "SubDistrict",
		}
	);
	return SubDistrict;
};
