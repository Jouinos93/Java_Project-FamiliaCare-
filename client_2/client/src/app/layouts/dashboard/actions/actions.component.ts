import { Component } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  actions: Action[] = [];

  constructor (private actionServ: ActionService){}
  ngOnInit(): void {

    this.actionServ.getAllActions().subscribe(actions => {
      this.actions = actions;
    }); 

  }


  updateAction(action: Action){
    this.actionServ.updateAction(action.id,action).subscribe(
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

}
