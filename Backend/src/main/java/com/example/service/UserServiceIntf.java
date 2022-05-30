package com.example.service;

import java.util.List;

import com.example.entity.Hospital;
import com.example.entity.User;

public interface UserServiceIntf {
	
	User saveUser(User user);
	
	List<User> getAllUser();
	
	Hospital findAmbulanceContactById(int hospid);
	
	Hospital findAllByHospitalId(int hospid);
}
