import {IComponentInput} from 'I';

export type IComponentOutput = IComponentInput & {
  degradationFactor: number; 
};