import EffectMove from "../../../Engine/WorkComponents/Effects/EffectMove";
import EffectRoll from "../../../Engine/WorkComponents/Effects/EffectRoll";
import EffectReflect from "../../../Engine/WorkComponents/Effects/EffectReflect";
import { EffectInterface } from "../../WorkComponents/InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType } from "../../WorkComponents/InterfacesAndTypes/Types";

class EffectFactory{

  static generate(uid: number, type: EffectType, parm: EffectParameter): EffectInterface{

    let effect: EffectInterface;

    // typeに応じたEffectを生成する
    switch(type){

      case 'ROLL':
        effect = new EffectRoll(uid, parm);
        break;

      case 'MOVE':
        effect = new EffectMove(uid, parm);
        break;

      case 'REFLECT':
        effect = new EffectReflect(uid, parm);
        break;

      default:
        effect = new EffectRoll(uid, parm);

    }

    return effect
  }

}

export default EffectFactory