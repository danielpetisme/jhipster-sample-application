import { IRegion } from 'app/shared/model/region.model';

export interface ICountry {
  id?: number;
  name?: string;
  region?: IRegion;
}

export class Country implements ICountry {
  constructor(public id?: number, public name?: string, public region?: IRegion) {}
}
