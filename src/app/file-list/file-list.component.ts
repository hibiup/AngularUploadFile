import { Component, Input } from '@angular/core';
import { FileProperties } from '../file-explorer/file-explorer.component';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})

export class FileListComponent {
  @Input() fileList: FileProperties[] = [];

  expendFolder(curentFile: FileProperties) {
    // TODO: Mockup get file list
    curentFile.subList = [
      Object.assign({
        displayName: "folder1",
        path: curentFile.path + "\\folder1",
        parentPath: curentFile.path,
        isFolder: true,
        subList: []
      }),
      Object.assign({
        displayName: "file2",
        path: curentFile.path + "\\file2",
        parentPath: curentFile.path,
        isFolder: false,
        subList: []
      }),
      Object.assign({
        displayName: "folder3",
        path: curentFile.path + "\\folder3",
        parentPath: curentFile.path,
        isFolder: true,
        subList: []
      }),
      Object.assign({
        displayName: "file4",
        path: curentFile.path + "\\file4",
        parentPath: curentFile.path,
        isFolder: false,
        subList: []
      })
    ];
  }
}
