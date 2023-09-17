import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecaregiverComponent } from './updatecaregiver.component';

describe('UpdatecaregiverComponent', () => {
  let component: UpdatecaregiverComponent;
  let fixture: ComponentFixture<UpdatecaregiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecaregiverComponent]
    });
    fixture = TestBed.createComponent(UpdatecaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
