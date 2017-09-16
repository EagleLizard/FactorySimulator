import {Material} from '../I';

export class Silica extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Silica';
  }
}