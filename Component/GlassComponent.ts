import {
  Component,
  IMaterial,
  Glass,
  MaterialStore
} from '../I';

export class GlassComponent extends Component{
  input:IMaterial[];
  output:Glass;
  constructor(){
    super(
      'GlassComponent',
      { name: 'Silica', units: 9 },
      { name: 'Lime', units: 1}
    );
  }
  process(store:MaterialStore):Glass{
    let results = this.resultsFromStore(store);
    let success = this.validatedResults(results);
    if(success){
      return new Glass(1);
    }else{
      return new Glass(0);
    }
  }
}