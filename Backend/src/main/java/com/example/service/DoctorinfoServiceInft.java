package com.example.service;

import java.util.List;

import com.example.entity.Doctorinfo;

public interface DoctorinfoServiceInft {

	List<Doctorinfo> getAllDoctorinfos(int hospid);
	
	List<Doctorinfo> getAllDoctorinfosByName(String hosname);
	
}
