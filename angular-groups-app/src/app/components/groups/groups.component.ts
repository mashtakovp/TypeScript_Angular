import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  groups: any[] = []; // Данные о группах
  selectedGroupId: number | null = null; // Выбранная группа
  selectedGroupName: string | null = null; // Название выбранной группы
  selectedStudents: Student[] = []; // Список студентов выбранной группы

  constructor(
    private groupsService: GroupsService,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
      console.log('Группы загружены:', this.groups); // Для проверки
    });
  }

  onGroupSelect(event: Event): void {
    console.log('onGroupSelect вызван'); // Отладка
    const groupId = Number((event.target as HTMLSelectElement).value);
  
    this.selectedGroupId = groupId;
  
    const group = this.groups.find((group) => group.id === groupId);
    this.selectedGroupName = group ? group.name : 'Неизвестная группа';
  
    // Загрузка студентов
    this.studentsService.getStudents().subscribe((students: Student[]) => {
      this.selectedStudents = students.filter(
        (student: Student) => student.groupId === groupId
      );
      console.log('Студенты группы:', this.selectedStudents); // Отладка
    });
  }
  
}