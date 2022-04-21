import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithCheckboxesComponent } from './planner-with-checkboxes.component';

describe('PlannerWithCheckboxesComponent', () => {
  let component: PlannerWithCheckboxesComponent;
  let fixture: ComponentFixture<PlannerWithCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
