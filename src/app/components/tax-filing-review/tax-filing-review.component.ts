import { Component, Input, OnInit } from '@angular/core';
import { ITax } from 'src/app/interfaces/tax.interface';

@Component({
  selector: 'app-tax-filing-review',
  templateUrl: './tax-filing-review.component.html',
  styleUrls: ['./tax-filing-review.component.scss']
})
export class TaxFilingReviewComponent implements OnInit {

  @Input() tax!:ITax

  constructor() { }

  ngOnInit(): void {
  }

}
