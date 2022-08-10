import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { MenuItem } from 'node_modules/primeng/api'
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('opCalc') opCalc?: OverlayPanel;
  items: MenuItem[] = [];

  constructor() { }


  ngOnInit() {
    this.items = [
      {
        label: 'System',
        items: [
          { label: 'About it' },
          { label: 'Preferences' },
          { label: 'Register' },
          { label: 'Login' },
          { label: 'Logout' }
        ]
      },
      {
        label: 'Apps',
        items: [
          { label: 'Calculator' , command: (event) => this.opCalc?.toggle(event)},//theCallback},
          { label: 'Calendar' },
          { label: 'Notes' },
          { label: 'Folders' },
          { label: 'Games' }
        ]
      },
      { label: 'Help' }
      /* {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      } */
    ];
  }
}
