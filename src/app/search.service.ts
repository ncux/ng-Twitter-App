import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private urlParams = `pages_limit=3&wait=0`;
  private hashtagsUrl = `https://am-twitter-scrape.herokuapp.com/hashtags/`;
  private usersUrl = `http://am-twitter-scrape.herokuapp.com/users/`;

  constructor(private http: HttpClient) { }

  searchHashtag(hashtag): Observable<any> {
    console.log(hashtag);
    return this.http.get(`${this.hashtagsUrl}${hashtag}?${this.urlParams}`);
  }

  searchUser(user): Observable<any> {
    console.log(user);
    return this.http.get(`${this.usersUrl}${user}?${this.urlParams}`);
  }


}
