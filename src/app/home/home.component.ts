import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent} from '@angular/material/card';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[MatIconModule,MatMenuModule,MatButtonModule,MatToolbar,MatToolbarRow,MatCard,MatCardHeader,MatCardTitle,MatCardContent],
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  logout() {
    this.router.navigate(['/login']);
  }
}
