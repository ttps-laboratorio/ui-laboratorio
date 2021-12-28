import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerStudyStatusComponent } from './per-study-status.component';

describe('PerStudyStatusComponent', () => {
  let component: PerStudyStatusComponent;
  let fixture: ComponentFixture<PerStudyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerStudyStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerStudyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
