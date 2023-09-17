import { Sitter } from "./sitter.model";
import { User } from "./user.model";

export class Review{
    id!: number;
    content: string = '';
    rate:number = 0;
    createdAt: Date = new Date();
    updatedAt!: Date;

    user!: User;
    sitter!: Sitter;
}