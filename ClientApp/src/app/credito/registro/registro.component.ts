import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona:  Persona;
  constructor(private personaService : PersonaService) { }

  ngOnInit() {
    this.persona = new Persona();
  }

  add(){
    this.personaService.post(this.persona).subscribe(p=> {
      if(p != null){
        this.persona = p;
        alert('Creado correctamente!')
        console.log(this.persona);
      }
    });
  }

}
