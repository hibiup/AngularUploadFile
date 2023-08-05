import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { FileDetailComponent } from './file-detail/file-detail.component';
import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropUploadComponent,
    NavigationBarComponent,
    FileExplorerComponent,
    FileDetailComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpClientModule
    ,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
