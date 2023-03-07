import { ColorUI, CoordinateUI, EffectUIParameter, EffectUIType, TDModelUIType, VectorUI } from "./Types";

export class WorkModelUI{

  // メタデータ（必須）
  uid     : number;

  // メタデータ（任意）
  author      : string | undefined;
  createdData : number | undefined;

  // 3Dモデルの一覧
  tdModelsList: Array<TDModelUI>;

  constructor(uid: number){
    this.uid          = uid;
    this.tdModelsList = [];
  }

}

export class TDModelUI{

  // メタデータ
  uid       : number;
  type      : TDModelUIType;

  // 3Dモデルの状態（表示位置・色・移動速度 など）を示す情報
  property: TDModelPropertyUI;

  // 適用するEffectの一覧
  effectsList: Array<EffectUI>;

  constructor(uid: number, type: TDModelUIType){
    this.uid  = uid;
    this.type = type;
    this.property     = new TDModelPropertyUI();
    this.effectsList  = [];
  }

}

class TDModelPropertyUI{

 position: CoordinateUI;
 vector  : VectorUI;
 rotation: VectorUI;
 color   : ColorUI;

 constructor(){
   this.position = { x: 0, y: 0, z: 0 };
   this.vector   = { x: 0, y: 0, z: 0 };
   this.rotation = { x: 0, y: 0, z: 0 };
   this.color    = { r: 255, g: 255, b: 255 };
 }

}

export class EffectUI{

    // メタデータ
    uid     : number;
    type    : EffectUIType;
    priority: number;
    // !!! TODO: priorityの設定はグローバル管理に変更すること !!!
  
    // Effect適用時に用いるパラメータ
    parameter  : EffectUIParameter;

    constructor(uid: number, type: EffectUIType, priority: number, parameter: EffectUIParameter){
      this.uid = uid;
      this.type = type;
      this.priority = priority;
      this.parameter = parameter;
    }
}