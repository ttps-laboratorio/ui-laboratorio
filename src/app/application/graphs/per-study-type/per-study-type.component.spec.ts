import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerStudyTypeComponent } from './per-study-type.component';

describe('PerStudyTypeComponent', () => {
  let component: PerStudyTypeComponent;
  let fixture: ComponentFixture<PerStudyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerStudyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerStudyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
