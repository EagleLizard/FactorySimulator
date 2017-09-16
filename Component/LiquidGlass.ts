import {
  IComponent,
  IMaterial,
  Silica,
  Lime,
  Glass,
  MaterialStore,
  MaterialConsumeResult
} from '../I';

export class LiquidGlass implements IComponent<IMaterial, IMaterial>{
  input:IMaterial[];
  output:Glass;
  process(store:MaterialStore):Glass{
    let results:MaterialConsumeResult[] = [];
    let failedResults:MaterialConsumeResult[] = [];
    results.push(
      store.consume('Silica', 9),
      store.consume('Lime', 1)
    );
    failedResults = results.filter(result=>!result.success);
    if(failedResults.length){
      let failString = failedResults.reduce((acc:string[], curr:MaterialConsumeResult)=>{
        acc.push(curr.name);
        return acc;
      }, <string[]>[]).join(', ');
      console.log(
        `Insufficient materials for LiquidGlass component,
          Missing materials: ${failString}`
      );
      results.forEach(result=>{
        result.cancellerCallback();
      });
      return new Glass(0);
    }else{
      return new Glass(1);
    }
  }
}