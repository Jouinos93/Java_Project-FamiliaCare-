package com.aymen.home.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aymen.home.models.Review;
import com.aymen.home.repositories.ReviewRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ReviewAPI {

	@Autowired
	private ReviewRepository ReviewRepo;
	
	@GetMapping("/reviews")
	public ResponseEntity<Object> allReviews(){
		return ResponseEntity.ok().body(ReviewRepo.findAll());
	} 
	
    @PostMapping("/reviews")
    public ResponseEntity<Object> createClient(@Valid @RequestBody Review Review, BindingResult result) {
    	if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Review savedReview = ReviewRepo.save(Review);
        return ResponseEntity.ok().body(savedReview);
    }
    
	
    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable("id") Long id) {
        ReviewRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
	@GetMapping("/reviews/{id}")
	public Review oneReview(@PathVariable Long id){
		return ReviewRepo.findById(id).orElseThrow(RuntimeException::new);
	}
    
    @PutMapping("/reviews/{id}")
    public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Review Review, BindingResult result) {
    	if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Review savedReview = ReviewRepo.save(Review);
        return ResponseEntity.ok().body(savedReview);
    }
}
