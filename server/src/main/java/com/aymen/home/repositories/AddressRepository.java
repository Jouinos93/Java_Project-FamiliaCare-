package com.aymen.home.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aymen.home.models.Address;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {
	
	// Read All
	List<Address> findAll();

	List<Address> findByCity(String city);
	
	List<Address> findByState(String state);

}
