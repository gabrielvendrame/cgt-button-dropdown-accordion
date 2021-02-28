import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden = true;

  toggleAccordion(): void {
    this.isHidden = !this.isHidden;
  }
}
