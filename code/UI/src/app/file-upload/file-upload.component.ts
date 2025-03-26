import { Component } from '@angular/core';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-file-upload',
  imports: [LoadingSpinnerComponent,CommonModule,DataDisplayComponent,RouterOutlet,AlertDialogComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  file1: File | null = null;
  file2: File | null = null;
  isLoading = false;
  displayData:any=[];

  constructor(private dialog: MatDialog) {}
  
  onFileSelected(event: Event, fileNumber: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type !== 'text/csv') {
        this.openDialog('Please select a CSV file.');
        input.value = ''; 
        return;
      }
      if (fileNumber === 1) {
        this.file1 = input.files[0];
      } else if (fileNumber === 2) {
        this.file2 = input.files[0];
      }
    }
  }

  onReconciliation(): void {
    if (this.file1 && this.file2) {
      // Perform reconciliation logic here
      this.isLoading = true;
    
      console.log('Reconciliation started with files:', this.file1.name, this.file2.name);
      this.displayData= [{"name": "John Doe", "age": 30,"address":"Hyderabad"}, {"name": "Jane Doe", "age": 25,"address":"Bangalore"}];

      this.isLoading = false;
    } else {
      this.openDialog('Please select both files before starting reconciliation.');
    }
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(AlertDialogComponent);
    dialogRef.componentInstance.message = message;
  }

}
