import {Material} from '../I';

export class Glass extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'Glass';
  }
}