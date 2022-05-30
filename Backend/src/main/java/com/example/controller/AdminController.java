package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Hospital;
import com.example.entity.User;
import com.example.service.HospitalServiceIntf;
import com.example.service.UserServiceIntf;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdminController {
	@Autowired
	private HospitalServiceIntf hospitalService;
	@Autowired
	private UserServiceIntf userService;
	
	@PostMapping("/addhospital")
	private ResponseEntity<String> saveHospital(@RequestBody Hospital hospital) {
		hospitalService.savehospital(hospital);
		return new ResponseEntity<String>("Successfully Added",HttpStatus.CREATED);
	}
	
	@GetMapping("/allhospitals")
	private List<Hospital> getAllHospital() {
		return hospitalService.getAllHospital();
	}
	
	@GetMapping("/allusers")
	private List<User> getAllUser() {
		return userService.getAllUser();
	}
}
