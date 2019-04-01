import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../news.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NewsService]
})
export class SearchComponent implements OnInit {

  private articles: News[];
  private searchText: string;
  constructor(private route: ActivatedRoute, private router: Router, private __newsService: NewsService) { }
  ngOnInit() {
      this.route.params.subscribe(params => {
      this.searchText = params['searchText'];
      this.__newsService.getArticles(this.searchText)
      .subscribe(news => {
        this.articles = news;
    });
    });
   }
  }
