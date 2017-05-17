# Step 0 to 1
Step one adds [boostrap](http://www.getbootstrap.com) to the project for better styling.  It does this by modifying the `.angular-cli.json` file and adding to the styles array.   
## 1a Install Boostrap
`npm install bootstrap --save`

## 1b Modify `.angular-cli.json`
open `.angular-cli.json` and modify the `assets` array.

The Fragment of the file is as follows:
````
    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
````

insure ng serve is not running.  if so, stop it and restart after saving the file.

`ng serve` and you should get 'app-works' but in a slightly different font.

# Step 1 to 2: create two way binding on an edit field
Open the file `app.component.ts` in the \src\app folder.

change the value of title from app works! to what you would like to use.

just below the `title` assignment in the class, initialize a new variable to hold the artist.  

we're going to create a button bound to a function that takes a string (an artist name) to add to an array of artists we will display, and reset the edit file.   Within the component should be the following fragment to do those tasks:

````
  title = 'Favorite Musicians';
  artist = '';
  addArtist(toadd:string) {
      this.artists.push(toadd);
      this.artist='';
  }
````

now open the file `app.component.html` to present the view for this information.

Below the `<h1>` with the title; add a new `<div>` with an  `<input>` tag.   us the NgModel to double bind to the artist property of your class: `[(ngModel)]="artist"`

After the input tag, add a button.  style the button with the bootstrap 'btn' class.   Bind to an event using angular's () operator to a mouse click to call the `addArtists` method with the currently entered text as an argument. 

Bind to `artist` and `artists` to display their values using double curly braces `{{}}`.  use the `json` pipe(`|`) to expand the array.   The html file will look like the following
````
<h1>
  {{title}}
  </h1>
<div>
  <input type="text" placeholder="Artist Name" [(ngModel)]="artist">
  <button class="btn" (click)="addArtist(artist)">Add Artist</button>
</div>

<p>{{artist}}</p>
<p>{{artists | json}}</p>
````
