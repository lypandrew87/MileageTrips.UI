import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {HotelService} from "../../Services/Hotel/hotel.service"; 
import {Hotel} from '../../Services/Hotel/hotel.model'

let showHotels : boolean = false; 

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  providers: [HotelService]
})

export class TablesComponent implements OnInit {

  constructor(private hotelService : HotelService) {}

  allHotels  = [];

  ngOnInit() {

  }

  getAllHotels(){
    this.hotelService.getAllHotels().subscribe(data =>{
    this.allHotels = data
    showHotels = true;
    });
  }
}
