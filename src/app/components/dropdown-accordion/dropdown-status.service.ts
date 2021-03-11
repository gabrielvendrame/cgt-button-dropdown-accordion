import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownStatusService {

  isHidden = false;
  // tslint:disable-next-line:variable-name
  private _dropdownStatus = new BehaviorSubject(this.isHidden);

  constructor() {
  }

  toggleAccordion(): void {
    this.isHidden = !this.isHidden;
    this._dropdownStatus.next(this.isHidden);
  }

  get dropdownStatus(): BehaviorSubject<boolean> {
    return this._dropdownStatus;
  }
}
