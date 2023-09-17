import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterLoginComponent } from './sitterLogin.component';

describe('LoginComponent', () => {
  let component: SitterLoginComponent;
  let fixture: ComponentFixture<SitterLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitterLoginComponent]
    });
    fixture = TestBed.createComponent(SitterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
