import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType, TDModelType } from "../InterfacesAndTypes/Types";
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

  constructor(uid: number){
    this.uid = uid;
  }

  
  /**
   * Effect適用後のpropertyを算出し返すメソッド
   * @param property
   * @param parameter
   */
  calc(property: TDModelProperty, parameter: any): TDModelProperty{
    const calcuatedProp: TDModelProperty = { ...property };
    calcuatedProp.rotation.x = calcuatedProp.rotation.x + 10;
    return calcuatedProp
  }

}


export default EffectRoll