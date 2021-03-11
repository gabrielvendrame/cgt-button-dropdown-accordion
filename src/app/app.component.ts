import { Component, OnInit } from '@angular/core';
import { DropdownContentButton } from './models/dropdown-content-button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttons: DropdownContentButton[] = [];

  ngOnInit(): void {
    this.buttons.push({
      title: 'Ciao',
      icon: 'alarm-fill',
      action: (() => console.log(222))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    }, {
      title: 'Are',
      icon: 'align-middle',
      action: (() => console.log(44))
    });
  }


}
