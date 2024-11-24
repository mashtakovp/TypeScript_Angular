import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    const studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.studentsService.getStudentById(studentId).subscribe((student) => {
      this.student = student;
    });
  }

  onSave(form: NgForm): void {
    if (form.valid && this.student) {
      this.studentsService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/groups']); // Редирект на страницу групп
      });
    }
  }
}