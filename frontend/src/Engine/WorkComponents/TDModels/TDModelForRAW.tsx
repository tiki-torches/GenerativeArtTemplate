import { TDModelInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { TDModelType } from "../InterfacesAndTypes/Types";
import TDModelProperty from "./TDModelProperty";


/**
 * 基本的なTDModel
 * 各種レンダリングライブラリ向けに変換する素として使用する
 */
class TDModelForRAW implements TDModelInterface{

  // メタデータ
  uid       : number;
  type      : TDModelType;

  // 実際にレンダリングの対象となる3Dモデルデータ
  tdObject: any;

  // 3Dモデルの状態（表示位置・色・移動速度 など）を示す情報
  property: TDModelProperty;

  // 適用するEffectの一覧
  effectsList: Array<EffectInterface>;

  constructor(uid: number, type: TDModelType){
    this.uid  = uid;
    this.type = type;
    this.tdObject     = undefined;    // RAW形式はレンダリングを行わないため、3Dモデルデータは不要
    this.property     = new TDModelProperty;
    this.effectsList  = [];
  }

  
  /**
   * Effectを適用した後のPropertyを算出するメソッド
   * @param property 
   */
  calcPropEffectsApplied(property: TDModelProperty, effectsList: Array<EffectInterface>): TDModelProperty{
    let calcuatedProp = { ...property };
    effectsList.forEach( (effect) => {
      calcuatedProp = effect.calc(calcuatedProp, effect.parameter);
    });
    return calcuatedProp
  }

}


export default TDModelForRAW