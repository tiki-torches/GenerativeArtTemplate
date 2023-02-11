import { EffectType } from "./Types";
import { EffectParameter } from "./Types";
import { TDModelProperty } from "./Types";
import { TDModelType } from "./Types";
import TDModelForRAW from "../TDModels/TDModelForRAW";


export interface EffectInterface {

  uid        : number;
  type       : EffectType;

  parameter  : EffectParameter;

  /**
   * Effect適用後のpropertyを算出し返すメソッド
   * @param property
   * @param parameter
   */
  calculate(property: TDModelProperty, parameter: any): any;

}


export interface TDModelInterface {

  // メタデータ
  uid       : number;
  type      : TDModelType;

  // 実際にレンダリングの対象となる3Dモデルデータ
  tdObject: any;

  // 3Dモデルの状態（表示位置・色・移動速度 など）を示す情報
  property: TDModelProperty;

  // 適用するEffectの一覧
  effectsList: Array<EffectInterface>

  /**
   * Effectを適用した後のPropertyを算出するメソッド
   * @param property 
   */
  calcPropEffectApplied(property: TDModelProperty): TDModelProperty;

}


export interface TDModelConverter {

  /**
   * RAW形式の3DModelをもとに、各種レンダリングライブラリ用の3DModelを生成（変換）する処理
   * @param tdModelForRAW 
   */
  convert(tdModelForRAW: TDModelForRAW): TDModelInterface;

}