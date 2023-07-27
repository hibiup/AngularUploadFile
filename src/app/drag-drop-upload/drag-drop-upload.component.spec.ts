import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DragDropUploadComponent, FileWithProgress } from './drag-drop-upload.component';
import { Routes, RouterModule } from '@angular/router';

describe('DragDropUploadComponent', () => {
  let component: DragDropUploadComponent;
  let fixture: ComponentFixture<DragDropUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DragDropUploadComponent
      ],
      imports: [
        HttpClientTestingModule
        , RouterTestingModule
        , RouterModule
      ],
      providers: [DragDropUploadComponent]
    });
    fixture = TestBed.createComponent(DragDropUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set file.uploadError to true when upload fails', () => {
    // Arrange: Create a sample file with a simulated upload error
    const fileName = 'example.txt';
    const fileContent = 'This is a test file.';

    const blob = new Blob([fileContent], { type: 'text/plain' });
    // Create a new File object with the Blob and file name
    const file = new File([blob], fileName);

    const fileWithProgress: FileWithProgress = Object.assign(file, {
      uploading: false,
      progress: 0,
      uploadError: true
    });

    // Act: Call the retryUpload function with the sample file
    component.retryUpload(fileWithProgress);

    // Assert: Expect file.uploadError to be true after the retryUpload call
    expect(fileWithProgress.uploadError).toBe(true);
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(DragDropUploadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.message-container p')?.textContent).toContain('Drag and drop files here, or');
  });
});
