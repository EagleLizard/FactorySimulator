import {Material} from '../I';

export class FinishedBottle extends Material {
  name:string;
  units: number;
  constructor(units:number){
    super(units);
    this.name = 'FinishedBottle';
  }
}