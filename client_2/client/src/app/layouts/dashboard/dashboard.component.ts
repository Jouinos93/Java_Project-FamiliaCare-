import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId: number = -1; // Initialize with null
  userData: any;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
        // Retrieve user ID from session storage
        const storedUserId = sessionStorage.getItem('userId');
        if (storedUserId) {
          this.userId = +storedUserId; // Parse it to a number
        }
        // Fetch user data using the user ID
        this.userService
        .getUserById(this.userId)
        .subscribe(
          (response) => {
            this.userData = response; // Assign user data to userData
            // if (!this.userData.isAdmin) {
            //   this.router.navigate(['/']);
            //   //window.location.href = '/';
            // }
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        )
  }
}
