package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.aymen.home.models.LoginUser;
import com.aymen.home.models.Sitter;
import com.aymen.home.repositories.SitterRepository;

@Service
public class SitterService {

	// === CRUD ===

	@Autowired
	private SitterRepository SitterRepo;

	// READ ALL
	public List<Sitter> allSitters() {
		return SitterRepo.findAll();
	}

	// CREATE
	public Sitter createSitter(Sitter c) {
		return SitterRepo.save(c);
	}

	// READ ONE
	public Sitter findSitter(Long id) {

		Optional<Sitter> maybeSitter = SitterRepo.findById(id);
		if (maybeSitter.isPresent()) {
			return maybeSitter.get();
		} else {
			return null;
		}
	}

	// UPDATE
	public Sitter updateSitter(Sitter c) {
		return SitterRepo.save(c);
	}

	// DELETE
	public void deleteSitter(Long id) {
		SitterRepo.deleteById(id);
	}

    // TO-DO: Write register and login methods!
    public Sitter register(Sitter newSitter, BindingResult result) {
        Optional<Sitter> potentialSitter = SitterRepo.findByEmail(newSitter.getEmail());
        
        //check email
        if(potentialSitter.isPresent()) {
        	result.rejectValue("email", "unique", "The email already exists");
        }
        // check if passwords match
        if(!newSitter.getPassword().equals(newSitter.getConfirm())) {
        	result.rejectValue("password", "matches", "The passwords don't match");
        }
        if(result.hasErrors()) {
        	  return null;
        }
       String hashed=BCrypt.hashpw(newSitter.getPassword(), BCrypt.gensalt());
       newSitter.setPassword(hashed);
       return SitterRepo.save(newSitter);
    }
    
    
    public Sitter login(LoginUser newLogin, BindingResult result) {
    	// find user
    	Optional<Sitter> potentialSitter = SitterRepo.findByEmail(newLogin.getEmail());
    	//reject if it doesn't exist
    	if(!potentialSitter.isPresent()) {
    		result.rejectValue("email","unique","Email doesn't exist" );
    		return null;
    	}
    	
    	//get from DB
    	Sitter user = potentialSitter.get();
    	//check PW
		if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
		    result.rejectValue("password", "matches", "Invalid Password!");
		}
        if(result.hasErrors()) {
        	return null;
        }
        return user;
    }
}
