import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [
    {
      title: "Mon premier post",
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet numquam cupiditate ab dolorem perferendis culpa, fuga, vel unde quidem quos ipsam libero porro incidunt magnam iusto aliquam architecto molestias explicabo.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet numquam cupiditate ab dolorem perferendis culpa, fuga, vel unde quidem quos ipsam libero porro incidunt magnam iusto aliquam architecto molestias explicabo.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon troisième post",
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet numquam cupiditate ab dolorem perferendis culpa, fuga, vel unde quidem quos ipsam libero porro incidunt magnam iusto aliquam architecto molestias explicabo.',
      loveIts: 0,
      created_at: new Date()
    },
  ]
}
