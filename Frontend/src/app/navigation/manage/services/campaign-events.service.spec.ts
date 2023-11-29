import { TestBed } from '@angular/core/testing';

import { CampaignEventsService } from './campaign-events.service';

describe('CampaignEventsService', () => {
  let service: CampaignEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
