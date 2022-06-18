'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      house_number: {
        type: Sequelize.STRING(10),
      },
      road: {
        type: Sequelize.STRING(50),
      },
      village: {
        type: Sequelize.STRING(50),
      },
      sub_district: {
        type: Sequelize.STRING(150),
      },
      district: {
        type: Sequelize.STRING(150),
      },
      province: {
        type: Sequelize.STRING(150),
      },
      zip_code: {
        type: Sequelize.STRING(10),
      },
      address_type: {
        type: Sequelize.ENUM(["hometown", "present", "company", "contact_person"])
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });



    await queryInterface.createTable('provinces', {
      id: {
        type: Sequelize.STRING(5),
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(5),
      },
      name_th: {
        type: Sequelize.STRING(150),
      },
      name_en: {
        type: Sequelize.STRING(150),
      },
    });

    await queryInterface.createTable('districts', {
      id: {
        type: Sequelize.STRING(5),
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(5),
      },
      name_th: {
        type: Sequelize.STRING(150),
      },
      name_en: {
        type: Sequelize.STRING(150),
      },
      province_id: {
        type: Sequelize.STRING(5),
        references: {
          model: 'provinces',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('sub_districts', {
      id: {
        type: Sequelize.STRING(8),
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(6),
      },
      name_th: {
        type: Sequelize.STRING(150),
      },
      name_en: {
        type: Sequelize.STRING(150),
      },
      district_id: {
        type: Sequelize.STRING(5),
        references: {
          model: 'districts',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      roles: {
        type: Sequelize.ENUM(["admin", "director", "student"]),
        allowNull: false,
        defaultValue: "student",
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });

    await queryInterface.createTable('students', {
      id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      id_card: {
        type: Sequelize.STRING(13),
        allowNull: true
      },
      first_name: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      program: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      skill: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      interest: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      project_topic: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      //date of birth
      date_of_birth: {
        type: Sequelize.DATEONLY(),
        allowNull: true,
      },
      // experience
      experience: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      religion: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      father_name: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      father_job: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      mother_name: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      mother_job: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      present_gpa: {
        type: Sequelize.FLOAT(4),
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      resume_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_cointernship: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('hometown_addresses', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      student_id: {
        type: Sequelize.STRING(11),
        references: {
          model: 'students',
          key: 'id'
        }
      },
      address_id: {
        type: Sequelize.UUID,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('present_addresses', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      student_id: {
        type: Sequelize.STRING(11),
        references: {
          model: 'students',
          key: 'id'
        }
      },
      address_id: {
        type: Sequelize.UUID,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('companies', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      contact_person_name: {
        type: Sequelize.STRING(100),
      },
      contact_person_position: {
        type: Sequelize.STRING(50),
      },
      contact_person_phone: {
        type: Sequelize.STRING(10),
      },
      name: {
        type: Sequelize.STRING(100),
      },
      type: {
        type: Sequelize.ENUM(["รัฐบาล", "เอกชน", "รัฐวิสาหกิจ"]),
        allowNull: false,
        defaultValue: "รัฐบาล",
      },
      activities: {
        type: Sequelize.STRING(100),
      },
      propose_to: {
        type: Sequelize.STRING(40)
      },
      phone: {
        type: Sequelize.STRING(10),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('internships', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      is_send: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      student_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      company_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('co_internships', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      internship_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'internships',
          key: 'id'
        }
      },
      student_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('contact_people', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      relationship: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      student_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    });

    await queryInterface.createTable('directors', {
      id: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      program: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      department: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('education', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      academy: {
        type: Sequelize.STRING(100),
      },
      level: {
        type: Sequelize.STRING(100),
      },
      gpa: {
        type: Sequelize.FLOAT(4),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      student_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};