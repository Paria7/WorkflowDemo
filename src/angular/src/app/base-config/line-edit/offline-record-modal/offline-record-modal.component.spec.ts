import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineRecordModalComponent } from './offline-record-modal.component';

describe('OfflineRecordModalComponent', () => {
  let component: OfflineRecordModalComponent;
  let fixture: ComponentFixture<OfflineRecordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineRecordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
