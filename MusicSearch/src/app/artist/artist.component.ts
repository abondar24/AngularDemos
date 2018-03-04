import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../service/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params=>{this.id=params['id']});
  }


  ngOnInit() {
    this.spotify
      .getArtist(this.id)
      .subscribe(res=> this.renderArtist(res));
  }

  back() {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }

}
