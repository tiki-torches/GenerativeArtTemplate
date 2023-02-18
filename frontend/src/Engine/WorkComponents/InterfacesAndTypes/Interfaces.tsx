import { EffectType } from "./Types";
import { EffectParameter } from "./Types";
import { TDModelType } from "./Types";
import TDModelForRAW from "../TDModels/TDModelForRAW";
import TDModelProperty from "../TDModels/TDModelProperty";


export interface EffectInterface{

  // メタデータ
  uid     : number;
  type    : EffectType;
  priority: number;       // Effectの適用順位（値が大きいほど優先度が高い）
  // !!! TODO: priorityの設定はグローバル管理に変更すること !!!

  // Effect適用時に用いるパラメータ
  parameter  : EffectParameter;

  /**
   * Effect適用後のpropertyを算出し、結果を返すメソッド
   * @param property
   * @param parameter
   */
  calc(property: TDModelProperty, parameter: any): TDModelProperty;

}


export interface TDModelInterface{

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
   * Effectすべてを適用した後のPropertyを算出し、結果を返すメソッド
   * ※ 本メソッドはTDModelのPropertyを更新しない 更新する場合は外部で更新処理を行う必要がある
   * @param property 
   */
  calcPropEffectsApplied(property: TDModelProperty, effectsList: Array<EffectInterface>): TDModelProperty;

}


export interface TDModelConverter{

  /**
   * RAW形式の3DModelをもとに、各種レンダリングライブラリ用の3DModelを生成（変換）する処理
   * @param tdModelForRAW 
   */
  convert(tdModelForRAW: TDModelForRAW): TDModelInterface;

}


export interface WorkPlayerInterface{

  // 作品を描画するエリアとなるHTMLcanvas要素
  canvas    : HTMLCanvasElement;

  // 作品の再生状況の管理用プロパティ
  tdModelMemo : TDModelInterface | undefined;
  reqAnmID    : number;     // アニメーションの実行回数（実行フレーム数）を保持するプロパティ
  isPlaying   : Boolean;

  /**
   * 作品の再生を開始（再開）するメソッド
   * @param tdModel 
   */
  play(tdModel: TDModelInterface): void;

  /**
   * 作品の再生を停止（中断）するメソッド
   */
  stop(): void;

}
