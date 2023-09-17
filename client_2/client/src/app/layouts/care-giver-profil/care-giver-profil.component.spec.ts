import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGiverProfilComponent } from './care-giver-profil.component';

describe('CareGiverProfilComponent', () => {
  let component: CareGiverProfilComponent;
  let fixture: ComponentFixture<CareGiverProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareGiverProfilComponent]
    });
    fixture = TestBed.createComponent(CareGiverProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
