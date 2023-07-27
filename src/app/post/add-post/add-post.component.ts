import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private firestore: Firestore, private router: Router) {}

  addData(form: NgForm) {
    const postsInstance = collection(this.firestore, 'posts');

    addDoc(postsInstance, form.value).then(() => {
        this.router.navigate(['/posts'])
    })
    .catch((err) => {
        console.log(err);
    })
  }
}
