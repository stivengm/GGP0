import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/testPost';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TestPostService {
post: Post;
  constructor(private httpClient: HttpClient) {

  }

  getData() {
    return this.httpClient.get<Post[]>(environment.postURL, httpOptions);
  }

}
