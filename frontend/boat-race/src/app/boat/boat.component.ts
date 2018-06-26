import { Component } from '@angular/core';
import { Boat } from './boat';

@Component({
  selector: 'boat-component',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent {
    nameCaptain : string = 'testnameCaptainInBoatComponent';
    lengthBoat : number = 24;
    nameBoat : string = 'testBoatNameInBoatComponent';
    boat1 : Boat = new Boat();
    boat2 : Boat = new Boat();
    boatArray : Boat[] = [];

    constructor(){
        this.boat1.nameCaptain = 'killian';
        this.boat1.nameBoat = 'YollieRoger';
        this.boat1.lengthBoat = 66;
        this.boat2.nameCaptain = 'Jack Sparrow';
        this.boat2.nameBoat = 'Black Pearl';
        this.boat2.lengthBoat = 72;
        
        this.boatArray.push(this.boat1);
        this.boatArray.push(this.boat2);
    }
    amethodInBoat(){
        this.boat1.nameBoat = 'checkthis';
    }
}
