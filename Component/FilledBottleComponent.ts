import {
  Component,
  IMaterial,
  Bottle,
  BottleCap,
  Soda,
  FilledBottle,
  MaterialStore
} from '../I';

export class FilledBottleComponent extends Component{
  input:IMaterial[];
  output:Bottle;
  constructor(){
    super(
      'FilledBottleComponent',
      { name: 'Bottle', units: 1 },
      { name: 'BottleCap', units: 1 },
      { name: 'Soda', units: 2 }
    );
  }
  process(store:MaterialStore):FilledBottle{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new FilledBottle(1);
    }else{
      return new FilledBottle(0);
    }
  }
}