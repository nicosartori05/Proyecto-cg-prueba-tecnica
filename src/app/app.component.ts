import { Component } from '@angular/core';
import { ProductosService } from './servicios/productos.service';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica';

  constructor(private productosService: ProductosService,
             private authService: AutenticacionService) {
    
  }
  getflag(){
    return this.authService.flagAutenticacion;
  }
  cerrarSesion(){
    this.authService.flagAutenticacion = false;
    console.log("Cierre de sesion")
  }
}