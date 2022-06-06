export interface ICountryByDate {
    activeCases?:number;
    confirmedCases?:number;
    country?:string;
    fatalCases?:number;
    fatalityRatio?:number;
    incidentRate?:number;
    lastUpdated?:Date;
    location?:string;
    newCases?:number;
    recoveredCases?:number;
    state?:string;
    stateCountry?:string;
}

export interface IDataByCountry{
  cases?:number;
  country?: string;
  date?: Date;
}

export class CountryByDate implements ICountryByDate {
  state: string;
  lastUpdated: Date;
  confirmedCases: number;
  fatalCases: number;
  constructor(state:string, lastUpdated: Date, confirmedCases: number, fatalCases: number) {
    this.state = state;
    this.lastUpdated = lastUpdated;
    this.confirmedCases = confirmedCases;
    this.fatalCases = fatalCases;
  }
}

export class DataByCountry implements IDataByCountry{
  cases: number;
  date: Date;
  constructor(cases:number, date: Date) {
    this.cases = cases;
    this.date = date;
  }
}
