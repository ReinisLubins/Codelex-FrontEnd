import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithCheckboxesAndFilterComponent } from './planner-with-checkboxes-and-filter.component';

describe('PlannerWithCheckboxesAndFilterComponent', () => {
  let component: PlannerWithCheckboxesAndFilterComponent;
  let fixture: ComponentFixture<PlannerWithCheckboxesAndFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithCheckboxesAndFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithCheckboxesAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
