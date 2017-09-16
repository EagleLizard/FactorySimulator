import {IMaterial} from '../I';

export class MaterialStore{

  materials:{[name:string]:IMaterial};

  constructor(...args:IMaterial[]){
    this.materials = args.reduce((acc:{},curr:IMaterial)=>{
      acc[curr.name] = curr;
      return acc;
    }, {});
  }

  consume(name:string, units:number){
    let material = this.materials[name];
    if(material === undefined){
      console.log(`No material of type ${name} exists in the store`);
      return;
    }
    material.use(units);
  }

  add(material:IMaterial){
    let storeMaterial = this.materials[material.name];
    if(!storeMaterial){
      this.materials[material.name] = material;
    }else{
      storeMaterial.add(material.units);
    }
  }
}