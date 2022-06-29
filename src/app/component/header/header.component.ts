import { Component, OnInit } from '@angular/core';
import {faGlobe, faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons'
import {ResizeService} from '../../service/BreakpointObserver/resize.service'
import { Router } from '@angular/router';
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
zim:number=2
public BtnsActive:boolean = true || false
  constructor(public resize:ResizeService, private router:Router){
    this.BtnsActive = this.router.url==='/sign'
  }
  

  ngOnInit(): void {
  }
  SignUp(){
    this.login = !this.login
  }
}
