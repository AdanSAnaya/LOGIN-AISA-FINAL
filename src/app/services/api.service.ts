import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Para hacer peticiones HTTP
import { Observable } from 'rxjs'; // Para manejar la respuesta de la API
import { map } from 'rxjs/operators'; // Para manipular la respuesta

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL de la API (puedes cambiarla por la URL de tu API real)
  private apiUrl = 'https://fakestoreapi.com/users';  

  constructor(private http: HttpClient) { }

  // Método para obtener los usuarios desde la API
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Regresa los usuarios como un observable
  }

  // Método para validar el usuario
  validateUser(email: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      this.getUsers().subscribe((users) => {
        const user = users.find(u => u.email === email && u.password === password);
        observer.next(user != null);
        observer.complete();
      });
    });
  }
}
