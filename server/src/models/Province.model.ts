"use strict"
import { Model } from "sequelize"
import { IProvinceAttributes } from "@/interfaces/types/models/province.model.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class Province extends Model<IProvinceAttributes> implements IProvinceAttributes {
		id!: string;
		code!: string;
		name_th!: string;
		name_en!: string;

		static associate(models: any) {
			Province.hasMany(models.District);
		}

	}
	Province.init(
		{
			id: {
				type: DataTypes.STRING(5),
				primaryKey: true
			},
			code: {
				type: DataTypes.STRING(5),
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
			modelName: "Province",
		}
	);
	return Province;
};
