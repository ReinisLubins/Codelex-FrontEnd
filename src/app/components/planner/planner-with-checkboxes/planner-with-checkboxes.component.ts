import { Component, OnInit } from '@angular/core';

interface PlannerTask {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-planner-with-checkboxes',
  templateUrl: './planner-with-checkboxes.component.html',
  styleUrls: ['./planner-with-checkboxes.component.scss']
})
export class PlannerWithCheckboxesComponent {
  tasks: PlannerTask[] = [
    {
      text: 'Task1',
      done: true
    }
  ];
  inputValue: string = "";

  addTask(): void {
    if (this.inputValue) {
      const newTask = { text: this.inputValue, done: false }
      this.tasks.push(newTask)
      this.inputValue = "";
    }
  }

  toggleTaskDone(event: Event, index: number): void {
    const eventTarget = event.target as HTMLInputElement;

    this.tasks[index].done = eventTarget.checked;
  }
}
