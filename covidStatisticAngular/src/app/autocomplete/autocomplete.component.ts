import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import { CountryService } from './countryservice';
import {
  FilterService,
  ConfirmationService,
  MessageService
} from "primeng/api";
import {ICountry} from "./icountry";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [CountryService, FilterService]
})
export class AutocompleteComponent implements OnInit{
  @Output() sendCountryName: EventEmitter<string> = new EventEmitter<string>();
  selectedCountry!: ICountry

  countries!: ICountry[];

  filteredCountries!: ICountry[];

  constructor(
    private countryService: CountryService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

  filterCountry(event: any) {
    let query = event.query.toLowerCase();
    this.filteredCountries =  this.countries.filter(country => country.name?.toLowerCase().indexOf(query) == 0)
  }

  selectCountry(event: Event){ // => // selectCountry(event: Event){
    let target!: EventTarget;
    if (event.target !== null){
      target = event.target;
    }

    if(!this.selectedCountry){
      this.confirmationService.confirm({
        target: target,
        message: "Are you write the country in the field.",
        accept: () => {
          this.messageService.add({
            summary: "Rejected",
            detail: "Please write the country in the field."
          });
        }
      });
      return;
    }
    if(this._checkIfSelectedCountry(event)) {
      let countryEn: ICountry = this._filterCountryByName();
      this._sendCountryName(countryEn.name as string);
    }
  }

  private _checkIfSelectedCountry(event: any) {
    if (!this.selectedCountry.name){
      this.confirmationService.confirm({
        target: event.target,
        message: "Are u write the country from the pop-up list.",
        accept: () => {
          this.messageService.add({
            summary: "Rejected",
            detail: "Please write the country from the pop-up list."
          });
        }
      });
      return false;
    }
    return true;
  }

  private _filterCountryByName() {
    let country = this.countries.filter(
      (country: ICountry)=>country.code === this.selectedCountry.code
    )
    return country[0];
  }

  private  _sendCountryName(countryName:string) {
    this.sendCountryName.emit(countryName)
  }
}
