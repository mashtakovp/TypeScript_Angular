import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
const routes: Routes = [
    { path: 'groups', component: GroupsComponent },
    { path: '', redirectTo: '/groups', pathMatch: 'full' },
    { path: 'edit-student/:id', component: EditStudentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }