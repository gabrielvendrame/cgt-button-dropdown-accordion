import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  isHidden = true;
  width: number;
  height: number;
  optionButtonWidth: number;
  optionButtonHeight: number;
  buttons: DropdownContentButton[] = [];

  @ViewChild('rettangolo') rettangolo: ElementRef;
  @ViewChild('optionButton') optionButton: ElementRef;
  svgPathLeft = '';
  svgPathRight = '';


  toggleAccordion(): void {
    this.isHidden = !this.isHidden;
  }

  ngAfterViewInit(): void {
    this.width = this.rettangolo.nativeElement.offsetWidth;
    this.optionButtonWidth = this.optionButton.nativeElement.offsetWidth;
    this.height = this.rettangolo.nativeElement.offsetHeight;
    this.optionButtonHeight = this.optionButton.nativeElement.offsetHeight;
    this.svgPathLeft = `M18,0 C30,${this.height / 10} ${this.height * 0.3},${this.height} 3,${this.height}
     M18,0 l ${this.optionButtonWidth - 36},0
     M3,${this.height} l ${this.width / 2},${this.height}
     M${this.optionButtonWidth - 18},0 C${this.optionButtonWidth - 20},${this.height / 10} ${this.height * 0.4},${this.height} ${this.width / 2},${this.height} `;
    // this.svgPathRight = `M${this.optionButtonWidth - 18},0 C${this.optionButtonWidth - 20},${this.height / 10} ${this.height * 0.4},${this.height} ${this.width / 2},${this.height}`;
    console.log(this.svgPathLeft);

    // this.svgPathRight = `M${this.optionButtonWidth - 18},0 C30,10 20,${this.height} ${this.width / 2},${this.height}`;
  }

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
