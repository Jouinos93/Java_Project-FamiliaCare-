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

import com.aymen.home.models.Address;
import com.aymen.home.repositories.AddressRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class AddressAPI {

	@Autowired
	private AddressRepository AddressRepo;
	
	@GetMapping("/addresses")
	public ResponseEntity<Object> allAddresss(){
		return ResponseEntity.ok().body(AddressRepo.findAll());
	} 
	
    @PostMapping("/addresses")
    public ResponseEntity<Object> createClient(@Valid @RequestBody Address Address, BindingResult result) {
    	if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Address savedAddress = AddressRepo.save(Address);
        return ResponseEntity.ok().body(savedAddress);
    }
    
	
    @DeleteMapping("/addresses/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable("id") Long id) {
        AddressRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
	@GetMapping("/addresses/{id}")
	public Address oneAddress(@PathVariable Long id){
		return AddressRepo.findById(id).orElseThrow(RuntimeException::new);
	}
    
    @PutMapping("/addresses/{id}")
    public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Address address, BindingResult result) {
    	if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Address savedAddress = AddressRepo.save(address);
        return ResponseEntity.ok().body(savedAddress);
    }
}

