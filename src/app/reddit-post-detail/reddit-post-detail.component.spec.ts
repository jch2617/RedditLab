import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostDetailComponent } from './reddit-post-detail.component';

describe('RedditPostDetailComponent', () => {
  let component: RedditPostDetailComponent;
  let fixture: ComponentFixture<RedditPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
