import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService/data.service';
import { Firestore, collection, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor(private data: DataService) {}
  
  posts:any = [];
  postId = '';

  getId() {
    this.data.getPosts().subscribe((res) => {
        this.posts = res;
        this.postId = this.posts.idField;
        res.forEach((p) => {
          return this.postId = p['id'];
        })
      });
  }

  refreshPosts() {
    this.data.getPosts().subscribe((res) => {
      this.posts = res;
      this.postId = this.posts.idField;
      res.forEach((p) => {
        this.postId = p['id'];
        console.log(this.postId);
      })
      
    });
  }

  ngOnInit() {
    this.refreshPosts();
  }
}
