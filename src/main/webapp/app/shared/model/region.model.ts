export interface IRegion {
  id?: number;
  name?: string;
}

export class Region implements IRegion {
  constructor(public id?: number, public name?: string) {}
}
