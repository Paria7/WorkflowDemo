import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBackgroundImageComponent } from './station-background-image.component';

describe('StationBackgroundImageComponent', () => {
  let component: StationBackgroundImageComponent;
  let fixture: ComponentFixture<StationBackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationBackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
