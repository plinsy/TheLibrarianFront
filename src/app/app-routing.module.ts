import { PostNewComponent } from './posts/post-new/post-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: PostNewComponent },

  { path: '', redirectTo: "posts", pathMatch: 'full' },
  { path: '**', redirectTo: "posts" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
