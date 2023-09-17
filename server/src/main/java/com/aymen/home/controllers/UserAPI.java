package com.aymen.home.controllers;

import java.util.List;

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

import com.aymen.home.exception.UserNotFoundException;
import com.aymen.home.exception.UserRegistrationException;
import com.aymen.home.exception.UserUpdateException;
import com.aymen.home.models.Address;
import com.aymen.home.models.LoginUser;
import com.aymen.home.models.Subscription;
import com.aymen.home.models.Subscription.SubscriptionType;
import com.aymen.home.models.User;
import com.aymen.home.services.AddressService;
import com.aymen.home.services.SubscriptionService;
import com.aymen.home.services.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserAPI {

    @Autowired
    private UserService userServ;

    @Autowired
    private AddressService adrServ;

    @Autowired
    private SubscriptionService subServ;
    
//    private final JwtUtil jwtUtil;
//
////    @Autowired
//    public UserAPI(JwtUtil jwtUtil) {
//        this.jwtUtil = jwtUtil;
//    }

    @PostMapping(value = "/users/register", consumes = "application/json;charset=UTF-8")
    public ResponseEntity<Object> registerUser(@Valid @RequestBody User newUser, BindingResult result) {
    	System.out.println(newUser);
    	
        Address savedAddress = adrServ.createAddress(newUser.getAddress());
        newUser.setAddress(savedAddress);
        
        Subscription sub = new Subscription(SubscriptionType.FREE,newUser.getCreatedAt(),"Free Trial");
        
        //subServ.createSubscription(sub);
        newUser.setSubscription(subServ.createSubscription(sub));
        try {
            User registeredUser = userServ.register(newUser, result);
            if (registeredUser != null) {
                return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
            } else {
                return ResponseEntity.badRequest().body("Registration failed");
            }
        } catch (UserRegistrationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginUser loginRequest, BindingResult result) {
    	System.out.println(loginRequest);
        User authenticatedUser = userServ.login(loginRequest, result);
        if (authenticatedUser != null) {
            return ResponseEntity.ok().body(authenticatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.getAllErrors());
        }
    }

    @GetMapping("/users")
    public ResponseEntity<?> allUsers() {
        List<User> users = userServ.allUsers();
        return ResponseEntity.ok().body(users);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") Long id) {
        try {
            userServ.deleteUser(id);
            return ResponseEntity.ok().body("User deleted successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> oneUser(@PathVariable Long id) {
        User user = userServ.getUser(id);
        if (user != null) {
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateClient(@PathVariable("id") Long id, @Valid @RequestBody User updatedUser,
            BindingResult result) {
        try {
            User savedUser = userServ.updateUser(id, updatedUser, result);
            return ResponseEntity.ok().body(savedUser);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (UserUpdateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
