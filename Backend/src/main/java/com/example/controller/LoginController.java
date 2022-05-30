package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.Loginreq;
import com.example.service.LoginServiceIntf;

@RestController
@RequestMapping("login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {

	@Autowired
	LoginServiceIntf loginService;
	
	@PostMapping("/userlogin")
	public ResponseEntity<?> authenticateUser(@RequestBody Loginreq loginreq){
		return ResponseEntity.ok(loginService.authenticateUser(loginreq.getEmail(),loginreq.getPassword()));
	}
}
