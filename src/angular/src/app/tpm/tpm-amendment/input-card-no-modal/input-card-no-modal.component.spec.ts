import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCardNoModalComponent } from './input-card-no-modal.component';

describe('InputCardNoModelComponent', () => {
  let component: InputCardNoModalComponent;
  let fixture: ComponentFixture<InputCardNoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCardNoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardNoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
