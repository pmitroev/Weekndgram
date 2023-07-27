import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private firestore: Firestore) {}

  addData(form: NgForm) {
    const postsInstance = collection(this.firestore, 'posts');

    addDoc(postsInstance, form.value).then(() => {
        console.log('Data Saved Successfully');
    })
    .catch((err) => {
        console.log(err);
    })
  }
}
