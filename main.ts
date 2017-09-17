
import Environment from './Environment/Environment';
import {
  Silica, 
  Lime,
  Steel,
  Plastic,
  Soda,
  GlassComponent,
  BottleComponent,
  BottleCapComponent,
  FilledBottleComponent,
  FinishedBottleComponent,
  LabelComponent
} from './I';

main();

function main():void{
  let env = new Environment(4, 10);
  env.initMaterialStore(
    new Silica(100),
    new Lime(10),
    new Steel(20),
    new Plastic(170),
    new Soda(80),
  );
  env.addComponent(new GlassComponent());
  env.addComponent(new BottleComponent());
  env.addComponent(new BottleCapComponent());
  env.addComponent(new FilledBottleComponent());
  env.addComponent(new LabelComponent());
  env.addComponent(new FinishedBottleComponent());
  env.run();
}