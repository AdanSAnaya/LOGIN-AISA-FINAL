//Importaciones realizadas para el funcionamiento del servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Tipo de datos utilizada, define la estructura que tendrán los datos Usuario
export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

//El servicio estará a nivel de aplicación completa, se puede usar en cualquier parte de la aplicación
@Injectable({
  providedIn: 'root', 
})

//Definimos la clase api service, que tiene la propiedad de la URL de la API
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/users';

  //Recibe una instancia de HttpCliente y la asigna a la propiedad privada http que permite hacer solicitudes
  constructor(private http: HttpClient) {}

  //Obtenemos los datos de los usuarios de la api, obteniendo todos los datos en un arreglo
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
