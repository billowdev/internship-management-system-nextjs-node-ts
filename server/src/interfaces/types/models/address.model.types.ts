export enum addressTypeEnums {
	Permanent = "permanent",
	Present = "present",
	Company = "company",
	ContactPerson = "contact_person"
}

export interface IAddressAttributes {
	id: string;
	house_number: string;
	road: string;
	village: string;
	sub_district: string;
	district: string;
	province: string;
	zip_code: string;
	address_type: addressTypeEnums;
	created_at?: Date;
	updated_at?: Date;
}