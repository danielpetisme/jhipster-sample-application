import { ILocation } from 'app/shared/model/location.model';

export interface IWarehouse {
  id?: number;
  name?: string;
  location?: ILocation;
}

export class Warehouse implements IWarehouse {
  constructor(public id?: number, public name?: string, public location?: ILocation) {}
}
