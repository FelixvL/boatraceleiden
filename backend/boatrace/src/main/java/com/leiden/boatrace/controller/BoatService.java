package com.leiden.boatrace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.leiden.boatrace.domain.Boat;

@Service
@Transactional
public class BoatService {
	@Autowired
	BoatRepository boatRepository;
	
	public Iterable<Boat> getAllBoats(){
		return boatRepository.findAll();
	}
	
}
