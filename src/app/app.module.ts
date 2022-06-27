import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskComponent } from './component/task/task.component';
import { TaskItemComponent } from './component/item-task/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BeginningComponent } from './component/beginning/beginning.component';
import { HeaderComponent } from './component/header/header.component';
import { SignComponent } from './vista1/sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskItemComponent,
    BeginningComponent,
    HeaderComponent,
    SignComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
