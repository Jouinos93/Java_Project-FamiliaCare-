import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSittersComponent } from './showSitters.component';

describe('ShowComponent', () => {
  let component: ShowSittersComponent;
  let fixture: ComponentFixture<ShowSittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSittersComponent]
    });
    fixture = TestBed.createComponent(ShowSittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
