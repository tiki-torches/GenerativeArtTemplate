import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType, TDModelType } from "../InterfacesAndTypes/Types";
import TDModelProperty from "../TDModels/TDModelProperty";

/**
 * 
 */
class EffectMove implements EffectInterface{

  // メタデータ
  uid     : number;
  type    : EffectType  = "MOVE";
  priority: number      = 20;

  // Effect適用時に用いるパラメータ
  parameter  : EffectParameter;

  constructor(uid: number, parameter: EffectParameter){
    this.uid = uid;
    this.parameter = parameter;
  }
  
  /**
   * Effect適用後のpropertyを算出し返すメソッド
   * @param property
   * @param parameter
   */
  calc(property: TDModelProperty, parameter: EffectParameter): TDModelProperty{

    const WEIGHT = 0.001;

    const calcuatedProp: TDModelProperty = { ...property };
    calcuatedProp.vector.x = parameter.x * WEIGHT;
    calcuatedProp.vector.y = parameter.y * WEIGHT;
    calcuatedProp.vector.z = parameter.z * WEIGHT;

    return calcuatedProp

  }

}

export default EffectMove