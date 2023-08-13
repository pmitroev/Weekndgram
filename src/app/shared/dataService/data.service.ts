import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  getDoc,
  getFirestore,
  doc,
  collectionChanges,
  getDocs,
} from '@angular/fire/firestore';
import { map } from 'rxjs';
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

  

  deleteBook(post: Post) {
    const bookDocRef = doc(this.firestore, `posts/${post._id}`);
    return deleteDoc(bookDocRef);
  }
}
