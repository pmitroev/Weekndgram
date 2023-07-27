import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService/data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
    constructor(private data: DataService) {}

    posts:any = [];

    refreshPosts() {
        this.data.getPosts().subscribe((res) => {
            this.posts = res;
        })
    }

    ngOnInit() {
        this.refreshPosts();
    }
}
