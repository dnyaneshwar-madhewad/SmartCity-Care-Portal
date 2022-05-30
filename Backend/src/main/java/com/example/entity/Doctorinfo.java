package com.example.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.*;


@Entity
@Table(name = "doctorinfo")
public class Doctorinfo implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorid;
	private String name;
	private String email;
	private String qualification;
	private String specialization;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "hospital_id",nullable = false)
	@JsonIgnore
	private Hospital hospital;

	
	public Doctorinfo() {}
	
	public Doctorinfo(int doctorid, String name, String email, String qualification, String specialization,
			Hospital hospital) {
		super();
		this.doctorid = doctorid;
		this.name = name;
		this.email = email;
		this.qualification = qualification;
		this.specialization = specialization;
		this.hospital = hospital;
	}

	public Doctorinfo( String name, String email, String qualification, String specialization,
			Hospital hospital) {
		super();
		this.name = name;
		this.email = email;
		this.qualification = qualification;
		this.specialization = specialization;
		this.hospital = hospital;
	}



	public int getDoctorid() {
		return doctorid;
	}

	public void setDoctorid(int doctorid) {
		this.doctorid = doctorid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	@Override
	public String toString() {
		return "Doctorinfo [doctorid=" + doctorid + ", name=" + name + ", email=" + email + ", qualification="
				+ qualification + ", specialization=" + specialization + "]";
	}
	
	
}
