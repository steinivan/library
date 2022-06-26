import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initComponent:string='beginning'
  title = 'BookFlix';
  
  
  itemTaskComponent(stringComponent:string){
    this.initComponent = stringComponent
  }
}
