import { Component, OnInit } from '@angular/core';
import { RickMortyServiceService } from '../rick-morty-service.service';
import { rickMorty } from '../rick-morty';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css',
})
export class Pregunta4Component{
  
  rickMorty: rickMorty[] = [];
  columnasDesplegadas: string[] = [
    'id',
    'name',
    'air_date',
    'episode',
    'characters',
    'url',
    'created',
  ];
  constructor(private rickMortyService: RickMortyServiceService) {}
  ngOnInit(): void {
    this.rickMortyService.listarRickMorty().subscribe((data) => {
      this.rickMorty = data;
    },
    (error) =>{
      console.log(error);
    });
    
  }
}
