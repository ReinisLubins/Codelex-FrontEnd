import {Component, OnInit} from '@angular/core';
import {v4 as getId} from 'uuid';

interface PlannerTask {
  id: string;
  text: string;
  done: boolean;
}

enum PlannerFilterEnum {
  All,
  InProgress,
  Completed
}

@Component({
  selector: 'app-planner-with-checkboxes-and-filter',
  templateUrl: './planner-with-checkboxes-and-filter.component.html',
  styleUrls: ['./planner-with-checkboxes-and-filter.component.scss']
})
export class PlannerWithCheckboxesAndFilterComponent {
  tasks: PlannerTask[] = [
    {
      id: getId(),
      text: 'Task1',
      done: true
    }
  ];
  inputValue: string = "";
  plannerTaskFilter = PlannerFilterEnum.All;
  plannerTaskFilterEnum = PlannerFilterEnum;

  addTask(): void {
    if (this.inputValue) {
      const newTask = {id: getId(), text: this.inputValue, done: false}
      this.tasks.push(newTask)
      this.inputValue = "";
    }
  }

  toggleTaskDone(event: Event, id: string): void {
    const eventTarget = event.target as HTMLInputElement;

    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return {...task, done: eventTarget.checked};
      } else {
        return task;
      }
    })
  }

  setTaskFilter(filter: PlannerFilterEnum): void {
    this.plannerTaskFilter = filter;
  }

  get filteredTasks(): PlannerTask[] {
    if (this.plannerTaskFilter === PlannerFilterEnum.All) {
      return this.tasks;
    } else if (this.plannerTaskFilter === PlannerFilterEnum.InProgress) {
      return this.tasks.filter(task => !task.done);
    } else {
      return this.tasks.filter(task => task.done);
    }
  }
}
