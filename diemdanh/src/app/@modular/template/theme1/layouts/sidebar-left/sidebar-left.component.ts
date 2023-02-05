import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEM } from 'src/app/pages/menu';
import { Theme1Service } from '../../theme1.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;
  public menuItem = MENU_ITEM;
  public statusSidebar = "";
  private historyActive = -1;
  public heightSidebar = '100px';
  name ='admin';
  constructor(
    private theme1Service: Theme1Service,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.theme1Service.statusSidebar.subscribe((data: string) => {
      this.statusSidebar = data;
      this.actionSidebar(data);
    })
    this.name = localStorage.getItem('fullname');
  }
  ngAfterViewInit() {
}

  routerLink(index, item) {
    this.menuItem[index]['active'] = true;
    if(this.historyActive === -1) {
      this.historyActive = index;
    } else {
      this.menuItem[this.historyActive]['active'] = false;
      this.historyActive = index;
    }
    this.router.navigate(['/pages/', item.path]);
    this.theme1Service.setTitleMenuCurrent(item.title);
  }

  actionSidebar(status) {
    if(status === 'less-sidebar') {
      document.getElementById("sidebar").style.width = '100px';
    } else {
      document.getElementById("sidebar").style.width = '270px';
    }
  }


}
