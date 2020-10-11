import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PostNewComponent } from './posts/post-new/post-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent,
    PostsComponent,
    HeaderComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
