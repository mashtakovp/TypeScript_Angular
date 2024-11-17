import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GroupComponent } from './group/group.component';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'group/:id', component: GroupComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: '**', redirectTo: '/greeting' } // Обработка несуществующих маршрутов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }