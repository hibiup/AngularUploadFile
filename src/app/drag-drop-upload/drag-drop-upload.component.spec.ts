import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropUploadComponent } from './drag-drop-upload.component';

describe('DragDropUploadComponent', () => {
  let component: DragDropUploadComponent;
  let fixture: ComponentFixture<DragDropUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropUploadComponent]
    });
    fixture = TestBed.createComponent(DragDropUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
