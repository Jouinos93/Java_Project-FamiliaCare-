import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SitterService } from 'src/app/services/sittersservice';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-care-giver-profil',
  templateUrl: './care-giver-profil.component.html',
  styleUrls: ['./care-giver-profil.component.css']
})
export class CareGiverProfilComponent implements OnInit {
  sitterId!:any;
  sitterIn!:any;

  constructor(private router: Router, private sitterServ:SitterService){}

  ngOnInit(): void {
    this.sitterId = sessionStorage.getItem("sitterId");
    if (!this.sitterId) {
      this.router.navigate(['']);
    }else{
      this.sitterServ.getSitter(this.sitterId).subscribe(
        (res)=>{
          this.sitterIn = res;
          console.log(this.sitterIn);
          console.log(this.sitterIn.activities);
          
          
        },
        (err)=>{console.log(err);
      })
    }
  }

}
