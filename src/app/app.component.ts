import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { customerMappings } from '../app/shared/models/customerMapping.mock';
import { CustomerMapping } from '../app/shared/mappings';
import { Company } from '../app/shared/company';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'mappings'];
  dataSource = customerMappings.customerMappings;
  connectWiseCompanies: Company[] = customerMappings.connnectWiseCompanies;
  customerMappingForm: FormGroup;
  filteredOptions: Observable<Company[]>;
  b;

  @ViewChild('input') fileInput: ElementRef;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    // this.filteredOptions = this.customerMappingForm.get('company').valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
    console.log(this.customerMappingForm);
  }

  displayFn(company?: Company): string | undefined {
    return company ? company.name : undefined;
  }

  createForm() {
    this.customerMappingForm = this.formBuilder.group({
      allMappings: this.formBuilder.array([])
    });
    const formControl = this.customerMappingForm.get(
      'allMappings'
    ) as FormArray;
    customerMappings.customerMappings.forEach(item =>
      formControl.push(this.populateForm(item))
    );
    console.log(this.customerMappingForm);
  }

  populateForm(item) {
    return this.formBuilder.group({
      customerNumber: item.customerNumber,
      customerName: item.customerName,
      originalCompanyId: item.originalCompanyId,
      updatedCompanyId: item.updatedCompanyId
    });
  }

  log() {
    console.log(this.customerMappingForm.controls['allMappings'].value);
  }

  private _filter(value: string): Company[] {
    // const filterValue = value.toLowerCase();

    return this.connectWiseCompanies.filter(
      option => option.name.toLowerCase().indexOf(value) === 0
    );
  }

  get mappingsArray(): FormArray {
    return this.customerMappingForm.get('allMappings') as FormArray;
  }

  addItems(event, index: number): void {
    const selectedCompanyObject: Company = event.value;
    const formControl = this.customerMappingForm.get('allMappings') as FormArray;
    const formGroupObject: AbstractControl = formControl.at(index);
    formGroupObject.get('updatedCompanyId').setValue(selectedCompanyObject.companyId);
    console.log(formGroupObject.value);
  }

  removeItem(event, index: number, i) {
    event.stopPropagation();
    const formControl = this.customerMappingForm.get('allMappings') as FormArray;
    const formGroupObject: AbstractControl = formControl.at(index);
    formGroupObject.get('updatedCompanyId').setValue(-1);
    this.fileInput.nativeElement.value = '';
    console.log(this.fileInput.nativeElement.value);
    // i.value="";
  }

  getMappings() {
    for (let i = 0; i < this.dataSource.length; i++) {
      this.b = this.dataSource[i];
    }
  }
}
