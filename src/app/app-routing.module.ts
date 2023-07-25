import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';

const routes: Routes = [
  { path: 'upload-form', component: DragDropUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
