import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string | undefined;
  userPosts: Observable<any[]> | undefined;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        // this.userPosts = this.getUserPosts();
      }
    });
  }

//   getUserPosts(): Observable<any[]> {
//     return this.firestore.collection('posts', ref => ref.where('userId', '==', this.userId)).valueChanges();
//   }
}
