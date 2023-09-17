import { Action } from "./action.model";
import { Address } from "./address.model";
import { Review } from "./review.model";
import { Subscription } from "./subscription.model";

export class Sitter {
    id!: number;
    image: string = '';
    cv: string = '';
    firstName: string = '';
    lastName: string = '';
    education: string = '';
    activities: string[] = [];
    age:number = 18;
    description: string = '';
    email: string = '';
    phone: string = '';
    price: GLfloat = 0.5;
    password: string = '';
    confirm: string = '';
    isActif: boolean = false;
    createdAt: Date = new Date();
    updatedAt!: Date;

    address: Address  = new Address();
    actionList!: Action[];
    reviewList!: Review[];
  }
