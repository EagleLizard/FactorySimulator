import {MaterialStore} from '../I';
export interface IComponent<I,O>{
  input:I[];
  process:(store:MaterialStore)=>O;
  output:O;
}