import { Component } from '@angular/core';
import { DataService } from '../shared/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private data: DataService) {}

  posts: any = [];

  refreshPosts() {
    this.data.getPosts().subscribe((res) => {
      this.posts = res;
      this.posts = this.posts.slice(0,3);
    });
  }

  ngOnInit() {
    this.refreshPosts();
  }
}
