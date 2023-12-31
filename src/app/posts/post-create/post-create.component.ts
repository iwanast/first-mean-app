import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  /*Output is a decorator so Angular is aware that this is an event you can listen to this from the parent component this means in the component where you are using the selector
  @Output() postCreated = new EventEmitter<Post>();  */
  newPost = '';

  constructor(public postsService: PostsService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content, this.randomNumber());
    form.resetForm(); 
  }

  randomNumber(): number{
    return Math.floor(Math.random() * 10000000 + 10000000)
  }
}
