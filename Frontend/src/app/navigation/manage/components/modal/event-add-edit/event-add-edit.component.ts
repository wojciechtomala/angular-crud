import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CampaignEventsService } from '../../../services/campaign-events.service';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.css']
})
export class EventAddEditComponent implements OnInit{
  campaignTownList: string[] = [
    'Kraków',
    'Warszawa',
    'Gdańsk',
    'Poznań',
    'Wrocław',
    'Łódź',
    'Katowice',
    'Szczecin',
    'Bydgoszcz',
    'Lublin'
  ];

  campaignForm: FormGroup;

  constructor(
      private _fb: FormBuilder, 
      private _eventCampaignService: CampaignEventsService, 
      private _dialogRef: MatDialogRef<EventAddEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
    this.campaignForm = this._fb.group({
      campaignImage: '',
      campaignName: '',
      keywords: '',
      bidAmount: '',
      campaighFund: '',
      campaignStatus: '',
      campaignTown: '',
      campaignRadius: ''
    });
  }

  ngOnInit(): void {
    this.campaignForm.patchValue(this.data);
  }

  cancelDialogForm(){
    this._dialogRef.close();
  }

  onFormSubmit() {
    if(this.campaignForm.valid){
      if(this.data){
        this._eventCampaignService.updateEventCampaign(this.data.id, this.campaignForm.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
      else{
        this._eventCampaignService.addEventCampaign(this.campaignForm.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
    }
  }
}
