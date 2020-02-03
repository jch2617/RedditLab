import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditPostDetailComponent } from './reddit-post-detail/reddit-post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostDetailComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
