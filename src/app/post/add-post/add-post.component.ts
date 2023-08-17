import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Firestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from '@angular/fire/firestore';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
//   postForm: FormGroup;

  constructor(
    private firestore: Firestore,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.postForm = this.fb.group({
    //   place: ['', Validators.required],
    //   description: ['', Validators.required],
    //   imageUrl: ['', [Validators.required, Validators.pattern('https?://.*')]],
    // });
  }
//   place: string = '';
//   description: string = '';
//   imageUrl: string = '';
  addData(form: NgForm) {
    // if (this.place == '') {
    //     alert('Please enter a place');
    //     return;
    // }

    // if (this.description == '') {
    //     alert('Please enter a description');
    //     return;
    // }

    // if (this.imageUrl == '') {
    //     alert('Please enter an imageUrl');
    //     return;
    // }
    const postsInstance = collection(this.firestore, 'posts');

    addDoc(postsInstance, { ...form.value, uid: localStorage.getItem('token') })
      .then(() => {
        this.router.navigate(['/posts']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
