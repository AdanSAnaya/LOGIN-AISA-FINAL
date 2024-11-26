import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';  
import { RickMortyService } from '../services/rick-morty.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'; // Importar MatDialog
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort'; 
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbar,
    MatToolbarRow,
    MatCard,
    MatCardContent,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator
  ],
})
export class HomeComponent implements OnInit {
  user: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['index', 'image', 'name', 'status', 'species', 'gender', 'actions'];
  totalCharacters = 0;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private rickMortyService: RickMortyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData); 
    } else {
      this.router.navigate(['/login']);
    }
    this.getCharacters(1);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  getCharacters(page: number): void {
    const pageSize = this.paginator?.pageSize || 10;
    this.rickMortyService.getCharactersPaginated(page, pageSize).subscribe((data) => {
      this.totalCharacters = data.info.count;
      this.dataSource.data = data.results;
    });
  }

  deleteCharacter(character: any): void {
    const index = this.dataSource.data.indexOf(character);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);  // Elimina el personaje de la lista
      this.dataSource._updateChangeSubscription();  // Actualiza la tabla
    }
  }

  onPageChange(event: any): void {
    this.getCharacters(event.pageIndex + 1);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    console.log('Filtro aplicado:', filterValue);
  
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.name.toLowerCase().includes(filter) ||
             data.status.toLowerCase().includes(filter) ||
             data.species.toLowerCase().includes(filter) ||
             data.gender.toLowerCase().includes(filter);
    };
  
    this.dataSource.filter = filterValue;
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openConfirmDialog(character: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmar eliminación',
        message: `¿Estás seguro de que deseas eliminar a "${character.name}"?`,
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Si se confirmó, realiza la acción de eliminar
        this.deleteCharacter(character);
      }
    });
  }

  editCharacter(character: any): void {
    const editedCharacter = { ...character };
    const dialogRef = this.dialog.open(CharacterDialogComponent, { data: editedCharacter });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.data.findIndex((char) => char.id === result.id);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  openCharacterDialog(character: any, isEditing: boolean): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, { data: character });
    
    dialogRef.afterOpened().subscribe(() => {
      if (isEditing) {
        dialogRef.componentInstance.enableEdit();
      }
    });
  }
}