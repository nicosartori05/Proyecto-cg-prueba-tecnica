import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AutenticacionService{

  usuariosRegistrados: any = [];
  localData: any
  flagAutenticacion: boolean = false;
  flagUsuarioExistente: boolean = false;


  constructor(private router:Router) {
   this.localData = localStorage.getItem("usuarios");
  if (this.localData) {
    this.usuariosRegistrados = JSON.parse(this.localData);
   }
  
  }

  registrarUsuario(usuario: any){
    const nuevoRegistro = {
      ...usuario,
      id: this.usuariosRegistrados.length
    }

    const usuarioExistente = this.usuariosRegistrados.find(
      (u: any) => {
        return u.email === usuario.email
      }
    );
    if (usuarioExistente) {
      this.router.navigateByUrl('registro');
      alert("el email utilizado ya se encuentra registrado en sistema, intente con uno distinto.");
      return true;
    } else {
      console.log(usuarioExistente)
      this.usuariosRegistrados.push (nuevoRegistro);
      console.log(this.usuariosRegistrados)
      localStorage.setItem("usuarios",JSON.stringify(this.usuariosRegistrados))
      this.router.navigateByUrl('login');
      return false;
    }
  }

  validarUsuario(emailUsuario: string, contrasena: string): boolean {
    console.log(this.usuariosRegistrados);
    const usuario = this.usuariosRegistrados.find(
      (u: any) => {
        return u.email === emailUsuario && u.contrasena === contrasena
      }
    );
    if (usuario) {
      this.router.navigateByUrl('productos');
      return true;
    } else {
      return false;
    }
  }

  login(){
    this.router.navigateByUrl('login');
  }
  registro(){
    this.router.navigateByUrl('registro');
  }
}