import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerSimpleComponent } from './planner-simple.component';

describe('PlannerSimpleComponent', () => {
  let component: PlannerSimpleComponent;
  let fixture: ComponentFixture<PlannerSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
