"use strict"
import { Model } from "sequelize"
import { IDistrictAttributes } from "@/interfaces/types/models/district.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class District extends Model<IDistrictAttributes> implements IDistrictAttributes {
		id!: string;
		code!: string;
		name_th!: string;
		name_en!: string;

		static associate(models: any) {
			District.belongsTo(models.Province);
			District.hasMany(models.SubDistrict);
		}

	}
	District.init(
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
			modelName: "District",
		}
	);
	return District;
};
