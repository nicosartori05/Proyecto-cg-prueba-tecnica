import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailUsuario: string = '';
  contrasena: string = '';

  constructor(private authService: AutenticacionService) {
  }

  iniciarSesion() {
    const usuarioValido = this.authService.validarUsuario(this.emailUsuario, this.contrasena);

    // console.log(this.emailUsuario)
    // console.log(this.contrasena)
    if (usuarioValido) {
      this.authService.flagAutenticacion = true;
      // usuario válido, hacer algo como redirigir a la página de inicio o guardar la sesión
      console.log("el usuario existe - Inicio de sesion correctamente")
    } else {
      // usuario no válido, mostrar un mensaje de error o hacer algo más
      console.log("el usuario NO existe - No se pudo iniciar sesion")
    }
  }
  registro(){
    this.authService.registro();
  }
}