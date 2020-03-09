import { ICountry } from 'app/shared/model/country.model';

export interface ILocation {
  id?: number;
  adress?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: ICountry;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public adress?: string,
    public postalCode?: string,
    public city?: string,
    public state?: string,
    public country?: ICountry
  ) {}
}
