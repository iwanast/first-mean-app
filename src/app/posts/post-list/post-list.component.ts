import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: "This is the first post's content" },
  //   { title: 'Second Post', content: "This is the second post's content" },
  //   { title: 'Thirs Post', content: "This is the third post's content" },
  // ];
 @Input() posts: Post[] = []; /*now you can bind posts from the outside and from the outside means from the direct parent */
}
