import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcitiesComponent } from './allcities.component';

describe('AllcitiesComponent', () => {
  let component: AllcitiesComponent;
  let fixture: ComponentFixture<AllcitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcitiesComponent]
    });
    fixture = TestBed.createComponent(AllcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
