import EffectRoll from "../../../Engine/WorkComponents/Effects/EffectRoll";
import { EffectInterface } from "../../WorkComponents/InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType } from "../../WorkComponents/InterfacesAndTypes/Types";

class EffectFactory{

  static generate(uid: number, type: EffectType, parm: EffectParameter): EffectInterface{

    let effect: EffectInterface;

    // typeに応じたEffectを生成する
    switch(type){
      case "MOVE":
        effect = new EffectRoll(uid, parm);
        break;
      default:
        effect = new EffectRoll(uid, parm);
      ;
    }

    return effect
  }

}

export default EffectFactory