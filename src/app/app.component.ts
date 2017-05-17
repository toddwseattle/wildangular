import { Component } from '@angular/core';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Musicians';
  artist = '';
  artists: Artist[] = [];

  addArtist(toadd: string) {
      this.artists.push(new Artist(toadd));
      this.artist = '';
  }
}


