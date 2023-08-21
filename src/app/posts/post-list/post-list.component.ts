import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: "This is the first post's content" },
  //   { title: 'Second Post', content: "This is the second post's content" },
  //   { title: 'Thirs Post', content: "This is the third post's content" },
  // ];
  posts: Post[] =
    []; /* with the @Input before posts you can bind posts from the outside and from the outside means from the direct parent */
  private postsSub: Subscription; /*this creates a property of type Subscription so we can unsubscribe when not on the DOM visible*/

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  /*this prevents memory leak! */
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
