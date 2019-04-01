import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.css'],
  providers: [NewsService]
})
export class HackerComponent implements OnInit {

  @Input() hacker: News[];

  constructor(private __newsService: NewsService) { }
  myFunc() {
    alert('You must register before you can do that.  Visit our registration page, then try again');
  }
  ngOnInit() {
    if (this.hacker === undefined) {
      this.getHacker();
    }
  }
  getHacker() {
    this.__newsService.getHacker()
      .subscribe(news => {
        this.hacker = news;
        console.log(this.hacker);
      });
  }
}
