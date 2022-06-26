import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import { TaskItemComponent } from './component/item-task/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BeginningComponent } from './component/beginning/beginning.component';
import { HeaderComponent } from './component/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskItemComponent,
    BeginningComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
