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

import com.aymen.home.models.Action;
import com.aymen.home.repositories.ActionRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ActionAPI {

	@Autowired
	private ActionRepository ActionRepo;
	
	@GetMapping("/actions")
	public ResponseEntity<Object> allActions(){
		return ResponseEntity.ok().body(ActionRepo.findAll());
	} 
	
    @PostMapping("/actions")
    public ResponseEntity<Object> createClient(@Valid @RequestBody Action Action, BindingResult result) {
    	if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Action savedAction = ActionRepo.save(Action);
        return ResponseEntity.ok().body(savedAction);
    }
    
	
    @DeleteMapping("/actions/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable("id") Long id) {
        ActionRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
	@GetMapping("/actions/{id}")
	public Action oneAction(@PathVariable Long id){
		return ActionRepo.findById(id).orElseThrow(RuntimeException::new);
	}
    
    @PutMapping("/actions/{id}")
    public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Action Action, BindingResult result) {
    	if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
        Action savedAction = ActionRepo.save(Action);
        return ResponseEntity.ok().body(savedAction);
    }
}

