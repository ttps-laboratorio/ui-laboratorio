import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealhInsuranseEditComponent } from './healh-insuranse-edit.component';

describe('HealhInsuranseEditComponent', () => {
  let component: HealhInsuranseEditComponent;
  let fixture: ComponentFixture<HealhInsuranseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealhInsuranseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealhInsuranseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
