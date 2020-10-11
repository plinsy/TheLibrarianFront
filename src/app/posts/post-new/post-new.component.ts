import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import faker from "faker";
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    var title = faker.name.title()
    var content = faker.lorem.paragraph();

    this.postForm = this.formBuilder.group({
      title: [title, [Validators.required]],
      content: [content, [Validators.required]],
    })
  }

  onSubmit() {
    const { title, content } = this.postForm.value;

    this.postService.createPost(title, content)
    this.router.navigate(['/posts'])
  }
}
