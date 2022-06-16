'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: "44d00ccd-1d7c-46e0-9bbd-6d63778889ec",
          username: '3',
          password: '3',
          is_active: true,
          roles: "student",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "44d00ccd-1d7c-46e0-9bbd-6d63778882ec",
          username: '4',
          password: '4',
          is_active: true,
          roles: "student",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "6b14e54b-26f3-4f01-ad08-35866c8438b9",
          username: '2',
          password: '2',
          is_active: true,
          roles: "director",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "6b14e54b-26f3-4f01-ad08-35866c8438b1",
          username: '1',
          password: '1',
          is_active: true,
          roles: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'students',
      [
        {
          id: "3",
          email: "3@gmail.com",
          id_card: "182931238273",
          first_name: "Mr three",
          last_name: "San",
          phone: "092738167",
          program: "computer science",
          department: "faculty of science and technology",
          skill: "typescript",
          interest: "web developing",
          project_topic: "web application",
          date_of_birth: new Date(),
          experience: "web application development",
          religion: "buddhism",
          father_name: "Mr two",
          father_job: "Farmer",
          mother_name: "Mrs Ni",
          mother_job: "Farmer",
          present_gpa: 4.00,
          image: "string",
          resume_status: true,
          is_cointernship: false,
          created_at: new Date(),
          updated_at: new Date(),
          user_id: "44d00ccd-1d7c-46e0-9bbd-6d63778889ec"
        },
        {
          id: "4",
          email: "4@gmail.com",
          id_card: "182931238271",
          first_name: "Mr four",
          last_name: "yong",
          phone: "0927381671",
          program: "computer science",
          department: "faculty of science and technology",
          skill: "typescript",
          interest: "web developing",
          project_topic: "web application",
          date_of_birth: new Date(),
          experience: "web application development",
          religion: "buddhism",
          father_name: "Mr two",
          father_job: "Farmer",
          mother_name: "Mrs Ni",
          mother_job: "Farmer",
          present_gpa: 3.50,
          image: "string",
          resume_status: true,
          is_cointernship: true,
          created_at: new Date(),
          updated_at: new Date(),
          user_id: "44d00ccd-1d7c-46e0-9bbd-6d63778882ec"
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'directors',
      [
        {
          id: "2",
          first_name: "คณะกรรมการฝึกประสบการณ์",
          last_name: "",
          phone: "0937281231",
          program: "Computer Science",
          department: "Facuty of Science and Technology",
          user_id: "6b14e54b-26f3-4f01-ad08-35866c8438b9",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'education',
      [
        {
          id: "3c606299-0240-4a83-8d24-291042463f59",
          academy: "BillowDev Academy",
          level: "มัธยมศึกษาตอนต้น",
          gpa: 3.20,
          student_id: "3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "eb4ab6a4-bc8d-4a49-81ab-5196e4108ece",
          academy: "BillowDev Academy",
          level: "มัธยมศึกษาตอนปลาย",
          gpa: 4.00,
          student_id: "3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f63ea72b-fe2f-498a-a9ec-70d7d107b77a",
          academy: "BillowDev University",
          level: "ปริญญาตรี",
          gpa: 4.00,
          student_id: "3",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          id: "3c606299-0240-4a83-8d24-291042463f51",
          academy: "BillowDev Academy",
          level: "มัธยมศึกษาตอนต้น",
          gpa: 3.20,
          student_id: "4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "eb4ab6a4-bc8d-4a49-81ab-5196e4103ece",
          academy: "BillowDev Academy",
          level: "มัธยมศึกษาตอนปลาย",
          gpa: 4.00,
          student_id: "4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f63ea72b-fe2f-498a-a9ec-70d7d101b77a",
          academy: "BillowDev University",
          level: "ปริญญาตรี",
          gpa: 4.00,
          student_id: "4",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'addresses',
      [    
        {
          id: "0437c3b4-38cb-4a63-b852-626b2f255a3b",
          house_number: "5",
          road: "2",
          village: "Apple1",
          sub_district: "Apple",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "hometown",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0437c3b4-38cb-4a63-b852-626b2f255a1b",
          house_number: "1",
          road: "2",
          village: "Orange",
          sub_district: "Apple",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "hometown",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "168a2339-6ead-4cea-8661-681a7ac0fcfd",
          house_number: "2",
          road: "2",
          village: "Orange",
          sub_district: "Apple",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "present",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "168a2339-6ead-4cea-8661-681a7ac0fcf1",
          house_number: "8",
          road: "2",
          village: "Orange2",
          sub_district: "Apple2",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "present",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "1d1aa2e8-c842-4266-bbe4-fcaec6430865",
          house_number: "3",
          road: "3",
          village: "Orange",
          sub_district: "Apple",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "company",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "a6c01b95-a4e3-4514-be98-0ab4abeba943",
          house_number: "4",
          road: "4",
          village: "Orange",
          sub_district: "Apple",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "contact_person",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "b29cfe50-f6ae-45dc-8057-7d7e33207c9d",
          house_number: "45",
          road: "45",
          village: "Orange contact_person",
          sub_district: "Apple contact_person",
          district: "Banana",
          province: "Mango",
          zip_code: "4444",
          address_type: "contact_person",
          created_at: new Date(),
          updated_at: new Date(),
        },   
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'companies',
      [
        {
          id: "3b7e0739-132a-4d69-b0f5-8874fec97ac2",
          contact_person_name: "Akkarapon Phikulsri",
          contact_person_position: "Developer",
          contact_person_phone: "0938172321",
          name: "BillowDev",
          type: "เอกชน",
          activities: "พัฒนาซอฟต์แวร์ แอปพลิเคชัน และโซลูชันด้านไอที",
          propose_to: "HR",
          phone: "0938271231",
          address_id: "1d1aa2e8-c842-4266-bbe4-fcaec6430865",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'internships',
      [
        {
          id: "24782d4e-50a0-432c-8c1c-e56b435cd870",
          is_send: "1",
          is_confirm: "1",
          company_id: "3b7e0739-132a-4d69-b0f5-8874fec97ac2",
          student_id: "3",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'co_internships',
      [
        {
          id: 1,
          student_id: "4",
          internship_id: "24782d4e-50a0-432c-8c1c-e56b435cd870",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'contact_people',
      [
        {
          id: "5b003884-4af9-4497-93c4-bd028d7e9dd7",
          first_name: "สมชาย",
          last_name: "สมชาย",
          relationship: "บิดา",
          student_id: "3",
          address_id: "a6c01b95-a4e3-4514-be98-0ab4abeba943",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "5e55e5c7-ebe1-4a35-b6d1-5d3b137a35ef",
          first_name: "สมหมาย",
          last_name: "สมหมาย",
          relationship: "บิดา",
          student_id: "4",
          address_id: "b29cfe50-f6ae-45dc-8057-7d7e33207c9d",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'present_addresses',
      [
        {
          id: "1",
          student_id: "3",
          address_id: "168a2339-6ead-4cea-8661-681a7ac0fcfd",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2",
          student_id: "4",
          address_id: "168a2339-6ead-4cea-8661-681a7ac0fcf1",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'hometown_addresses',
      [
        {
          id: "1",
          student_id: "3",
          address_id: "0437c3b4-38cb-4a63-b852-626b2f255a1b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2",
          student_id: "4",
          address_id: "0437c3b4-38cb-4a63-b852-626b2f255a3b",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('students', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('directors', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('education', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('contact_people', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('companies', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('internships', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('co_internships', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('addresses', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('present_addresses', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('hometown_addresses', null, bulkDeleteOptions);
  }
};
