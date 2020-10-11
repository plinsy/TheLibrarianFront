import { PostsService } from './../posts.service';
import { Post } from './../models/post.model';
import { Component, OnDestroy, OnInit, AfterContentChecked } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy, AfterContentChecked {

  posts: Post[] = [];
  postSubscription: Subscription;
  currentPage: number = 1;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {   
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;        
      }
    )
  }
  
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.postService.getPosts()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postSubscription.unsubscribe()
  }

  pageChange(page) {
    this.currentPage = page;
  }
}
