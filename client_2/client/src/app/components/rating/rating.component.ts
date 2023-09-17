import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number = 0; // Notation initiale
  @Output() ratingChange = new EventEmitter<number>(); // Événement émis lorsque la notation change
  selectedStarIndex: number = 0;
  stars: number[] = [1, 2, 3, 4, 5]; // Nombre d'étoiles 

  rate(starIndex: number) {
    this.selectedStarIndex = starIndex;
    this.rating = starIndex;
    this.ratingChange.emit(this.rating); // Émettre la nouvelle notation
    console.log(this.rating);
  }

}
