import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealhInsuranseAddComponent } from './healh-insuranse-add.component';

describe('HealhInsuranseAddComponent', () => {
  let component: HealhInsuranseAddComponent;
  let fixture: ComponentFixture<HealhInsuranseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealhInsuranseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealhInsuranseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
