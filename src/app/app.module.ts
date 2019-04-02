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
import { FavouritiesComponent } from './favourities/favourities.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';

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
    // environment,
    NewsComponent,
    HackerComponent,
    FutureComponent,
    SearchComponent,
    PagenotfoundComponent,
    FavouritiesComponent
    // AngularFireModule,
    // AngularFirestoreModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule
 ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, //
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
