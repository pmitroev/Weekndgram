import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { MainComponent } from '../main/main.component';
import { CurrentPostComponent } from './current-post/current-post.component'
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },
      {
        path: ':themeId',
        component: CurrentPostComponent
      },
    ],
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    // canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}