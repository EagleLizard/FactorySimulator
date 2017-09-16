
export interface IMaterial{
  units: number;
  name: string;
  use:(numUnits:number)=>void;
  add:(numUnits:number)=>void;
}

export abstract class Material implements IMaterial{
  name:string;
  units:number;
  constructor(units:number){
    this.units = units;
  }

  use(numUnits:number){
    this.units -= numUnits;
  }
  add(numUnits:number){
    this.units += numUnits
  }
}