import * as THREE from 'three';
import { WorkPlayerInterface } from "../InterfacesAndTypes/Interfaces";
import TDModelForTHREE from "../TDModels/TDModelForTHREE";

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
  renderer  : THREE.WebGLRenderer;
  scene     : THREE.Scene;
  camera    : THREE.PerspectiveCamera;

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
   * 注意: TDModelは不可逆的な変更を加えられる 変更前のTDModelが必要な場合はTDModel生成素となるJSONから生成すること
   * SideEffect : - tdModelMemoを更新する
   *              - reqAnmIDを更新する
   *              - isPlayingフラグを更新する
   * @param tdModel 
   */
  play(tdModels: Array<TDModelForTHREE>): void{

    // 多重再生の防止のため、再生中であるか確認する
    // 再生中である場合は何もしない
    if(this.isPlaying === true){

      // do nothing

    // 再生中でない場合は再生処理を実行する
    }else{

      // Sceneを初期化
      this.initializeScene(this.scene, tdModels);
  
      const animate = () => {
  
        // TDModelにEffectを適用
        tdModels.forEach( (tdModel) => { this.applyEffect(tdModel) });
  
        // レンダリングを実行
        this.renderer.render(this.scene, this.camera);
  
        // 本処理をフレーム更新時に発火するよう登録
        const reqAnmID = requestAnimationFrame(animate);
  
        // SideEffect
        this.tdModelsMemo = tdModels;
        this.reqAnmID     = reqAnmID;   // 本処理のアニメーションIDを一時保持
        this.isPlaying    = true;
  
      }
      animate();
  
    }

  }

  /**
   * 作品の再生を停止（中断）するメソッド
   */
  stop(): void{
    cancelAnimationFrame(this.reqAnmID);
    this.isPlaying = false;
  }

  reset(): void{
    this.tdModelsMemo = [];
    this.initializeScene(this.scene, []);
    this.reqAnmID = 0;
    this.isPlaying = false;
  }

  /**
   * Sceneを初期化する（指定された3Dオブジェクトのみ登録された状態に変更する）メソッド
   * @param scene 
   * @param tdModels 
   */
  initializeScene(scene: THREE.Scene, tdModels: Array<TDModelForTHREE>): void{

    // Sceneに登録済みの3Dオブジェクトを全て削除
    scene.children.forEach( (tdObject) => { scene.remove(tdObject) });

    // Sceneに3Dオブジェクトを登録
    tdModels.forEach( (tdModel) => { scene.add(tdModel.tdObject) });

  }

  /**
   * TDModelをEffect適用後の状態に更新するメソッド
   * 注意: TDModelは不可逆的な変更を加えられる
   * @param tdModel 
   */
  applyEffect(tdModel: TDModelForTHREE){

    // Effect適用後のPropを算出し、TDModelに反映
    const propEffectsApplied  = tdModel.calcPropEffectsApplied(tdModel.property, tdModel.effectsList);
    tdModel.property          = propEffectsApplied;

    // レンダリング対象の3Dオブジェクトの表示情報（位置・色 など）を更新
    tdModel.updateTDObject(tdModel.tdObject, tdModel.property);

  }

}


export default WorkPlayerForTHREE