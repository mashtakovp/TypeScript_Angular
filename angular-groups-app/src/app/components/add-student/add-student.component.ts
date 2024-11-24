import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { GroupsService } from '../../services/groups.service'; 
import { Group } from '../../models/groups.model';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  studentForm: FormGroup;
  formSubmitted = false; // Флаг для отслеживания отправки формы
  groups: Group[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentsService: StudentsService,
    private groupsService: GroupsService
  ) {
    this.studentForm = this.fb.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      birthYear: [null, [Validators.required, Validators.min(1900)]],
      admissionYear: [null, [Validators.required, Validators.min(2000)]],
      groupId: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    // Загрузка доступных групп
    this.groupsService.getGroups().subscribe((groups: Group[]) => {
      this.groups = groups;
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.formSubmitted = true;
      // Преобразуем данные формы в нужный формат
    const newStudent = {
      ...this.studentForm.value,
      groupId: Number(this.studentForm.value.groupId), // Преобразование groupId в число
      course: Number(this.studentForm.value.course), // Преобразование course в число
      admissionYear: Number(this.studentForm.value.admissionYear), // Преобразование admissionYear в число
      id: this.generateUniqueId()  // Генерация уникального id
    };

    this.studentsService.addStudent(newStudent).subscribe(() => {
      this.router.navigate(['/groups']);
    });
  }
}
  private generateUniqueId(): number {
    // Создаем уникальный ID для нового студента
    return Math.floor(Math.random() * 10000); // Используйте свой способ генерации ID
  }
}
