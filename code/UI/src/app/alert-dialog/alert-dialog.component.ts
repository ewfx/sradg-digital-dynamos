import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  imports: [],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  message: string = '';

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
