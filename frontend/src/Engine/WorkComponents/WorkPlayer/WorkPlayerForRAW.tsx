import { TDModelInterface, WorkPlayerInterface } from "../InterfacesAndTypes/Interfaces";

/**
 * 基本的なTDModel
 * 各種レンダリングライブラリ向けに変換する素として使用する
 */
class WorkPlayerForRAW implements WorkPlayerInterface{

  // 作品を描画するエリアとなるHTMLcanvas要素
  canvas    : HTMLCanvasElement;

  // 作品の再生状況の管理用プロパティ
  tdModelMemo : TDModelInterface | undefined;
  reqAnmID    : number;     // アニメーションの実行回数（実行フレーム数）を保持するプロパティ
  isPlaying   : Boolean;

  constructor(canvas: HTMLCanvasElement){
    this.tdModelMemo  = undefined;
    this.canvas       = canvas;
    this.reqAnmID     = 0;
    this.isPlaying    = false;
  }

  /**
   * Outline    : 作品の再生を開始（再開）するメソッド
   * SideEffect : - tdModelMemoを更新する
   *              - reqAnmIDを更新する
   *              - isPlayingフラグを更新する
   * @param tdModel 
   */
  play(tdModel: TDModelInterface): void{

    // TDModelを複製 （元オブジェクトへの非明示的な変更を避ける目的）
    const repTDModel = { ...tdModel };

    // ループ処理を定義
    const tick = () => {

      /** TDModelにEffectを適用 */

      // Effect適用後のPropを算出し、TDModelに反映
      const propEffectsApplied  = tdModel.calcPropEffectsApplied(repTDModel.property, repTDModel.effectsList);
      repTDModel.property       = propEffectsApplied;

      /** レンダリングを実行 （レンダリングライブラリに3Dオブジェクトの表示状態の変更を伝える） */

      // Propの情報をもとに、レンダリング対象の3Dオブジェクトの表示情報（位置・色 など）を更新
      // tdModel.tdObject.position = tdModel.property.position;

      // レンダリングを実行
      // renderer.render();

      // 本処理をフレーム更新時に発火するよう登録
      const reqAnmID = requestAnimationFrame(tick);

      /** SideEffect系 */
      this.tdModelMemo  = repTDModel; // Effect適用後のTDModelを保存
      this.reqAnmID     = reqAnmID;   // 本処理のアニメーションIDを保存
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

}

export default WorkPlayerForRAW