import {Component, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {Output} from "@angular/core";
import {SearchResult} from "../model/search-result";
import {YoutubeSearchService} from "../services/youtube-search.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeSearchService,
              private elem: ElementRef) { }

  ngOnInit() {
    //turn keyup event to a stream
    Observable.fromEvent(this.elem.nativeElement,'keyup')
      .map((e: any)=> e.target.value)
      .filter((text: string)=>text.length>1)
      .debounceTime(250)
      .do(()=>this.loading.emit(true))
      .map((query: string)=> this.youtube.search(query))
      .switch()
      .subscribe(
        (results: SearchResult[])=>{
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any)=>{
          console.log(err);
          this.loading.emit(false);
        },
        ()=>{
          this.loading.emit(false);
        }
      );
  }

}
