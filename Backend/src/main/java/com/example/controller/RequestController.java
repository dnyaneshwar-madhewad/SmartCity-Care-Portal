package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Request;
import com.example.service.RequestServiceIntf;

@RestController
@RequestMapping("/request")
public class RequestController {
	
	@Autowired
	RequestServiceIntf requestService;
	
	@PostMapping("/addrequest/{userid}/{hospid}")
	private ResponseEntity<String> saverequest(@RequestBody Request request, @PathVariable int hospid, @PathVariable int userid) {
		requestService.saveRequest(request,hospid,userid);
		return new ResponseEntity<>("Successfully Added",HttpStatus.CREATED);
	}
	
	@GetMapping("/allrequest")
	private List<Request> getAllRequest() {
		return requestService.getAllRequest();
	}
	
	@GetMapping("/pendingrequest/{hospid}")
	private List<Request> getAllPendingRequest(@PathVariable int hospid) {
		return requestService.getAllPendingRequest(hospid);
	}
	
	@GetMapping("/requestforhosp/{hospid}")
	private List<Request> getRequestforHospital(@PathVariable int hospid){
		return requestService.getAllRequestByHospital(hospid);
	}
	
	@GetMapping("/requestbyuser/{userid}")
	private List<Request> getRequestByUser(@PathVariable int userid) {
		return requestService.getAllRequestByUser(userid);
	}
	
	@PutMapping("/acceptrequest/{status}/{reqid}")
	private ResponseEntity<String> updateRequesttoAccept(@PathVariable String status,@PathVariable int reqid) {
		if(status.equals("accepted"))
			requestService.updateRequesttoAccepted(reqid);
		else if(status.equals("rejected"))
			requestService.updateRequesttoRejected(reqid);
		return new ResponseEntity<String>("Request Status Updated",HttpStatus.OK);
	}
}
