import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HackerComponent } from './hacker/hacker.component';
import { FutureComponent } from './future/future.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'hacker', component: HackerComponent },
  { path: 'future', component: FutureComponent },
  { path: 'articles/:searchText', component: SearchComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HackerComponent,
    FutureComponent,
    SearchComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
