import { Model } from "sequelize";
import { IAddressAttributes, addressTypeEnums } from "@/interfaces/types/models/address.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class Address extends Model<IAddressAttributes> implements IAddressAttributes {
		id!: string;
		house_number!: string;
		road!: string;
		village!: string;
		sub_district!: string;
		district!: string;
		province!: string;
		zip_code!: string;
		address_type!: addressTypeEnums;
		created_at?: Date | undefined;
		updated_at?: Date | undefined;

		static associate(models: any) {
			// define association here
			Address.hasOne(models.Company, { onDelete: 'cascade' });
			Address.hasOne(models.ContactPerson, { onDelete: 'cascade' });
		}
	}
	Address.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			house_number: {
				type: DataTypes.STRING(10),
			},
			road: {
				type: DataTypes.STRING(50),
			},
			village: {
				type: DataTypes.STRING(50),
			},
			sub_district: {
				type: DataTypes.STRING(150),
			},
			district: {
				type: DataTypes.STRING(150),
			},
			province: {
				type: DataTypes.STRING(150),
			},
			zip_code: {
				type: DataTypes.STRING(10),
			},
			address_type: {
				type: DataTypes.ENUM(["permanent", "present", "company", "contact_person"])
			}
		},
		{
			underscored: true,
			sequelize,
			modelName: "Address",
		}
	);
	return Address;
};
