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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "request")
public class Request implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reqid;
	private String bedtype;
	private String symptoms;
	private int timetoarrive;
	private String status;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "hospital_id")
	@JsonBackReference
	private Hospital hospital;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;
	
	public Request() {}

	public Request(int reqid, String bedtype, String symptoms, int timetoarrive, String status, Hospital hospital,
			User user) {
		super();
		this.reqid = reqid;
		this.bedtype = bedtype;
		this.symptoms = symptoms;
		this.timetoarrive = timetoarrive;
		this.status = status;
		this.hospital = hospital;
		this.user = user;
	}
	
	
	
	public Request(String bedtype, String symptoms, int timetoarrive, String status, Hospital hospital, User user) {
		super();
		this.bedtype = bedtype;
		this.symptoms = symptoms;
		this.timetoarrive = timetoarrive;
		this.status = status;
		this.hospital = hospital;
		this.user = user;
	}

	public Request(String bedtype, String symptoms, int timetoarrive, Hospital hospital, User user) {
		super();
		this.bedtype = bedtype;
		this.symptoms = symptoms;
		this.timetoarrive = timetoarrive;
		this.hospital = hospital;
		this.user = user;
	}

	public int getReqid() {
		return reqid;
	}

	public void setReqid(int reqid) {
		this.reqid = reqid;
	}

	public String getBedtype() {
		return bedtype;
	}

	public void setBedtype(String bedtype) {
		this.bedtype = bedtype;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public int getTimetoarrive() {
		return timetoarrive;
	}

	public void setTimetoarrive(int timetoarrive) {
		this.timetoarrive = timetoarrive;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Request [reqid=" + reqid + ", bedtype=" + bedtype + ", symptoms=" + symptoms + ", timetoarrive="
				+ timetoarrive + ", status=" + status + "]";
	}
	
	
}
