//Importaciones 
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService} from '../services/api.service'; 
import { User } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
 
//COmponente creado nombre de la etiqueta, etc.
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

//Nombre de la clase
export class LoginComponent {
  //Propiedades del componente
  email: string = ''; 
  password: string = ''; 
  errorMessage: string = '';
  //Constructor que recibe dos dependencias, la de utas y la de apiservice para manejo de la api
  constructor(private router: Router, private apiService: ApiService) {}

  //Método que se ejecuta al presionar el botón
  onLogin() {
    //Obtiene los usuarios mediante el método getUsers definido en el servicio
    this.apiService.getUsers().subscribe({
      //Si es correcta la llamada de los usuarios procede con el proceso de verificacion
      next: (users: User[]) => {
        // Imprimir la lista de usuarios obtenidos
        console.log('Usuarios obtenidos:', users);
        // Busca al usuario con el correo y la contraseña ingresados
        const user = users.find(
          (u) => u.email === this.email && u.password === this.password
        );
        if (user) {
          console.log('Inicio de sesión exitoso');
          this.router.navigateByUrl('/home'); // Redirige si las credenciales son correctas
        } else {
          this.errorMessage = 'Correo o contraseña incorrectos'; // Muestra mensaje de error
        }
      },
      //Si no se pueden recuperar los datos manda mensaje de error
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
        this.errorMessage = 'Hubo un problema al intentar iniciar sesión';
      },
    });
  }
}
