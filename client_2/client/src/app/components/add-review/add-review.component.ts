import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { Sitter } from 'src/app/models/sitter.model';
import { User } from 'src/app/models/user.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  review: Review = new Review();

  getRate: number = 1;

  @Input() user!: User;
  @Input() sitter!: Sitter;

  constructor(private revServ: ReviewService){}

  onRatingChange(rating: number) {
    this.getRate = rating;
  }

  ngOnInit(): void {}

  onSubmit(){
    this.review.user = this.user;
    this.review.sitter = this.sitter;
    this.review.rate = this.getRate;
    alert("Thank you for your feedback");

    console.log(this.review);
    
    this.revServ.createReview(this.review).subscribe(
      (data) => {
        console.log(this.review, " created successfully");

        this.review.content="";
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
