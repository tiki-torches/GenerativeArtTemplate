import TDModelForRAW from "../../WorkComponents/TDModels/TDModelForRAW"
import EffectRoll from "../../WorkComponents/Effects/EffectRoll";
import { TDModelType } from "../../WorkComponents/InterfacesAndTypes/Types";


class TDModelForRAWFactory{

  static generate(uid: number, type: TDModelType): TDModelForRAW{
    const tdModel = new TDModelForRAW(uid, type);
    return tdModel
  }

  static generateSample(): TDModelForRAW{
    const sampleTDModel = new TDModelForRAW(1, "CUBE");
    const sampleEffect = new EffectRoll(1, { x: 1, y: 0, z: 0 });
    sampleTDModel.effectsList.push(sampleEffect);
    return sampleTDModel
  }

}


export default TDModelForRAWFactory