import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

const routes: Routes = [
  { path: 'user/flavio', component: PhotoComponent },
  { path: 'p/add', component: PhotoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {}
