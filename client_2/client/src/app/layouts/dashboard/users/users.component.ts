import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
    }

    updateUser(user: User){
      this.userService.updateUser(user.id,user).subscribe(
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

    toggleUserStatus(user: User) {
      user.isActif = !user.isActif;
      console.log(user.isActif);
      

      this.userService.updateUser(user.id,user).subscribe(
        (response) => {
          // Handle the successful update here
          console.log('User status updated:', response);
        },
        (error) => {
          // Handle any errors that occur during the update
          console.error('Error updating address:', error);
        }
      );
    }

}
