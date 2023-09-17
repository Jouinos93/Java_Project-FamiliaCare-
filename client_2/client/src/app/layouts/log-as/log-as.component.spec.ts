import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAsComponent } from './log-as.component';

describe('LogAsComponent', () => {
  let component: LogAsComponent;
  let fixture: ComponentFixture<LogAsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogAsComponent]
    });
    fixture = TestBed.createComponent(LogAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
