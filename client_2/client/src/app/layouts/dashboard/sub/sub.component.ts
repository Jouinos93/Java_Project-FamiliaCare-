import { Component } from '@angular/core';
import { Subscription } from 'src/app/models/subscription.model';
import { User } from 'src/app/models/user.model';
import { SubscriptionsService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent {

  subs: Subscription[] = [];

  users: User[] = [];

  constructor (private subServ: SubscriptionsService, private userServ: UserService){}
  ngOnInit(): void {

    this.subServ.getAllSubscription().subscribe(subs => {
      this.subs = subs;
    }); 

    this.userServ.getAllUsers().subscribe(users => {
      this.users = users;
    }); 

  }

  updateUser(user: User){
    this.userServ.updateUser(user.id,user).subscribe(
      (response) => {
        // Handle the successful update here
        console.log('Address updated:', response);
      },
      (error) => {
        // Handle any errors that occur during the update
        console.error('Error updating address:', error);
      }
    );
  }


}
