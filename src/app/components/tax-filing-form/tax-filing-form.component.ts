import { DecimalPipe } from '@angular/common';
import { IOptionList } from './../../interfaces/option-list.interface';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MONTH_OPTION } from 'src/app/constants/month-list.constant';

@Component({
  selector: 'app-tax-filing-form',
  templateUrl: './tax-filing-form.component.html',
  styleUrls: ['./tax-filing-form.component.scss']
})
export class TaxFilingFormComponent implements OnInit {

  @Input() taxFilingForm!: FormGroup;
  @Input() isSubmit:boolean = false
  monthList:IOptionList[] = MONTH_OPTION

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.taxFilingForm.controls;
  }

  changeFilingType(){

    this.f.surcharge.setValue(0.00)
    
    if(this.f.filingType.value == 1){

      this.f.penalty.setValue(200.00)
      this.f.totalAmount.setValue(0.00)
    }else{
    
      this.f.penalty.setValue(0.00)
      this.f.totalAmount.setValue(this.f.taxAmount.value)
    }
  }

  enterSaleAmount(){
    this.f.taxAmount.setValue((this.f.saleAmount.value*0.07).toFixed(2))
    this.calculateAdditionalFiling()
  }

  calculateAdditionalFiling(){
    if(this.f.filingType.value == 1){
      this.f.surcharge.setValue((this.f.taxAmount.value*0.01).toFixed(2))
      this.f.totalAmount.setValue(Number(this.f.taxAmount.value) + Number(this.f.surcharge.value) + Number(this.f.penalty.value))
    }else{
      this.f.totalAmount.setValue(this.f.taxAmount.value)
    }
  }
}
