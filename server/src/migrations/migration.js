'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Address', {
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

    await queryInterface.createTable('CoInternship', {
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
          model: 'Internship',
          key: 'id'
        }
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Student',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('Company', {
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
          model: 'Address',
          key: 'id'
        }
      },
    });

    // await queryInterface.createTable('Address', {

    // });

    // await queryInterface.createTable('video', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   title: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    //   },
    //   channel_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'channel',
    //       key: 'id'
    //     }
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};