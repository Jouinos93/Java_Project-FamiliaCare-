import { Action } from "./action.model";
import { Address } from "./address.model";
import { Review } from "./review.model";
import { Subscription } from "./subscription.model";

export class User {
    id!: number;
    image: string = '';
    firstName: string = '';
    lastName: string = '';
    isAdmin: boolean = false;
    isActif: boolean = true;
    email: string = '';
    phone: string = '';
    password: string = '';
    confirm: string = '';
    createdAt: Date = new Date();
    updatedAt!: Date;

    address: Address  = new Address();
    subscription!: Subscription;
    actionList!: Action[];
    reviewList!: Review[];
  }