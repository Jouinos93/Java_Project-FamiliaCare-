// login.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginUser.model';
import { SitterService } from 'src/app/services/sittersservice';

@Component({
  selector: 'app-sitter-login',
  templateUrl: './sitterLogin.component.html',
  styleUrls: ['./sitterLogin.component.css']
})
export class SitterLoginComponent {
  @ViewChild('video') videoElement!: ElementRef;

  //videoSource = '../../../assets/v.mp4';

  user: LoginUser =  new LoginUser();

  constructor(private sitterServ: SitterService, private router: Router){}


  ngAfterViewInit() {
    this.videoElement.nativeElement.play(); // Start playing the video after view is initialized
  }
  
  resetVideo() {
    this.videoElement.nativeElement.currentTime = 0;
    this.videoElement.nativeElement.play();
  }

  onSubmit() {
    if (this.user) {
      
      this.sitterServ.loginSitter(this.user).subscribe(
        (response) => {
          console.log('Login successful:', response);
          sessionStorage.setItem('sitterId', response.id);
  
          this.router.navigate(['careGiverProfil']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
      
    }
  }


}
