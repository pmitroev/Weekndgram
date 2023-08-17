import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/shared/dataService/data.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  posts: any = [];
  userPosts: any = [];
  constructor(private data: DataService, private router: Router) {}

  onPostClick(postId: string) {
    this.router.navigate(['posts', postId])
  }

  refreshPosts() {
    this.data.getPosts().subscribe((res) => {
    this.posts = res.filter(post => post['uid'] == localStorage.getItem('token'));
    });
  }

  ngOnInit() {
    this.refreshPosts();
  }
}
