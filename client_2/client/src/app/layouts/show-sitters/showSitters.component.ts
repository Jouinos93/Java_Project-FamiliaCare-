import { Component, OnInit } from '@angular/core';
import { SitterService } from '../../services/sittersservice';
import { Sitter } from 'src/app/models/sitter.model';
import { UserService } from 'src/app/services/user.serices';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-show-sitters',
  templateUrl: './showSitters.component.html',
  styleUrls: ['./showSitters.component.css']
})
export class ShowSittersComponent implements OnInit {
  sitters: Sitter[] = [];
  userIn!: any;
  loggedInUser! : any;


  constructor(
              private sitterService: SitterService,
              private userServ: UserService,
              private router: Router
              ) 
              {}

  ngOnInit(): void {

    this.userIn = sessionStorage.getItem("userId");
      if (!this.userIn) {
        this.router.navigate(['']);
      }else{
        this.userServ.getUserById(this.userIn).subscribe(
          (res)=>{
            this.loggedInUser = res;
          },
          (err)=>{
            console.log(err);
          }     
        );
      }

    this.sitterService.getAllSitters().subscribe(
      (data) => {
        console.log(data); 
        this.sitters = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

}
