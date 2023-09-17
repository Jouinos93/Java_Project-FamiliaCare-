package com.aymen.home.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.Sitter;

@Repository
public interface SitterRepository extends CrudRepository<Sitter, Long> {
	
	// FIND USER BY EMAIL
    Optional<Sitter> findByEmail(String email);
	
	// Read All
	List<Sitter> findAll();


}
