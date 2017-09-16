import { 
  IComponent, 
  IComponentInput, 
  IComponentOutput,
  MaterialStore,
  IMaterial
} from '../I';

export default class Environment{

  clockIntervalMs:number;
  clockCounter:number;
  components:IComponent<IMaterial, IMaterial>[];
  materialsStore: MaterialStore;

  constructor(clockIntervalMs:number){
    this.clockIntervalMs = clockIntervalMs;
    this.clockCounter = 0;
    this.components = [];
  }

  initMaterialStore(...args:IMaterial[]){
    this.materialsStore = new MaterialStore(...args);
    console.log(this.materialsStore);
  }

  addComponent(component:IComponent<IMaterial, IMaterial>){
    this.components.push(component);
  }

  run(numTimes?:number):void{
    setTimeout(()=>{
      this.clockCounter++;
      console.log(`\nClock: ${this.clockCounter}\n`);
      this.performStep();
      console.log(this.materialsStore);
      if(numTimes !== undefined && (this.clockCounter <= numTimes+2)){
        setTimeout(()=>this.run(numTimes-1));
      }else if(numTimes === undefined){
        setTimeout(()=>this.run());
      }
    });
  }

  performStep():void{
    this.components.forEach(component=>{
      let outputMaterial = component.process(this.materialsStore);
      this.addMaterial(outputMaterial);
    });
  }

  private addMaterial(material:IMaterial){
    this.materialsStore.add(material);
  }

  
}