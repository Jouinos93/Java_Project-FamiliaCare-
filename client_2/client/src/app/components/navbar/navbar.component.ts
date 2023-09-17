import { Component } from '@angular/core';
import { UserService } from '../../services/user.serices'; // Adjust the path to your UserService
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userService: UserService , private router: Router) {}

  logout() {
    // Call the logout method from your UserService
    this.userService.logout();
  }
  goToHomepage() {
    this.router.navigate(['/listOfGivers']); // Navigate to the root path (home)
  }

  goToSettings() {
    // Navigate to the user-settings component when "Settings" is clicked
    this.router.navigate(['/update-user']);
  }
}
