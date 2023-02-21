import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType, TDModelType } from "../../../Utils/Types";
import TDModelProperty from "../TDModels/TDModelProperty";


/**
 * 
 */
class EffectRoll implements EffectInterface{

  // メタデータ
  uid     : number;
  type    : EffectType  = "ROLL";
  priority: number      = 10;       // Effectの適用順位（値が大きいほど優先度が高い）

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
    const calcuatedProp: TDModelProperty = { ...property };
    calcuatedProp.rotation.x = parameter.x;
    return calcuatedProp
  }

}


export default EffectRoll