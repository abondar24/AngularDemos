import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../service/spotify.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  id: string;
  track: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params=>{this.id=params['id']});
  }

  ngOnInit() {
    this.spotify
      .getTrack(this.id)
      .subscribe(res=> this.renderTrack(res));
  }

  back() {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }

}
