import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  nuevoUsuario: any = {
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    contrasena: '',
  }
constructor( private service:AutenticacionService,
  private fb: FormBuilder){

}
registrarUsuario(){
    this.service.registrarUsuario(this.nuevoUsuario)
    console.log("entro al componente register")
  }

  login(){
    this.service.login()
  }
}  