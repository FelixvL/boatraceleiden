package com.leiden.boatrace.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leiden.boatrace.controller.BoatService;
import com.leiden.boatrace.domain.Boat;

@RestController
public class BoatEndpoint {
	@Autowired
	BoatService boatService;
	
	@GetMapping("/boat")
	public Iterable<Boat> testing() {
		System.out.println("working");
		return boatService.getAllBoats();		
	}
}
