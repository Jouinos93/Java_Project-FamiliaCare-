package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.aymen.home.exception.UserLoginException;
import com.aymen.home.exception.UserRegistrationException;
import com.aymen.home.exception.UserUpdateException;
import com.aymen.home.models.LoginUser;
import com.aymen.home.models.User;
import com.aymen.home.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public User register(User newUser, BindingResult result) throws UserRegistrationException {
        validateRegistration(newUser, result);

        // Hash the password using BCrypt
        String hashedPassword = BCrypt.hashpw(newUser.getPassword(),BCrypt.gensalt());
        		newUser.setPassword(hashedPassword);

        return userRepo.save(newUser);
    }

    public User login(LoginUser loginRequest, BindingResult result) throws UserLoginException {
    	System.out.println(loginRequest.getEmail());
    	Optional<User> potentialUser = userRepo.findByEmail(loginRequest.getEmail());
    	System.out.println(potentialUser);
    	
        if (!potentialUser.isPresent()) {
            throw new UserLoginException("Invalid email.");
        }

        User user = potentialUser.get();

        // Verify the password using BCrypt
        if (!BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
            throw new UserLoginException("Invalid password.");
        }

        return user;
    }

    // Validation method for user registration
    private void validateRegistration(User newUser, BindingResult result) throws UserRegistrationException {
        validateEmail(newUser.getEmail(), result);
        validatePasswords(newUser.getPassword(), newUser.getConfirm(), result);
        // Add other validations as needed (e.g., firstName, lastName)
        
        if (result.hasErrors()) {
            throw new UserRegistrationException("Invalid registration data.");
        }
    }

    // Validation method for email
    private void validateEmail(String email, BindingResult result) {
        // Perform email validation here (e.g., format, uniqueness).
        // Add appropriate error messages to the result if validation fails.
    }

    // Validation method for passwords
    private void validatePasswords(String password, String confirmPassword, BindingResult result) {
        if (!password.equals(confirmPassword)) {
            result.rejectValue("confirm", "matches", "Passwords do not match.");
        }

        if (password.length() < 8 || password.length() > 128) {
            result.rejectValue("password", "length", "Password must be between 8 and 128 characters.");
        }
    }
    
    //ReadOne
    public User getUser(Long id) {
    	Optional<User> optionalUser = userRepo.findById(id);
    	if(optionalUser.isPresent()) {
    		return optionalUser.get();
    	}else {
    		return null;
    	}
    }
    
	// READ ALL
	public List<User> allUsers(){
		return userRepo.findAll();
	}

	//Delete
	public void deleteUser(Long id) {
		userRepo.deleteById(id);;
	}

	//Update
	  public User updateUser(Long id, User updatedUser, BindingResult result) {
	        // Check if the user exists
	        Optional<User> optionalUser = userRepo.findById(id);
	        if (!optionalUser.isPresent()) {
	            throw new UserUpdateException("User not found");
	        }

	        // Validate the updated user data
	        validateUpdatedUser(updatedUser, result);

	        // Update user details
	        User existingUser = optionalUser.get();
	        // Implement your logic to update user fields here based on your requirements.

	        // Save the updated user
	        User savedUser = userRepo.save(updatedUser);

	        return savedUser;
	    }
	    private void validateUpdatedUser(User updatedUser, BindingResult result) {
	        // Implement your validation logic for updated user data here.
	        // For example, check if updated fields are valid and meet your requirements.
	        // If validation fails, throw UserUpdateException with appropriate error message.
	    }
	
}
