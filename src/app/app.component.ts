import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Musicians';
  artist = '';
  artists: string[] = [];

  addArtist(toadd: string) {
      this.artists.push(toadd);
      this.artist = '';
  }
}


