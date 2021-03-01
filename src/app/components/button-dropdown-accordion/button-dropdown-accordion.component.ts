import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-dropdown-accordion',
  templateUrl: './button-dropdown-accordion.component.html',
  styleUrls: ['./button-dropdown-accordion.component.css']
})
export class ButtonDropdownAccordionComponent implements OnInit, AfterViewInit {

  @Input() dropdownContent: DropdownContentButton[];
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() title = 'Opzioni';
  @Input() direction: 'left' | 'right' | 'center' = 'center';

  @ViewChild('dropdownButton') dropdownButton: ElementRef;
  @ViewChild('svgContent') svgContent: ElementRef;

  isHidden = true;
  buttonWidth: string;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const svg = `
     <svg viewBox="0 0 17 3">
        <path d="m 2 0 c 0.8 2 -2 3 -2 3 h 17 c 0 0 -2 -1 -2 -3" fill="white"/>
      </svg>
    `;
    this.buttonWidth = String(this.dropdownButton.nativeElement.offsetWidth + 'px');
    this.svgContent.nativeElement.innerHTML = svg;
  }

  toggleAccordion(): void {
    this.isHidden = !this.isHidden;
  }
}

export interface DropdownContentButton {
  title: string;
  icon?: string;
  textColor?: string;
  iconColor?: string;
  buttonColor?: string;
  action?: any;
}
