"use strict"
import { Model } from "sequelize"
import { ICompanyAttributes } from "@/interfaces/types/models/company.model.type"

module.exports = (sequelize: any, DataTypes: any) => {
	class Company extends Model<ICompanyAttributes> implements ICompanyAttributes {
		id!: string
		contact_person_name!: string
		contact_person_position!: string
		contact_person_phone!: string
		name!: string
		type!: string
		activities!: string
		propose_to!: string
		phone!: string
		created_at?: Date | undefined
		updated_at?: Date | undefined

		static associate(models: any) {
			// define association here
			Company.hasOne(models.Internship);
			Company.belongsTo(models.Address, { foreignKey: "address_id" })
		}

	}
	Company.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			contact_person_name: {
				type: DataTypes.STRING(100),
			},
			contact_person_position: {
				type: DataTypes.STRING(50),
			},
			contact_person_phone: {
				type: DataTypes.STRING(10),
			},
			name: {
				type: DataTypes.STRING(100),
			},
			type: {
				type: DataTypes.ENUM(["รัฐบาล", "เอกชน", "รัฐวิสาหกิจ"]),
				allowNull: false,
				defaultValue: "รัฐบาล",
			},
			activities: {
				type: DataTypes.STRING(100),
			},
			propose_to: {
				type: DataTypes.STRING(40)
			},
			phone: {
				type: DataTypes.STRING(10),
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "Company",
		}
	);
	return Company;
};
