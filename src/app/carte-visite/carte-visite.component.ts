
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarteVisite } from './carte-visite.model';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent implements OnInit {
  
  carteVisite: CarteVisite = new CarteVisite();
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(): void {
  console.log(this.carteVisite);
  }
}