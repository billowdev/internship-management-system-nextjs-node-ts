import { Model } from "sequelize";
import { IPresentAddressAttributes } from "@/interfaces/types/models/presentAddress.model.types";


module.exports = (sequelize: any, DataTypes: any) => {
  class PresentAddress extends Model<IPresentAddressAttributes> implements IPresentAddressAttributes {
    id!: string;
    student_id!: string;
    address_id!: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;

    static associate(models: any) {
      // define association here
      PresentAddress.belongsTo(models.Student, { foreignKey: "student_id" });
      PresentAddress.belongsTo(models.Address, { foreignKey: "address_id" });
    }
  }
  PresentAddress.init(
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
      modelName: "PresentAddress",
    }
  );
  return PresentAddress;
};
