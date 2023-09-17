import { Component } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews: Review[] = [];

  constructor (private reviewServ: ReviewService){}
  ngOnInit(): void {

    this.reviewServ.getAllReviews().subscribe(reviews => {
      this.reviews = reviews;
    }); 

  }
}
