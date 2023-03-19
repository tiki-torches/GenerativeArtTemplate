import { EffectUIType } from "../Types";
import { EffectUI } from "../WorkComponentsUI";

class EffectUIFactory{

  static generate(uid: number, type: EffectUIType): EffectUI{

    /** typeに応じたEffectを生成する */
    let param;
    switch(type){
      case "ROLL":
        param = { x: 0, y: 0, z: 0 };
        break;
      case "MOVE":
        param = { x: 0, y: 0, z: 0 };
      case "REFLECT":
        param = { x: 0, y: 0, z: 0 };
      default:
        param = { x: 0, y: 0, z: 0 };
    }

    const effect: EffectUI = new EffectUI(uid, type, param);

    return effect
  }

}

export default EffectUIFactory