package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aymen.home.models.Subscription;
import com.aymen.home.repositories.SubscriptionRepository;

@Service
public class SubscriptionService {

	// === CRUD ===

	@Autowired
	private SubscriptionRepository SubRepo;

	// READ ALL
	public List<Subscription> allSubscriptions(){
		return SubRepo.findAll();
	}

	// CREATE
	public Subscription createSubscription(Subscription c) {
		return SubRepo.save(c);
	}

	// READ ONE
	public Subscription findSubscription(Long id) {

		Optional<Subscription> maybeSubscription = SubRepo.findById(id);
		if(maybeSubscription.isPresent()) {
			return maybeSubscription.get();
		}else {
			return null;
		}
	}

	// UPDATE 
	public Subscription updateSubscription(Subscription c) {
		return SubRepo.save(c);
	}

	// DELETE
	public boolean deleteSubscription(Long id) {
	    try {
	        SubRepo.deleteById(id);
	        return true; // Deletion was successful
	    } catch (Exception e) {
	        return false; // Deletion failed
	    }
	}






}
