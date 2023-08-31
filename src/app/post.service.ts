import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { POSTS } from './mock-posts';
import { Post } from './post';

@Injectable({ providedIn: 'root' })
export class PostService {
  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    return posts;
  }

  getPost(id: number): Observable<Post> {
    const post = POSTS.find((post) => post.id === id)!;
    return of(post);
  }
}
