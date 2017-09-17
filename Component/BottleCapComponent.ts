import {
  Component,
  IMaterial,
  Steel,
  Plastic,
  BottleCap,
  MaterialStore
} from '../I';

export class BottleCapComponent extends Component{
  input:IMaterial[];
  output:BottleCap;
  constructor(){
    super(
      'BottleCapComponent',
      { name: 'Steel', units: 2 },
      { name: 'Plastic', units: 1}
    );
  }
  process(store:MaterialStore):BottleCap{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new BottleCap(4);
    }else{
      return new BottleCap(0);
    }
  }
}