import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealhInsuranseListComponent } from './healh-insuranse-list.component';

describe('HealhInsuranseListComponent', () => {
  let component: HealhInsuranseListComponent;
  let fixture: ComponentFixture<HealhInsuranseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealhInsuranseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealhInsuranseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
