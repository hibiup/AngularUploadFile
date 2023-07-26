import { Component, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient, HttpEventType } from '@angular/common/http';

interface FileWithProgress extends File {
  uploading: boolean;
  progress: number;
  uploadError: boolean;
}

@Component({
  selector: 'app-drag-drop-upload',
  templateUrl: './drag-drop-upload.component.html',
  styleUrls: ['./drag-drop-upload.component.css']
})
export class DragDropUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  // Replace the URL below with your server's upload endpoint
  private uploadURL = 'http://localhost:8080/upload';

  files: FileWithProgress[] = [];

  constructor(private http: HttpClient) {}

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.setDragOverStyles(false); // Reset the highlighting styles
    this.handleFiles(event.dataTransfer?.files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = 'copy'; // Change the cursor to a copy file icon
    this.setDragOverStyles(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.setDragOverStyles(false);
  }

  private setDragOverStyles(isDragging: boolean) {
    const container = document.querySelector('.drag-drop-container') as HTMLElement;
    if (isDragging) {
      container.classList.add('dragover');
    } else {
      container.classList.remove('dragover');
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleFiles(input.files);
  }

  private handleFiles(files: FileList | null | undefined) {
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!this.isDuplicateFile(files[i])) {
          const fileWithProgress: FileWithProgress = Object.assign(files[i], {
            uploading: false,
            progress: 0,
            uploadError: false
          });
          this.files.push(fileWithProgress);
        }
      }
    }
  }

  private isDuplicateFile(file: File): boolean {
    return this.files.some((existingFile) => existingFile.name === file.name);
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  clearFiles() {
    this.files = [];
  }

  uploadFiles() {
    if (this.files.length === 0) {
      console.log('No files to upload.');
      return;
    }

    this.files.forEach((file) => {
      if (!file.uploading && !file.uploadError) {
        file.uploading = true;

        this._uploadFile(file);
      }
    });
  }

  private _uploadFile(file: FileWithProgress){
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.http.post(this.uploadURL, formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          file.progress = Math.round((100 * event.loaded) / event.total!);
        } else if (event.type === HttpEventType.Response) {
          console.log('Upload success:', event.body);
          file.uploading = false;
          file.progress = 0;
          // Handle successful upload response here if needed
        }
      },
      (error) => {
        console.error('Upload error:', error);
        file.uploading = false;
        file.progress = 0;
        file.uploadError = true;
      }
    );
  }

  retryUpload(file: FileWithProgress) {
    if (file.uploadError) {
      file.uploadError = false;
      file.progress = 0;
      file.uploading = true;

      this._uploadFile(file);
    }
  }
}
