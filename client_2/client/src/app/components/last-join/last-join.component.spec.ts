import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastJoinComponent } from './last-join.component';

describe('LastJoinComponent', () => {
  let component: LastJoinComponent;
  let fixture: ComponentFixture<LastJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastJoinComponent]
    });
    fixture = TestBed.createComponent(LastJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
