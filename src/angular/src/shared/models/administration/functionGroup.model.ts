import { FunctionModel } from "./function.model";
import { RoleModel } from "./role.model";

export interface FunctionGroupModel {
    Role : RoleModel;
    GroupName? :string;
    ChineseGroupName? :string;
    FunctionList? :FunctionModel[];
}