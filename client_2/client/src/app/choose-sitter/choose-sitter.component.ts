import { Component, OnInit } from '@angular/core';
import { Action } from '../models/action.model';
import { ActionService } from '../services/action.service';
import { UserService } from '../services/user.serices';
import { User } from '../models/user.model';


@Component({
  selector: 'app-choose-sitter',
  templateUrl: './choose-sitter.component.html',
  styleUrls: ['./choose-sitter.component.css']
})
export class ChooseSitterComponent implements OnInit {

service: Action = new Action(); 
user!: any;
startDate!:any;
startTime!:any;
endDate!:any;
endTime!:any;

userId!:any;

constructor(
  private actionServ: ActionService,
  private userServ: UserService
){}

ngOnInit(): void {
  this.userId = sessionStorage.getItem("userId");
  this.userServ.getUserById(this.userId).subscribe(
    (data)=>{
      this.user = data;
    },
    (err)=>{
      console.log(err);
      
    })
}

onSubmit(){
  this.service.startDate= this.startDate + this.startTime;
  this.service.endDate= this.endDate + this.endTime;
  console.log(this.service.startDate,"/*///**/*//*/*/*",this.endDate);
  alert ('Thank you for your trust! a client service will call you in 24h maximum ')
  
  this.actionServ.createAction(this.service).subscribe(
    (data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
      
    })
}


}




