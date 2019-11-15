import {UserModel} from './user.model'
export interface QueryUserOutPut {
    TotalCount?: number;
    Dtos: UserModel[];
  }