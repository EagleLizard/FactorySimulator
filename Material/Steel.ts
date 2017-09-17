import {Material} from '../I';

export class Steel extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Steel';
  }
}