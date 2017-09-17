import {Material} from '../I';

export class Soda extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Soda';
  }
}