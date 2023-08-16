import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { PostRoutingModule } from './post-routing.module';
import { CurrentPostComponent } from './current-post/current-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPostComponent, CurrentPostComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PostModule {}
