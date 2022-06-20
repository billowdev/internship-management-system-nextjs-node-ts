
  export interface IStudentInternshipResponse {
	internship: Internship
	Company: Company
  }
  
  export interface Internship {
	id: string
	is_send: boolean
	is_confirm: boolean
	createdAt: string
	updatedAt: string
	CompanyId: string
	student_id: string
	company_id: string
	StudentId: string
  }
  
  export interface Company {
	id: string
	contact_person_name: string
	contact_person_position: string
	contact_person_phone: string
	name: string
	type: string
	activities: string
	propose_to: string
	phone: string
	createdAt: string
	updatedAt: string
	AddressId: string
	address_id: string
	house_number: string
	road: string
	village: string
	sub_district: string
	district: string
	province: string
	zip_code: string
	address_type: string
  }
  