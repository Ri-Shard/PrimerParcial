import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  personas:Persona[];

  constructor(private personaService : PersonaService ) { }

  ngOnInit() {
    this.personaService.get().subscribe(result => {
      this.personas = result;
    });
    console.log(this.personas);


  }

}
