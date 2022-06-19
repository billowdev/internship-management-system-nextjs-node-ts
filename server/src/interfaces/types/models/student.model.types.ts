export interface IStudentAttributes {
	id: string;
	email: string;
	id_card: string;
	first_name: string;
	last_name: string;
	phone: string;
	program: string;
	department: string;
	skill: string;
	interest: string;
	project_topic: string;
	date_of_birth: Date;
	experience: string;
	religion: string,
	father_name: string;
	father_job: string;
	mother_name: string;
	mother_job: string;
	present_gpa: number;
	image: string;
	resume_status: boolean;
	is_cointernship: boolean;
	present_address: string;
    permanent_address:string;
	created_at?: Date;
	updated_at?: Date;
}