import { User } from "./user.model";

export class Subscription{
    id!: number;
    startDate!: Date;
    endDate!: Date;
    price: GLfloat = 0.1;
    status: string = '';
    subscriptionType: string ='';
    createdAt: Date = new Date();
    updatedAt!: Date;

    user!: User;


}