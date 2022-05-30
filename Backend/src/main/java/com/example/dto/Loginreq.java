package com.example.dto;

public class Loginreq {
	
	private String email;
	private String password;
	
	
	public Loginreq() {}
	
	public Loginreq(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Loginreq [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
