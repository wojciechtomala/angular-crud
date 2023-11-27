import { TestBed } from '@angular/core/testing';

import { CampaignEventsServiceService } from './campaign-events-service.service';

describe('CampaignEventsServiceService', () => {
  let service: CampaignEventsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignEventsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
