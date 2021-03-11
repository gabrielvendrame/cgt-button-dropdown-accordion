import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DropdownAccordionButtonComponent } from './components/dropdown-accordion/dropdown-accordion-button/dropdown-accordion-button.component';
import { DropdownAccordionContentComponent } from './components/dropdown-accordion/dropdown-accordion-content/dropdown-accordion-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownAccordionButtonComponent,
    DropdownAccordionContentComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
