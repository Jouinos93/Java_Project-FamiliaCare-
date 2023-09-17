import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittersStatComponent } from './sitters-stat.component';

describe('SittersStatComponent', () => {
  let component: SittersStatComponent;
  let fixture: ComponentFixture<SittersStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SittersStatComponent]
    });
    fixture = TestBed.createComponent(SittersStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
