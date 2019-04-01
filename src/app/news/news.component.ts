import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  private hacker: News[];
  private future: News[];
  private isHackerAvailable: boolean;
  private isFutureAvailable: boolean;

  constructor(private __newsService: NewsService) {
    this.isHackerAvailable = false;
    this.isFutureAvailable = false;
  }

  ngOnInit() {
    this.getHacker();
    this.getFuture();

  }
  getHacker() {
    this.__newsService.getHacker()
      .subscribe(news => {
        this.hacker = news.slice(0, 6);
        this.isHackerAvailable = true;
      });
  }
  getFuture() {
    this.__newsService.getFuture()
      .subscribe(news => {
        this.future = news.slice(0, 6);
        this.isFutureAvailable = true;
      });
  }
}
