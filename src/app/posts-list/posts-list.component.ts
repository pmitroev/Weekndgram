import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService/data.service';
import { Firestore, collection, doc, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}
  
  posts:any = [];

  onPostClick(postId: string) {
    this.router.navigate(['post', postId])
  }

  refreshPosts() {
    this.data.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  ngOnInit() {
    this.refreshPosts();
  }
}
