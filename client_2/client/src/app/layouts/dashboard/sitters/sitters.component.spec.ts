import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittersComponent } from './sitters.component';

describe('SittersComponent', () => {
  let component: SittersComponent;
  let fixture: ComponentFixture<SittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SittersComponent]
    });
    fixture = TestBed.createComponent(SittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
