import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  cars: Car[];
  constructor() { }

  ngOnInit() {
    this.cars=[
      {vin:'eae758fa',year:'1981',brand:'Fiat',color:'red'},
      {vin:'eae758fa',year:'1981',brand:'Mercedes',color:'Blue'},
      {vin:'eae758fa',year:'1981',brand:'Jaguar',color:'Jaguar'},
      {vin:'eae758fa',year:'1981',brand:'Fiat',color:'red'},
      {vin:'eae758fa',year:'1981',brand:'Mercedes',color:'Blue'},
      {vin:'eae758fa',year:'1981',brand:'Jaguar',color:'Jaguar'},
       
    ];
  }

}

export interface Car {
  vin;
  year;
  brand;
  color;
}