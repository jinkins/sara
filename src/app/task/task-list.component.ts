import { Component, OnInit } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private tasks: Task[];
  private sortedBy: string = "deadline";

  constructor() { }

  ngOnInit() {
    this.tasks =
      [
        new Task("first Task id", "title 1 ", null, 5, new Date(2017, 4, 30)),
        new Task("first Task id", "title 2", null, 3, new Date(2017, 3, 14)),
        new Task("first Task id", "title 3", null, 2, new Date(2017, 3, 16)),
        new Task("first Task id", "title 4", null, 3, new Date(2017, 5, 15)),
        new Task("first Task id", "title 5", null, 2, new Date(2017, 4, 30)),
      ];

    this.sort()

  }

  sortBy(c: string): void { // Change the sorting. 
    if (this.sortedBy === c) {
      this.tasks.reverse();
    }
    else {
      this.sortedBy = c;
      this.sort();
    }
  }

  sort() { // Sort the tasklist according to the sortedBy criteria. 
    if (this.sortedBy === "deadline")
      this.tasks.sort((a, b) => {
        let diff = a.diffDays(b.getDeadline());
        if (diff > 0) {
          return 1;
        }
        else if (diff < 0) {
          return -1;
        }
        else if (a.getPriority() < b.getPriority()) {
          return 1;
        }

        else if (a.getPriority() > b.getPriority()) {
          return -1;
        }

        else {
          return 0
        }
      })


    else if (this.sortedBy === "priority")
      this.tasks.sort((a, b) => {
        if (a.getPriority() > b.getPriority()) {
          return 1;
        }

        else if (a.getPriority() < b.getPriority()) {
          return -1;
        }

        else {
          return 0
        }
      })
  }
}