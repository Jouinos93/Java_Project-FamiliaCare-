package com.aymen.home.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.Action;

@Repository
public interface ActionRepository extends CrudRepository<Action, Long> {
	
	// Read All
		List<Action> findAll();

}
