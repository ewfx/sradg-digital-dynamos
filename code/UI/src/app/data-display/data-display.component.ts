import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-data-display',
  imports: [CommonModule,HttpClientModule,MatTableModule,MatPaginatorModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit{
  @Input() displayData: any=[];
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator;

  ngOnInit(): void {
    if (this.displayData.length > 0) {
      this.displayedColumns = Object.keys(this.displayData[0]);
      this.displayedColumns.push('actions');
      this.dataSource = new MatTableDataSource(this.displayData);
      this.dataSource.paginator = this.paginator;
    }
  }

  onFalsePositive(item: any): void {
    alert('False Positive action for: ' + JSON.stringify(item));
  }

  onServiceNow(item: any): void {
    alert('Service Now action for: ' + JSON.stringify(item));
  }

  onJira(item: any): void {
    alert('JIRA action for: ' + JSON.stringify(item));
  }

  onEmail(item: any): void {
    alert('Email action for: ' + JSON.stringify(item));
  }

  onUserComments(item: any): void {
    alert('User Comments action for: ' + JSON.stringify(item));
  }
}
