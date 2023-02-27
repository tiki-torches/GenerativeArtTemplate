import * as THREE from 'three';
import { TDModelInterface } from "../InterfacesAndTypes/Interfaces";
import { EffectInterface } from "../InterfacesAndTypes/Interfaces";
import { TDModelType } from "../InterfacesAndTypes/Types";
import TDModelProperty from "./TDModelProperty";

/**
 * 基本的なTDModel
 * 各種レンダリングライブラリ向けに変換する素として使用する
 */
class TDModelForTHREE implements TDModelInterface{

  // メタデータ
  uid       : number;
  type      : TDModelType;

  // 実際にレンダリングの対象となる3Dモデルデータ
  tdObject: THREE.Mesh;

  // 3Dモデルの状態（表示位置・色・移動速度 など）を示す情報
  property: TDModelProperty;

  // 適用するEffectの一覧
  effectsList: Array<EffectInterface>;

  constructor(uid: number, type: TDModelType, tdObject: THREE.Mesh){
    this.uid  = uid;
    this.type = type;
    this.tdObject     = tdObject;
    this.property     = new TDModelProperty();
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

  /**
   * 実際にレンダリングの対象となる3Dモデルデータの表示情報（位置・色など）を更新するメソッド
   * @param tdObject 
   * @param property 
   */
  updateTDObject(tdObject: any, property: TDModelProperty): void{

    // 回転
    tdObject.rotation.x += property.rotation.x;
    tdObject.rotation.y += property.rotation.y;
    tdObject.rotation.z += property.rotation.z;
    
    // サイズ
    // 色
    // 位置
  }

}


export default TDModelForTHREE