import { Component, OnInit} from '@angular/core';
import { CampaignEventsServiceService } from './services/campaign-events-service.service';
import { ActivatedRoute } from '@angular/router';
import { IeventCampaign } from '../search/models/eventCampaign.model';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  constructor(private _eventCampaignService: CampaignEventsServiceService, private route: ActivatedRoute){}

  eventCampaignData : IeventCampaign = {
    campaignImage: "",
    campaignName: "",
    keywords: "",
    bidAmount: 0,
    campaighFund: 0,
    campaignStatus: "",
    campaignTown: "",
    campaignRadius: 0,
    id: 0
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const eventId = params['id'];
      this.getEventCampaign(eventId);
    });
  }

  processData(res: IeventCampaign) {
    this.eventCampaignData = res;
  }

  getEventCampaign(id: number){
    this._eventCampaignService.getEventCampaign(id).subscribe({
      next: (res) => {
        this.processData(res);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
