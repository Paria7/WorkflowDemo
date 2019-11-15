import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderDemoComponent } from './file-uploader-demo.component';

describe('FileUploderDemoComponent', () => {
  let component: FileUploaderDemoComponent;
  let fixture: ComponentFixture<FileUploaderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploaderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
