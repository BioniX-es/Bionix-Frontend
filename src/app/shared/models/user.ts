import { Role } from "app/shared/models";

export class User {
    public email: string;
    public realname: string;
    public username: string;
    public roles: Role[];
    public birthDate: string;
    public man: string;
}
