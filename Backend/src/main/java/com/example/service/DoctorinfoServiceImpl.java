package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;
import com.example.repository.DoctorinfoRepository;
import com.example.repository.HospitalRepository;

@Service
public class DoctorinfoServiceImpl implements DoctorinfoServiceInft{
	
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	DoctorinfoRepository doctorinfoRepository;
	
	@Override
	public List<Doctorinfo> getAllDoctorinfos(int hospid) {
		Hospital hospital = hospitalRepository.getById(hospid);
		return doctorinfoRepository.findByHospital(hospital);
	}

	@Override
	public List<Doctorinfo> getAllDoctorinfosByName(String hosname) {
		Hospital hospital = hospitalRepository.findByHospitalname(hosname);
		return doctorinfoRepository.findByHospital(hospital);
	}

}
