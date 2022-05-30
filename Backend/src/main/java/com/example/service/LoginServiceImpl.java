package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dto.Loginres;
import com.example.entity.Admin;
import com.example.entity.Hospital;
import com.example.entity.User;
import com.example.repository.AdminRepository;
import com.example.repository.HospitalRepository;
import com.example.repository.UserRepository;

@Service
public class LoginServiceImpl implements LoginServiceIntf {
	
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Loginres authenticateUser(String email, String password) {
		try {
			Admin admin = adminRepository.findByEmail(email)
					.orElseThrow(() -> new RuntimeException("User with email: " + email + " doesn't exist."));
			if (password.equals(admin.getPassword())) {
				return new Loginres(admin.getId(), admin.getName(), "admin");
			}
		} catch (Exception e) {
			System.out.println("msg : " + e.getMessage());
		}

		try {
			Hospital hospital = hospitalRepository.findByEmail(email)
					.orElseThrow(() -> new RuntimeException("User with email: " + email + " doesn't exist."));
			if (passwordEncoder.matches(password, hospital.getPassword())) {
				return new Loginres(hospital.getHospid(), hospital.getHospitalname(), "hospital");
			}

		} catch (Exception e) {
			System.out.println("msg : " + e.getMessage());
		}

		try {
			User user = userRepository.findByEmail(email)
					.orElseThrow(() -> new RuntimeException("User with email: " + email + " doesn't exist."));
			if (passwordEncoder.matches(password, user.getPassword())) {
				return new Loginres(user.getUserid(), user.getName(), "user");
			}

		} catch (Exception e) {
			System.out.println("msg : " + e.getMessage());
		}
		throw new RuntimeException("Invalid password!!!");
	}

}
