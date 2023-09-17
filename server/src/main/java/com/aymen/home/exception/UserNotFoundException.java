package com.aymen.home.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(String message) {
        super(message);
    }
}
