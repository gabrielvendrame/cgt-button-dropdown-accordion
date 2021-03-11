import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DropdownStatusService } from '../dropdown-status.service';

@Component({
  selector: 'app-dropdown-accordion-button',
  templateUrl: './dropdown-accordion-button.component.html',
  styleUrls: ['./dropdown-accordion-button.component.css']
})
export class DropdownAccordionButtonComponent implements OnInit, AfterViewInit {

  @Input() backgroundColor = 'white';
  @Input() textColor = 'black';
  @Input() optionButtonTitle = 'Opzioni';
  @Input() direction: 'left' | 'right' | 'center' = 'center';
  @Input() height = '3rem';
  @Input() hasTrapezoid = true;

  @ViewChild('curvedTrapezoid') curvedTrapezoid: ElementRef;
  @ViewChild('optionButton') dropdownButton: ElementRef;

  svgPath = '';
  isHidden: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private dropdownStatusService: DropdownStatusService
  ) {
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.updateView();
  }

  ngOnInit(): void {
    this.dropdownStatusService.dropdownStatus.subscribe(currentStatus => {
      this.isHidden = currentStatus;
      this.updateView();
    });
  }

  ngAfterViewInit(): void {
    this.updateView();
  }

  updateView(): void {
    this.cdRef.detectChanges();
    if (!this.hasTrapezoid || this.isHidden) {
      return;
    }
    const height = this.curvedTrapezoid.nativeElement.offsetHeight;
    const optionButtonWidth = this.dropdownButton.nativeElement.offsetWidth;
    const optionButtonLeftPosition = this.dropdownButton.nativeElement.offsetLeft - 6;
    const optionButtonRightPosition = this.dropdownButton.nativeElement.offsetLeft + optionButtonWidth - 9;

    this.svgPath = `M${optionButtonLeftPosition},0 C${optionButtonLeftPosition},${height / 6}
     ${optionButtonLeftPosition},${height - height / 2} ${optionButtonLeftPosition - 40},${height} H${optionButtonRightPosition + 40}
     C${optionButtonRightPosition}, ${height - height / 2} ${optionButtonRightPosition}, ${height / 6} ${optionButtonRightPosition},0`;
  }

  toggleAccordion(): void {
    this.dropdownStatusService.toggleAccordion();
  }

}



