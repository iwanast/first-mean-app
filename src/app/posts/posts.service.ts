import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { Post } from './post.model';

@Injectable({providedIn: "root"})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>(); /*  Subject is essentially a eventemitter but broader then the injectable from Angular*/

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable(); /* returns an object which we can listen to but which we can't emit */
  }

  addPost(title: string, content: string) {
    this.posts.push({title: title, content: content});
    this.postsUpdated.next([...this.posts]) /*this pushes the new posts (with next) */
  }
}
