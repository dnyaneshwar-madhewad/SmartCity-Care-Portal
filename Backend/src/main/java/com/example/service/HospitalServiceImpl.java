package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;
import com.example.repository.AdminRepository;
import com.example.repository.DoctorinfoRepository;
import com.example.repository.HospitalRepository;
import com.example.repository.UserRepository;

@Service
@Transactional
public class HospitalServiceImpl implements HospitalServiceIntf {

	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	DoctorinfoRepository doctorinfoRepository;
	@Autowired
	PasswordEncoder passwordEncoder;
	
	
	@Override
	public Hospital savehospital(Hospital hosp) {	
		hosp.setPassword(passwordEncoder.encode(hosp.getPassword()));
		return hospitalRepository.save(hosp);
	}

	@Override
	public List<Hospital> getAllHospital() {
		return hospitalRepository.findAll();
	}
	
	@Override
	public Hospital getHospitalById(int id) {
		return hospitalRepository.findById(id).get();
	}

	@Override
	public Doctorinfo savedoctorinfo(Doctorinfo d, int id) {
		Hospital hos = hospitalRepository.findById(id).get();
		
		Doctorinfo info = new Doctorinfo(d.getName(), d.getEmail(), d.getQualification(), d.getSpecialization(),hos);
		
		return doctorinfoRepository.save(info);
	}

	@Override
	public void updateBed(Hospital hosp, int id) {
		hospitalRepository.updatebed(id, hosp.getVentilator(), hosp.getOxygen(), hosp.getNormal());
	}

	@Override
	public void updateBlood(Hospital h, int id) {
		hospitalRepository.updateblood(id, h.getA_pos(), h.getA_neg(), h.getB_pos(), h.getB_neg(),
				h.getAb_pos(), h.getAb_neg(), h.getO_pos(), h.getO_neg());
	}

	@Override
	public void updateOxygen(Hospital hosp,int id) {
		hospitalRepository.updateoxygen(id, hosp.getOxygenavailable());
	}

	@Override
	public Hospital getBedByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	@Override
	public Hospital getBloodByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	@Override
	public Hospital getOxygenByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}


	
  /*@Override
	public Bed updateBed(Bed bed) {
		Bed b = bedRepository.findById(bed.getBedid()).get();
		b.setNormal(bed.getNormal());
		b.setOxygen(bed.getOxygen());
		b.setVentilator(bed.getVentilator());
		return bedRepository.save(b);
	}
	@Override
	public Blood updateBlood(Blood blood) {
		Blood bl = bloodRepository.findById(blood.getBloodid()).get();
		bl.setApos(blood.getApos());
		bl.setAneg(blood.getAneg());
		bl.setBpos(blood.getBpos());
		bl.setBneg(blood.getBneg());
		bl.setAbpos(blood.getAbpos());
		bl.setAbneg(blood.getAbneg());
		bl.setOpos(blood.getOpos());
		bl.setOneg(blood.getOneg());
		return bloodRepository.save(bl);
	}
	@Override
	public Oxygen updateOxygen(Oxygen oxygen) {
		Oxygen o = oxygenRepository.findById(oxygen.getOxygenid()).get();
		o.setOxygenavailable(oxygen.getOxygenavailable());
		return oxygenRepository.save(o);
	}*/

}
