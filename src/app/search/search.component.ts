import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  posts: any[] = [];
  isSearchEmpty: boolean | undefined;
  searchParams = {
    place: null,
  };

  constructor(private afsCompact: AngularFirestore) {}

  onSearchBook() {
    this.posts = [];
    const $place = this.afsCompact
      .collection('posts', (ref) =>
        ref.where('place', '==', this.searchParams.place)
      )
      .valueChanges({ idField: 'id' });

    combineLatest([$place])
      .pipe(map(([one]) => [...one]))
      .subscribe((response: any) => {
        this.posts = response;
        if (response.length > 0) {
        } else {
          this.isSearchEmpty = true;
        }
      });
  }
}
