import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DropdownContentButton } from '../../../models/dropdown-content-button';
import { DropdownStatusService } from '../dropdown-status.service';

@Component({
  selector: 'app-dropdown-accordion-content',
  templateUrl: './dropdown-accordion-content.component.html',
  styleUrls: ['./dropdown-accordion-content.component.css']
})
export class DropdownAccordionContentComponent implements OnInit, AfterViewInit {

  @Input() dropdownContent: DropdownContentButton[];
  @Input() backgroundColor: 'white';

  isHidden = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private dropdownStatusService: DropdownStatusService
  ) {
  }

  ngOnInit(): void {
    this.dropdownStatusService.dropdownStatus.subscribe(currentStatus => {
      this.isHidden = currentStatus;
    });
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

}


