import { Component, OnInit } from '@angular/core';
import { DropdownContentButton } from './components/button-dropdown-accordion/button-dropdown-accordion.component';

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
      buttonColor: 'red',
      textColor: 'white',
      icon: 'alarm-fill',
      action: (() => console.log(222))
    }, {
      title: 'Are',
      buttonColor: 'blue',
      textColor: 'red',
      icon: 'align-middle',
      action: (() => console.log(44))
    });
  }

}
