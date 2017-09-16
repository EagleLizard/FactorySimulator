
import Environment from './Environment/Environment';
import {
  Silica, 
  Lime,
  GlassComponent
} from './I';

main();

function main():void{
  let env = new Environment(100);
  env.initMaterialStore(
    new Silica(100),
    new Lime(10)
  );
  env.addComponent(new GlassComponent());
  env.run(20);
}