import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Post } from 'src/app/types/post';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getPosts() {
    let postCollection = collection(this.firestore, 'posts');

    return collectionData(postCollection, { idField: 'id' });
  }

  deletePost(post: Post) {
    const postDocRef = doc(this.firestore, `posts/${post._id}`);
    return deleteDoc(postDocRef);
  }
}
