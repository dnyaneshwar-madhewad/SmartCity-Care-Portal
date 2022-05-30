package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Hospital;
import com.example.entity.Request;
import com.example.entity.User;
import com.example.repository.HospitalRepository;
import com.example.repository.RequestRepository;
import com.example.repository.UserRepository;

@Service
@Transactional
public class RequestServiceImpl implements RequestServiceIntf{
	
	@Autowired
	RequestRepository requestRepository;
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	UserRepository userRepository;
	
	@Override
	public List<Request> getAllRequest() {
		
		return requestRepository.findAll();
	}
	
	@Override
	public List<Request> getAllPendingRequest(int hospid) {
		Hospital hospital = hospitalRepository.getById(hospid);
		return requestRepository.getPendingRequest(hospital);
	}
	
	@Override
	public List<Request> getAllRequestByHospital(int hospid) {
		Hospital hospital = hospitalRepository.getById(hospid);
		return requestRepository.findByHospital(hospital);
	}

	@Override
	public List<Request> getAllRequestByUser(int userid) {
		User user = userRepository.getById(userid);
		return requestRepository.findByUser(user);
	}

	@Override
	public void updateRequesttoAccepted(int reqid) {
		Request request = requestRepository.getById(reqid);
		request.setStatus("Accepted");
		Hospital hospital = request.getHospital();
		if(request.getBedtype().equalsIgnoreCase("ventilator"))
		hospital.setVentilator(hospital.getVentilator()-1);
		else if(request.getBedtype().equalsIgnoreCase("oxygen"))
			hospital.setOxygen(hospital.getOxygen()-1);
		else if(request.getBedtype().equalsIgnoreCase("normal"))
			hospital.setNormal(hospital.getNormal()-1);
		request.setHospital(hospital);
		requestRepository.save(request);
	}
	
	@Override
	public void updateRequesttoRejected(int reqid) {
		requestRepository.updaterequest(reqid, "Rejected");
	}
	
	@Override
	public void deleteRequest(int reqid) {
		//findRequestById(reqid);
		requestRepository.deleteById(reqid);
		
	}

	@Override
	public Request findRequestById(int reqid) {
		
		return requestRepository.findById(reqid).get();
	}
	
	@Override
	public Request saveRequest(Request req, int hid, int uid) {
		Hospital hos = hospitalRepository.findById(hid).get();
		User user = userRepository.findById(uid).get();
		Request request = new Request(req.getBedtype(),req.getSymptoms(),req.getTimetoarrive(),req.getStatus(),hos,user);
		
		return requestRepository.save(request);
	}

	
}
