import {UserModel} from '../administration/user.model'
export interface DeviceUsersOutPut {
    ServiceList?: UserModel[];
    EngineerList?: UserModel[];
}