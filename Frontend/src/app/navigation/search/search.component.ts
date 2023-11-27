import { Component, OnInit } from '@angular/core';
import { CampaignEventsServiceService } from './services/campaign-events-service.service';
import { IeventCampaign } from './models/eventCampaign.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(
    private _eventCampaignService: CampaignEventsServiceService
  ){}
  
  ngOnInit(): void {
    this.getEventCampaignList()
  }

  campaignsData: IeventCampaign[] = []; 

  processData(res: IeventCampaign[]) {
    this.campaignsData = res;
  }

  getEventCampaignList(){
    this._eventCampaignService.getEventCampaignList().subscribe({
      next: (res) => {
        this.processData(res);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
