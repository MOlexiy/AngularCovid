import {Component, OnInit} from '@angular/core';
import {TableByStateService} from "../table-by-state/table-by-state.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  countryDialog1: boolean = false;
  countryDialog2: boolean = false;
  submitted: boolean = false;


  public covidDetailsFormGroup: FormGroup = new FormGroup(
    {
      state: new FormControl('', [Validators.required]),
      lastUpdated: new FormControl('', [Validators.required]),
      confirmedCases: new FormControl('', [Validators.required]),
      fatalCases: new FormControl('', [Validators.required])
    }
  )
  public covidDetailsOnCountryFormGroup: FormGroup = new FormGroup(
    {
      date: new FormControl('', [Validators.required]),
      cases: new FormControl('', [Validators.required])
    }
  )

  constructor(private tableByStateService: TableByStateService) {}

  hideDialog() {
    this.countryDialog1 = false;
    this.countryDialog2 = false;
    this.submitted = false;
  }

  saveProduct() {
    if (this.covidDetailsFormGroup.valid) {
      this.submitted = true;
      console.debug(this.covidDetailsFormGroup.value)
      this.tableByStateService.emitDialog(this.covidDetailsFormGroup.value);
      this.countryDialog1 = false;
    }
    if(this.covidDetailsOnCountryFormGroup.valid){
      this.submitted = true;
      const formData: {date: Date, cases: number} = this.covidDetailsOnCountryFormGroup.value
      this.tableByStateService.emitDialog(formData);
      this.countryDialog2 = false;
    }
  }

  ngOnInit(): void {}
}
