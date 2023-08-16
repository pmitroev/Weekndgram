import { Component, OnInit } from '@angular/core';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs'; // Import 'from' from RxJS
import { DataService } from 'src/app/shared/dataService/data.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css'],
})
export class CurrentPostComponent implements OnInit {
  postId: string = '';
  post$: Observable<any> | undefined;

  constructor(
    private data: DataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.postId = id;

      const db = getFirestore();
      const postRef = doc(db, 'posts', this.postId);
      
      // Convert the promise to an observable using 'from'
      this.post$ = from(getDoc(postRef));
    } else {
      console.log('err');
      
    }
  }

  //   deletePost(post: Post) {
  //     if (confirm('Are you sure to delete this record ?') == true) {
  //       this.data.deletePost(post).then(() => console.log('delete successful'));
  //     }
  //   }
}
