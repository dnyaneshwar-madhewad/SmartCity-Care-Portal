package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
	
	//@Query("select h from Hospital h where h.email=:email and h.password=:password")
	Optional<Hospital> findByEmailAndPassword(String email, String password);
	
	Optional<Hospital> findByEmail(String email);
	
	@Modifying
	@Query("update Hospital h set h.ventilator=:vent, h.oxygen=:oxy, h.normal=:nor where hospid=:id")
	int updatebed(int id,int vent,int oxy,int nor);
	
	@Modifying
	@Query("update Hospital h set h.a_pos=:a_pos, h.a_neg=:a_neg, h.b_pos=:b_pos,h.b_neg=:b_neg,h.ab_pos=:ab_pos,h.ab_neg=:ab_neg,h.o_pos=:o_pos,h.o_neg=:o_neg where hospid=:id")
	int updateblood(int id,int a_pos,int a_neg,int b_pos,int b_neg,int ab_pos,int ab_neg,int o_pos,int o_neg );
	
	@Modifying
	@Query("update Hospital h set h.oxygenavailable=:oxygenavailable where hospid=:id")
	int updateoxygen(int id,int oxygenavailable);
	
	@Query("select ventilator, oxygen, normal from Hospital h where h.hospitalname=:hosname")
	List<Object[]> findBedByHospitalname(String hosname);
	
	@Query("select h.a_pos, h.a_neg, h.b_pos, h.b_neg, h.ab_pos, h.ab_neg, h.o_pos, h.o_neg from Hospital h where h.hospitalname=:hosname")
	List<Object[]> findBloodByHospitalname(String hosname);
	
	@Query("select h.oxygenavailable from Hospital h where h.hospitalname=:hosname")
	List<Object[]> findOxygenByHospitalname(String hosname);
	
	Hospital findByHospitalname(String hosname);
}
