import { Component, OnInit } from '@angular/core';
import { customerMappings } from '../app/shared/models/customerMapping.mock';
import { CustomerMapping } from '../app/shared/mappings';
import { Company } from '../app/shared/company';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'connectWiseCompanies'];
  dataSource = customerMappings.customerMappings;
  connectWiseCompanies: Company[] = customerMappings.connnectWiseCompanies;
  customerMappingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit( ) {
    this.createForm();
   }

  displayFn(company?: Company): string | undefined {
    return company ? company.name : undefined;
  }

  createForm() {
    this.customerMappingForm = this.formBuilder.group({
      mappings: this.formBuilder.array([this.createItem])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      company: []
    });
  }


  // addItems(): void {
  //   this.mappings = this.customerMappingForm.get('mappings') as FormArray;
  //   this.mappings.push(this.createItem());
  // }
}
