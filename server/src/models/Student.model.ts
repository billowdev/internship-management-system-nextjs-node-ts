"use strict";
import { Model } from "sequelize";
import { IStudentAttributes } from "@/interfaces/types/models/student.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Student
    extends Model<IStudentAttributes>
    implements IStudentAttributes {
    id!: string;
    email!: string;
    id_card!: string;
    first_name!: string;
    last_name!: string;
    phone!: string;
    program!: string;
    department!: string;
    skill!: string;
    interest!: string;
    project_topic!: string;
    date_of_birth!: Date;
    experience!: string;
    religion!: string;
    father_name!: string;
    father_job!: string;
    mother_name!: string;
    mother_job!: string;
    present_gpa!: number;
    image!: string;
    resume_status!: boolean;
    is_cointernship!: boolean;

    static associate(models: any) {
      // define association here
      Student.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Student.hasOne(models.ContactPerson, {
        onDelete: "cascade",
      })
      Student.hasOne(models.Internship, {
        onDelete: "cascade",
      })
      Student.hasMany(models.Education, {
        onDelete: "cascade",
      });
      Student.hasOne(models.PresentAddress, { onDelete: 'cascade' });
      Student.hasOne(models.HometownAddress, { onDelete: 'cascade' });
    }
  }
  Student.init(
    {
      id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      id_card: {
        type: DataTypes.STRING(13),
        allowNull: true
      },
      first_name: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      program: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      // all below can fill later initial as null value with allow null true
      skill: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      interest: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      project_topic: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      //date of birth
      date_of_birth: {
        type: DataTypes.DATEONLY(),
        allowNull: true,
      },
      // experience
      experience: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      religion: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      father_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      father_job: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      mother_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      mother_job: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      present_gpa: {
        type: DataTypes.FLOAT(4),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resume_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_cointernship: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      underscored: true,
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
