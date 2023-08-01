import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc, setDoc, doc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private firestore: Firestore, private router: Router, private auth: AngularFireAuth) {}

  addData(form: NgForm) {

    const postsInstance = collection(this.firestore, 'posts');

    addDoc(postsInstance, {...form.value, uid: localStorage.getItem('token')}).then(() => {
        this.router.navigate(['/posts'])
    })
    .catch((err) => {
        console.log(err);
    })
  }
}
