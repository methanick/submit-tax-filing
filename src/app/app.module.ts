import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxFilingFormComponent } from './components/tax-filing-form/tax-filing-form.component';
import { TaxFilingReviewComponent } from './components/tax-filing-review/tax-filing-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TwoDigitDecimalNumberDirective } from './directives/two-digit-decima-number.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FilingTypePipe } from './pipes/filing-type.pipe';
import { MonthNamePipe } from './pipes/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaxFilingFormComponent,
    TaxFilingReviewComponent,
    TwoDigitDecimalNumberDirective,
    FilingTypePipe,
    MonthNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
