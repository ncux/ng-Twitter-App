import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  query: string = '';
  usersArray = [];

  constructor(private searchService: SearchService) { }

  onEnterKeydown(query) {
    if (query == '') {
      return;
    } else {
      this.query = query;
      this.getUsers();
    }
  }

  ngOnInit() {
  }

  getUsers() {
    this.searchService.searchUser(this.query).subscribe(results => this.usersArray = results);
  }

}
