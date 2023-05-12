import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  listaProductos: any = [];
  listaSubcategorias: any = [];
  listaProductosFiltrados: any = [];
  
  rutaImg: string = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
  constructor( private restService: ProductosService){}
  
  ngOnInit(): void {
    this.cargarData();
    this.cargarSubcategorias();
  }

  cargarData(){
    this.restService.get(`https://static.compragamer.com/test/productos.json`)
    .subscribe(respuesta => {
      console.log(respuesta)
      this.listaProductos = respuesta;
    })
  }
  cargarSubcategorias(){
    this.restService.get(`https://static.compragamer.com/test/subcategorias.json`)
    .subscribe(respuesta => {
      console.log(respuesta)
      this.listaSubcategorias = respuesta;
    })
  }
  filtrarPorSubcategoria(event: any){
    console.log(event);
    this.listaProductosFiltrados = this.listaProductos.filter((producto: any) => {
      if (event.value == 0){
        return producto
      }else{
        return producto.id_subcategoria == event.value
      }
    })
  }



  obtenerImagen(nombre: string): string {
    return `https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_${nombre}-med.jpg`;
  }

  agregarAlCarrito(){
    return this.restService.agregarAlCarrito();
  }

}