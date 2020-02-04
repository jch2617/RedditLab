import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularReddit';
  posts : any[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://www.reddit.com/r/aww/.json").subscribe( (response: any) => {
      console.log(response);
      this.posts = response.data.children;
    } )
  }

}

