import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'submit-tax-filing';

  taxFilingForm:FormGroup = new FormGroup({})

  step:number = 1
  isSubmit:boolean = false

  modalRef?: BsModalRef;

  constructor(private fb: FormBuilder,private modalService: BsModalService){

  }



  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.taxFilingForm = this.fb.group({
      filingType: ['0',Validators.required],
      month:  ['',Validators.required],
      year: ['',Validators.required],
      type:[''],
      saleAmount: ['',Validators.required],
      taxAmount: ['',Validators.required],
      surcharge: [''],
      penalty: [''],
      totalAmount: ['']
    });
  }

  nextStep(){
    this.isSubmit=true
    this.step++
  }

  backStep(){
    this.step--
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
