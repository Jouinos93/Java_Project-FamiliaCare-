import { Sitter } from "./sitter.model";
import { User } from "./user.model";

export class Action{
    id!: number;
    startDate!: Date;
    endDate!: Date;
    description:string ='';
    status: string = 'Pending';
    createdAt: Date = new Date();
    updatedAt!: Date;

    user!: User;
    sitter!: Sitter;
}