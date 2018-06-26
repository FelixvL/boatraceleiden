import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Boat } from './boat';

@Injectable()
export class BoatService{
    constructor(private http : Http){}
    
    getBoats(){
        return this.http.get("http://localhost:8082/boat");
    }

}