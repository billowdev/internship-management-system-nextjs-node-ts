import { Model } from "sequelize";
import { IHometownAddressAttributes } from "@/interfaces/types/models/hometownAddress.model.types";


module.exports = (sequelize: any, DataTypes: any) => {
  class HometownAddress extends Model<IHometownAddressAttributes> implements IHometownAddressAttributes {
    id!: string;
    student_id!: string;
    address_id!: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;

    static associate(models: any) {
      // define association here
      HometownAddress.belongsTo(models.Student, { foreignKey: "student_id" });
      HometownAddress.belongsTo(models.Address, { foreignKey: "address_id" });
    }
  }
  HometownAddress.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      student_id: {
        type: DataTypes.STRING(11),
        primaryKey: true,
      },
      address_id: {
        type: DataTypes.UUID,
        primaryKey: true,
      }
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,

      modelName: "HometownAddress",
    }
  );
  return HometownAddress;
};
