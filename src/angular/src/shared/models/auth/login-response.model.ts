export interface LoginResponse {
    Success: boolean;
    User: {
        Id: string;
        PlantId: number;
        Name: string;
        ExpireDate:Date;
    },
    Token: string;

}