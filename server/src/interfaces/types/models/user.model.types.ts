export enum rolesUserEnums {
  Admin = "admin",
  Director = "director",
  Student = "student"
}

export interface IUserAttributes {
  id: string;
  username: string;
  password: string;
  roles: rolesUserEnums;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
}
