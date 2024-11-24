import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddStudentComponent } from '../components/add-student/add-student.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<AddStudentComponent> {
  canDeactivate(component: AddStudentComponent): boolean {
    if (component.studentForm.dirty && !component.formSubmitted) {
      return confirm('Вы уверены, что хотите покинуть страницу? Несохранённые данные будут потеряны.');
    }
    return true;
  }
}