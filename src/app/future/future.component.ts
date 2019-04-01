import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css'],
  providers: [NewsService]
})

export class FutureComponent implements OnInit {

  @Input() future: News[];
  constructor(private __newsService: NewsService) { }
  myFunc() {
    alert('You must register before you can do that. Visit our registration page, then try again');
  }
  ngOnInit() {
    if (this.future === undefined) {
      this.getFuture();
    }
  }

  getFuture() {
    this.__newsService.getFuture()
      .subscribe(news => {
        this.future = news;
      });
  }

}
