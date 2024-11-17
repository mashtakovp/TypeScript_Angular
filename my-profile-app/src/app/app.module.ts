import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GroupComponent } from './group/group.component';
import { GreetingComponent } from './greeting/greeting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GroupComponent,
    GreetingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Подключаем FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }