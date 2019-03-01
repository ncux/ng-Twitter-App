import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {

  query: string = '';
  hashtagsArray = [];

  constructor(private searchService: SearchService) { }

  onEnterKeydown(query) {
    if (query == '') {
      return;
    } else {
      this.query = query;
      this.getHashtags();
    }
  }


  ngOnInit() {
  }

  getHashtags() {
    this.searchService.searchHashtag(this.query).subscribe(results => this.hashtagsArray = results);
  }

}
