import {Material} from '../I';

export class Lime extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Lime';
  }
}