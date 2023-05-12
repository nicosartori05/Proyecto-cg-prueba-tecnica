import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  carritoCompras: number = 0;

constructor(private http: HttpClient) { }

public get(url: string){
  return this.http.get(url);
}

public agregarAlCarrito(){
  this.carritoCompras++;
}

public getCarritoCompras(): number {
  return this.carritoCompras;
}
}