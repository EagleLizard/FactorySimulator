import {Material} from '../I';

export class BottleCap extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'BottleCap';
  }
}