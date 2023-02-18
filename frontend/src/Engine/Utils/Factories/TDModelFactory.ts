import TDModelForRAW from "../../WorkComponents/TDModels/TDModelForRAW"
import EffectRoll from "../../../Engine/WorkComponents/Effects/EffectRoll";


class TDModelFactory{

  static createSample() {
    const sampleTDModel = new TDModelForRAW(1, "CUBE");
    const sampleEffect = new EffectRoll(1);
    sampleTDModel.effectsList.push(sampleEffect);
    return sampleTDModel
  }

}


export default TDModelFactory