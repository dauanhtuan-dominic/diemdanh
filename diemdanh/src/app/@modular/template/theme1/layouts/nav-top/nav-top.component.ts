import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@web-core/http';
import { Theme1Service } from '../../theme1.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  status = 'extend-sidebar';
  titlePage = '';
  constructor(
    private theme1Service: Theme1Service,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.theme1Service.titleMenuCurrent.subscribe((data: any) => {
      this.titlePage = data;
    })
    this.theme1Service.statusSidebar.subscribe((data: string) => {
      this.calcNavTop(data);
    })
  }

  public animationSidebar(status) {
    this.status = status;
    this.theme1Service.setStatusSidebar(status)
  }

  logout() {
    this.authService.logout();
  }

  calcNavTop(status) { 
    if(status === 'less-sidebar') {
      document.getElementById("navTop").style.width = "calc(100% - 100px)";
    } else {
      document.getElementById("navTop").style.width = "calc(100% - 270px)";
    }
  }

}
