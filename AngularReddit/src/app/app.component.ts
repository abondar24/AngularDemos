import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Github profile', 'http://github.com/abondar24', 24),
      new Article('Fullstack', 'http://fullstack.io', 6),
      new Article('Angular ', 'http://angular.io', 7),
    ];
  }


  addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean{
    console.log(`Article added: ${title.value} with link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article)=> b.votes - a.votes);
  }
}
