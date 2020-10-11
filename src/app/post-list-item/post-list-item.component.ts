import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  @Input() updated_at: Date;

  isDeleting: boolean = false;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
  }

  onLoveIt(){
    this.loveIts += 1

    this.onUpdate()

    return this.loveIts
  }

  onDislikeIt(){
    this.loveIts -= 1

    this.onUpdate()

    return this.loveIts
  }

  disliked(){
    return this.loveIts < 0
  }

  liked(){
    return this.loveIts > 0
  }

  attributes() {
    return {
      title: this.title,
      content: this.content,
      loveIts: this.loveIts,
    }
  }

  onUpdate() {
    this.postsService.updatePost(this.id, this.attributes())

    this.router.navigate(["/posts"])
  }

  onRemove() {
    this.isDeleting = true;
    
    this.postsService.destroyPost(this.id)

    this.router.navigate(['/posts'])
  }

  positiveLoves() {
    return this.loveIts > 0
  }

  negativeLoves() {
    return this.loveIts < 0
  }
}
