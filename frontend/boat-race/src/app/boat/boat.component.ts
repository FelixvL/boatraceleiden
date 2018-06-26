import { Component } from '@angular/core';

import { BoatService } from './boat.service';

import { Boat } from './boat';

@Component({
  selector: 'boat-component',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
  providers: [ BoatService ]
})
export class BoatComponent {
    nameCaptain : string = '';
    lengthBoat : number = 0;
    nameBoat : string = '';
    boat1 : Boat = new Boat();
    boat2 : Boat = new Boat();
    boatArray : Boat[] = [];

    constructor( private boatService : BoatService){
        this.boat1.nameCaptain = 'killian';
        this.boat1.nameBoat = 'YollieRoger';
        this.boat1.lengthBoat = 66;
        this.boat2.nameCaptain = 'Jack Sparrow';
        this.boat2.nameBoat = 'Black Pearl';
        this.boat2.lengthBoat = 72;        
        this.boatArray.push(this.boat1);
        this.boatArray.push(this.boat2);
    }
    makeBoat(){
        let boat : Boat = new Boat();
        boat.nameBoat = this.nameBoat;
        boat.nameCaptain = this.nameCaptain;
        boat.lengthBoat = this.lengthBoat;
        this.boatArray.push(boat);
        this.nameBoat = '';
        this.nameCaptain = '';
        this.lengthBoat = 0;
    }
    loadExternalBoats(){
        this.boatService.getBoats().subscribe(boten => {
            console.log(boten);
            this.boatArray = boten.json();
        });
    }
}
