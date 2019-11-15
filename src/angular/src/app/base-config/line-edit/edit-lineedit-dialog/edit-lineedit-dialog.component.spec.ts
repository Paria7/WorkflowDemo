import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLineeditDialogComponent } from './edit-lineedit-dialog.component';

describe('EditLineeditDialogComponent', () => {
  let component: EditLineeditDialogComponent;
  let fixture: ComponentFixture<EditLineeditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLineeditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLineeditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
