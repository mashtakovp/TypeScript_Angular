import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  getTasks(): Task[] {
    return this.tasks;
  }
  generateId(): number {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }
  addTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
    const newTask: Task = {
      ...taskData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
  
  updateTask(id: number, updatedFields: Partial<Task>): Task | null {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      Object.assign(task, updatedFields);
      task.updatedAt = new Date();
      return task;
    }
    return null;
  }
}