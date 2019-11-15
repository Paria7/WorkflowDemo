export interface ChangePasswordModel{
    Id:number;
    Name:string;
    OldPassword:string;
    NewPassword:string;
    ConfirmPassword:string;
    Success:boolean;
    Message:string;
}