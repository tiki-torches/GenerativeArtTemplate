import EffectRoll from "src/Engine/WorkComponents/Effects/EffectRoll";
import { EffectInterface } from "../../WorkComponents/InterfacesAndTypes/Interfaces";
import { EffectType } from "../../WorkComponents/InterfacesAndTypes/Types";

class EffectFactory{

  static generate(uid: number, type: EffectType): EffectInterface{

    /** typeに応じたEffectを生成する */
    const effect = new EffectRoll(uid, { x: 0, y: 0, z: 0 });  // !!! 仮置き !!!

    return effect
  }

}

export default EffectFactory