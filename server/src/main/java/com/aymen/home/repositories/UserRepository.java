package com.aymen.home.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	// FIND USER BY EMAIL
    Optional<User> findByEmail(String email);
	
    // Read All
	List<User> findAll();
	
	//findByFirstname
	List<User> findByFirstName(String firstName);

}
