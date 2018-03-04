import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../service/spotify.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService,
              private router:Router,
              private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {this.query = params['query'] || ''});
  }

  ngOnInit() {
    this.search();
  }

  search() {
    if (!this.query){
      return;
    }

    this.spotifyService
      .searchTrack(this.query)
      .subscribe(res=>this.renderResults(res));
  }


  renderResults(res: any){
    this.results = null;
    if (res && res.tracks && res.tracks.items){
      this.results = res.tracks.items;
    }
  }

  submit(query: string){
    this.router.navigate(['search'],{queryParams: {query: query}})
      .then(_=>this.search());
  }
}
