import { Component } from '@angular/core';
import { Contacto } from '../contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

  nombreInput: string = '';
  apellidoInput: string = '';
  emailInput: string = '';
  telefonoInput: string = '';

  constructor( ) { 

  }

  enviar()  {
    let contacto1 = new Contacto( this.nombreInput, this.apellidoInput, this.emailInput, this.telefonoInput );
    
  }
  


}
