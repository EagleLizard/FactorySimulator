import { 
  IComponent, 
  IComponentInput, 
  IComponentOutput,
  MaterialStore,
  IMaterial
} from '../I';

export default class Environment{

  numCycles:number;
  clockCounter:number;
  components:IComponent<IMaterial, IMaterial>[];
  materialsStore: MaterialStore;

  constructor(numCycles:number){
    this.numCycles = numCycles;
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
    if(!numTimes && !this.clockCounter){
      numTimes = this.numCycles;
    }
    setTimeout(()=>{
      this.clockCounter++;
      this.performStep();
      console.log(`\nClock: ${this.clockCounter}\n`);
      console.log(this.materialsStore);
      if(numTimes !== undefined && (this.clockCounter <= this.numCycles)){
        console.log(numTimes);
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