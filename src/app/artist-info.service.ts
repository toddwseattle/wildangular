import { Injectable } from '@angular/core';
import { Artist } from './artist';

@Injectable()
export class ArtistInfoService {

  constructor() {
  }
  public getArtistPictureUrl(artist: Artist) {
      return(artist.name + '-url');
   }

}
