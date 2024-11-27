import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filters = {
    assignee: '',
    priority: '',
    type: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.sortTasks();
    this.applyFilters();
  }

  sortTasks(): void {
    this.tasks.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(task => {
      return (
        (!this.filters.assignee || task.assignee.includes(this.filters.assignee)) &&
        (!this.filters.priority || task.priority === this.filters.priority) &&
        (!this.filters.type || task.type === this.filters.type)
      );
    });
  }
}