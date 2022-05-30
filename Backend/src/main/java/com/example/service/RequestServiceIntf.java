package com.example.service;

import java.util.List;

import com.example.entity.Request;

public interface RequestServiceIntf {
	
	List<Request> getAllRequest();
	
	List<Request> getAllPendingRequest(int hospid);
	
	List<Request> getAllRequestByHospital(int hospid);
	
	List<Request> getAllRequestByUser(int userid);
	
	Request saveRequest(Request request, int hid, int uid);
	
	void updateRequesttoAccepted(int reqid);
	
	void updateRequesttoRejected(int reqid);
	
	Request findRequestById(int reqid);
	
	void deleteRequest(int reqid);
}
