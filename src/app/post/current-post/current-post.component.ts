import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/dataService/data.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent {

    constructor(private data: DataService) {}

    deleteBook(post: Post) {
        if (confirm('Are you sure to delete this record ?') == true) {
          this.data.deleteBook(post).then(() => 
           console.log('delete successful'));
        }
      }
}
