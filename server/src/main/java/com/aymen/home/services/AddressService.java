package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aymen.home.models.Address;
import com.aymen.home.repositories.AddressRepository;

@Service
public class AddressService {
	
	// === CRUD ===

			@Autowired
			private AddressRepository AddressRepo;

			// READ ALL
			public List<Address> allAddresss(){
				return AddressRepo.findAll();
			}

			// CREATE
			public Address createAddress(Address a) {
				return AddressRepo.save(a);
			}

			// READ ONE
			public Address findAddress(Long id) {

				Optional<Address> maybeAddress = AddressRepo.findById(id);
				if(maybeAddress.isPresent()) {
					return maybeAddress.get();
				}else {
					return null;
				}
			}

			// UPDATE 
			public Address updateAddress(Address a) {
				return AddressRepo.save(a);
			}

			// DELETE
			public void deleteAddress(Long id) {
				AddressRepo.deleteById(id);
			}



}