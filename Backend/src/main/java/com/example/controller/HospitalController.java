package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;
import com.example.service.DoctorinfoServiceInft;
import com.example.service.HospitalServiceIntf;

@RestController
@RequestMapping("/hospital")
public class HospitalController {
	
	@Autowired
	private HospitalServiceIntf hospitalService;
	@Autowired
	private DoctorinfoServiceInft doctorinfoService;
	
	
	@PutMapping("/addbed/{hospid}")
	private ResponseEntity<String> savebed(@RequestBody Hospital hosp,@PathVariable int hospid) {
		System.out.println(hosp.getVentilator());
		hospitalService.updateBed(hosp,hospid);
		return new ResponseEntity<>("Bed Details Added",HttpStatus.OK);
		
	}
	
	@PutMapping("/addblood/{hospid}")
	private ResponseEntity<String> saveblood(@RequestBody Hospital hosp,@PathVariable int hospid) {
		hospitalService.updateBlood(hosp,hospid);
		return new ResponseEntity<>("Blood Detials Added",HttpStatus.OK);
	}
	
	@PutMapping("/addoxygen/{hospid}")
	private ResponseEntity<String> saveoxygen(@RequestBody Hospital hosp,@PathVariable int hospid) {
		hospitalService.updateOxygen(hosp,hospid);
		return new ResponseEntity<>("Oxygen Details Added",HttpStatus.OK);
	}
	
	@PostMapping("/adddoctorinfo/{hospid}")
	private ResponseEntity<String> savedoctorinfo(@RequestBody Doctorinfo doctorinfo,@PathVariable int hospid) {
		hospitalService.savedoctorinfo(doctorinfo,hospid);
		return new ResponseEntity<>("Doctor info added",HttpStatus.CREATED);
	}
	
	@GetMapping("/viewbed/{hosname}")
	private Hospital getBedByName(@PathVariable String hosname) {
		return hospitalService.getBedByHospitalname(hosname);
	}
	
	@GetMapping("/viewblood/{hosname}")
	private Hospital getAllBlood(@PathVariable String hosname) {
		return hospitalService.getBloodByHospitalname(hosname);
	}
	
	@GetMapping("/viewoxygen/{hosname}")
	private Hospital getAllOxygen(@PathVariable String hosname) {
		return hospitalService.getOxygenByHospitalname(hosname);
	}
	
	@GetMapping("/hospitalid/{hospid}")
	private Hospital getHospital(@PathVariable int hospid) {
		System.out.println(hospid);
		return hospitalService.getHospitalById(hospid);
	}
	
	@GetMapping("/doctorinfo/{hospid}")
	private List<Doctorinfo> getAllDoctorinfo(@PathVariable int hospid) {
		return doctorinfoService.getAllDoctorinfos(hospid);
	}
	
}
