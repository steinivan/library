import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.component.html',
  styleUrls: ['./beginning.component.css']
})
export class BeginningComponent implements OnInit {
  angleRight = faAngleRight
  constructor() { }

  ngOnInit(): void {
  }

}
