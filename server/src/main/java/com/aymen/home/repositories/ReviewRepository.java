package com.aymen.home.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.Review;
import com.aymen.home.models.Sitter;
import com.aymen.home.models.User;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {
	
	// Read All
	List<Review> findAll();
	
	// FIND reviews by sitter
    List<Review> findBySitter(Sitter sitter);
	
	// FIND reviews by user
    List<Review> findByUser(User user);
    
	// FIND reviews by date
    List<Review> findByCreatedAt(Date createdAt);

}
