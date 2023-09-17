import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'; // Import ViewChild and ElementRef
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginUser.model';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-user-login',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit { // Implement the OnInit interface
  @ViewChild('video') videoElement!: ElementRef;

  user: LoginUser = new LoginUser();

  constructor(private userServ: UserService, private router: Router) {}

  ngOnInit() {
    // Initialize the video here if needed
    // this.videoElement.nativeElement.play();
  }

  resetVideo() {
    this.videoElement.nativeElement.currentTime = 0;
    this.videoElement.nativeElement.play();
  }

  onSubmit() {
    if (this.user) {
      this.userServ.loginUser(this.user).subscribe(
        (response) => {
          console.log('Login successful:', response);
          sessionStorage.setItem('userId', response.id);
          this.router.navigate(['listOfGivers']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
