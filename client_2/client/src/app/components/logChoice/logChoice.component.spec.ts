import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogChoiceComponent } from './logChoice.component';

describe('ChoiceComponent', () => {
  let component: LogChoiceComponent;
  let fixture: ComponentFixture<LogChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogChoiceComponent]
    });
    fixture = TestBed.createComponent(LogChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
