import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Theme1Service } from './theme1.service';

@Component({
  selector: 'app-theme1',
  templateUrl: './theme1.component.html',
  styleUrls: ['./theme1.component.scss']
})
export class Theme1Component implements OnInit {
  @ViewChild("mySidenav")
  public mySidenav: ElementRef;

  @Input()
  public arrMenuSide: any[];

  constructor(
    private theme1Service: Theme1Service
  ) { }

  ngOnInit(): void {
    this.theme1Service.statusSidebar.subscribe((data: string) => {
      this.actionSidebar(data);
    })
  }


  actionSidebar(status) { 
    if(status === 'less-sidebar') {
      document.getElementById("main").style.width = "calc(100% - 100px)";
      document.getElementById("main").style.marginLeft = "100px";
    } else {
      document.getElementById("main").style.width = "calc(100% - 270px)";
      document.getElementById("main").style.marginLeft = "270px";
    }
  }

}
