import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './components/groups/groups.component';
import { provideHttpClient} from '@angular/common/http';
import { ItalicForMinorDirective } from './directives/italic-for-minor.directive';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    ItalicForMinorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
