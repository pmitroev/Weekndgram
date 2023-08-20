import { Component, OnInit } from '@angular/core';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, from, map } from 'rxjs'; // Import 'from' from RxJS
import { DataService } from 'src/app/shared/dataService/data.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css'],
})
export class CurrentPostComponent implements OnInit {
  postId: string = '';
  post$!: Observable<Post>;
  isowner: boolean = false;
  postUid: string = '';

  constructor(
    private router: ActivatedRoute, private data: DataService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.postId = id;

      const db = getFirestore();
      const postRef = doc(db, 'posts', this.postId);

      this.post$ = from(getDoc(postRef)).pipe(
        map((documentSnapshot) => {
          const data = documentSnapshot.data();
          if (data) {
            // console.log(data);
            this.postUid = data['uid'];
            // console.log(this.postUid);
            
            return {
              _id: this.postId,
              place: data['place'],
              description: data['description'],
              imageUrl: data['imageUrl'],
              uid: data['uid'],
            } as Post;
          } else {
            throw new Error('Document not found'); 
          }
        }),
        filter((post) => !!post) 
      );
    } else {
      console.log('err');
      
    }
  }

  isOwner() {
    if (localStorage.getItem('token') && localStorage.getItem('token') == this.postUid) {
        this.isowner = true;
        console.log(this.isowner);
        
    } else {
        this.isowner = false;
        console.log(this.isowner);

    }
  }

    deletePost(post: Post) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.data.deletePost(post).then(() => console.log('delete successful'));
      }
    }
}
