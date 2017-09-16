import {
  Component,
  IMaterial,
  Bottle,
  MaterialStore
} from '../I';

export class BottleComponent extends Component{
  input:IMaterial[];
  output:Bottle;
  constructor(){
    super(
      'BottleComponent',
      { name: 'Glass', units: 1 }
    );
  }
  process(store:MaterialStore):Bottle{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new Bottle(4);
    }else{
      return new Bottle(0);
    }
  }
}