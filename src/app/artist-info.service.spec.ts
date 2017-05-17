import { TestBed, inject } from '@angular/core/testing';

import { ArtistInfoService } from './artist-info.service';

describe('ArtistInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistInfoService]
    });
  });

  it('should ...', inject([ArtistInfoService], (service: ArtistInfoService) => {
    expect(service).toBeTruthy();
  }));
});
