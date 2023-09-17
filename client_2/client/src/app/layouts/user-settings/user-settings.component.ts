import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.serices';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

// interface User {
//   firstName: string;
//   lastName: string;
//   address: {
//     num: number;
//     street: string;
//     city: string;
//     country: string;
//     state: string;
//     zipCode: string;
//   };
// }

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  user!: User;
  userIdStr: any;

  loggedInUser: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.userIdStr = sessionStorage.getItem('userId');
    console.log(this.userIdStr);
    
    if (!this.userIdStr) {
      // If userId is not found, navigate to the home page or any other appropriate route
      this.router.navigate(['/']); // Change this to your desired route
    }
      // Fetch user information based on userId
      this.userService.getUserById(this.userIdStr).subscribe(
        (res) => {
          this.loggedInUser = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  saveUserInfo(user: User) {
    // // Update the user's information
    // if (this.loggedInUser ) {
      this.userService.updateUser(user.id, user).subscribe(
        (response) => {
          console.log('Update Response:', response);
          this.router.navigate(['/listOfGivers']);
        },
        (error) => {
          console.error('Error updating user information:', error);
          // Handle errors as needed
        }
      );
      
    // } else {
    //   console.error('User or userId is undefined. Cannot update user information.');
    // }
  }
  
  
}
