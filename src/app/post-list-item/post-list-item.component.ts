import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {}

  ngOnInit(): void {
  }

  onLoveIt(){
    this.loveIts += 1

    return this.loveIts
  }

  onDislikeIt(){
    this.loveIts -= 1

    return this.loveIts
  }

  disliked(){
    return this.loveIts < 0
  }

  liked(){
    return this.loveIts > 0
  }


}
