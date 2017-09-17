import {
  Component,
  IMaterial,
  FinishedBottle,
  MaterialStore
} from '../I';

export class FinishedBottleComponent extends Component{
  input:IMaterial[];
  output:FinishedBottle;
  constructor(){
    super(
      'FinishedBottleComponent',
      { name: 'FilledBottle', units: 1},
      { name: 'Label', units: 1 }
    );
  }
  process(store:MaterialStore):FinishedBottle{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new FinishedBottle(1);
    }else{
      return new FinishedBottle(0);
    }
  }
}