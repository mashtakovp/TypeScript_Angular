import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
@Injectable({
    providedIn: 'root',
})
export class StudentsService {
    private baseUrl = 'http://localhost:3000/students'; // Укажите URL вашего API

    constructor(private http: HttpClient) {}

    getStudents(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getStudentById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createStudent(student: any): Observable<any> {
        return this.http.post(this.baseUrl, student);
    }

    deleteStudent(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
    updateStudent(student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.baseUrl}/${student.id}`, student);
    }
}