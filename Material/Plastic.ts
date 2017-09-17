import {Material} from '../I';

export class Plastic extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Plastic';
  }
}