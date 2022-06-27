import { Component, OnInit } from '@angular/core';
import {faGlobe, faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons'
import {ResizeService} from '../../service/BreakpointObserver/resize.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
GlobeIcon = faGlobe
SearchIcon = faMagnifyingGlass
BellIcon = faBell
login:boolean = true
  constructor(public resize:ResizeService){
  }
  

  ngOnInit(): void {
  }
  SignUp(){
    this.login = !this.login
  }
}
