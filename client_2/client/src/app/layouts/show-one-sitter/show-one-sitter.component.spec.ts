import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneSitterComponent } from './show-one-sitter.component';

describe('ShowOneSitterComponent', () => {
  let component: ShowOneSitterComponent;
  let fixture: ComponentFixture<ShowOneSitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOneSitterComponent]
    });
    fixture = TestBed.createComponent(ShowOneSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
