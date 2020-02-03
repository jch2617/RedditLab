import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reddit-post-detail',
  templateUrl: './reddit-post-detail.component.html',
  styleUrls: ['./reddit-post-detail.component.css']
})
export class RedditPostDetailComponent implements OnInit {
  @Input() redditPost : any; 

  constructor() { }

  ngOnInit() {
  }

}
