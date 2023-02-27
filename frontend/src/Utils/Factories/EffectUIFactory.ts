import { EffectUIType } from "../Types";
import { EffectUI } from "../WorkComponentsUI";
import { EffectUIParameter } from "../Types";

class EffectUIFactory{

  static generate(uid: number, type: EffectUIType): EffectUI{

    /** typeに応じたEffectを生成する */
    const param: EffectUIParameter = { x:0, y:0, z:0 } ;

    // !!! 仮置き !!!
    let effect: EffectUI;
    
    if(type === "ROLL"){
      effect = new EffectUI(uid, type, 1, param);     
    }else{
      effect = new EffectUI(uid, "ROLL", 1, param);     
    }

    return effect
  }

}

export default EffectUIFactory