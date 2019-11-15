import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmCalendarNewComponent } from './tpm-calendar-new.component';

describe('TpmCalendarNewComponent', () => {
  let component: TpmCalendarNewComponent;
  let fixture: ComponentFixture<TpmCalendarNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpmCalendarNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpmCalendarNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
