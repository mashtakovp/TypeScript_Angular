import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}