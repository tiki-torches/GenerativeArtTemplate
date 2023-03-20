import TDModelForTHREEFactory from "../../../Engine/Utils/Factories/TDModelForTHREEFactory";
import { TDModelConverterInterface } from "../InterfacesAndTypes/Interfaces";
import TDModelForRAW from "../TDModels/TDModelForRAW";
import TDModelForTHREE from "../TDModels/TDModelForTHREE";

class THREEConverter implements TDModelConverterInterface{

  convert(tdModelForRAW: TDModelForRAW): TDModelForTHREE{
    
    // RAW形式のTDMModelからTHREE形式のTDModelを生成
    // なお、内部的にはtype指定に応じたmeshを生成しセットしているのみ
    const modelForTHREE = TDModelForTHREEFactory.generateTDModel(tdModelForRAW.uid, tdModelForRAW.type);

    // 変換前のオブジェクトから各種プロパティを引き継ぐ
    modelForTHREE.property    = tdModelForRAW.property;
    modelForTHREE.effectsList = tdModelForRAW.effectsList;

    return modelForTHREE;
  }

}


export default THREEConverter