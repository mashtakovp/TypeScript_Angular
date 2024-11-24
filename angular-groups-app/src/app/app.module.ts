import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './components/groups/groups.component';
import { provideHttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ItalicForMinorDirective } from './directives/italic-for-minor.directive';
import { CenturyPipe } from './pipes/century.pipe';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiLoggerInterceptor } from './interceptors/api-logger.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    ItalicForMinorDirective,
    CenturyPipe,
    EditStudentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiLoggerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
