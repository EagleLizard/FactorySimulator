import {IMaterial} from '../I';

export type MaterialConsumeResult = {
  success: boolean,
  cancellerCallback:VoidFunction,
  name:string
};
export class MaterialStore{

  materials:{[name:string]:IMaterial};

  constructor(...args:IMaterial[]){
    this.materials = args.reduce((acc:{},curr:IMaterial)=>{
      acc[curr.name] = curr;
      return acc;
    }, {});
  }

  consume(name:string, units:number):MaterialConsumeResult{
    let material = this.materials[name];
    if(material === undefined){
      console.log(`No material of type ${name} exists in the store`);
      return MaterialStore.getConsumeResult(false, ()=>{}, name);
    }
    if(material.units >= units){
      material.use(units);
      return MaterialStore.getConsumeResult(true, ()=>material.add(units), name);
    }else{
      return MaterialStore.getConsumeResult(false, ()=>{}, name);
    }
  }

  add(material:IMaterial){
    let storeMaterial = this.materials[material.name];
    if(!storeMaterial){
      this.materials[material.name] = material;
    }else{
      storeMaterial.add(material.units);
    }
  }

  private static getConsumeResult(
    success:boolean, 
    canceller:VoidFunction, 
    name:string):MaterialConsumeResult
  {
    return{
      success: success,
      cancellerCallback: canceller,
      name: name
    };
  }
}