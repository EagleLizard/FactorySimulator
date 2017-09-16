import {
  IComponent,
  IMaterial,
  Silica,
  Lime,
  Glass,
  MaterialStore
} from '../I';

export class LiquidGlass implements IComponent<IMaterial, IMaterial>{
  input:IMaterial[];
  output:Glass;
  process(store:MaterialStore):Glass{
    store.consume('Silica', 9);
    store.consume('Lime', 1);
    return new Glass(1);
  }
}