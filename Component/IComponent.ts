import {
  MaterialStore,
  IMaterial,
  Material,
  MaterialConsumeResult
} from '../I';
export interface IComponent<I,O>{
  input:I[];
  output:O;
  process:(store:MaterialStore)=>O;
}

export type ConsumptionMaterials = {name:string, units:number};


export abstract class Component implements IComponent<ConsumptionMaterials,IMaterial>{
  name:string;
  input:ConsumptionMaterials[];
  output:IMaterial;
  constructor(name:string, ...consumptionMaterials:ConsumptionMaterials[]){
    this.name = name;
    this.input = consumptionMaterials;
  }
  resultsFromStore(store:MaterialStore):MaterialConsumeResult[]{
    return this.input.map(toConsume=>{
      return store.consume(toConsume.name, toConsume.units);
    });
  }

  validatedResults(results:MaterialConsumeResult[]):boolean{
    let failedResults = results.filter(result=>!result.success);
    if(failedResults.length){
      let failString = failedResults.reduce((acc:string[], curr:MaterialConsumeResult)=>{
        acc.push(curr.name);
        return acc;
      }, <string[]>[]).join(', ');
      console.log(
        `Insufficient materials for ${this.name},
          Missing materials: ${failString}`
      );
      results.forEach(result=>{
        result.cancellerCallback();
      });
    }
    return failedResults.length < 1;
  }
  abstract process(store:MaterialStore):IMaterial;
}