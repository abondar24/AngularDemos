import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../model/search-result";

@Component({
  selector: 'youtube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
