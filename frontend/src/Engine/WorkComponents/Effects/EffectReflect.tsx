import EFFECT_DICTIONARY from "../../Global/EffectDictionary";
import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectParameter, EffectType, TDModelType } from "../InterfacesAndTypes/Types";
import TDModelProperty from "../TDModels/TDModelProperty";

/**
 * 
 */
class EffectReflect implements EffectInterface{

  // メタデータ
  uid     : number;
  type    : EffectType = 'REFLECT';
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

    const calcuatedProp: TDModelProperty = { ...property };

    // 3Dオブジェクトが移動後に指定の領域を超える場合は、ベクトルを反転させる
    if( Math.abs(property.position.x + property.vector.x) > Math.abs(parameter.x) ){
      calcuatedProp.vectorReversal.x = (calcuatedProp.vectorReversal.x  == 1)? -1: 1;
    }
    if( Math.abs(property.position.y + property.vector.y) > Math.abs(parameter.y) ){
      calcuatedProp.vectorReversal.y = (calcuatedProp.vectorReversal.y  == 1)? -1: 1;
    }
    if( Math.abs(property.position.z + property.vector.z) > Math.abs(parameter.z) ){
      calcuatedProp.vectorReversal.z = (calcuatedProp.vectorReversal.z  == 1)? -1: 1;
    }

    return calcuatedProp

  }

}

export default EffectReflect