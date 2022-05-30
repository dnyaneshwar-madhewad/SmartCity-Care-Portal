package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Doctorinfo;
import com.example.entity.Request;
import com.example.entity.User;
import com.example.service.DoctorinfoServiceInft;
import com.example.service.RequestServiceIntf;
import com.example.service.UserServiceIntf;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserServiceIntf userService;
	@Autowired
	private DoctorinfoServiceInft doctorinfoService;
	
	@PostMapping("/adduser")
	private ResponseEntity<String> saveuser(@RequestBody User user) {
		userService.saveUser(user);
		return new ResponseEntity<>("Successfully Added",HttpStatus.CREATED);
	}
	
	@GetMapping("/doctorinfo/{hosname}")
	private List<Doctorinfo> getAllDoctorinfo(@PathVariable String hosname) {
		return doctorinfoService.getAllDoctorinfosByName(hosname);
	}
}
