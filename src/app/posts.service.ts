import { Post } from './models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];
  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
    // this.getPosts()
  }

  getPosts() {
    const getPostsUrl = serverUrl + "/posts"

    this.httpClient
      .get<any[]>(getPostsUrl)
      .subscribe(
        (response) => {       
          this.posts = response.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
          this.emitPosts()
        },
        (error) =>  {
          console.log(error)
        }
      )
  }

  savePosts() {
    const savePostsUrl = serverUrl + "/posts"
    this.httpClient
      .post<any[]>(savePostsUrl, { posts: this.posts })
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPosts()
        },
        (error) => {
          console.log(error);          
        }
      )
  }

  emitPosts() {
    this.postSubject.next(this.posts)
  }

  createPost(title: string, content: string) {
    const newPost = new Post(title, content)    

    // SAVE POST IN FRONT
    this.posts.push(newPost)

    // SAVE POST IN BACK
    const createPostUrl = serverUrl + "/posts";

    this.httpClient
      .post<Post>(createPostUrl, newPost)
      .subscribe(
        (response) => {
          this.posts.push(response)
          this.emitPosts();
        },
        (error) => {
          console.error(error)          
        }
      )
  }

  updatePost(id: number, postData: object) {
    const updatePostUrl = serverUrl + `/posts/${id}/update`
    this.httpClient
      .patch<Post[]>(updatePostUrl, postData)
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPosts();
        },
        (error) => {
          console.error(error);          
        }
      )
  }

  destroyPost(id: number) {
    const destroyPostUrl = serverUrl + `/posts/${id}/destroy`

    // REMOVE POST IN FRONT
    this.posts = this.posts.filter(
      (post) => {
        return post.id !== id
      }
    )
    this.emitPosts();

    // REMOVE POST IN BACK
    this.httpClient
      .delete<Post[]>(destroyPostUrl)
      .subscribe(
        (response) => {
          this.posts = response;
        },
        (error) => {
          console.error(error);
        }
      )
  }
}


const serverUrl = "http://localhost:8080"