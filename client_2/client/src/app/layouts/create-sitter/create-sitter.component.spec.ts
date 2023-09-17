import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSitterComponent } from './create-sitter.component';

describe('CreateSitterComponent', () => {
  let component: CreateSitterComponent;
  let fixture: ComponentFixture<CreateSitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSitterComponent]
    });
    fixture = TestBed.createComponent(CreateSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
