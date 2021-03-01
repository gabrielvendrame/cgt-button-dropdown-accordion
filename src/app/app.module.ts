import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppComponent } from './app.component';
import { ButtonDropdownAccordionComponent } from './components/button-dropdown-accordion/button-dropdown-accordion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDropdownAccordionComponent
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
