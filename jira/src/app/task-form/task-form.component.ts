import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Partial<Task> = {};
  isEditMode = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      const task = this.taskService.getTaskById(+taskId);
      if (task) {
        this.task = { ...task };
        this.isEditMode = true;
      }
    }
  }

  saveTask(): void {
    const currentUser = 'Default Creator'; // Замените на текущего пользователя, если он доступен
  
    if (this.isEditMode && this.task.id) {
      this.taskService.updateTask(this.task.id, {
        type: this.task.type!,
        priority: this.task.priority!,
        title: this.task.title!,
        description: this.task.description || '',
        assignee: this.task.assignee!,
        status: this.task.status || 'New'
      });
    } else {
      this.taskService.addTask({
        type: this.task.type!,
        priority: this.task.priority!,
        title: this.task.title!,
        description: this.task.description || '',
        assignee: this.task.assignee!,
        status: 'New',
        creator: currentUser // Установите значение "creator"
      });
    }
    this.router.navigate(['/tasks']);
  }
}