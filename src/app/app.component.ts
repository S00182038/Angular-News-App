import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  private searchText: string;

  constructor(private router: Router) { }
  search() {
    console.log(this.searchText);
    this.router.navigate(['/articles', this.searchText]);
  }
}

