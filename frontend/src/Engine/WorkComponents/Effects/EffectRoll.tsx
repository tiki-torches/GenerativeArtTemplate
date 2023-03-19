import EFFECT_DICTIONARY from "../../Global/EffectDictionary";
import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType, TDModelType } from "../InterfacesAndTypes/Types";
import TDModelProperty from "../TDModels/TDModelProperty";

/**
 * 
 */
class EffectRoll implements EffectInterface{

  // メタデータ
  uid     : number;
  type    : EffectType = "ROLL";
  priority: number;

  // Effect適用時に用いるパラメータ
  parameter  : EffectParameter;

  constructor(uid: number, parameter: EffectParameter){
    this.uid = uid;
    this.parameter = parameter;
    const dictItem = EFFECT_DICTIONARY.find( (item) => { return item.type == this.type } );
    this.priority = dictItem? dictItem.priority: 0;
  }
  
  /**
   * Effect適用後のpropertyを算出し返すメソッド
   * @param property
   * @param parameter
   */
  calc(property: TDModelProperty, parameter: EffectParameter): TDModelProperty{

    const WEIGHT = 0.001;

    const calcuatedProp: TDModelProperty = { ...property };
    calcuatedProp.rotation.x = calcuatedProp.rotation.x + parameter.x * WEIGHT;
    calcuatedProp.rotation.y = calcuatedProp.rotation.y + parameter.y * WEIGHT;
    calcuatedProp.rotation.z = calcuatedProp.rotation.z + parameter.z * WEIGHT;
    return calcuatedProp

  }

}

export default EffectRoll