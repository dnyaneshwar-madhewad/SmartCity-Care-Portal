package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;

@Repository
public interface DoctorinfoRepository extends JpaRepository<Doctorinfo, Integer>{
	
	List<Doctorinfo> findByHospital(Hospital hospital);

}
