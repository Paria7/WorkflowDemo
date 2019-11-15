import { RoleModel } from './role.model';

export interface UserModel {
  Id?: number;
  Name?: string;
  Password?: string;
  PasswordSalt?: string;
  FirstName?: string;
  SecondName?: string;
  Mail?: string;
  MobileNo?: string;
  PhoneNo?: string;
  Roles?: RoleModel[];
  RoleNames?: string;
  EmployeeNo?: string;
  Status?: number;
  StatusName?: string;
  PlantId?: string;
  PlantName?: string;
  Code: string;
}
