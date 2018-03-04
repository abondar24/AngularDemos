import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TracksComponent } from './tracks/tracks.component';
import {HttpClientModule} from "@angular/common/http";
import {SpotifyService} from "./service/spotify.service";
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo:'search',pathMatch:'full'},
  {path: 'search', component: SearchComponent},
  {path: 'artists/:id', component: ArtistComponent},
  {path: 'tracks/:id', component: TracksComponent},
  {path: 'albums/:id', component: AlbumComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TracksComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
