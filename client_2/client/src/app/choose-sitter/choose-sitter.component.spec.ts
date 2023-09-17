import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSitterComponent } from './choose-sitter.component';

describe('ChooseSitterComponent', () => {
  let component: ChooseSitterComponent;
  let fixture: ComponentFixture<ChooseSitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseSitterComponent]
    });
    fixture = TestBed.createComponent(ChooseSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
