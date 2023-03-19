import { EffectType } from "./Types";
import { EffectParameter } from "./Types";
import { TDModelType } from "./Types";
import TDModelForRAW from "../TDModels/TDModelForRAW";
import TDModelProperty from "../TDModels/TDModelProperty";


export interface WorkModelInterface{

  // メタデータ（必須）
  uid     : number;

  // メタデータ（任意）
  author      : string | undefined;
  createdData : number | undefined;

  // 3Dモデルの一覧
  tdModelsList: Array<TDModelInterface>;

}

export interface EffectInterface{

  /** メタデータ */
  uid     : number;
  type    : EffectType;

  // priorityは値が小さいほど優先度が低い
  // 値が小さいほどEffect適用時に先に実行される つまり後に実行されるEffectに上書きされる可能性がある
  priority: number;

  /** Effect適用時に用いるパラメータ */
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


  /**
   * 実際にレンダリングの対象となる3Dモデルデータの表示情報（位置・色など）を更新するメソッド
   * @param tdObject 
   * @param property 
   */
  updateTDObject(tdObject: any, property: TDModelProperty): void;

}


export interface TDModelConverterInterface{

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
  tdModelsMemo  : Array<TDModelInterface> | undefined;
  reqAnmID      : number;     // アニメーションの実行回数（実行フレーム数）を保持するプロパティ
  isPlaying     : Boolean;

  /**
   * 作品の再生を開始（再開）するメソッド
   * 注意: tdModelは不可逆的な変更を加えられる 変更前のtdModelが必要な場合はtdModelの生成素であるJSONから生成すること
   * @param tdModel 
   */
  play(tdModels: Array<TDModelInterface>): void;

  /**
   * 作品の再生を停止（中断）するメソッド
   */
  stop(): void;

}
