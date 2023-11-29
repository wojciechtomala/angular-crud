import { Component, OnInit, ViewChild } from '@angular/core';
import { EventAddEditComponent } from './components/modal/event-add-edit/event-add-edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CampaignEventsService } from './services/campaign-events.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  displayedColumns: string[] = [
    'campaignImage', 
    'campaignName', 
    'keywords',
    'bidAmount', 
    "campaighFund",
    "campaignStatus",
    "campaignTown",
    "campaignRadius",
    "id",
    "action"
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog, 
    private _eventCampaignService: CampaignEventsService
  ){}

  total = 10000;
  
  ngOnInit(): void {
    this.getEventCampaignList()
  }

  openDialogForm(){
    const dialogRef =  this._dialog.open(EventAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEventCampaignList();
        }
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEvent(id: number){
    this._eventCampaignService.deleteEvent(id).subscribe({
      next: (res) => {
        this.getEventCampaignList();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  getEventCampaignList(){
    this._eventCampaignService.getEventCampaignList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  openEditDialogForm(data: any){
    const  dialogRef = this._dialog.open(EventAddEditComponent, {
      data
    });
    
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEventCampaignList();
        }
      }
    })
  }
}
