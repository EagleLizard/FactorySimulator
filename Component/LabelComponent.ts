import {
  Component,
  IMaterial,
  Plastic,
  Label,
  MaterialStore
} from '../I';

export class LabelComponent extends Component{
  input:IMaterial[];
  output:Label;
  constructor(){
    super(
      'GlassComponent',
      { name: 'Plastic', units: 2 }
    );
  }
  process(store:MaterialStore):Label{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new Label(1);
    }else{
      return new Label(0);
    }
  }
}