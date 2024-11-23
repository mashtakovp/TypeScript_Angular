import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GroupsService {
    private baseUrl = 'http://localhost:3000/groups'; // Укажите URL вашего API

    constructor(private http: HttpClient) {}

    getGroups(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getGroupById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createGroup(group: { id: number; name: string }): Observable<any> {
        return this.http.post(this.baseUrl, group);
    }

    deleteGroup(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}