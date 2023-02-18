import TDModelForRAW from "../../WorkComponents/TDModels/TDModelForRAW"
import EffectRoll from "../../WorkComponents/Effects/EffectRoll";


class TDModelForRAWFactory{

  static generateSample(): TDModelForRAW{
    const sampleTDModel = new TDModelForRAW(1, "CUBE");
    const sampleEffect = new EffectRoll(1, { x: 1, y: 0, z: 0 });
    sampleTDModel.effectsList.push(sampleEffect);
    return sampleTDModel
  }

}


export default TDModelForRAWFactory