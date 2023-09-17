import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.serices';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = new User();
  avatar: File | null = null;
  currentStep: number = 1; // Initialize with the first step

  constructor(private userService: UserService, private router: Router) {}

  handleAvatar(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.avatar = file;
    }
  }

  // Function to navigate to the next step
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  // Function to navigate to the previous step
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  registerUser() {
    const formData = new FormData();
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        sessionStorage.setItem('userId', response.id);

        this.router.navigate(['listOfGivers']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }






}
