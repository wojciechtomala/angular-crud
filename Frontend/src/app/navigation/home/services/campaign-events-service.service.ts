import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignEventsServiceService {

  constructor(private _http: HttpClient) { }
  
  getEventCampaignList() : Observable<any>{
    return this._http.get('http://localhost:3000/campaigns');
  }
}
