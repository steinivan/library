import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {Task} from '../../../task'
import {TASK} from '../../../mosk-task'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() {}
  faIconCross = faXmark

  @Input() task : Task = TASK[0]
  @Output() onDeleteBook : EventEmitter<Task> = new EventEmitter()
  ngOnInit(): void {
  }
  onDelete(book:Task){
    this.onDeleteBook.emit(book)
  }

}
