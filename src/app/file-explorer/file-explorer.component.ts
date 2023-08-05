import { Component } from '@angular/core';

export interface FileProperties extends File {
  displayName: string;
  path: string;
  parentPath: string;
  isFolder: boolean;
  subList: FileProperties[];
}

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})

export class FileExplorerComponent {
  fileList: FileProperties[] = [
    Object.assign({
      displayName: "folder1",
      path: "root\\folder1",
      parentPath: "root",
      isFolder: true,
      subList: []
    }),
    Object.assign({
      displayName: "folder2",
      path: "root\\folder2",
      parentPath: "root",
      isFolder: true,
      subList: []
    })
  ];
}
