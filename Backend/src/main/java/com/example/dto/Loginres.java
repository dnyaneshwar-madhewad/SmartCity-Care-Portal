package com.example.dto;

public class Loginres {
	
	int id;
	String name;
	String role;
	
	public Loginres() {}

	public Loginres(int id, String name, String role) {
		super();
		this.id = id;
		this.name = name;
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Loginres [id=" + id + ", name=" + name + ", role=" + role + "]";
	}
	
	
	
	
	
}
