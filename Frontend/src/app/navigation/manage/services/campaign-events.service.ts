import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignEventsService {

  constructor(private _http: HttpClient) { }

  addEventCampaign(data: any) : Observable<any>{
    return this._http.post('http://localhost:3000/campaigns', data);
  }

  getEventCampaignList() : Observable<any>{
    return this._http.get('http://localhost:3000/campaigns');
  }

  deleteEvent(id: number) : Observable<any>{
    return this._http.delete(`http://localhost:3000/campaigns/${id}`);
  }

  updateEventCampaign(id: number, data: any) : Observable<any>{
    return this._http.put(`http://localhost:3000/campaigns/${id}`, data);
  }
}
