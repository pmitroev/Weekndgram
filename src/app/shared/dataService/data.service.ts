import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getPosts() {
    let postCollection = collection(this.firestore, 'posts');

    return collectionData(postCollection, {idField:'id'});
  }
}
