import { Component } from '@angular/core';
import { SitterService } from 'src/app/services/sittersservice';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {

  sitters: any[] = [];

  constructor(private sitterService:SitterService) { }

  ngOnInit(): void {
    this.sitterService.getAllSitters().subscribe(
      (data) => {
        this.sitters = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

}
