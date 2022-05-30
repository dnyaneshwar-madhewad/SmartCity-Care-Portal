package com.example.service;

import com.example.dto.Loginres;

public interface LoginServiceIntf {
	
	Loginres authenticateUser(String email, String password);
	

	
}
