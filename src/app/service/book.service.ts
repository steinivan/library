import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import {Task} from '../task'
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  privateUrl = "http://localhost:3000/books"
  constructor(
    private http:HttpClient
  ) { }

  getBooks():Observable<Task[]>{
    return this.http.get<Task[]>(this.privateUrl)
  }
  deleteBook(task:Task):Observable<Task>{
    const url = `${this.privateUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
}
