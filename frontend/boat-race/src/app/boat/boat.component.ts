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

    constructor(){
        this.boat1.nameCaptain = 'killian';
        this.boat1.nameBoat = 'YollieRoger';
        this.boat1.lengthBoat = 66;
    }
}
