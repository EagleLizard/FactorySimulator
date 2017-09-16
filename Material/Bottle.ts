import {Material} from '../I';

export class Bottle extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Bottle';
  }
}