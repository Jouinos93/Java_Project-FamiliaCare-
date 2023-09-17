package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aymen.home.models.Review;
import com.aymen.home.repositories.ReviewRepository;

@Service
public class ReviewService {
	
	// === CRUD ===

			@Autowired
			private ReviewRepository ReviewRepo;

			// READ ALL
			public List<Review> allReviews(){
				return ReviewRepo.findAll();
			}

			// CREATE
			public Review createReview(Review a) {
				return ReviewRepo.save(a);
			}

			// READ ONE
			public Review findReview(Long id) {

				Optional<Review> maybeReview = ReviewRepo.findById(id);
				if(maybeReview.isPresent()) {
					return maybeReview.get();
				}else {
					return null;
				}
			}

			// UPDATE 
			public Review updateReview(Review a) {
				return ReviewRepo.save(a);
			}

			// DELETE
			public void deleteReview(Long id) {
				ReviewRepo.deleteById(id);
			}



}