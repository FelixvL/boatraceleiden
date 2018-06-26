package com.leiden.boatrace.controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.leiden.boatrace.domain.Boat;

@Component
public interface BoatRepository extends CrudRepository<Boat, Long>{

}
