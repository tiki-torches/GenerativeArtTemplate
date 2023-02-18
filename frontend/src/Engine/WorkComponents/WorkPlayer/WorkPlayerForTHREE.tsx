import * as THREE from 'three';
import { WorkPlayerInterface } from "../InterfacesAndTypes/Interfaces";
import TDModelForTHREE from "../TDModels/TDModelForTHREE";
import TDModelProperty from "../TDModels/TDModelProperty";

/**
 * 基本的なTDModel
 * 各種レンダリングライブラリ向けに変換する素として使用する
 */
class WorkPlayerForTHREE implements WorkPlayerInterface{

  // 作品を描画するエリアとなるHTMLcanvas要素
  canvas    : HTMLCanvasElement;

  // 作品の再生状況の管理用プロパティ
  tdModelsMemo  : Array<TDModelForTHREE>;
  reqAnmID      : number;     // アニメーションの実行回数（実行フレーム数）を保持するプロパティ
  isPlaying     : Boolean;

  // THREE用
  width = 960;
  height = 540;
  renderer: THREE.WebGLRenderer | undefined = undefined;
  scene: THREE.Scene | undefined = undefined;
  camera: THREE.PerspectiveCamera | undefined = undefined

  constructor(canvas: HTMLCanvasElement){
    this.tdModelsMemo = [];
    this.canvas       = canvas;
    this.reqAnmID     = 0;
    this.isPlaying    = false;

    const renderer: any = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.width, this.height);
    this.renderer = renderer;

    const camera = new THREE.PerspectiveCamera(45, this.width / this.height);
    camera.position.set(0, 0, +1000);
    this.camera = camera;

    const scene = new THREE.Scene();
    this.scene = scene;

  }


  /**
   * Outline    : 作品の再生を開始（再開）するメソッド
   * 注意: tdModelは不可逆的な変更を加えられる 変更前のtdModelが必要な場合はtdModel生成素となるJSONから生成すること
   * SideEffect : - tdModelMemoを更新する
   *              - reqAnmIDを更新する
   *              - isPlayingフラグを更新する
   * @param tdModel 
   */
  play(tdModels: Array<TDModelForTHREE>): void{

    tdModels.forEach( (tdModel) => {
      this.scene?.add(tdModel.tdObject);
    });

    // ループ処理を定義
    const tick = () => {

      /** TDModelにEffectを適用 */

      tdModels.forEach( (tdModel) => {
        // Effect適用後のPropを算出し、TDModelに反映
        const propEffectsApplied = tdModel.calcPropEffectsApplied(tdModel.property, tdModel.effectsList);
        tdModel.property = propEffectsApplied;

        /** レンダリングを実行 （レンダリングライブラリに3Dオブジェクトの表示状態の変更を伝える） */

        // レンダリング対象の3Dオブジェクトの表示情報（位置・色 など）を更新
        tdModel.updateTDObject(tdModel.tdObject, tdModel.property);
      });

      // レンダリングを実行
      if(this.renderer && this.scene && this.camera){
        this.renderer.render(this.scene, this.camera);
      }

      // 本処理をフレーム更新時に発火するよう登録
      const reqAnmID = requestAnimationFrame(tick);

      /** SideEffect系 */
      this.tdModelsMemo = tdModels;
      this.reqAnmID     = reqAnmID;                 // 本処理のアニメーションIDを一時保持
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


class THREEHandler{

  renderer: any;
  camera: any;

  constructor(){
    this.renderer = undefined;
  }

  render(): void{

  }

  updateTDObj(): void{

  }


}


export default WorkPlayerForTHREE