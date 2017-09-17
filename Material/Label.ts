import {Material} from '../I';

export class Label extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Label';
  }
}