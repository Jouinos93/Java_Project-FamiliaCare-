package com.aymen.home.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.aymen.home.exception.UserRegistrationException;
import com.aymen.home.models.Address;
import com.aymen.home.models.LoginUser;
import com.aymen.home.models.Sitter;
import com.aymen.home.services.AddressService;
import com.aymen.home.services.SitterService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SitterAPI {

	@Autowired
	private SitterService sitterServ;
	
    @Autowired
    private AddressService adrServ;
	
	@GetMapping("/sitters")
	public ResponseEntity<Object> allSitters(){
		return ResponseEntity.ok().body(sitterServ.allSitters());
	} 
	
    @PostMapping("/sitters")
    public ResponseEntity<Object> createClient(@Valid @RequestBody Sitter Sitter, BindingResult result) {
    	if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Sitter savedSitter = sitterServ.createSitter(Sitter);
        return ResponseEntity.ok().body(savedSitter);
    }
    
    @PostMapping(value = "/sitters/register", consumes = "application/json")
    public ResponseEntity<Object> registerSitter(@Valid @RequestBody Sitter newSitter, BindingResult result) {
    	System.out.println(newSitter);

        Address savedAddress = adrServ.createAddress(newSitter.getAddress());

        newSitter.setAddress(savedAddress);

        try {
            Sitter registeredSitter = sitterServ.register(newSitter, result);
            if (registeredSitter != null) {
                return ResponseEntity.status(HttpStatus.CREATED).body(registeredSitter);
            } else {
                return ResponseEntity.badRequest().body("Registration failed");
            }
        } catch (UserRegistrationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/sitters/login")
    public ResponseEntity<?> loginCompany(@RequestBody LoginUser loginRequest, BindingResult result) {
        Sitter authenticatedSitter = sitterServ.login(loginRequest, result);
        if (authenticatedSitter != null) {
            return ResponseEntity.ok().body(authenticatedSitter);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.getAllErrors());
        }
    }
    
	
    @DeleteMapping("/sitters/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable("id") Long id) {
    	sitterServ.deleteSitter(id);
        return ResponseEntity.ok().build();
    }
    
	@GetMapping("/sitters/{id}")
	public Sitter oneSitter(@PathVariable Long id){
		return sitterServ.findSitter(id);//.orElseThrow(RuntimeException::new);
	}
    
    @PutMapping("/sitters/{id}")
    public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Sitter Sitter, BindingResult result) {
    	if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Sitter savedSitter = sitterServ.updateSitter(Sitter);
        return ResponseEntity.ok().body(savedSitter);
    }
}

