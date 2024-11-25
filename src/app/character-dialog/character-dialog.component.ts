import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-dialog',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './character-dialog.component.html',
  styleUrl: './character-dialog.component.css'
})

export class CharacterDialogComponent {
  isEditing: boolean = false; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  enableEdit() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }
}