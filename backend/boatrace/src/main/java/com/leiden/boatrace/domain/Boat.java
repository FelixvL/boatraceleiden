package com.leiden.boatrace.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Boat {
	@Id
	@GeneratedValue
	private long id;
	
	private String nameCaptain;
	private String nameBoat;
	private int lengthBoat;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNameCaptain() {
		return nameCaptain;
	}
	public void setNameCaptain(String nameCaptain) {
		this.nameCaptain = nameCaptain;
	}
	public String getNameBoat() {
		return nameBoat;
	}
	public void setNameBoat(String nameBoat) {
		this.nameBoat = nameBoat;
	}
	public int getLengthBoat() {
		return lengthBoat;
	}
	public void setLengthBoat(int lengthBoat) {
		this.lengthBoat = lengthBoat;
	}
	
	

}
