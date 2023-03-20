import { EffectInterface, TDModelInterface, WorkPlayerInterface } from "../InterfacesAndTypes/Interfaces";
import TDModelForRAW from "../TDModels/TDModelForRAW";
import TDModelProperty from "../TDModels/TDModelProperty";

/**
 * 基本的なTDModel
 * 各種レンダリングライブラリ向けに変換する素として使用する
 */
class WorkPlayerForRAW implements WorkPlayerInterface{

  // 作品を描画するエリアとなるHTMLcanvas要素
  canvas: HTMLCanvasElement;

  // 作品の再生状況の管理用プロパティ
  tdModelsMemo: Array<TDModelInterface>;
  reqAnmID    : number;     // アニメーションの実行回数（実行フレーム数）を保持するプロパティ
  isPlaying   : Boolean;

  constructor(canvas: HTMLCanvasElement){
    this.tdModelsMemo = [];
    this.canvas       = canvas;
    this.reqAnmID     = 0;
    this.isPlaying    = false;
  }

  /**
   * 作品の再生を開始（再開）するメソッド
   * 注意: tdModelは不可逆的な変更を加えられる 変更前のtdModelが必要な場合はtdModel生成素となるJSONから生成すること
   * SideEffect : - tdModelMemoを更新する
   *              - reqAnmIDを更新する
   *              - isPlayingフラグを更新する
   * @param tdModel 
   */
  play(tdModels: Array<TDModelForRAW>): void{

    this.readyTDModels(tdModels);

    // ループ処理を定義
    const tick = () => {

      /** TDModelにEffectを適用 */
      tdModels.forEach( (tdModel) => {
        // Effect適用後のPropを算出し更新
        const propEffectsApplied  = tdModel.calcPropEffectsApplied(tdModel.property, tdModel.effectsList);
        tdModel.property = propEffectsApplied;

        /** レンダリングを実行 （レンダリングライブラリに3Dオブジェクトの表示状態の変更を伝える） */

        // レンダリング対象の3Dオブジェクトの表示情報（位置・色 など）を更新
        tdModel.updateTDObject(tdModel.tdObject, tdModel.property);
      });

      // レンダリングを実行
      // render();

      // 本処理をフレーム更新時に発火するよう登録
      const reqAnmID = requestAnimationFrame(tick);

      /** SideEffect系 */
      this.tdModelsMemo = tdModels;
      this.reqAnmID     = reqAnmID;               // 本処理のアニメーションIDを一時保持
      this.isPlaying    = true;
    }

    // ループ処理をキック
    tick();

  }

  /**
   * 作品の再生を停止（中断）するメソッド
   */
  stop(): void{
    cancelAnimationFrame(this.reqAnmID);
  }

  /**
   * TDModelを再生可能な状態に更新するメソッド
   * @param tdModels 
   */
  readyTDModels(tdModels: Array<TDModelForRAW>): void{
    // 各TDModelのEffectをprorityの順（昇順）に従って並び替える
    const compare = (effectA: EffectInterface, effectB: EffectInterface) => { return effectA.priority - effectB.priority }
    tdModels.forEach( (tdModel) => {
      tdModel.effectsList.sort(compare);
    })
  }

}

export default WorkPlayerForRAW