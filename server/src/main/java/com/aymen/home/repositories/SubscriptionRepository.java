package com.aymen.home.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.Subscription;

@Repository
public interface SubscriptionRepository extends CrudRepository<Subscription, Long> {

	
    // ROead All
	List<Subscription> findAll();
}
