import { Component, OnInit, Output } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Task } from '../../task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks : Task[] = []

@Output() view : boolean = false
constructor(private bookService : BookService) { 
  
}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((tasks)=>(this.tasks = tasks))
  }
  onDelete(task:Task){
  this.bookService.deleteBook(task).subscribe(()=>this.tasks = this.tasks.filter(t=>t.id!==task.id))
  }
}
