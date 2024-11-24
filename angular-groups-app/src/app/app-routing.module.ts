import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard'
const routes: Routes = [
    { path: 'groups', component: GroupsComponent },
    { path: '', redirectTo: '/groups', pathMatch: 'full' },
    { path: 'edit-student/:id', component: EditStudentComponent },
    { path: 'add-student', component: AddStudentComponent, canDeactivate: [UnsavedChangesGuard]}, // Маршрут для добавления студента
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }