import { Component, OnInit } from '@angular/core';
import { Sitter } from 'src/app/models/sitter.model';
import { SitterService } from 'src/app/services/sittersservice';
import { UserService } from 'src/app/services/user.serices';

@Component({
  selector: 'app-sitters',
  templateUrl: './sitters.component.html',
  styleUrls: ['./sitters.component.scss']
})
export class SittersComponent implements OnInit{

  sitters: Sitter[] = [];

  constructor (private sitterServ: SitterService){}
  ngOnInit(): void {

    this.sitterServ.getAllSitters().subscribe(sitters => {
      this.sitters = sitters;
    }); 

  }

  
  toggleButton(sitter : Sitter){
    sitter.isActif = !sitter.isActif;
  }
}
